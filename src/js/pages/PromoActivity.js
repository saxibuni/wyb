(function () {
	function PromoActivity () {
		this.initDom();
	}
	
	PromoActivity.prototype.initDom = function () {
		var temp =	'<div class="page promo-activity">' +
						'<div class="wrapper">' +
							'优惠活动' +
						'</div>' +
					'</div>';
		
		this.el  = temp;
	};

	PromoActivity.prototype.getDom = function () {
		return this.el;
	};

	PromoActivity.prototype.show = function () {
		this.zone.show();
	};

	PromoActivity.prototype.hide = function () {
		this.zone.hide();
	};

	PromoActivity.prototype.bindEvents = function () {
		this.zone = $('.promo-activity');
	};

	window.PromoActivity = PromoActivity;
}());
