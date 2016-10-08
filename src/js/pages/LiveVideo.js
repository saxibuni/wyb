(function () {
	function LiveVideo () {
		this.initDom();
	}
	
	LiveVideo.prototype.initDom = function () {
		var temp =	'<div class="page live-video">' +
						'<div class="wrapper">' +
							'<div class="content">' +
								'<div class="picture-zone">' +
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
		var i;
		var temp = '';

		for (i = 0; i < data.length; i++) {
			temp += this.createItem({
				className: 'img' + (i + 1),
				imgUrl: app.imageServer + data[i].ImgUrl
			});
		}

		this.zone.find('.picture-zone').html(temp);
	};

	LiveVideo.prototype.createItem = function (opt) {
		var temp =	'<div class="item' + ((opt&&opt.className)?' ' + opt.className: '') + '">' +
						'<div class="zone1">' +
							'<div class="logo"' + (opt&&opt.width&&opt.height?(' style="width:' + opt.width + ';height:' + opt.height + '"'): '') + '>' +
								'<img src="' + opt.imgUrl + '">' +
							'</div>' +
						'</div>' +

						'<div class="zone2">' +
							'<p class="title">' +
								'AG国际厅，实时显示赢家排行胜率，百家乐，龙虎，轮盘...' +
							'</p>' +

							'<div class="quantity">' +
								'<img class="message-img" src="../img/eye.png">' +
								'<span>2022</span>' +
							'</div>' +
						'</div>' +

						'<div class="item-overlay">' +
						'</div>' +
					'</div>';

		return temp;
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

	LiveVideo.prototype.addSliders = function (data) {
		var i;
		var len = data.count;
		var arr = data.list;
		var logoTemp = 	'<div class="live-video-sliders">' +
							'<ul class="live-video-ul">';

		for (i = 0; i < len; i++) {
			logoTemp += 		'<li>' +
									'<img src="' + app.imageServer + arr[i].ImgUrl + '">' +
								'</li>';
		}

		logoTemp +=			'</ul>' +
						'</div>';

		this.logoHtml = logoTemp;
		$('.main .logo-wrapper').html(logoTemp);
		//$('.live-video-sliders').show();
	};

    LiveVideo.prototype.createLoader = function() {
        var wrapper = this.zone.find('.content')[0];

        this.loader = new Loader(wrapper, {
        	top: '50%'
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
				pageSize: 10
			}
		};

		callback = function (data) {
			if (!data) {
				return;
			}

			that.addSliders(data);
		};

		Service.get(opt, callback);
	};

	LiveVideo.prototype.getPictures = function () {
		var callback;
		var that    =  this;
		var opt     =  {
			url: app.urls.getAds,
			data: {
				type: 'pd_wyb_casino_pictures',
				pageIndex: 0,
				pageSize: 7
			}
		};

		callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				alert(json.Message);
				return;
			}

			that.setItems(json.list);
		};

		Service.get(opt, callback);
	};

	LiveVideo.prototype.bindEvents = function () {
		this.zone = $('.live-video');
		this.createLoader();
	};

	window.LiveVideo = LiveVideo;
}());
