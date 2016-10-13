(function () {
	function PromoActivity (opt) {
		IMDialog.call(this, opt || {});
		this.initDom();
	}
	
	PromoActivity.prototype = new IMDialog();

	PromoActivity.prototype.initDom = function () {
		var temp =	'<div class="page promo-activity">' +
						'<div class="wrapper">' +
							'<div class="title">' +
								'<ul>'  +
									'<div class="stick"></div>' +
								'</ul>' +
							'</div>' +

							'<div class="content">' +
								'<ul></ul>' +

								// '<div class="pull">' +
								// 	'<img src="../img/pull.png">' +
								// '</div>' +
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

	PromoActivity.prototype.show = function () {
		this.zone.show();

		if (!this.firstTime) {
			this.queryPromoTypes();
			this.firstTime = true;
		}
	};

	PromoActivity.prototype.hide = function () {
		this.zone.hide();
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

		temp += '<div class="stick"></div>';

		this.zone.find('.title ul').html(temp);
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
        	that.queryPromoListsByType(json[0].Id);
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
        	that.setPromoList(json.list);
        	that.loader1.stop();
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
			index = $(this).index();
			left  = index*gap + '%';
			stick.css('left', left);

			type = $(this).attr('data-type');
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

		pull.click(function () {
			that.loadImages();
		});

		this.createLoader();
	};

	window.PromoActivity = PromoActivity;
}());
