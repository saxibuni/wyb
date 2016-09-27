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
									'<li><span>热门优惠</span></li>' +
									'<li><span>真人优惠</span></li>' +
									'<li><span>电子优惠</span></li>' +
									'<li><span>体育优惠</span></li>' +
									'<li><span>彩票优惠</span></li>' +
									'<li><span>VIP优惠</span></li>' +
									'<li><span>往期回顾</span></li>' +
									'<div class="stick"></div>' +
								'</ul>' +
							'</div>' +

							'<div class="content">' +
								'<ul>' +
									'<li>' +
										'<img class="down" src="../img/promo.jpg">' +
										'<div class="activity-content">' +
											'我是活动内容' +
										'</div>' +
									'</li>' +
									'<li>' +
										'<img class="down" src="../img/promo.jpg">' +
										'<div class="activity-content">' +
											'我是活动内容' +
										'</div>' +
									'</li>' +
									'<li>' +
										'<img class="down" src="../img/promo.jpg">' +
										'<div class="activity-content">' +
											'我是活动内容' +
										'</div>' +
									'</li>' +
								'</ul>' +

								'<div class="pull">' +
									'<img src="../img/pull.png">' +
								'</div>' +
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
		this.queryPromoTypes();
	};

	PromoActivity.prototype.hide = function () {
		this.zone.hide();
	};

    PromoActivity.prototype.createLoader = function() {
        var wrapper1 = this.zone.find('.content')[0];

        this.loader1 = new Loader(wrapper1);
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
        	debugger
        }).fail(function (xhr, testStatus, error) {
            alert(error);
        });
	};

	PromoActivity.prototype.queryPromoListsByType = function (type) {
		var url;
		var that = this;

		url = app.urls.queryPromoListByType + '?type=' + type + '&pageIndex=1&pageSize=5'; 

        $.ajax({
            type: 'GET',
            url: url,
            dataType: 'json',
            timeout: app.timeout,
            xhrFields: {
            	withCredentials: true
            }
        }).done(function (json) {
        	debugger
        }).fail(function (xhr, testStatus, error) {
            alert(error);
        });
	};

	PromoActivity.prototype.queryPromoContentById = function () {
		var that = this;

        $.ajax({
            type: 'GET',
            url: app.urls.queryPromoContentById,
            dataType: 'json',
            timeout: app.timeout,
            xhrFields: {
            	withCredentials: true
            }
        }).done(function (json) {
        	debugger
        }).fail(function (xhr, testStatus, error) {
            alert(error);
        });
	};

	PromoActivity.prototype.bindEvents = function () {
		var titleUl;
		var stick;
		var index;
		var left;
		var pull;
		var gap  = 14.286;
		var that = this;

		this.zone = $('.promo-activity');
		
		titleUl   = this.zone.find('.title ul');
		stick     = titleUl.children('.stick');
		pull      = this.zone.find('.pull img');

		titleUl.delegate('li', 'click', function () {
			index = $(this).index();
			left  = index*gap +  '%';
			stick.css('left', left);
		});	

		pull.click(function () {
			that.loadImages();	
		});

		this.createLoader();
	};

	window.PromoActivity = PromoActivity;
}());
