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
									'<img class="verify-code" src="' + app.urls.verifyImage + '">' +
									'<span class="change-verify-code">换一个</span>' +
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

    SignIn.prototype.createLoader = function() {
        var wrapper = this.zone.find('.dialog')[0];
        this.loader = new Loader(wrapper);
    };

	SignIn.prototype.commit = function () {
		var that = this;
		var url  = app.urls.checkVerifyImage + 'securityCode=' + this.verifyInput.val();

		this.loader.play();

        $.ajax({
            type: 'GET',
            url: url,
            dataType: 'json',
            timeout: app.timeout,
            xhrFields: {
            	withCredentials: true
            }
        }).done(function (json) {
        	if (!json) {
        		alert('验证码错误');
        		that.loader.stop();
        		return;
        	}

        	that.login();
        }).fail(function (xhr, testStatus, error) {
            alert(error);
        });
	};

	SignIn.prototype.login = function () {
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
            url: app.urls.signIn,
            dataType: 'json',
            timeout: app.timeout,
            data: data,
            xhrFields: {
            	withCredentials: true
            }
        }).done(function(json) {
        	if (json.StatusCode && !json.access_token) {
        		alert(json.Message);
        	} else {
        		callback(json);
        	}
        	that.loader.stop();
        }).fail(function(xhr, textStatus, error) {
            alert(error);
        });
	};

	SignIn.prototype.bindEvents = function () {
		var close;
		var button;
		var value;
		var value2;
		var usernameReg   = app.usernameReg;
		var passwordReg   = app.passwordReg;
		var verifyReg     = app.verifyReg;
		var inputEvents   = 'input';
		var that          = this;

		this.usernamePass   = false;
		this.passwordPass   = false;
		this.verifyPass     = false;
		this.allPass        = false;

		this.zone       = $('.sign-in');
		this.usernameInput   = this.zone.find('.row2 input:text');
		this.passwordInput   = this.zone.find('.row3 input:password');
		this.verifyInput     = this.zone.find('.row4 input:text');
		close           = this.zone.find('.close');
		button          = this.zone.find('.row5 .button');

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

		this.verifyInput.bind(inputEvents, function () {
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
			that.commit();
		});

		this.zone.find('.change-verify-code').click(function () {
            that.zone.find('.verify-code').attr('src', 
            	app.urls.verifyImage + '?sid=' + Math.random()
            );
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
		this.createLoader();
	};

	window.SignIn = SignIn;
}());
