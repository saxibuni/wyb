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
									'<img class="verify-code" src="' + app.urls.verifyImage + '">' +
									'<span class="change-verify-code">换一个</span>' +
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

	SignUp.prototype.checkInputPass = function () {
		if (this.usernamePass && this.passwordPass && this.repeatPass
			&& this.verifyPass && this.popularizePass) {

			this.zone.find('.row7 .button').addClass('active');
			this.allPass = true;
		} else {
			this.zone.find('.row7 .button').removeClass('active');
			this.allPass = false;
		}
	};

    SignUp.prototype.createLoader = function() {
        var wrapper = this.zone.find('.dialog')[0];
        this.loader = new Loader(wrapper);
    };

	SignUp.prototype.commit = function () {
		var that = this;
		var url = app.urls.checkVerifyImage + this.verifyInput.val();

		this.loader.play();

        $.ajax({
            type: 'GET',
            url: url,
            dataType: 'text',
            timeout: app.timeout,
            xhrFields: {
            	withCredentials: true
            }
        }).done(function (json) {
        	if (!json) {
        		that.loader.stop();
        		alert('验证码错误');
        		return;
        	}

        	that.register();
        }).fail(function (xhr, testStatus, error) {
            alert(error);
        });
	};

	SignUp.prototype.register = function () {
		var data;
		var callback;
		var that = this;

		if (!this.allPass) {
			return;
		}

		callback = function (data) {
			that.hide();
			app.header.showSignedInHeader(data);
			app.signedIn = true;
			//app.getLoginStatus();
		};

		data = {
			UserName: this.usernameInput.val(),
			Password: this.passwordInput.val()
		};

        $.ajax({
            type: 'POST',
            url: app.urls.signUp,
            dataType: 'json',
            timeout: app.timeout,
            data: data,
            xhrFields: {
            	withCredentials: true
            }
        }).done(function(json) {
            callback(json);
            that.loader.play();
        }).fail(function(xhr, textStatus, error) {
            alert('register request failed');
        });
	};

	SignUp.prototype.bindEvents = function () {
		var close;
		var button;
		var value;
		var value2;
		var usernameReg   = app.usernameReg;
		var passwordReg   = app.passwordReg;
		var repeatReg     = app.passwordReg;
		var popularizeReg = app.popularizeReg;
		var verifyReg     = app.verifyReg;
		var inputEvents   = 'input';
		var that          = this;

		this.usernamePass   = false;
		this.passwordPass   = false;
		this.repeatPass     = false;
		this.usernamePass   = false;
		this.popularizePass = false;
		this.allPass        = false;

		this.zone            = $('.sign-up');
		this.usernameInput   = this.zone.find('.row2 input:text');
		this.passwordInput   = this.zone.find('.row3 input:password');
		this.repeatInput     = this.zone.find('.row4 input:password');
		this.popularizeInput = this.zone.find('.row5 input:text');
		this.verifyInput     = this.zone.find('.row6 input:text');
		close                = this.zone.find('.close');
		button               = this.zone.find('.row7 .button');

		this.usernameInput.bind(inputEvents, function () {
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

		this.passwordInput.bind(inputEvents, function () {
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

		this.repeatInput.bind(inputEvents, function () {
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

			that.checkInputPass();
		}).blur(function () {
			value  = that.passwordInput.val();
			value2 = that.repeatInput.val();

			if (value !== value2) {
				$(this).siblings('.warning').show();
				$(this).siblings('.pass').hide();
				that.repeatPass = false;
			} else {
				$(this).siblings('.warning').hide();
				$(this).siblings('.pass').show();
				that.repeatPass = true;
			}

			that.checkInputPass();
		});

		this.verifyInput.bind(inputEvents, function () {
			value = $(this).val();

			if (!value.match(verifyReg)) {
				that.verifyPass = false;
			} else {
				that.verifyPass = true;
			}

			that.checkInputPass();
		});

		this.popularizeInput.bind(inputEvents, function () {
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

			that.checkInputPass();
		});

		close.click(function () {
			that.hide();
		})

		button.click(function () {
			that.commit();
		});

		this.zone.find('.change-verify-code').click(function () {
            that.zone.find('.verify-code').attr('src', 
            	app.urls.verifyImage + '?sid=' + Math.random()
            );
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
		this.createLoader();
	};

	window.SignUp = SignUp;
}());
