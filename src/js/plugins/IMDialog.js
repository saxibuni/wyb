//Dialog的基类

(function () {
	function IMDialog (opt) {
		this.opt = opt;
	}

	IMDialog.prototype.showOverlay = function () {
		var height1 = parseInt($('.bet .main').css('height'));
		var height2 = parseInt($('.bet .left-nav').css('height'));
		var height  = Math.max(height1, height2) + 'px';

		this.zone.next('.overlay').css('height', height);
		this.zone.removeClass('modal-dialog-deactive');
		this.zone.addClass('modal-dialog-active');
	};

	IMDialog.prototype.hideOverlay = function () {
		this.zone.removeClass('modal-dialog-active');
		this.zone.addClass('modal-dialog-deactive');
	};

	//给BettingRecords和UserFeedback用的
	IMDialog.prototype.showContentOverlay = function () {
		var height1 = parseInt($('.bet .main').css('height'));
		var height2 = parseInt($('.bet .left-nav').css('height'));
		var height  = Math.max(height1, height2) + 'px';

		$('body').css('overflow-y', 'hidden');
		this.zone.next('.overlay').css('height', height);
		this.zone.removeClass('content-dialog-deactive');
		this.zone.addClass('content-dialog-active');
	};

	//给BettingRecords和UserFeedback用的
	IMDialog.prototype.hideContentOverlay = function () {
		$('body').css('overflow-y', 'auto');
		this.zone.removeClass('content-dialog-active');
		this.zone.addClass('content-dialog-deactive');
	};

	IMDialog.prototype.bindOverlayEvents = function () {
		var that = this;

		this.isPC = !window.Util.isMobile.any();

		if (this.isPC) {
			this.zone.find('.dialog').css('transition', 'all .5s');
		}

		this.zone.next('.overlay').click(function () {
			that.hide();
		});
	};

	window.IMDialog = IMDialog;
}());