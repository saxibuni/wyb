(function () {
	function SignIn (opt) {
		IMDialog.call(this, opt || {});
		this.initDom();
	}
	
	SignIn.prototype = new IMDialog();

	SignIn.prototype.initDom = function () {
		var temp =	'<div class="sign-in">' +
						'<div class="dialog-wrapper">' +
							'<div class="dialog">' +
							'</div>' +
						'</div>' +
					'</div>' +

					'<div class="overlay overlay3"></div>';
		
		this.el  = temp;
	};

	SignIn.prototype.getDom = function () {
		return this.el;
	};

	SignIn.prototype.show = function () {
		this.showOverlay();
	};

	SignIn.prototype.hide = function () {
		this.hideOverlay();
	};

	SignIn.prototype.bindEvents = function () {
		this.zone = $('.sign-in');

		this.bindOverlayEvents();
	};

	window.SignIn = SignIn;
}());
