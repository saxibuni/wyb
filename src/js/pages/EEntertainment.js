(function () {
	function EEntertainme () {
		this.initDom();
	}
	
	EEntertainme.prototype.initDom = function () {
		var temp =	'<div class="page home-page">' +
						'<div class="wrapper">' +
							'我是Page内容' +
						'</div>' +
					'</div>';
		
		this.el  = temp;
	};

	EEntertainme.prototype.getDom = function () {
		return this.el;
	};

	EEntertainme.prototype.show = function () {
	};

	EEntertainme.prototype.hide = function () {
	};

	EEntertainme.prototype.bindEvents = function () {
	};

	window.EEntertainme = EEntertainme;
}());
