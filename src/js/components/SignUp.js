(function () {
	function SignUp (opt) {
		IMDialog.call(this, opt || {});
		this.initDom();
	}
	
	SignUp.prototype = new IMDialog();

	SignUp.prototype.initDom = function () {
		var filler = '&nbsp;&nbsp;&nbsp;&nbsp;';
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
			id: 'sign-up-vefiry-input',
			width: 150,
			height: 30,
			reg: app.verifyReg,
			placeholder: '请输入验证码'
		});

		var temp =	'<div class="sign-up">' +
						'<div class="dialog-wrapper">' +
							'<div class="dialog">' +
								'<div class="row1">' +
									'<div class="icon logo-icon-small"></div>' +
									'<div class="close">×</div>' +
								'</div>' +

								'<div class="row">' +
									'<div class="text">用户名</div>' +
									this.userNameInput.getDom() +
								'</div>' +

								'<div class="row">' +
									'<div class="text">密' + filler + '码</div>' +
									this.passwordInput.getDom() +
								'</div>' +

								'<div class="row">' +
									'<div class="text">&nbsp;</div>' +
									this.comfirmPasswordInput.getDom() +
								'</div>' +

								'<div class="row has-notice">' +
									'<div class="text">邮' + filler + '箱</div>' +
									this.emailInput.getDom() +
									'<div class="error-notice">' +
										'<span class="star">*</span>' +
										'<span>电子邮箱是您找回密码的重要途径,请填写您的常用邮箱</span>' +
									'</div>' +
								'</div>' +

								'<div class="row  has-notice">' +
									'<div class="text">手机号</div>' +
									this.phoneInput.getDom() +
									'<div class="error-notice">' +
										'<span class="star">*</span>' +
										'<span>手机号是您找回密码的重要途径,请填写您的常用邮箱</span>' +
									'</div>' +
								'</div>' +

								'<div class="row  has-notice">' +
									'<div class="text">姓' + filler + '名</div>' +
									this.trueNameInput.getDom() +
									'<div class="error-notice">' +
										'<span class="star">*</span>' +
										'<span>姓名关系到您是否能投注，请填写您的真实姓名</span>' +
									'</div>' +
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
		this.zone.find('.change-verify-code').click();
	};

	SignUp.prototype.hide = function () {
		this.hideOverlay();
		this.clearInputs();
	};

	SignUp.prototype.clearInputs = function () {
		this.userNameInput.setValue('');
		this.passwordInput.setValue('');
		this.comfirmPasswordInput.setValue('');
		this.emailInput.setValue('');
		this.phoneInput.setValue('');
		this.trueNameInput.setValue('');
		this.popularInput.setValue('');
		this.verifyInput.setValue('');
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
		var opt;
		var callback;
		var that = this;

		if (this.passwordInput.getValue() !== this.comfirmPasswordInput.getValue()) {
			alert('两次输入的密码不一致');
			that.zone.find('.register').removeClass('active');
			return;
		}

		if (!this.allPass) {
			that.zone.find('.register').removeClass('active');
			return;
		}

		this.loader.play();

		opt = {
			url: app.urls.checkVerifyImage + 'securityCode=' + this.verifyInput.getValue(),
			data: {}
		}

		callback = function (json) {
        	if (!json || json == 'false') {
        		that.loader.stop();
        		that.zone.find('.change-verify-code').click();
        		alert('验证码错误');
        		that.zone.find('.register').removeClass('active');
        		return;
        	}

        	that.zone.find('.change-verify-code').click();
        	that.verifyInput.setValue('');
        	that.register();
		};

		Service.get(opt, callback);
	};

	SignUp.prototype.register = function () {
		var data;
		var callback;
		var that = this;

		callback = function (json) {
			that.loader.stop();

			if (json.StatusCode && json.StatusCode != 0) {
				alert(json.Message);
				that.zone.find('.register').removeClass('active');
				return;
			}

			app.signedInProcedures();
			that.hide();
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
