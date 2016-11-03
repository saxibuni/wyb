(function () {
	function PromoActivity (opt) {
		IMDialog.call(this, opt || {});
		this.firstShow = true;
		this.initDom();
	}
	
	PromoActivity.prototype = new IMDialog();

	PromoActivity.prototype.initDom = function () {
		var temp =	'<div class="page promo-activity">' +
						'<div class="wrapper">' +
							'<div class="title">' +
								'<ul></ul>' +
							'</div>' +

							'<div class="content">' +
								'<ul></ul>' +
							'</div>' +
						'</div>' +
					'</div>';
		
		this.el  = temp;
	};

	PromoActivity.prototype.getDom = function () {
		return this.el;
	};

	PromoActivity.prototype.loadImages = function () {
		var i;
		var temp    = '';
		var imageUl = this.zone.find('.content ul');

		for (i = 0; i < 3; i++) {
			temp += '<li>' +
						'<img class="down" src="../img/promo.jpg">' +
					'</li>';
		}

		imageUl.append(temp);
	};

	PromoActivity.prototype.show = function (mainRouter, subRouter) {
		this.zone.fadeIn(500);

		this.mainRouter = mainRouter || 0;  //mainRouter: 标签的index值
		this.subRouter  = subRouter || -1;  //subRouter: 标签的index值, -1表示子广告不展开

		if (this.firstShow || mainRouter) {
			this.queryPromoTypes();
			this.firstShow = false;
		}
	};

	PromoActivity.prototype.hide = function () {
		this.zone.hide();
	};

	PromoActivity.prototype.setStick = function () {
		var gap     = 14.286;
		var titleUl = this.zone.find('.title ul');
		var stick   = titleUl.children('.stick');

		stick.css('left', gap * parseFloat(this.mainRouter) + '%');
	};

    PromoActivity.prototype.createLoader = function() {
        var wrapper1 = this.zone.find('.content')[0];

        this.loader1 = new Loader(wrapper1);
    };

	PromoActivity.prototype.setTitle = function (data) {
		var i;
		var temp = '';

		for (i = 0; i < data.length; i++) {
			temp += '<li data-type="' + data[i].Id + '">' +
						'<span>' +
							data[i].TypeName +
						'</span>' +
					'</li>';
		}

		this.zone.find('.title ul').html(temp);
		this.zone.find('.title ul li').removeClass('active');
		this.zone.find('.title ul li:nth-child(' + (parseInt(this.mainRouter) + 1) + ')').addClass('active');
		this.bindTitleEvents();
	};

	PromoActivity.prototype.setPromoList = function (data) {
		var i;
		var temp = '';

		for (i = 0; i < data.length; i++) {
			temp +=	'<li>' +
						'<img src="' + app.imageServer + data[i].Img + '">' +
						'<div class="activity-content">' +
							data[i].Content +
						'</div>' +
					'</li>';
		}

		this.zone.find('.content ul').html(temp);

		if (this.subRouter !== -1) {
			this.zone.find('.content ul li:nth-child(' + (parseInt(this.subRouter) + 1) + ') .activity-content').slideDown();
		}
	};

	PromoActivity.prototype.queryPromoTypes = function () {
		var that = this;

		this.loader1.play();

        $.ajax({
            type: 'GET',
            url: app.urls.queryPromoTypes,
            dataType: 'json',
            timeout: app.timeout,
            xhrFields: {
            	withCredentials: true
            }
        }).done(function (json) {
        	that.setTitle(json);
        	that.queryPromoListsByType(json[that.mainRouter].Id);
        }).fail(function (xhr, testStatus, error) {
            alert(error);
        });
	};

	PromoActivity.prototype.queryPromoListsByType = function (type) {
		var url;
		var that = this;

		url = app.urls.queryPromoListByType + '?type=' + type + '&pageIndex=0&pageSize=10';

        $.ajax({
            type: 'GET',
            url: url,
            dataType: 'json',
            timeout: app.timeout,
            xhrFields: {
            	withCredentials: true
            }
        }).done(function (json) {
        	that.loader1.stop();
        	that.setPromoList(json.list);
        }).fail(function (xhr, testStatus, error) {
            alert(error);
        });
	};

	PromoActivity.prototype.bindTitleEvents = function () {
		var index;
		var type;
		var that    = this;
		var gap     = 14.286;
		var titleUl = this.zone.find('.title ul');
		var stick   = titleUl.children('.stick');

		titleUl.delegate('li', 'click', function () {
			titleUl.children('li').removeClass('active');
			$(this).addClass('active');

			type = $(this).attr('data-type');
			that.subRouter = -1;
			that.queryPromoListsByType(type);
		});
	};

	PromoActivity.prototype.bindEvents = function () {
		var contentUl;
		var status;
		var index;
		var left;
		var pull;
		var that = this;

		this.zone = $('.promo-activity');
		
		contentUl = this.zone.find('.content ul');
		pull      = this.zone.find('.pull img');

		contentUl.delegate('li', 'click', function () {
			status = $(this).children('.activity-content').css('display');

			if (status == 'none') {
				$(this).children('.activity-content').slideDown();
			} else {
				$(this).children('.activity-content').slideUp();
			}
		});	

		this.createLoader();
	};

	window.PromoActivity = PromoActivity;
}());
