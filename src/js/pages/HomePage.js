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
														'<span>在线客服</span>' +
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
												'<div class="tr">' +
													'<span class="td1">' +
														'dong62191***' +
													'</span>' +
													'<span class="td2">' +
														'Macbook Pro' +
													'</span>' +
												'</div>' +
												'<div class="tr">' +
													'<span class="td1">' +
														'dong62191***' +
													'</span>' +
													'<span class="td2">' +
														'Macbook Pro' +
													'</span>' +
												'</div>' +
												'<div class="tr">' +
													'<span class="td1">' +
														'dong62191***' +
													'</span>' +
													'<span class="td2">' +
														'Macbook Pro' +
													'</span>' +
												'</div>' +
											'</div>' +
										'</div>' +
									'</div>' +
								'</div>' +
								// '<div class="content3">' +
								// 	'<div class="left fl">' +
								// 		'<div class="row1 clearAfter">' +
								// 			'<div class="row1-left fl">' +
								// 				'<a class="kf">' +
								// 					'<img src="../img/sy-kf.jpg">' +
								// 					// '<span >' +
								// 					// 	'<i class="kx-icon"></i>' +
								// 					// 	'<b>在线客服</b>' +
								// 					// '</span>' +
								// 				'</a>' +
								// 				'<a class="xz">' +
								// 					'<img src="../img/sy-xz.jpg">' +
								// 					// '<span>' +
								// 					// 	'<i class="xz-icon"></i>' +
								// 					// 	'<b>客户端下载</b>' +
								// 					// '</span>' +
								// 				'</a>' +
								// 			'</div>' +
								// 			'<div class="row1-right fr">' +
								// 				'<img src="../img/bg-eEntertainment.jpg">' +
								// 				// '<span>电子游艺</span>' +
								// 			'</div>' +
								// 		'</div>' +
								// 		'<div class="row2">' +
								// 			'<img src="../img/jackpot.png">' +
								// 			'<span class="jackpot">' +
								// 				'509,456,29.88' +
								// 			'</span>' +
								// 		'</div>' +
								// 	'</div>' +

								// 	'<div class="right fl">' +
								// 		'<div class="row1 clearAfter">' +
								// 			'<div class="fl sports">' +
								// 				'<img src="../img/bg-sports.jpg">' +
								// 				// '<span>体育赛事</span>' +
								// 			'</div>' +
								// 			'<div class="fl video">' +
								// 				'<img src="../img/bg-video.jpg">' +
								// 				// '<span>视讯直播</span>' +
								// 			'</div>' +
								// 		'</div>' +

								// 		'<div class="row2">' +
								// 			'<img src="../img/md.png">' +
								// 			'<div class="table">' +
								// 				'<div class="tr">' +
								// 					'<span class="td1">' +
								// 						'dong62191***' +
								// 					'</span>' +
								// 					'<span class="td2">' +
								// 						'Macbook Pro' +
								// 					'</span>' +
								// 				'</div>' +
								// 				'<div class="tr">' +
								// 					'<span class="td1">' +
								// 						'dong62191***' +
								// 					'</span>' +
								// 					'<span class="td2">' +
								// 						'Macbook Pro' +
								// 					'</span>' +
								// 				'</div>' +
								// 				'<div class="tr">' +
								// 					'<span class="td1">' +
								// 						'dong62191***' +
								// 					'</span>' +
								// 					'<span class="td2">' +
								// 						'Macbook Pro' +
								// 					'</span>' +
								// 				'</div>' +
								// 			'</div>' +
								// 		'</div>' +
								// 	'</div>' +
								// '</div>'+
							'</div>' +
						'</div>' +
							suspension.getDom() +
					'</div>';

		this.el  = temp;
	};

	HomePage.prototype.getDom = function () {
		return this.el;
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
								'<li><img src="../img/homepage-banner.jpg"></li>' +
								'<li><img src="../img/homepage-banner.jpg"></li>' +
								'<li><img src="../img/homepage-banner.jpg"></li>' +
							'</ul>' +
						'</div>';

		$('.unslider-horizontal').hide();
		$('.main .logo-wrapper').html(logoTemp);
		$('.home-pages-sliders').unslider({
			speed: 500,
			delay: 3000
		});
		$('.main .logo-wrapper').css('height', $('.home-pages-sliders').css('height'));
		$('.home-pages-sliders').show();
	};

	HomePage.prototype.bindEvents = function () {
		this.zone = $('.home-page');
	};

	window.HomePage = HomePage;
}());


