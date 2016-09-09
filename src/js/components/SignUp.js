(function () {
	function SignUp (opt) {
		IMDialog.call(this, opt || {});
		this.initDom();
	}
	
	SignUp.prototype = new IMDialog();

	SignUp.prototype.initDom = function () {
		var temp =	'<div class="sign-up">' +
						'<div class="dialog-wrapper">' +
							'<div class="dialog">' +
								'<div class="row1">' +
									'<img class="logo" src="../img/logo-sands-macao.png">' +
									'<div class="close">×</div>' +
								'</div>' +

								'<div class="row2">' +
									'<div class="text">用户名</div>' +
									'<div class="input-outer">' +
										'<input type="text" placeholder="用户名由3-12位数字和字母组成">' +
										'<img class="pass" src="../img/pass.png">' +
										'<img class="warning" src="../img/warning.png">' +
										'<div class="clear"></div>' +
									'</div>' +
								'</div>' +

								'<div class="row3">' +
									'<div class="text">密码</div>' +
									'<div class="input-outer">' +
										'<input type="password" placeholder="密码由6-12位数字和字母组成，不含字符">' +
										'<img class="pass" src="../img/pass.png">' +
										'<img class="warning" src="../img/warning.png">' +
										'<div class="clear"></div>' +
									'</div>' +
								'</div>' +

								'<div class="row4">' +
									'<div class="input-outer">' +
										'<input type="password" placeholder="再次输入密码">' +
										'<img class="pass" src="../img/pass.png">' +
										'<img class="warning" src="../img/warning.png">' +
										'<div class="clear"></div>' +
									'</div>' +
								'</div>' +

								'<div class="row5">' +
									'<div class="text">推广码</div>' +
									'<div class="input-outer">' +
										'<input type="text" placeholder="请输入推广码，如无请留空">' +
										'<img class="pass" src="../img/pass.png">' +
										'<img class="warning" src="../img/warning.png">' +
										'<div class="clear"></div>' +
									'</div>' +
								'</div>' +

								'<div class="row6">' +
									'<div class="input-outer verify-input-outer">' +
										'<input type="text" placeholder="请输入验证码">' +
									'</div>' +
									'<img class="message-img" src="../img/verify-code.png">' +
									'<span>换一个</span>' +
									'<div class="agree">' +
										'<input type="checkbox" id="remember-checkbox" checked="checked">' +
										'<label for="remember-checkbox">我已届满合法博彩年龄，且同意各项开户条约</label>' +
									'</div>' +
								'</div>' +

								'<div class="row7">' +
									'<div class="button">' +
										'快速注册' +
									'</div>' +
									'<div class="button-info signin-now">' +
										'已有账户？立即登录' +
									'</div>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>' +

					'<div class="overlay overlay3"></div>';
		
		this.el  = temp;
	};

	SignUp.prototype.getDom = function () {
		return this.el;
	};

	SignUp.prototype.show = function () {
		this.showOverlay();
	};

	SignUp.prototype.hide = function () {
		this.hideOverlay();
	};

	SignUp.prototype.bindEvents = function () {
		var usernameInput;
		var passwordInput;
		var repeatInput;
		var popularizeInput;
		var verifyInput;
		var close;
		var button;
		var value;
		var value2;
		var usernameReg   = '^[A-Za-z0-9]{6,12}$';
		var passwordReg   = '^[A-Za-z0-9]{6,50}$';
		var repeatReg     = '^[A-Za-z0-9]{6,50}$';
		var popularizeReg = '^[A-Za-z0-9]{10}$';
		var verifyReg     = '';
		var inputEvents   = 'input';
		var that          = this;

		this.usernamePass   = false;
		this.passwordPass   = false;
		this.repeatPass     = false;
		this.usernamePass   = false;
		this.usernamePass   = false;
		this.popularizePass = false;

		this.zone = $('.sign-up');
		usernameInput   = this.zone.find('.row2 input:text');
		passwordInput   = this.zone.find('.row3 input:password');
		repeatInput     = this.zone.find('.row4 input:password');
		popularizeInput = this.zone.find('.row5 input:text');
		verifyInput     = this.zone.find('.row6 input:text');
		close           = this.zone.find('.close');
		button          = this.zone.find('.row7 .button');

		usernameInput.bind(inputEvents, function () {
			value = $(this).val();

			if (!value.match(usernameReg)) {
				$(this).siblings('.warning').show();
				$(this).siblings('.pass').hide();
				that.usernamePass = false;
			} else {
				$(this).siblings('.warning').hide();
				$(this).siblings('.pass').show();
				that.usernamePass = true;
			}
		});

		passwordInput.bind(inputEvents, function () {
			value = $(this).val();

			if (!value.match(passwordReg)) {
				$(this).siblings('.warning').show();
				$(this).siblings('.pass').hide();
				that.passwordPass = false;
			} else {
				$(this).siblings('.warning').hide();
				$(this).siblings('.pass').show();
				that.passwordPass = true;
			}
		});

		repeatInput.bind(inputEvents, function () {
			value  = $(this).val();

			if (!value.match(repeatReg)) {
				$(this).siblings('.warning').show();
				$(this).siblings('.pass').hide();
				that.repeatPass = false;
			} else {
				$(this).siblings('.warning').hide();
				$(this).siblings('.pass').show();
				that.repeatPass = true;
			}
		}).blur(function () {
			value  = passwordInput.val();
			value2 = repeatInput.val();

			if (value !== value2) {
				$(this).siblings('.warning').show();
				$(this).siblings('.pass').hide();
				that.repeatPass = false;
			} else {
				$(this).siblings('.warning').hide();
				$(this).siblings('.pass').show();
				that.repeatPass = true;
			}
		});

		popularizeInput.bind(inputEvents, function () {
			value  = $(this).val();

			if (!value.match(popularizeReg)) {
				$(this).siblings('.warning').show();
				$(this).siblings('.pass').hide();
				that.popularizePass = false;
			} else {
				$(this).siblings('.warning').hide();
				$(this).siblings('.pass').show();
				that.popularizePass = true;
			}
		});

		close.click(function () {
			that.hide();
		})

		button.click(function () {
			that.hide();
			app.header.showSignedInHeader();
		});

		this.zone.find('.signin-now').click(function () {
			that.hide();

			if (!app.signInDialog) {
				app.signInDialog = new SignIn();
				$('.app').append(app.signInDialog.getDom());
				app.signInDialog.bindEvents();
			}

			app.signInDialog.show();
		});

		this.bindOverlayEvents();
	};

	window.SignUp = SignUp;
}());
