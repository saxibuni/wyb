(function () {
	var	suspension = new Suspension();
	
	function HomePage () {
		this.initDom();
	}
	
	HomePage.prototype.initDom = function () {
		this.notice = new Notice2({
			id: 'home-page-notice',
			hasBtn: false,
			date: '2016-08-12',
			content: '为了给您提供便捷的充值方式，韦易博平台于6月18日上线【微信支付】充值方式，欢迎大家体验，谢谢。'
		});

		var temp = 	'<div class="page home-page">' +
						'<div class="wrapper">' +
							'<div class="content23">' +
								'<div class="content2">' +
									this.notice.getDom() +
								'</div>' +

								'<div class="picture-zone">' +
									'<div class="picture-zone1">' +
										'<div class="zone1-up">' +
											'<div class="zone1-up-left">' +
												'<div class="zone1-up-left-up">' +
													'<img class="picture-bg" src="../img/sy-kf.jpg">' +
													'<div class="info">' +
														'<img class="icon" src="../img/kf-icon.png">' +
														'<span>在线客服</span>' +
													'</div>' +
												'</div>' +

												'<div class="zone1-up-left-down">' +
													'<img class="picture-bg" src="../img/sy-xz.jpg">' +
													'<div class="info">' +
														'<img class="icon" src="../img/xz-icon.png">' +
														'<span>客户端下载</span>' +
													'</div>' +
												'</div>' +
											'</div>' +

											'<div class="zone1-up-right">' +
												'<img class="picture-bg" src="../img/bg-eEntertainment.jpg">' +
												
												'<div class="info">' +
													'电子游艺' +
												'</div>' +
											'</div>' +
										'</div>' +

										'<div class="zone1-down">' +
											'<img class="picture-bg" src="../img/jackpot.png">' +
											'<div class="info">' +
												'<span class="pt-jackpot-value"></span>' +
											'</div>' +
										'</div>' +
									'</div>' +

									'<div class="picture-zone2">' +
										'<div class="zone2-up">' +
											'<div class="zone2-up-left">' +
												'<img class="picture-bg" src="../img/bg-sports.jpg">' +

												'<div class="info">' +
													'体育赛事' +
												'</div>' +
											'</div>' +

											'<div class="zone2-up-right">' +
												'<img class="picture-bg" src="../img/bg-video.jpg">' +
												
												'<div class="info">' +
													'视讯直播' +
												'</div>' +
											'</div>' +
										'</div>' +

										'<div class="zone2-down">' +
											'<img class="picture-bg" src="../img/md.png">' +

											'<div class="table">' +
												'<div class="tbody lucky-draw-tbody">' +
													'<span class="placeholder">登录可查看中奖情况</span>' +
												'</div>' +
											'</div>' +

											'<div class="lucky-draw">' +
												'立即抽奖' +
											'</div>' +
										'</div>' +
									'</div>' +
								'</div>' +
							'</div>' +
						'</div>' +
						
						suspension.getDom() +
					'</div>';

		this.el  = temp;
	};

	HomePage.prototype.getDom = function () {
		return this.el;
	};

	HomePage.prototype.setLuckyDrawItems = function (data) {
		var i;
		var temp = '';
		var data = {
			name: 'dong62192******',
			gift: 'Macbook Pro'
		};

		for (i = 0; i < 100; i++) {
			temp += this.createLuckyDrawItem(data);
		}

		this.zone.find('.lucky-draw-tbody').html($(temp));
	};

	HomePage.prototype.createLuckyDrawItem = function (data) {
		var temp =	'<div class="tr">' +
						'<span class="td1">' +
							data.name +
						'</span>' +
						'<span class="td2">' +
							data.gift +
						'</span>' +
					'</div>';

		return temp;
	};

	HomePage.prototype.show = function () {
		this.zone.fadeIn(500);
		this.getAds();
		this.setPtSumBaseValue();
		if (app.signedIn) {
			this.getLuckyDrawWinRecords();
		}
	};

	HomePage.prototype.hide = function () {
		this.zone.fadeOut(500);
	};

    HomePage.prototype.createLoader = function() {
        var wrapper1 = this.zone.find('.zone1-down')[0];
        var wrapper2 = this.zone.find('.zone2-down .table')[0];

        this.loader1 = new Loader(wrapper1, {
        	left: '72%'
        });
        this.loader2 = new Loader(wrapper2);
    };

    HomePage.prototype.setJackpotValue = function () {
    	this.zone.find('.pt-jackpot-value').text('509,456,228.88');
    };

	HomePage.prototype.getPtJackpot = function () {
		var that = this;

		var callback = function (data) {
			that.loader1.stop();
			that.setJackpotValue(data);
		};

		this.loader1.play();
		app.getJackpotsGames(callback.bind(this));
	};

	HomePage.prototype.getLuckyDrawWinRecords = function () {
		var url;
		var that = this;
		var today = new Date();

		this.loader2.play();

		today = today.formatDate();
		url  = 	app.urls.luckyDrawWinRecords +
				'?beginTime=20150101&endTime=' + today + 
				'&status=1&pageIndex=0&pageSize=4';

        $.ajax({
            type: 'GET',
            url: url,
            dataType: 'json',
            timeout: app.timeout,
            xhrFields: {
            	withCredentials: true
            }
        }).done(function (json) {
        	that.loader2.stop();
			if (json.StatusCode && json.StatusCode != 0) {
				alert(json.Message);
				return;
			}
        	that.setLuckyDrawItems(json.Data);
        }).fail(function (xhr, testStatus, error) {
            alert(error);
        });
	};

	HomePage.prototype.getAds = function () {
		var callback;
		var that    =  this;
		var opt     =  {
			url: app.urls.getAds,
			data: {
				type: 'pd_wyb_index_ads',
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

	HomePage.prototype.setPtSumBaseValue = function () {
		var callback;
		var that =  this;
		var opt  =  {
			url: app.urls.getJackpotsByUrl,
	        data: {
	        	'': app.urls.getPtSumJackpotBaseValue
	        }
		};

		callback = function (data) {
			that.zone.find('.pt-jackpot-value').text(data.Data);
			that.startJackpotAnimation();
		};

		Service.post(opt, callback);
	};

	HomePage.prototype.startJackpotAnimation = function () {
		var base;
		var jackpot = this.zone.find('.pt-jackpot-value')
		var that    = this;
		var gap     = 35.57;

		this.setInterval = setInterval(function () {
			base = parseFloat(jackpot.text());
			base += gap;
			base = base.toFixed(2);
			jackpot.text(base);
		}, 500);
	};

	HomePage.prototype.addSliders = function (data) {

		// var images = [
		// 	'../img/homepage-banner1.jpg',
		// 	'../img/homepage-banner2.jpg',
		// 	'../img/homepage-banner3.jpg'
		// ];

		// logoTemp = 	'<div class="home-pages-sliders">' +
		// 				'<ul>';

		// for (i = 0; i < images.length; i++) {
		// 	logoTemp += 	'<li style="background: url("' + images[i] + '") 50% 50% no-repeat;"></li>';
		// }

		// logoTemp +=		'</ul>' +
		// 			'</div>';
		
		var i;
		var len = data.count;
		var arr = data.list;
		var logoTemp = 	'<div class="home-pages-sliders">' +
							'<ul>';

		for (i = 0; i < len; i++) {
			logoTemp += '<li>' +
							'<img src="' + app.imageServer + arr[i].ImgUrl + '">' +
						'</li>';
		}

		logoTemp +=			'</ul>' +
						'</div>';

		$('.main .logo-wrapper').html(logoTemp);
		$('.home-pages-sliders').unslider({
			speed: 500,
			delay: 3000
		});
		$('.main .logo-wrapper').css('height', $('.home-pages-sliders').css('height'));
		$('.home-pages-sliders').show();
	};

	HomePage.prototype.bindEvents = function () {
		var luckyDrawButton;
		var luckyDrawTable;

		this.zone        = $('.home-page');
		luckyDrawTable   = this.zone.find('.zone2-down .table .tbody');
		luckyDrawButton  = this.zone.find('.zone2-down .lucky-draw');

		luckyDrawButton.click(function () {
			// if (luckyDrawTable.css('top') !== '-2000px') {
			// 	luckyDrawTable.css('top', '-2000px');
			// } else {
			// 	luckyDrawTable.css('top', '0');
			// }
			window.open('http://www.baidu.com');
		});

		this.zone.find('.zone1-up-left-down').click(function () {
			app.goTo('clientDownload');
		});

		this.zone.find('.zone1-up-right .info').click(function () {
			app.goTo('eEntertainment');
		});

		this.zone.find('.zone2-up-left .info').click(function () {
			app.goTo('sportsCompetition');
		});

		this.zone.find('.zone2-up-right .info').click(function () {
			app.goTo('liveVideo');
		});

		this.notice.bindEvents();
		this.createLoader();
	};

	window.HomePage = HomePage;
}());


