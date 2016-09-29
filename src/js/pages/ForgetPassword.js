(function () {
	function ForgetPassword () {
		this.initDom();
	}
	
	ForgetPassword.prototype.initDom = function () {
		var temp;

		this.usernameInput = new Input({
			id: 'forget-password-step1-input1',
			width: 230,
			height: 30,
			placeholder: '请输入您的用户名',
			reg: app.usernameReg
		});

		this.verifyInput = new Input({
			id: 'forget-password-step1-input2',
			width: 150,
			height: 30,
			placeholder: '请输入右侧验证码',
			reg: app.verifyReg
		});

		this.mailInput = new Input({
			id: 'mail-input',
			width: 280,
			height: 30,
			placeholder: '请输入您的邮箱',
			reg: app.emailReg
		});

		this.mailVerifyInput = new Input({
			id: 'mail-verify-input',
			width: 150,
			height: 30,
			placeholder: '请输入邮箱验证码',
			reg: app.emailVerifyCode
		});

		this.phoneInput = new Input({
			id: 'phone-input',
			width: 280,
			height: 30,
			placeholder: '请输入您的手机号码',
			reg: app.emailReg
		});

		this.phoneVerifyInput = new Input({
			id: 'phone-verify-input',
			width: 150,
			height: 30,
			placeholder: '请输入手机验证码',
			reg: app.emailVerifyCode
		});

		this.newPwdInput = new Input({
			id: 'new-password',
			width: 250,
			height: 30,
			placeholder: '请输入新密码',
			reg: app.passwordReg
		});

		this.confirmPwdInput = new Input({
			id: 'comfirm-password',
			width: 250,
			height: 30,
			placeholder: '请再次输入新密码',
			reg: app.passwordReg
		});

		this.step1Next = new Button({
			id: 'forget-password-step1-next',
			name: '下一步',
			width: 128,
			height: 42
		});

		this.step2Next = new Button({
			id: 'forget-password-step2-next',
			name: '下一步',
			width: 70,
			height: 30
		});

		this.getMailVerifyCode = new Button({
			id: 'get-mail-verify-code',
			name: '获取邮箱验证码',
			width: 110,
			height: 33
		});

		this.getPhoneVerifyCode = new Button({
			id: 'get-phone-verify-code',
			name: '获取手机验证码',
			width: 110,
			height: 33
		});

		this.updatePwd = new Button({
			id: 'update-pwd',
			name: '确认修改',
			width: 130,
			height: 30
		});

		this.loginNow = new Button({
			id: 'forget-password-login-now',
			name: '立即登录',
			width: 130,
			height: 30
		});

		temp =		'<div class="page forget-password">' +
						'<div class="wrapper">' +
							'<ul class="title">' +
								'<li class="active">' +
									'<div class="li-wrapper">' +
										'<span class="number">1</span>' +
										'<span class="text">输入用户名</span>' +
									'</div>' +
								'</li>' +

								'<li>' +
									'<div class="li-wrapper">' +
										'<span class="number">2</span>' +
										'<span class="text">选择找回密码方式</span>' +
									'</div>' +
								'</li>' +

								'<li>' +
									'<div class="li-wrapper">' +
										'<span class="number">3</span>' +
										'<span class="text">重置密码</span>' +
									'</div>' +
								'</li>' +

								'<li>' +
									'<div class="li-wrapper">' +
										'<span class="number">4</span>' +
										'<span class="text">完成</span>' +
									'</div>' +
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
										'<span class="text">请选择您准备找回登录密码的方式</span>' +
									'</div>' +

									'<div class="row2">' +
										'<ul>' +
											'<li class="active">' +
												'<div class="info-zone">' +
													'<img class="mailimg left" src="../img/t08.png">' +
													'<span class="text left">通过邮箱找回登录密码</span>' +
													'<span class="text right not-bind">(未绑定，不可用)</span>' +
													'<div class="clear"></div>' +
												'</div>' +

												'<div class="verify-zone">' +
													'<div class="line1">' +
														this.mailInput.getDom() +
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
													'<img class="mailimg left" src="../img/t08.png">' +
													'<span class="text left">通过手机找回登录密码</span>' +
													'<span class="text right not-bind">(未绑定，不可用)</span>' +
													'<div class="clear"></div>' +
												'</div>' +

												'<div class="verify-zone">' +
													'<div class="line1">' +
														this.phoneInput.getDom() +
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
										this.newPwdInput.getDom() +
									'</div>' +

									'<div class="row4">' +
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
		this.zone.show();
	};

	ForgetPassword.prototype.hide = function () {
		this.zone.hide();
	};

	ForgetPassword.prototype.checkStep2 = function () {
		var passwordReg   = '^[A-Za-z0-9]{6,50}$';
	};

	ForgetPassword.prototype.checkStep3 = function () {
		
	};

	ForgetPassword.prototype.checkStep4 = function () {
		
	};

	ForgetPassword.prototype.checkUserName = function (userName) {
		var callback;
		var that    =  this;
		var titleUl =  this.zone.find('ul.title');
		var opt     =  {
			url: app.urls.checkUserName,
			data: {
				userName: userName
			}
		};

		callback = function (data) {
			if (!data) {
				return;
			}

			that.userName = userName;
			that.zone.find('.step2 .row1 .username').text(userName);
			that.zone.find('.step').hide();
			that.zone.find('.step2').show()
			titleUl.find('li').removeClass('active');
			titleUl.find('li:eq(1)').addClass('active');
		};

		Service.get(opt, callback);
	};

	ForgetPassword.prototype.step2Commit = function (param) {
		var opt;
		var callback;
		var step2Ul = this.zone.find('.step2 ul');
		var lis  = step2Ul.children('li');
		var that = this;

		if ($(lis[0]).hasClass('active')) {
			callback = function (data) {
				
			};

			opt  =  {
				url: app.urls.validateEmail,
				data: {
					email: param
				}
			};
		} else {
			callback = function (data) {
				
			};

			opt  =  {
				url: app.urls.validatePhone,
				data: {
					phone: param
				}
			};
		}

		Service.post(opt, callback);
	};

	ForgetPassword.prototype.getEmailValidateCode = function (email) {
		var opt;
		var callback;
		var that = this;

		opt = {
			url: app.urls.sendEmailValidateCode,
			data: {
				email: email
			}
		};

		callback = function (data) {
			debugger
			if (data === true) {
				that.zone.find('.step2 ul li.active .line1-5').show();
			}
		};

		Service.post(opt, callback);
	};

	ForgetPassword.prototype.getPhoneValidateCode = function (phone) {
		var opt;
		var callback;

		opt = {
			url: app.urls.sendEmailValidateCode,
			data: {
				phone: phone
			}
		};

		callback = function (data) {
			debugger
			if (data === true) {
				that.zone.find('.step2 ul li.active .line1-5').show();
			}
		};

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

			userName = that.usernameInput.getValue();
			that.checkUserName(userName);
		});

		this.zone.find('.step2 .row2 ul li .info-zone').click(function () {
			that.zone.find('.step2 .row2 ul li').removeClass('active');
			$(this).parent('li').addClass('active');
			that.zone.find('.step2 .row2 ul li .verify-zone').hide();
			$(this).next('.verify-zone').show();

		});

		this.zone.find('#forget-password-step2-next').click(function () {
			if (!$(this).hasClass('active')) {
				return;
			}

			that.step2Commit();
		});

		this.zone.find('#update-pwd').click(function () {
			that.zone.find('.step').hide();
			that.zone.find('.step4').show()
			titleUl.find('li').removeClass('active');
			titleUl.find('li:eq(3)').addClass('active');
		});

		this.zone.find('#login-now').click(function () {
			app.goTo('homePage');

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

		this.zone.find('#get-mail-verify-code').click(function () {
			email = that.mailInput.getValue();
			that.getEmailValidateCode(email);
		});

		this.zone.find('#get-phone-verify-code').click(function () {
			phone = that.phoneInput.getValue();
			that.getPhoneValidateCode(phone);
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
