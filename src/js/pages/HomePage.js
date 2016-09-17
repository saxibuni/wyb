(function () {
	var notice = new Notice({hasBtn: false, date: '2016-08-12', content: '为了给您提供便捷的充值方式，韦易博平台于6月18日上线【微信支付】充值方式，欢迎大家体验，谢谢。'});
	var	suspension = new Suspension();
	function HomePage () {
		this.initDom();
	}
	
	HomePage.prototype.initDom = function () {
		var temp = '<div class="page home-page">' +
						'<div class="wrapper">' +
							'<div class="content23">' +
								'<div class="content2">' +
									notice.getDom() +
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
												'<span>509,456,228.88</span>' +
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
												'<div class="tbody">' +
													this.createLuckyDrawItems() +
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
						//suspension.getDom() +
					'</div>';

		this.el  = temp;
	};

	HomePage.prototype.getDom = function () {
		return this.el;
	};

	HomePage.prototype.createLuckyDrawItems = function () {
		var i;
		var temp = '';
		var data = {
			name: 'dong62192******',
			gift: 'Macbook Pro'
		};

		for (i = 0; i < 100; i++) {
			temp += this.createLuckyDrawItem(data);
		}

		return temp;
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
		this.addSliders();
	};

	HomePage.prototype.hide = function () {
		this.zone.fadeOut(500);
	};

	HomePage.prototype.addSliders = function () {
		var logoTemp = 	'<div class="home-pages-sliders">' +
							'<ul>' +
								'<li><img src="../img/homepage-banner1.jpg"></li>' +
								'<li><img src="../img/homepage-banner2.jpg"></li>' +
								'<li><img src="../img/homepage-banner3.jpg"></li>' +
							'</ul>' +
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
			if (luckyDrawTable.css('top') !== '-2100px') {
				luckyDrawTable.css('top', '-2100px');
			} else {
				luckyDrawTable.css('top', '0');
			}
		})
	};

	window.HomePage = HomePage;
}());


