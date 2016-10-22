(function () {
	function SportsCompetition () {
		this.firstShow = true;
		this.firstSignedQuery = true;
		this.initDom();
	}

	SportsCompetition.prototype.initDom = function () {
		var temp =	'<div class="page sports-competition">' +
						'<div class="wrapper">' +
							'<div class="sliders"></div>' +

							'<div class="content">' +
								'<div class="picture picture1" data-value="BBIN">' +
									'<img>' +
									'<div class="info">' +
 										'<p>各种体育赛事投注，玩法多样，1.2%反水，尽享游戏畅快体验</p>' +
 										'<div class="title">BBIN体育</div>' +
 										'<div class="button">' +
 											'进入游戏' +
 										'</div>' +
									'</div>' +
								'</div>' +

								'<div class="picture picture2" data-value="SB">' +
									'<img>' +
									'<div class="info">' +
 										'<p>各种体育赛事投注，玩法多样，1.2%反水，尽享游戏畅快体验</p>' +
 										'<div class="title">沙巴体育</div>' +
 										'<div class="button">' +
 											'进入游戏' +
 										'</div>' +
									'</div>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>';
		
		this.el  = temp;
	};

	SportsCompetition.prototype.getDom = function () {
		return this.el;
	};

	SportsCompetition.prototype.show = function () {
		this.zone.fadeIn(500);

		if (this.firstShow) {
			this.getAds();
			this.getPictures();
			this.firstShow = false;
		}

		if (app.signedIn && this.firstSignedQuery) {
			this.getGameLoginUrls();
			this.firstSignedQuery = false;
		}
	};

	SportsCompetition.prototype.hide = function () {
		this.zone.fadeOut(500);
	};

    SportsCompetition.prototype.createLoader = function() {
        var wrapper = this.zone.find('.sliders')[0];

        this.loader1 = new Loader(wrapper, {
        	top: '50%'
        });
    };

	SportsCompetition.prototype.addSliders = function (data) {
		var i;
		var arr = data.list;
		var len = arr.length;
		var logoTemp = 	'<ul>';

		for (i = 0; i < len; i++) {
			logoTemp += 	'<li>' +
								'<img src="' + app.imageServer + arr[i].ImgUrl + '">' +
							'</li>';
		}

		logoTemp +=		'</ul>';

		this.logoHtml = logoTemp;
		this.zone.find('.sliders').html(logoTemp);
		this.zone.find('.sliders').unslider({
			speed: 500,
			delay: 5000,
			autoplay: true,
			arrows: false
		});

		this.zone.find('.sliders .unslider-carousel li').click(function () {
			app.router.setRoute('/promoActivity/3/-1');
		});
	};

	SportsCompetition.prototype.getAds = function () {
		var callback;
		var that    =  this;
		var opt     =  {
			url: app.urls.getAds,
			data: {
				type: 'pd_wyb_sports_ads',
				pageIndex: 0,
				pageSize: 1
			}
		};

		callback = function (data) {
			that.loader1.stop();

			if (!data) {
				return;
			}
			
			that.addSliders(data);
		};

		this.loader1.play();
		Service.get(opt, callback);
	};

	SportsCompetition.prototype.setPictures = function (data) {
		var i;
		var imgs = this.zone.find('.picture > img');

		for (i = 0; i < imgs.length; i++) {
			$(imgs[i]).attr('src', app.imageServer + data[i].ImgUrl);
		}
	};

	SportsCompetition.prototype.getPictures = function () {
		var callback;
		var that    =  this;
		var opt     =  {
			url: app.urls.getAds,
			data: {
				type: 'pd_wyb_sports_pictures',
				pageIndex: 0,
				pageSize: 2
			}
		};

		callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				alert(json.Message);
				return;
			}

			that.setPictures(json.list);
		};

		Service.get(opt, callback);
	};

	SportsCompetition.prototype.getGameLoginUrls = function () {
		var i;
		var platforms = ['BBIN', 'OW'];  
		//IBC: 沙巴旧接口，经过东方汇的
		//OW:  沙巴新接口，直接对接沙巴平台的
		var imgs      = this.zone.find('.picture');
		
		for (i = 0; i < platforms.length; i++) {
			this.getGameLoginUrl(platforms[i], $(imgs[i]));
		}
	};

    SportsCompetition.prototype.getGameLoginUrl = function (platform, item) {
    	var that = this;
    	var opt  =  {
			url: app.urls.getGameLoginUrl,
			data: {
				gamePlatform: platform,
				gameType: 'sport'
			}
		};
		
		var callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				alert(json.Message);
				return;
			}

			item.attr('data-url', json);
		}

		Service.get(opt, callback);
    };

	SportsCompetition.prototype.bindEvents = function () {
		var platform;
		var picture;
		var url;
		var that = this;

		this.zone = $('.sports-competition');

		this.zone.find('.button').click(function () {
			picture = $(this).parents('.picture');
			url     = picture.attr('data-url');

			if (!app.signedIn) {
				app.showLoginNotice();
				return;
			}

			if (!url) {
				return;
			}

			window.open(url);
		});

		this.createLoader();
	};

	window.SportsCompetition = SportsCompetition;
}());
