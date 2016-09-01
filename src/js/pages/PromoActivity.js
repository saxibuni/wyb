(function () {
	function PromoActivity () {
		this.initDom();
	}
	
	PromoActivity.prototype.initDom = function () {
		var temp =	'<div class="page promo-activity">' +
						'<div class="wrapper">' +
							'我是Page内容' +
						'</div>' +
					'</div>';
		
		this.el  = temp;
	};

	PromoActivity.prototype.getDom = function () {
		return this.el;
	};

	PromoActivity.prototype.show = function () {
	};

	PromoActivity.prototype.hide = function () {
	};

	PromoActivity.prototype.bindEvents = function () {
	};

	window.PromoActivity = PromoActivity;
}());
