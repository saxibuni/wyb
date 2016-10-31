(function () {
	function ForgetPassword () {
		this.initDom();
	}
	
	ForgetPassword.prototype.initDom = function () {
		var temp;

		this.usernameInput = new Input({
			id: 'forget-password-step1-input1',
			width: 330,
			height: 40,
			placeholder: '请输入您的用户名',
			reg: app.usernameReg
		});

		this.verifyInput = new Input({
			id: 'forget-password-step1-input2',
			width: 245,
			height: 40,
			placeholder: '请输入右侧验证码',
			reg: app.verifyReg
		});

		this.mailInput = new Input({
			id: 'mail-input',
			width: 330,
			height: 40,
			placeholder: '请输入您的邮箱',
			reg: app.emailReg,
			disabled: true
		});

		this.mailVerifyInput = new Input({
			id: 'mail-verify-input',
			width: 245,
			height: 40,
			placeholder: '请输入邮箱验证码',
			reg: app.emailVerifyCode
		});

		this.phoneInput = new Input({
			id: 'phone-input',
			width: 330,
			height: 40,
			placeholder: '请输入您的手机号码',
			reg: app.emailReg,
			disabled: true
		});

		this.phoneVerifyInput = new Input({
			id: 'phone-verify-input',
			width: 245,
			height: 40,
			placeholder: '请输入手机验证码',
			reg: app.emailVerifyCode
		});

		this.newPwdInput = new Input({
			id: 'new-password',
			width: 330,
			height: 40,
			placeholder: '请输入新密码',
			reg: app.passwordReg,
			type: 'password'
		});

		this.confirmPwdInput = new Input({
			id: 'comfirm-password',
			width: 330,
			height: 40,
			placeholder: '请再次输入新密码',
			reg: app.passwordReg,
			type: 'password'
		});

		this.step1Next = new Button({
			id: 'forget-password-step1-next',
			name: '下一步',
			width: 330,
			height: 40
		});

		this.step2Next = new Button({
			id: 'forget-password-step2-next',
			name: '下一步',
			width: 330,
			height: 40
		});

		this.getMailVerifyCode = new Button({
			id: 'get-mail-verify-code',
			name: '获取验证码',
			width: 140,
			height: 40
		});

		this.getPhoneVerifyCode = new Button({
			id: 'get-phone-verify-code',
			name: '获取验证码',
			width: 110,
			height: 40
		});

		this.updatePwd = new Button({
			id: 'update-pwd',
			name: '确认修改',
			width: 330,
			height: 40
		});

		this.loginNow = new Button({
			id: 'forget-password-login-now',
			name: '立即登录',
			width: 200,
			height: 40
		});

		temp =		'<div class="page forget-password">' +
						'<div class="wrapper">' +
							'<ul class="title">' +
								'<li class="active">' +
									'<span class="number">1</span>' +
									'<span class="text">输入用户名</span>' +
									'<span class="arrow">&gt;</span>' +
								'</li>' +

								'<li>' +
									'<span class="number">2</span>' +
									'<span class="text">选择找回密码方式</span>' +
									'<span class="arrow">&gt;</span>' +
								'</li>' +

								'<li>' +
									'<span class="number">3</span>' +
									'<span class="text">重置密码</span>' +
									'<span class="arrow">&gt;</span>' +
								'</li>' +

								'<li>' +
									'<span class="number">4</span>' +
									'<span class="text">完成</span>' +
								'</li>' +
							'</ul>' +

							'<div class="content">' +
								'<div class="step step1">' +
									'<div class="row1">' +
										'<span class="text">用户名：</span>' +
										this.usernameInput.getDom() +
									'</div>' +

									'<div class="row2">' +
										'<span class="text">验证码：</span>' +
										this.verifyInput.getDom() +
										'<img class="verify-code" src="' + app.urls.verifyImage + '">' +
									'</div>' +

									'<div class="row3">' +
										this.step1Next.getDom() +
									'</div>' +
								'</div>' +

								'<div class="step step2">' +
									'<div class="row1">' +
										'<span class="text">您正在找回登录密码的账号是：</span>' +
										'<span class="value username">helloworld</span>' +
										'<span class="text">。请选择您准备找回登录密码的方式</span>' +
									'</div>' +

									'<div class="row2">' +
										'<ul>' +
											'<li class="active">' +
												'<div class="info-zone">' +
													'<span class="pc-icon mailbox-icon left"></span>' +
													'<span class="text left">通过邮箱找回登录密码</span>' +
													'<span class="text right not-bind">(未绑定，不可用)</span>' +
													'<div class="clear"></div>' +
												'</div>' +

												'<div class="verify-zone">' +
													'<div class="line1">' +
														//this.mailInput.getDom() +
														'<span class="text">您的注册邮箱为:</span>' +
														'<span class="text email"></span>' +
													'</div>' +

													'<div class="line1-5">' +
														'验证码已成功发送到您的邮箱' +
													'</div>' +

													'<div class="line2">' +
														this.mailVerifyInput.getDom() +
														this.getMailVerifyCode.getDom() +
													'</div>' +
												'</div>' +
											'</li>' +

											'<li>' +
												'<div class="info-zone">' +
													'<span class="pc-icon phone-icon left"></span>' +
													'<span class="text left">通过手机找回登录密码</span>' +
													'<span class="text right not-bind">(未绑定，不可用)</span>' +
													'<div class="clear"></div>' +
												'</div>' +

												'<div class="verify-zone">' +
													'<div class="line1">' +
														//this.phoneInput.getDom() +
														'<span class="text">您的注册手机号为:</span>' +
														'<span class="text phone"></span>' +
													'</div>' +

													'<div class="line1-5">' +
														'验证码已成功发送到您的手机' +
													'</div>' +

													'<div class="line2">' +
														this.phoneVerifyInput.getDom() +
														this.getPhoneVerifyCode.getDom() +
													'</div>' +
												'</div>' +
											'</li>' +
										'</ul>' +

										'<div class="button-zone">' +
											this.step2Next.getDom() +
										'</div>' +
									'</div>' +

									'<div class="row3">' +
										'<span>上面的方式都不可用？您还可以通过</span>' +
										'<span class="contactcs">在线客服</span>' +
										'<span>进行人工申诉找回登录密码。</span>' +
									'</div>' +
								'</div>' +

								'<div class="step step3">' +
									'<div class="row3">' +
										'<span class="text">新密码</span>' +
										this.newPwdInput.getDom() +
									'</div>' +

									'<div class="row4">' +
										'<span class="text">新密码</span>' +
										this.confirmPwdInput.getDom() +
									'</div>' +

									'<div class="row5">' +
										this.updatePwd.getDom() +
									'</div>' +
								'</div>' +

								'<div class="step step4">' +
									'<div class="row1">' +
										'<span class="text">恭喜您，密码重置成功!</span>' +
									'</div>' +

									'<div class="row2">' +
										this.loginNow.getDom() +
									'</div>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>';
		
		this.el  = temp;
	};

	ForgetPassword.prototype.getDom = function () {
		return this.el;
	};

	ForgetPassword.prototype.show = function () {
		this.reset();
		this.zone.show();
	};

	ForgetPassword.prototype.hide = function () {
		this.zone.hide();
	};

	ForgetPassword.prototype.reset = function () {
		this.goToStep1();
		this.mailInput.setValue('');
		this.phoneInput.setValue('');
		this.verifyInput.setValue('');
		this.phoneVerifyInput.setValue('');
		this.mailVerifyInput.setValue('');
	};

	ForgetPassword.prototype.goToStep1 = function () {
		var titleUl = this.zone.find('ul.title');
		this.zone.find('.step').hide();
		this.zone.find('.step1').show()
		titleUl.find('li').removeClass('active');
		titleUl.find('li:eq(0)').addClass('active');
	};

	ForgetPassword.prototype.goToStep2 = function () {
		var titleUl = this.zone.find('ul.title');
		this.zone.find('.step').hide();
		this.zone.find('.step2').show()
		titleUl.find('li').removeClass('active');
		titleUl.find('li:eq(1)').addClass('active');
	};

	ForgetPassword.prototype.goToStep3 = function () {
		var titleUl = this.zone.find('ul.title');
		this.zone.find('.step').hide();
		this.zone.find('.step3').show()
		titleUl.find('li').removeClass('active');
		titleUl.find('li:eq(2)').addClass('active');
	};

	ForgetPassword.prototype.goToStep4 = function () {
		var titleUl = this.zone.find('ul.title');
		this.zone.find('.step').hide();
		this.zone.find('.step4').show()
		titleUl.find('li').removeClass('active');
		titleUl.find('li:eq(3)').addClass('active');
	};

	ForgetPassword.prototype.checkStep1 = function () {
		var callback;
		var opt;
		var userName;
		var that = this;

		opt =  {
			url: app.urls.checkVerifyImage,
			data: {
				securityCode: this.verifyInput.getValue()
			}
		};

		callback = function (data) {
			that.zone.find('.verify-code').click();

			if (!data) {
				alert('验证码错误');
				return;
			}

			userName = that.usernameInput.getValue();
			that.checkUserName(userName);
		};

		Service.get(opt, callback);
	};

	ForgetPassword.prototype.checkUserName = function (userName) {
		var callback;
		var that    =  this;
		var titleUl =  this.zone.find('ul.title');
		var opt     =  {
			url: app.urls.getInfoByUserName,
			data: {
				userName: userName
			}
		};

		callback = function (data) {
        	if (data.StatusCode && data.StatusCode !== 0) {
        		alert(data.Message);
        		return;
        	}

			that.userinfo = data;
			that.zone.find('.step2 .email').text(that.userinfo.Email);
			that.zone.find('.step2 .phone').text(that.userinfo.Phone);

			that.zone.find('.step2 .row1 .username').text(userName);
			that.zone.find('.step').hide();
			that.zone.find('.step2').show()
			titleUl.find('li').removeClass('active');
			titleUl.find('li:eq(1)').addClass('active');
		};

		Service.get(opt, callback);
	};
/*
	ForgetPassword.prototype.getPhoneValidateCode = function (phone) {
		var opt;
		var callback;
		var that = this;

		opt = {
			url: app.urls.sendEmailValidateCode,
			data: {
				phone: phone
			}
		};

		callback = function (data) {
			if (data === true) {
				that.zone.find('.step2 ul li.active .line1-5').show();
			}
		};

		Service.post(opt, callback);
	};
*/
	ForgetPassword.prototype.getValidateCode = function (type, param) {
		var opt;
		var callback;
		var that = this;

		opt = {
			url: app.urls.getForgetPwdValidateCode,
			data: {
				ValidateType: type
			}
		};

		callback = function (data) {
			if (data === true) {
				that.zone.find('.step2 ul li.active .line1-5').show();
			} else {
				alert(data.Message);
			}
		};

		Service.post(opt, callback);
	};

	ForgetPassword.prototype.step2Commit = function () {
		var opt;
		var value1;
		var value2;
		var callback;
		var step2Ul = this.zone.find('.step2 ul');
		var lis     = step2Ul.children('li');
		var that    = this;
		var titleUl = this.zone.find('ul.title');

		if ($(lis[0]).hasClass('active')) {
			value1 = this.userinfo.Email;
			value2 = this.mailVerifyInput.getValue();
			this.verifyType = 'email';
			this.verifyCode = value2;

			if (!value2) {
				return;
			}

			callback = function (data) {
				if (data.StatusCode !== 0) {
					alert(data.Message);
					return;
				}

				that.zone.find('.step').hide();
				that.zone.find('.step3').show();
				titleUl.find('li').removeClass('active');
				titleUl.find('li:eq(2)').addClass('active');
			};

			opt  =  {
				url: app.urls.validateEmail,
				data: {
					Email: value1,
					EmailValidateCode: value2
				}
			};
		} else {
			value1 = this.userinfo.Phone;
			value2 = this.phoneVerifyInput.getValue();
			this.verifyType = 'phone';
			this.verifyCode = value2;

			if (!(value1 && value2)) {
				return;
			}

			callback = function (data) {
				if (data.StatusCode !== 0) {
					alert(data.Message);
					return;
				}

				that.zone.find('.step').hide();
				that.zone.find('.step3').show();
				titleUl.find('li').removeClass('active');
				titleUl.find('li:eq(2)').addClass('active');
			};

			opt  =  {
				url: app.urls.validatePhone,
				data: {
					Phone: value1,
					PhoneValidateCode: value2
				}
			};
		}

		Service.post(opt, callback);
	};

	ForgetPassword.prototype.changePassword = function () {
		var opt;
		var callback;
		var that = this;
		var titleUl = this.zone.find('ul.title');

		callback = function (data) {
			if (data !== true) {
				alert('修改失败');
				return;
			}
			
			that.zone.find('.step').hide();
			that.zone.find('.step4').show()
			titleUl.find('li').removeClass('active');
			titleUl.find('li:eq(3)').addClass('active');
		};

		opt = {
			url: app.urls.changePasswordByForget,
			data: {
				UserName: this.userName,
				NewPassword: this.newPwdInput.getValue(),
				ConfirmPassword: this.confirmPwdInput.getValue()
			}
		};

		if (this.verifyType === 'email') {
			opt.data.EmailValidateCode = this.verifyCode;
		} else {
			opt.data.PhoneValidateCode = this.verifyCode;
		}

		Service.post(opt, callback);
	};

	ForgetPassword.prototype.bindEvents = function () {
		var userName;
		var email;
		var phone;
		var titleUl;
		var callback;
		var step2;
		var that = this;

		this.zone = $('.forget-password');

		titleUl = this.zone.find('ul.title');

		this.zone.find('#forget-password-step1-next').click(function () {
			if (!$(this).addClass('active')) {
				return;
			}
			that.checkStep1();
		});

		this.zone.find('.step2 .row2 ul li .info-zone').click(function () {
			that.zone.find('.step2 .row2 ul li').removeClass('active');
			$(this).parent('li').addClass('active');
			that.zone.find('.step2 .row2 ul li .verify-zone').hide();
			$(this).next('.verify-zone').show();
		});

		this.zone.find('#forget-password-step2-next').click(function () {
			that.step2Commit();
		});

		this.zone.find('#update-pwd').click(function () {
			that.changePassword();
		});

		this.zone.find('#forget-password-login-now').click(function () {
			app.router.setRoute('/homePage');

			if (!app.signInDialog) {
				app.signInDialog = new SignIn();
				$('.app').append(app.signInDialog.getDom());
				app.signInDialog.bindEvents();
			}

			titleUl.find('li').removeClass('active');
			titleUl.find('li:eq(0)').addClass('active');
			that.zone.find('.step').hide();
			that.zone.find('.step1').show()

			app.signInDialog.show();
		});

		var step1Callback = function () {
			if (that.usernameInput.isPass() && that.verifyInput.isPass()) {
				that.zone.find('#forget-password-step1-next').addClass('active');
			} else {
				that.zone.find('#forget-password-step1-next').removeClass('active');
			}
		};

		this.zone.find('.verify-code').click(function () {
            $(this).attr('src', 
            	app.urls.verifyImage + '?sid=' + Math.random()
            );
		});

		this.zone.find('.contactcs').click(function () {
			window.open(app.liveCsUrl);
		});

		this.zone.find('#get-mail-verify-code').click(function () {
			//email = that.mailInput.getValue();
			//that.getEmailValidateCode(email);
			that.getValidateCode('Email');
		});

		this.zone.find('#get-phone-verify-code').click(function () {
			//phone = that.phoneInput.getValue();
			//that.getPhoneValidateCode(phone);
			that.getValidateCode('Mobile');
		});

		this.usernameInput.bindEvents(step1Callback.bind(this));
		this.verifyInput.bindEvents(step1Callback.bind(this));

		this.mailInput.bindEvents();
		this.mailVerifyInput.bindEvents();
		this.phoneInput.bindEvents();
		this.phoneVerifyInput.bindEvents();
		this.newPwdInput.bindEvents();
		this.confirmPwdInput.bindEvents();
		this.step1Next.bindEvents();
		this.step2Next.bindEvents();
		this.getMailVerifyCode.bindEvents();
		this.getPhoneVerifyCode.bindEvents();
		this.updatePwd.bindEvents();
		this.loginNow.bindEvents();
	};

	window.ForgetPassword = ForgetPassword;
}());
