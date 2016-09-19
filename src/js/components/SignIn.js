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
									'<img class="logo" src="../img/logo-sands-macao.png">' +
									'<div class="close">×</div>' +
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
										'<input type="password" placeholder="请输入您的密码">' +
										'<img class="pass" src="../img/pass.png">' +
										'<img class="warning" src="../img/warning.png">' +
										'<div class="clear"></div>' +
									'</div>' +
								'</div>' +

								'<div class="row4">' +
									'<div class="input-outer verify-input-outer">' +
										'<input type="text" placeholder="请输入验证码">' +
									'</div>' +
									'<img src="../img/verify-code.png">' +
									'<span>换一个</span>' +
								'</div>' +

								'<div class="row5">' +
									'<div class="button">' +
										'快速登录' +
									'</div>' +
									'<div class="button-info">' +
										// '<input type="checkbox" id="agree-checkbox">' +
										// '<label for="agree-checkbox">记住用户名</label>' +
										'<span class="find-password">找回密码</span>' +
										'<span class="signup-now">快速注册</span>' +
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

	SignIn.prototype.checkInputPass = function () {
		if (this.usernamePass && this.passwordPass && this.verifyPass) {
			this.zone.find('.row5 .button').addClass('active');
			this.allPass = true;
		} else {
			this.zone.find('.row5 .button').removeClass('active');
			this.allPass = false;
		}
	};

	SignIn.prototype.bindEvents = function () {
		var usernameInput;
		var passwordInput;
		var verifyInput;
		var close;
		var button;
		var value;
		var value2;
		var usernameReg   = '^[A-Za-z0-9]{6,12}$';
		var passwordReg   = '^[A-Za-z0-9]{6,50}$';
		var verifyReg     = '^[0-9]{4}$';
		var inputEvents   = 'input';
		var that          = this;

		this.usernamePass   = false;
		this.passwordPass   = false;
		this.verifyPass     = false;
		this.allPass        = false;

		this.zone       = $('.sign-in');
		usernameInput   = this.zone.find('.row2 input:text');
		passwordInput   = this.zone.find('.row3 input:password');
		verifyInput     = this.zone.find('.row4 input:text');
		close           = this.zone.find('.close');
		button          = this.zone.find('.row5 .button');

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

			that.checkInputPass();
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

			that.checkInputPass();
		});

		verifyInput.bind(inputEvents, function () {
			value = $(this).val();

			if (!value.match(verifyReg)) {
				that.verifyPass = false;
			} else {
				that.verifyPass = true;
			}

			that.checkInputPass();
		});

		close.click(function () {
			that.hide();
		})

		button.click(function () {
			if (!that.allPass) {
				return;
			}

			that.hide();
			app.header.showSignedInHeader();
			app.signedIn = true;
		});

		this.zone.find('.find-password').click(function () {
			that.hide();
			app.goTo('forgetPassword');
		});

		this.zone.find('.signup-now').click(function () {
			that.hide();

			if (!app.signUpDialog) {
				app.signUpDialog = new SignUp();
				$('.app').append(app.signUpDialog.getDom());
				app.signUpDialog.bindEvents();
			}

			app.signUpDialog.show();
		});

		this.bindOverlayEvents();
	};

	window.SignIn = SignIn;
}());
