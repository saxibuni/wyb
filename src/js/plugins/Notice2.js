(function () {
	function Notice2 (opt) {
		this.opt        =  opt;
		this.id       	=  opt.id;
		// this.moreNotice =  opt.moreNotice || false;
		// this.close      =  opt.close || false;
		this.initDom();
	}

	Notice2.prototype.initDom = function () {
		var temp =	'<div class="notice2" id="' + this.id + '">' +
						'<div class="notice2-left">' +
							'<img class="notice2-img" src="../img/notice.png">' +
							'<div class="ul-wrapper">' +
								'<ul>' +
									this.createContentItems() +
								'</ul>' +
							'</div>' +
						'</div>' +

						'<div class="notice2-right">' +
							'<div class="ul-wrapper">' +
								'<ul>' +
									this.createDateItems() +
								'</ul>' +
							'</div>' +
							'<div class="moreNotice">更多公告</div>' +
							'<div class="close">×</div>' +
						'</div>' +
					'</div>';

		this.el  = temp;
	};

	Notice2.prototype.getDom = function () {
		return this.el;
	};

	Notice2.prototype.createContentItems = function () {
		var i;
		var temp = '';
		var data = {
			content: '为了给您提供便捷的充值方式，韦易博平台于6月18日上线【微信支付】充值方式，欢迎大家体验，谢谢',
			title: '重要公告'
		};

		for (i = 0; i < 50; i++) {
			temp += this.createContentItem(data);
		}

		return temp;
	};

	Notice2.prototype.createContentItem = function (data) {
		var temp = 	'<li>' +
						'<span class="title">[' + data.title + ']</span>' +
						'<div class="content">' + 
							'<div class="content-wrapper">' +
								data.content + 
							'</div>' +
						'</div>' +
					'</li>';

		return temp;
	};

	Notice2.prototype.createDateItems = function () {
		var i;
		var temp = '';
		var data = {
			date: '2016-08-08'
		};

		for (i = 0; i < 50; i++) {
			temp += this.createDateItem(data);
		}

		return temp;
	};

	Notice2.prototype.createDateItem = function (data) {
		var temp =	'<li>' +
						data.date + 
					'</li>';

		return temp;
	};

	Notice2.prototype.startAnimation = function () {
		var top;
		var len;
		var liHeight = 40;
		var contentUl = this.zone.find('.notice2-left ul');
		var dateUl    = this.zone.find('.notice2-right ul');

		this.interval = setInterval(function () {
			top = parseFloat(contentUl.css('top'));
			len = contentUl.children('li').length;

			if (top === (0 - liHeight * (len - 1))) {
				contentUl.css('top', '0');
				dateUl.css('top', '0');
			} else {
				top -= liHeight;
				contentUl.css('top', top + 'px');
				dateUl.css('top', top + 'px');
			}
		}, 3000);
	};

	Notice2.prototype.createItems = function () {
		var i;
		var temp = '';
		var data = {

		};

		for (i = 0; i < 20; i++) {

		}

		return temp;
	};

	Notice2.prototype.createItem = function (data) {
		return this.el;
	};

	Notice2.prototype.hide = function () {
		clearInterval(this.interval);
		this.zone.hide();
	};

	Notice2.prototype.show = function () {
		this.zone.show();
		this.startAnimation();
	};

	Notice2.prototype.bindEvents = function (callback) {
		var contentWrapper;
		var contentUl;
		var dateUl;
		var that = this;

		this.zone = $('#' + this.id);
		contentUl = this.zone.find('.notice2-left ul');
		dateUl    = this.zone.find('.notice2-right ul');

		contentUl.children('li').hover(function () {
			clearInterval(that.interval);
			contentWrapper = $(this).find('.content-wrapper');
			contentWrapper.animate({'left': '-1000px'}, 6000, function () {
				contentWrapper.css({'left': '0'});
			});
		}, function () {
			contentWrapper = $(this).find('.content-wrapper');
			contentWrapper.stop();
			contentWrapper.css({'left': '0'});
			that.startAnimation();
		});

		this.zone.find('.close').click(function () {
			that.hide();
		});

		this.zone.find('.moreNotice').click(function () {
			app.personCenterRouter(3, 1);
		});

		this.startAnimation();
	};

	window.Notice2 = Notice2;
}());
