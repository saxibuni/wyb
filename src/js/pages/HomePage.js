(function () {
	function HomePage () {
		this.initDom();
	}
	
	HomePage.prototype.initDom = function () {
		var temp =	'<div class="page home-page">' +
						'<div class="wrapper">' +
							'我是Page内容' +
						'</div>' +
					'</div>';
		
		this.el  = temp;
	};

	HomePage.prototype.getDom = function () {
		return this.el;
	};

	HomePage.prototype.show = function () {
	};

	HomePage.prototype.hide = function () {
	};

	HomePage.prototype.bindEvents = function () {
	};

	window.HomePage = HomePage;
}());
