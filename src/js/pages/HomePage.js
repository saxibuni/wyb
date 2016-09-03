(function () {
	function HomePage () {
		this.initDom();
	}
	
	HomePage.prototype.initDom = function () {
		var temp =	'<div class="page home-page">' +
						'<div class="wrapper">' +
							'<div class="title">' +
							'</div>' +

							'<div class="content">' +
							'</div>' +
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
}());
