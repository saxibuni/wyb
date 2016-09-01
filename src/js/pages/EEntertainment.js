(function () {
	function EEntertainment () {
		this.initDom();
	}
	
	EEntertainment.prototype.initDom = function () {
		var temp =	'<div class="page e-entertainment">' +
						'<div class="wrapper">' +
							'电子游艺' +
						'</div>' +
					'</div>';
		
		this.el  = temp;
	};

	EEntertainment.prototype.getDom = function () {
		return this.el;
	};

	EEntertainment.prototype.show = function () {
		this.zone.show();
	};

	EEntertainment.prototype.hide = function () {
		this.zone.hide();
	};

	EEntertainment.prototype.bindEvents = function () {
		this.zone = $('.e-entertainment');
	};

	window.EEntertainment = EEntertainment;
}());
