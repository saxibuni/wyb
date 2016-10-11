(function () {
	function SignUp (opt) {
		IMDialog.call(this, opt || {});
		this.initDom();
	}
	
	SignUp.prototype = new IMDialog();

	SignUp.prototype.initDom = function () {
		var inputWidth  = 300;
		var inputHeihgt = 30;

		this.userNameInput = new Input({
			id: 'sign-up-username-input',
			width: inputWidth,
			height: inputHeihgt,
			reg: app.usernameReg,
			placeholder: '用户名由3-12位数字和字母组成'
		});

		this.passwordInput = new Input({
			id: 'sign-up-password-input',
			width: inputWidth,
			height: inputHeihgt,
			reg: app.passwordReg,
			placeholder: '密码由6-12位数字和字母组成，不含字符',
			type: 'password'
		});

		this.comfirmPasswordInput = new Input({
			id: 'sign-up-comfirm-password-input',
			width: inputWidth,
			height: inputHeihgt,
			reg: app.passwordReg,
			placeholder: '请再次输入您的密码',
			type: 'password'
		});

		this.emailInput = new Input({
			id: 'sign-up-email-input',
			width: inputWidth,
			height: inputHeihgt,
			reg: app.emailReg,
			placeholder: '请输入您的邮箱地址'
		});

		this.phoneInput = new Input({
			id: 'sign-up-phone-input',
			width: inputWidth,
			height: inputHeihgt,
			reg: app.phoneNumberReg,
			placeholder: '请输入您的手机号码'
		});

		this.trueNameInput = new Input({
			id: 'sign-truename-input',
			width: inputWidth,
			height: inputHeihgt,
			reg: app.chineseNameReg,
			placeholder: '请输入您的真实姓名'
		});

		this.popularInput = new Input({
			id: 'sign-popular-input',
			width: inputWidth,
			height: inputHeihgt,
			reg: app.chineseNameReg,
			placeholder: '请输入推广码，如无请留空'
		});

		this.verifyInput = new Input({
			id: 'sign-vefiry-input',
			width: 155,
			height: 30,
			reg: app.chineseNameReg,
			placeholder: '请输入验证码'
		});

		var filler = '&nbsp;&nbsp;&nbsp;&nbsp;';

		var temp =	'<div class="sign-up">' +
						'<div class="dialog-wrapper">' +
							'<div class="dialog">' +
								'<div class="row1">' +
									'<img class="logo" src="../img/logo-sands-macao.png">' +
									'<div class="close">×</div>' +
								'</div>' +

								'<div class="row">' +
									'<div class="text">用户名</div>' +
									this.userNameInput.getDom() +
									'<div class="star">*</div>' +
								'</div>' +

								'<div class="row">' +
									'<div class="text">密' + filler + '码</div>' +
									this.passwordInput.getDom() +
									'<div class="star">*</div>' +
								'</div>' +

								'<div class="row">' +
									'<div class="text">&nbsp;</div>' +
									this.comfirmPasswordInput.getDom() +
									'<div class="star">*</div>' +
								'</div>' +

								'<div class="row">' +
									'<div class="text">邮' + filler + '箱</div>' +
									this.emailInput.getDom() +
									'<div class="star">*</div>' +
								'</div>' +

								'<div class="row">' +
									'<div class="text">手机号</div>' +
									this.phoneInput.getDom() +
									'<div class="star">*</div>' +
								'</div>' +

								'<div class="row">' +
									'<div class="text">姓' + filler + '名</div>' +
									this.trueNameInput.getDom() +
									'<div class="star">*</div>' +
								'</div>' +

								'<div class="row">' +
									'<div class="text">推广码</div>' +
									this.popularInput.getDom() +
								'</div>' +

								'<div class="row verify-row">' +
									'<div class="text">验证码</div>' +

									this.verifyInput.getDom() +

									'<img class="verify-code" src="' + app.urls.verifyImage + '">' +
									
									'<span class="change-verify-code">换一个</span>' +
								'</div>' +

								'<div class="row agree-row">' +
									'<div class="agree">' +
										'<input type="checkbox" id="remember-checkbox" checked="checked">' +
										'<label for="remember-checkbox">我已届满合法博彩年龄，且同意各项开户条约</label>' +
									'</div>' +
								'</div>' +

								'<div class="row button-row">' +
									'<div class="button register">' +
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
		if (this.userNameInput.isPass() && 
			this.passwordInput.isPass() &&
			this.comfirmPasswordInput.isPass() &&
			this.emailInput.isPass() &&
			this.phoneInput.isPass() &&
			this.trueNameInput.isPass() &&
			this.verifyInput.isPass()) {

			this.zone.find('.register').addClass('active');
			this.allPass = true;
		} else {
			this.zone.find('.register').removeClass('active');
			this.allPass = false;
		}
	};

    SignUp.prototype.createLoader = function() {
        var wrapper = this.zone.find('.dialog')[0];
        this.loader = new Loader(wrapper);
    };

	SignUp.prototype.commit = function () {
		var that = this;
		var url = app.urls.checkVerifyImage + 'securityCode=' + this.verifyInput.getValue();

		if (!this.allPass) {
			return;
		}

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
        	if (!json || json == 'false') {
        		that.loader.stop();
        		that.zone.find('.change-verify-code').click();
        		alert('验证码错误');
        		return;
        	}

        	that.zone.find('.change-verify-code').click();
        	that.register();
        }).fail(function (xhr, testStatus, error) {
            alert(error);
        });
	};

	SignUp.prototype.register = function () {
		var data;
		var callback;
		var that = this;

		callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				alert(json.Message);
				return;
			}

			that.loader.stop();
			that.hide();
			app.header.showSignedInHeader();
			app.signedIn = true;
		};

		data = {
			UserName: this.userNameInput.getValue(),
			Password: this.passwordInput.getValue(),
			TrueName: this.trueNameInput.getValue(),
			ExtendCode: this.popularInput.getValue() || '',
			Phone: this.phoneInput.getValue(),
			Email: this.emailInput.getValue()
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
        	that.loader.stop();

        	if (json.StatusCode && json.StatusCode !== 0) {
        		alert(json.Message);
        		return;
        	}

        	app.userinfo = json;
        	app.userinfo.trueName = '王小四';
            callback(json);
        }).fail(function(xhr, textStatus, error) {
            alert('register request failed');
        });
	};

	SignUp.prototype.bindEvents = function () {
		var close;
		var button;
		var that  = this;

		this.zone = $('.sign-up');
		close     = this.zone.find('.close');
		button    = this.zone.find('.register');

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

		this.userNameInput.bindEvents(this.checkInputPass.bind(this));
		this.passwordInput.bindEvents(this.checkInputPass.bind(this));
		this.comfirmPasswordInput.bindEvents(this.checkInputPass.bind(this));
		this.emailInput.bindEvents(this.checkInputPass.bind(this));
		this.phoneInput.bindEvents(this.checkInputPass.bind(this));
		this.trueNameInput.bindEvents(this.checkInputPass.bind(this));
		this.popularInput.bindEvents(this.checkInputPass.bind(this));
		this.verifyInput.bindEvents(this.checkInputPass.bind(this));
	};

	window.SignUp = SignUp;
}());
