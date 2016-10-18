(function () {
	function AgentSignup () {
		this.initDom();
	}
	
	AgentSignup.prototype.initDom = function () {
		var filler      = '&nbsp;&nbsp;&nbsp;&nbsp;';
		var inputWidth  = 300;
		var inputHeihgt = 30;

		this.userNameInput = new Input({
			id: 'agent-username-input',
			width: inputWidth,
			height: inputHeihgt,
			reg: app.usernameReg,
			placeholder: '用户名由3-12位数字和字母组成'
		});

		this.passwordInput = new Input({
			id: 'agent-password-input',
			width: inputWidth,
			height: inputHeihgt,
			reg: app.passwordReg,
			placeholder: '密码由6-12位数字和字母组成，不含字符',
			type: 'password'
		});

		this.comfirmPasswordInput = new Input({
			id: 'agent-comfirm-password-input',
			width: inputWidth,
			height: inputHeihgt,
			reg: app.passwordReg,
			placeholder: '请再次输入您的密码',
			type: 'password'
		});

		this.emailInput = new Input({
			id: 'agent-email-input',
			width: inputWidth,
			height: inputHeihgt,
			reg: app.emailReg,
			placeholder: '请输入您的邮箱地址'
		});

		this.phoneInput = new Input({
			id: 'agent-phone-input',
			width: inputWidth,
			height: inputHeihgt,
			reg: app.phoneNumberReg,
			placeholder: '请输入您的手机号码'
		});

		this.trueNameInput = new Input({
			id: 'agent-truename-input',
			width: inputWidth,
			height: inputHeihgt,
			reg: app.chineseNameReg,
			placeholder: '请输入您的真实姓名'
		});

		this.qqInput = new Input({
			id: 'agent-qq-input',
			width: inputWidth,
			height: inputHeihgt,
			reg: app.qqReg,
			placeholder: '请输入您的qq号'
		});

		this.urlInput = new Input({
			id: 'agent-url-input',
			width: inputWidth,
			height: inputHeihgt,
			reg: app.urlReg,
			placeholder: '输入您的网址时不必输入http://, 仅填写网址即可'
		});

		this.verifyInput = new Input({
			id: 'agent-vefiry-input',
			width: 150,
			height: 30,
			reg: app.verifyReg,
			placeholder: '请输入验证码'
		});

		var temp =	'<div class="page agent-signup">' +
						'<div class="wrapper">' +
							'<div class="up">' +
								'<div class="up-left">' +
									'<div class="title">基本信息</div>' +

									'<div class="input-array">' +
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

										'<div class="row  has-notice">' +
											'<div class="text">' + filler + 'qq</div>' +
											this.qqInput.getDom() +
										'</div>' +
									'</div>' +
								'</div>' +

								'<div class="up-right">' +
									'<div class="title">渠道信息</div>' +
									'<div class="input-array">' +
										'<div class="row">' +
											'<div class="text">您的网址</div>' +
											this.urlInput.getDom() +
										'</div>' +

										'<div class="row">' +
											'<div class="text">推广说明</div>' +
											'<textarea></textarea>' +
										'</div>' +
									'</div>' +
								'</div>' +
							'</div>' +
							'<div class="down">' +
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
									'<div class="button ok">' +
										'确认' +
									'</div>' +
									'<div class="button reset">' +
										'重设' +
									'</div>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>';
		
		this.el  = temp;
	};

	AgentSignup.prototype.getDom = function () {
		return this.el;
	};

	AgentSignup.prototype.show = function () {
		this.zone.fadeIn(500);
		this.clearInputs();
	};

	AgentSignup.prototype.hide = function () {
		this.zone.fadeOut(500);
	};

	AgentSignup.prototype.clearInputs = function () {
		this.userNameInput.setValue('');
		this.passwordInput.setValue('');
		this.comfirmPasswordInput.setValue('');
		this.emailInput.setValue('');
		this.phoneInput.setValue('');
		this.trueNameInput.setValue('');
		this.verifyInput.setValue('');
		this.qqInput.setValue('');
		this.urlInput.setValue('');
		this.zone.find('textarea').val('');
	};

	AgentSignup.prototype.checkInputPass = function () {
		if (this.userNameInput.isPass() && 
			this.passwordInput.isPass() &&
			this.comfirmPasswordInput.isPass() &&
			this.emailInput.isPass() &&
			this.phoneInput.isPass() &&
			this.trueNameInput.isPass() &&
			this.verifyInput.isPass()) {

			this.zone.find('.ok, .reset').addClass('active');
			this.allPass = true;
		} else {
			this.zone.find('.ok, .reset').removeClass('active');
			this.allPass = false;
		}
	};

    AgentSignup.prototype.createLoader = function() {
        var wrapper = this.zone.find('.dialog')[0];
        this.loader = new Loader(wrapper);
    };

	AgentSignup.prototype.commit = function () {
		var opt;
		var callback;
		var that = this;

		if (this.passwordInput.getValue() !== this.comfirmPasswordInput.getValue()) {
			alert('两次输入的密码不一致');
			return;
		}

		if (!this.allPass) {
			return;
		}

		this.loader.play();

		opt = {
			url: app.urls.checkVerifyImage + 'securityCode=' + this.verifyInput.getValue(),
			data: {}
		};

		callback = function (json) {
        	if (!json || json == 'false') {
        		that.loader.stop();
        		that.zone.find('.change-verify-code').click();
        		alert('验证码错误');
        		return;
        	}

        	that.zone.find('.change-verify-code').click();
        	that.verifyInput.setValue('');
        	that.register();
		};

		Service.get(opt, callback);
	};

	AgentSignup.prototype.register = function () {
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
			Phone: this.phoneInput.getValue(),
			Email: this.emailInput.getValue(),
			QQ: this.qqInput.getValue(),
			Domain: this.urlInput.getValue(),
			ExtendDesc: this.zone.find('textarea').val()
		};

        $.ajax({
            type: 'POST',
            url: app.urls.agentSignUp,
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

	AgentSignup.prototype.bindEvents = function () {
		var that = this;

		this.zone = $('.agent-signup');

		this.zone.find('.ok').click(function () {
			that.commit();
		});

		this.zone.find('.reset').click(function () {
			that.clearInputs();
		});

		this.createLoader();

		this.userNameInput.bindEvents(this.checkInputPass.bind(this));
		this.passwordInput.bindEvents(this.checkInputPass.bind(this));
		this.comfirmPasswordInput.bindEvents(this.checkInputPass.bind(this));
		this.emailInput.bindEvents(this.checkInputPass.bind(this));
		this.phoneInput.bindEvents(this.checkInputPass.bind(this));
		this.trueNameInput.bindEvents(this.checkInputPass.bind(this));
		this.verifyInput.bindEvents(this.checkInputPass.bind(this));
		this.qqInput.bindEvents();
		this.urlInput.bindEvents();
	};

	window.AgentSignup = AgentSignup;
}());
