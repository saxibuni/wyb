(function () {
	function LiveVideo () {
		this.initDom();
	}
	
	LiveVideo.prototype.initDom = function () {
		var temp =	'<div class="page live-video">' +
						'<div class="wrapper">' +
							'<div class="sliders"></div>' +

							'<div class="content">' +
								'<div class="picture picture1" data-value="BBIN">' +
									'<img>' +
									'<div class="info">' +
										'<p>为全球博彩爱好者提供最优惠的赔率和最优质的服务, 每一位玩家都能尽情享受博彩所带来的无限乐趣</p>' +
										'<div class="players">' +
											'<img src="../img/people.png" >' +
											'<span>693358</span>' +
 										'</div>' +
 										'<div class="button">' +
 											'进入游戏' +
 										'</div>' +
									'</div>' +
								'</div>' +

								'<div class="picture picture2" data-value="AG">' +
									'<img>' +
									'<div class="info">' +
										'<p>欧式荷官现场助阵画面极致操作简单</p>' +
										'<div class="players">' +
											'<img src="../img/people.png" >' +
											'<span>693358</span>' +
 										'</div>' +
 										'<div class="button">' +
 											'进入游戏' +
 										'</div>' +
									'</div>' +
								'</div>' +

								'<div class="picture picture3" data-value="AB">' +
									'<img>' +
									'<div class="info">' +
										'<p>亚洲最具代表地位的网络博彩娱乐集团</p>' +
										'<div class="players">' +
											'<img src="../img/people.png" >' +
											'<span>693358</span>' +
 										'</div>' +
 										'<div class="button">' +
 											'进入游戏' +
 										'</div>' +
									'</div>' +
								'</div>' +

								'<div class="picture picture4" data-value="OG">' +
									'<img>' +
									'<div class="info">' +
										'<p>增长最快的真人荷官平台提供商</p>' +
										'<div class="players">' +
											'<img src="../img/people.png" >' +
											'<span>693358</span>' +
 										'</div>' +
 										'<div class="button">' +
 											'进入游戏' +
 										'</div>' +
									'</div>' +
								'</div>' +

								'<div class="picture picture5">' +
									'<img>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>';
		
		this.el  = temp;
	};

	LiveVideo.prototype.getDom = function () {
		return this.el;
	};

	LiveVideo.prototype.show = function () {
		this.zone.fadeIn(500);

		if (!this.firstTime) {
			this.getAds();
			this.getPictures();
			//this.getGameLoginUrls();
			this.firstTime = true;
		}
	};

	LiveVideo.prototype.hide = function () {
		this.zone.fadeOut(500);
	};

    LiveVideo.prototype.createLoader = function() {
        var wrapper = this.zone.find('.sliders')[0];

        this.loader1 = new Loader(wrapper, {
        	top: '50%'
        });
    };

	LiveVideo.prototype.addSliders = function (data) {
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
	};

	LiveVideo.prototype.getAds = function () {
		var callback;
		var that    =  this;
		var opt     =  {
			url: app.urls.getAds,
			data: {
				type: 'pd_wyb_casino_ads',
				pageIndex: 0,
				pageSize: 1
			}
		};

		callback = function (data) {
			if (!data) {
				return;
			}

			that.loader1.stop();
			that.addSliders(data);
		};

		this.loader1.play();
		Service.get(opt, callback);
	};

	LiveVideo.prototype.setPictures = function (data) {
		var i;
		var imgs = this.zone.find('.picture > img');

		for (i = 0; i < imgs.length; i++) {
			$(imgs[i]).attr('src', app.imageServer + data[i].ImgUrl);
		}
	};

	LiveVideo.prototype.getPictures = function () {
		var callback;
		var that    =  this;
		var opt     =  {
			url: app.urls.getAds,
			data: {
				type: 'pd_wyb_casino_pictures',
				pageIndex: 0,
				pageSize: 5
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

	LiveVideo.prototype.getGameLoginUrls = function () {
		var i;
		var platforms = ['BBIN', 'AG', 'AB', 'OG'];
		var imgs      = this.zone.find('.picture');
		
		for (i = 0; i < platforms.length; i++) {
			this.getGameLoginUrl(platforms[i], $(imgs[i]));
		}
	};

    LiveVideo.prototype.getGameLoginUrl = function (platform, item) {
    	var that = this;
    	var opt =  {
			url: app.urls.getGameLoginUrl,
			data: {
				gamePlatform: platform,
				gameType: 'casino'
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

	LiveVideo.prototype.bindEvents = function () {
		var platform;
		var picture;
		var url;
		var that = this;

		this.zone = $('.live-video');

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

	window.LiveVideo = LiveVideo;
}());
