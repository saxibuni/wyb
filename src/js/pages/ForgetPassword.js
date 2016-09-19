(function () {
	function ForgetPassword () {
		this.initDom();
	}
	
	ForgetPassword.prototype.initDom = function () {
		var temp;

		this.usernameInput = new Input({
			id: 'forget-password-step1-input1',
			width: 200,
			height: 30,
			placeholder: '请输入您的用户名',
			reg: app.usernameReg
		});

		this.verifyInput = new Input({
			id: 'forget-password-step1-input2',
			width: 137,
			height: 30,
			placeholder: '请输入右侧验证码',
			reg: app.verifyReg
		});

		this.mailInput = new Input({
			id: 'mail-input',
			width: 250,
			height: 30,
			placeholder: '请输入您的邮箱',
			reg: app.emailReg
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

		this.mailVerifyInput = new Input({
			id: 'mail-verify-input',
			width: 120,
			height: 30,
			placeholder: '请输入邮箱验证码',
			reg: app.emailVerifyCode
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
										'<img class="verify-img" src="../img/verify-code.png">' +
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
										'<img class="mailimg left" src="../img/t08.png">' +
										'<span class="text left">通过邮箱找回登录密码</span>' +
										'<span class="text right not-bind">(未绑定，不可用)</span>' +
										this.step2Next.getDom() +
										'<div class="clear"></div>' +
									'</div>' +

									'<div class="row3">' +
										'<span>上面的方式都不可用？您还可以通过</span>' +
										'<span class="contactcs">在线客服</span>' +
										'<span>进行人工申诉找回登录密码。</span>' +
									'</div>' +
								'</div>' +

								'<div class="step step3">' +
									'<div class="row1">' +
										this.mailInput.getDom() +
									'</div>' +

									'<div class="row2">' +
										this.mailVerifyInput.getDom() +
										this.getMailVerifyCode.getDom() +
									'</div>' +

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

	ForgetPassword.prototype.bindEvents = function () {
		var titleUl;
		var that = this;

		this.zone = $('.forget-password');

		titleUl = this.zone.find('ul.title');

		this.zone.find('#forget-password-step1-next').click(function () {
			if (!$(this).addClass('active')) {
				return;
			}

			that.zone.find('.step').hide();
			that.zone.find('.step2').show()
			titleUl.find('li').removeClass('active');
			titleUl.find('li:eq(1)').addClass('active');
		})

		this.zone.find('#forget-password-step2-next').click(function () {
			if (!$(this).hasClass('active')) {
				return;
			}

			that.zone.find('.step').hide();
			that.zone.find('.step3').show()
			titleUl.find('li').removeClass('active');
			titleUl.find('li:eq(2)').addClass('active');
		})

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

		this.usernameInput.bindEvents(step1Callback.bind(this));
		this.verifyInput.bindEvents(step1Callback.bind(this));

		this.mailInput.bindEvents();
		this.newPwdInput.bindEvents();
		this.confirmPwdInput.bindEvents();
		this.mailVerifyInput.bindEvents();
		this.step1Next.bindEvents();
		this.step2Next.bindEvents();
		this.getMailVerifyCode.bindEvents();
		this.updatePwd.bindEvents();
		this.loginNow.bindEvents();


	};

	window.ForgetPassword = ForgetPassword;
}());
