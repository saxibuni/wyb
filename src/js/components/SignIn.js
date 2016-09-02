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
								'<div class="row1">' +
								'</div>' +

								'<div class="row2">' +
									'<div class="text">用户名</div>' +
									'<div class="input-outer">' +
										'<input type="text" placeholder="请输入您的用户名">' +
										'<img class="pass" src="../img/pass.png">' +
										'<img class="warning" src="../img/warning.png">' +
										'<div class="clear"></div>' +
									'</div>' +
								'</div>' +

								'<div class="row3">' +
									'<div class="text">密码</div>' +
									'<div class="input-outer">' +
										'<input type="text" placeholder="请输入您的密码">' +
										'<img class="pass" src="../img/pass.png">' +
										'<img class="warning" src="../img/warning.png">' +
										'<div class="clear"></div>' +
									'</div>' +
								'</div>' +

								'<div class="row4">' +
									'<div class="input-outer verify-input-outer">' +
										'<input type="text" placeholder="请输入验证码">' +
									'</div>' +
									'<img class="message-img" src="../img/zh-lang.png">' +
									'<span>换一个</span>' +
								'</div>' +

								'<div class="row5">' +
									'<div class="button">' +
										'快速登录' +
									'</div>' +
									'<div class="button-info">' +
										'<input type="checkbox" id="agree-checkbox">' +
										'<label for="agree-checkbox">记住用户名</label>' +
										'<span>找回密码</span>' +
										'<div class="clear"></div>' +
									'</div>' +
								'</div>' +
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
