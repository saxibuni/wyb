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
							'<div class="speaker-icon"></div>' +
							
							'<div class="ul-wrapper">' +
								'<ul class="content-ul">' +
								'</ul>' +
							'</div>' +
						'</div>' +

						'<div class="notice2-right">' +
							'<div class="ul-wrapper">' +
								'<ul class="date-ul">' +
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

	Notice2.prototype.setContentItems = function (data) {
		var i;
		var temp = '';

		for (i = 0; i < data.length; i++) {
			temp += this.createContentItem({
				content: data[i].Content_RemoveHtml,
				title: data[i].Title
			});
		}

		this.zone.find('.content-ul').html(temp);
	};

	Notice2.prototype.createContentItem = function (data) {
		var temp = 	'<li>' +
						'<div class="content">' + 
							'<div class="content-wrapper">' +
								data.content + 
							'</div>' +
						'</div>' +
					'</li>';

		return temp;
	};

	Notice2.prototype.setDateItems = function (data) {
		var i;
		var temp = '';

		for (i = 0; i < data.length; i++) {
			temp += this.createDateItem({
				date: data[i].CreateTime
			});
		}

		this.zone.find('.date-ul').html(temp);
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
		var liHeight  = 40;
		var contentUl = this.zone.find('.notice2-left ul');
		var dateUl    = this.zone.find('.notice2-right ul');

		this.interval = setInterval(function () {
			top = parseFloat(contentUl.css('top'));
			len = contentUl.children('li').length;

			if (top === (0 - liHeight * (len - 1))) {
				contentUl.css({
					'top': 0,
					'transition': 'none'
				});
				dateUl.css({
					'top': 0,
					'transition': 'none'
				});
			} else {
				top -= liHeight;
				contentUl.css({
					'top': top + 'px',
					'transition': 'top .5s'
				});
				dateUl.css({
					'top': top + 'px',
					'transition': 'top .5s'
				});
			}
		}, 3000);
	};

	Notice2.prototype.queryData = function() {
		var i;
		var callback;
		var that = this;
		var opt  = {
			url: app.urls.getAnnouncements,
			data: {
				pageIndex: 0,
				pageSize: 10
			}
		};

		callback = function (json) {
            if (json && json.StatusCode) {
                alert(json.Message);
                return;
            }

            that.setContentItems(json.list);
            that.setDateItems(json.list);
            that.bindLiEvents();
		};

		Service.get(opt, callback);
	};

	Notice2.prototype.hide = function () {
		clearInterval(this.interval);
		this.zone.hide();
	};

	Notice2.prototype.show = function () {
		this.zone.show();
	};

	Notice2.prototype.bindLiEvents = function (callback) {
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
			contentWrapper.animate({'left': '-1000px'}, 15000, function () {
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
	};

	Notice2.prototype.bindEvents = function (callback) {
		this.zone = $('#' + this.id);
	};

	window.Notice2 = Notice2;
}());
