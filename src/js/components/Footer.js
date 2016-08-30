(function () {
	function Footer () {
		this.initDom();
	}
	
	Footer.prototype.initDom = function () {
		var temp =	'<div class="footer">' +
						'<div class="wrapper">' +
							'我是footer内容' +
						'</div>' +
					'</div>';
		
		this.el  = temp;
	};

	Footer.prototype.getDom = function () {
		return this.el;
	};

	Footer.prototype.show = function () {
	};

	Footer.prototype.hide = function () {
	};

	Footer.prototype.bindEvents = function () {
	};

	window.Footer = Footer;
}());
