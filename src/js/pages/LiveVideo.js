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
										'<p></p>' +
										'<div class="players">' +
										'</div>' +								
									'</div>' +
								'</div>' +

								'<div class="picture picture2" data-value="AG">' +
									'<img>' +
									'<div class="info"></div>' +
								'</div>' +

								'<div class="picture picture3" data-value="AB">' +
									'<img>' +
									'<div class="info"></div>' +
								'</div>' +

								'<div class="picture picture4" data-value="OG">' +
									'<img>' +
									'<div class="info"></div>' +
								'</div>' +

								'<div class="picture picture5">' +
									'<img>' +
									'<div class="info"></div>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>';
		
		this.el  = temp;
	};

	LiveVideo.prototype.getDom = function () {
		return this.el;
	};

	LiveVideo.prototype.setItems = function (data) {
	};

	LiveVideo.prototype.show = function () {
		this.zone.fadeIn(500);

		if (!this.firstTime) {
			this.getAds();
			this.getPictures();
			this.firstTime = true;
		}
	};

	LiveVideo.prototype.hide = function () {
		this.zone.fadeOut(500);
	};

	LiveVideo.prototype.showSliders = function () {
		if (this.logoHtml) {
			$('.main .logo-wrapper').html(this.logoHtml);
		}
	};

    LiveVideo.prototype.createLoader = function() {
        var wrapper = this.zone.find('.sliders')[0];

        this.loader1 = new Loader(wrapper, {
        	top: '50%'
        });
    };

	LiveVideo.prototype.addSliders = function (data) {
		var i;
		var len = data.count;
		var arr = data.list;
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
		var imgs = this.zone.find('.picture img');

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

    LiveVideo.prototype.getGameLoginUrl = function (platform) {
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

			window.open(json);
		}

		Service.get(opt, callback);
    };

	LiveVideo.prototype.bindItemEvents = function () {
		var platform;
		var that = this;

		this.zone.find('.item').click(function () {
			platform = $(this).attr('data-platform');

			if (app.signedIn) {
				that.getGameLoginUrl(platform);
			} else {
				app.showLoginNotice();
			}
		});
	};

	LiveVideo.prototype.bindEvents = function () {
		this.zone = $('.live-video');
		this.createLoader();
	};

	window.LiveVideo = LiveVideo;
}());
