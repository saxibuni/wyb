(function () {
	function LiveVideo () {
		this.initDom();
	}
	
	LiveVideo.prototype.initDom = function () {
		var temp =	'<div class="page live-video">' +
						'<div class="wrapper">' +
							'<div class="content">' +
								'<div class="picture-zone">' +
									this.createItem({ className: 'img1', img: 's00-h'}) +
									this.createItem({ className: 'img2', img: 's01-h'}) +
									this.createItem({ className: 'img3', img: 's02-h'}) +
									this.createItem({ className: 'img4', img: 's03-h'}) +
									this.createItem({ className: 'img5', img: 's04-h'}) +
									this.createItem({ className: 'img6', img: 's04-h'}) +
									this.createItem({ className: 'img7', img: 's04-h'}) +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>';
		
		this.el  = temp;
	};

	LiveVideo.prototype.getDom = function () {
		return this.el;
	};

	LiveVideo.prototype.createItem = function (opt) {
		var temp =	'<div class="item' + ((opt&&opt.className)?' ' + opt.className: '') + '">' +
						'<div class="zone1">' +
							'<div class="logo"' + (opt&&opt.width&&opt.height?(' style="width:' + opt.width + ';height:' + opt.height + '"'): '') + '>' +
								'<img src="../img/' + opt.img + '.jpg"' + (opt?(' style="width:' + opt.width + ';height:' + opt.height + '"'): '') + '>' +
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
		this.addSliders();
	};

	LiveVideo.prototype.hide = function () {
		this.zone.fadeOut(500);
	};

	LiveVideo.prototype.addSliders = function () {
		var logoTemp = 	'<div class="live-video-sliders">' +
							'<ul>' +
								'<li><img src="../img/homepage-banner.jpg"></li>' +
								'<li><img src="../img/homepage-banner.jpg"></li>' +
								'<li><img src="../img/homepage-banner.jpg"></li>' +
							'</ul>' +
						'</div>';
		
		$('.unslider-horizontal').hide();
		$('.main .logo-wrapper').html(logoTemp);
		$('.live-video-sliders').unslider({
			speed: 500,
			delay: 3000
		});
		$('.live-video-sliders').show();
		$('.main .logo-wrapper').css('height', $('.live-video-sliders').css('height'));
	};

	LiveVideo.prototype.bindEvents = function () {
		this.zone = $('.live-video');
	};

	window.LiveVideo = LiveVideo;
}());
