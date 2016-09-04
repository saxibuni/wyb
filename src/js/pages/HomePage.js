(function () {
	var notice = new Notice({hasBtn: false, date: '2016-08-12', content: '为了给您提供便捷的充值方式，韦易博平台于6月18日上线【微信支付】充值方式，欢迎大家体验，谢谢。'});
	function HomePage () {
		this.initDom();
	}
	
	HomePage.prototype.initDom = function () {
		var temp =	'<div class="page home-page">' +
						'<div class="wrapper">' +
							'<div class="content1">' +
								'<div class="row">' +
									'<div class="banner">' +
									'<ul class="clearAfter">' +
										'<li class="slide1"><img src="../img/banner1.png"></li>' +
										'<li class="slide2"><img src="../img/banner1.png"></li>' +
										'<li class="slide3"><img src="../img/banner1.png"></li>' +
									'</ul>' +
									'</div>' +
								'</div>' +
							'</div>' +
							'<div class="content23">' +
								'<div class="content2">' +
									notice.getDom() +
								'</div>' +

								'<div class="content3 clearAfter">' +
									'<div class="left fl">' +
										'<div class="row1 clearAfter">' +
											'<div class="row1-left fl">' +
												'<a class="kf">' +
													'<img src="../img/sy-kf.jpg">' +
													'<span >' +
														'<i class="kx-icon"></i>' +
														'<b>在线客服</b>' +
													'</span>' +
												'</a>' +
												'<a class="xz">' +
													'<img src="../img/sy-xz.jpg">' +
													'<span>' +
														'<i class="xz-icon"></i>' +
														'<b>客户端下载</b>' +
													'</span>' +
												'</a>' +
											'</div>' +
											'<div class="row1-right fr">' +
												'<img src="../img/bg-eEntertainment.jpg">' +
												'<span>电子游艺</span>' +
											'</div>' +
										'</div>' +
										'<div class="row2">' +
											'<img src="../img/jackpot.png">' +
											'<span class="jackpot">' +
												'509,456,29.88' +
											'</span>' +
										'</div>' +
									'</div>' +

									'<div class="right fl">' +
										'<div class="row1 clearAfter">' +
											'<div class="fl sports">' +
												'<img src="../img/bg-sport.jpg">' +
												'<span>体育赛事</span>' +
											'</div>' +
											'<div class="fl video">' +
												'<img src="../img/bg-sport.jpg">' +
												'<span>视讯直播</span>' +
											'</div>' +
										'</div>' +
										'<div class="row2">' +
											'<img >' +
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
											'</div>' +
										'</div>' +
									'</div>' +
								'</div>'+
						'</div>' +
					'</div>';

		this.el  = temp;
	};

	HomePage.prototype.getDom = function () {
		return this.el;
	};

	HomePage.prototype.show = function () {
		this.zone.show();
	};

	HomePage.prototype.hide = function () {
		this.zone.hide();
	};

	HomePage.prototype.bindEvents = function () {
		this.zone = $('.home-page');
	};

	window.HomePage = HomePage;

	$(function() {
		$('.banner').unslider({
			speed: 500,
			delay: 3000,
			dots: true
		});
	});
}());
