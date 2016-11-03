(function () {
	function ClientDownload () {
		this.firstShow = true;
		this.initDom();
	}
	
	ClientDownload.prototype.initDom = function () {
		var temp =	'<div class="page client-download">' +
						'<div class="wrapper">' +
							'<div class="sliders"></div>' +

							'<div class="content">' +
								'<div class="tree">' +
									'<div class="tree-title">' +
										'<div class="cn-title">' +
											'下载中心' +
										'</div>' +

										'<div class="en-title">' +
											'DOWNLOAD CENTER' +
										'</div>' +
									'</div>' +

									'<ul>' +
										this.createTreeItems() +
									'</ul>' +
								'</div>' +

								'<div class="download-content">' +
									// '<div class="download-item pc">' +
									// 	'<div class="item-title">' +
									// 		'<span class="platform">MG</span>' +
									// 		'<span>平台客户端下载</span>' +
									// 		'<div class="title-stick"></div>' +
									// 	'</div>' +

									// 	'<div class="item-left">' +
									// 		'<div class="circle">' +
									// 			'<img src="../img/download-computer.png">' +
									// 		'</div>' +
									// 	'</div>' +

									// 	'<div class="item-right">' +
									// 	'</div>' +
									// '</div>' +

									// '<div class="download-item mobile">' +
									// '</div>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>';

		this.el  = temp;
	};

	ClientDownload.prototype.getDom = function () {
		return this.el;
	};

	ClientDownload.prototype.show = function () {
		this.zone.fadeIn(500);

		if (this.firstShow) {
			this.getAds();
			this.getWebPageByKey('download-pt');
			this.firstShow = false;
		}
	};

	ClientDownload.prototype.hide = function () {
		this.zone.fadeOut(500);
	};

	ClientDownload.prototype.createTreeItems = function () {
		var i;
		var temp = '';
		var arr  = [
			{
				downloadKey: 'download-pt',
				left: -3,
				top: -5
			},
			{
				downloadKey: 'download-mg',
				left: -3,
				top: -56
			},
			{
				downloadKey: 'download-ab',
				left: -3,
				top: -106
			},
			{
				downloadKey: 'download-bbin',
				left: -3,
				top: -160
			},
			{
				downloadKey: 'download-kg',
				left: -3,
				top: -210
			},
			{
				downloadKey: 'download-ag',
				left: -3,
				top: -262
			},	
			{
				downloadKey: 'download-mt',
				left: -3,
				top: -312
			}
		];

		for (i = 0; i < arr.length; i++) {
			temp +=	'<li ' + (i === 0?'class="active" ': '') + 'data-download="' + arr[i].downloadKey + '">' +
						'<span class="download-icon" style="background-position:' +
							arr[i].left + 'px ' + arr[i].top + 'px' + ';">' +
					'</li>';
		}

		temp += '<div class="stick"></div>';

		return temp;
	};

    ClientDownload.prototype.createLoader = function() {
        var wrapper = this.zone.find('.sliders')[0];

        this.loader1 = new Loader(wrapper, {
        	top: '50%'
        });
    };

	ClientDownload.prototype.getAds = function () {
		var callback;
		var that    =  this;
		var opt     =  {
			url: app.urls.getAds,
			data: {
				type: 'pd_wyb_download_ads',
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

	ClientDownload.prototype.getWebPageByKey = function (key) {
		var callback;
		var that    =  this;
		var opt     =  {
			url: app.urls.getWebPageByKey,
			data: {
				key: key
			}
		};

		callback = function (data) {
			that.zone.find('.download-content').html(data.Content);
		};

		Service.get(opt, callback);
	};

	ClientDownload.prototype.addSliders = function (data) {
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
			app.router.setRoute('/promoActivity/1/-1');
		});
	};

	ClientDownload.prototype.bindEvents = function () {
		var tree;
		var stick;
		var index;
		var top;
		var key;
		var h    = 50;
		var that = this;

		this.zone = $('.client-download');
		tree      = this.zone.find('.tree ul');
		stick     = tree.children('.stick');

		tree.delegate('li', 'click', function () {
			index = $(this).index();
			top   = h * index + 'px';
			stick.css('top', top);

			tree.find('li').removeClass('active');
			$(this).addClass('active');

			key = $(this).attr('data-download');
			that.getWebPageByKey(key);
		});

		this.createLoader();
	};

	window.ClientDownload = ClientDownload;
}());
