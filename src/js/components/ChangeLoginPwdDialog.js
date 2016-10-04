(function () {
	function ChangeLoginPwdDialog(opt){
		IMDialog.call(this, opt || {});
		this.initDom();
	}

	ChangeLoginPwdDialog.prototype = new IMDialog();
	
	ChangeLoginPwdDialog.prototype.initDom = function () {
		var temp;

		this.mailInput = new Input({
			id: 'clp-mail-input',
			width: 280,
			height: 30,
			placeholder: '请输入您的邮箱',
			reg: app.emailReg
		});

		this.mailVerifyInput = new Input({
			id: 'clp-mail-verify-input',
			width: 150,
			height: 30,
			placeholder: '请输入邮箱验证码',
			reg: app.emailVerifyCode
		});

		this.phoneInput = new Input({
			id: 'clp-phone-input',
			width: 280,
			height: 30,
			placeholder: '请输入您的手机号码',
			reg: app.emailReg
		});

		this.phoneVerifyInput = new Input({
			id: 'clp-phone-verify-input',
			width: 150,
			height: 30,
			placeholder: '请输入手机验证码',
			reg: app.emailVerifyCode
		});

		this.oldPwdInput = new Input({
			id: 'clp-old-password',
			width: 250,
			height: 30,
			placeholder: '请输入旧密码',
			reg: app.passwordReg,
			type: 'password'
		});

		this.newPwdInput = new Input({
			id: 'clp-new-password',
			width: 250,
			height: 30,
			placeholder: '请输入新密码',
			reg: app.passwordReg,
			type: 'password'
		});

		this.confirmPwdInput = new Input({
			id: 'clp-comfirm-password',
			width: 250,
			height: 30,
			placeholder: '请再次输入新密码',
			reg: app.passwordReg,
			type: 'password'
		});

		this.step2Next = new Button({
			id: 'clp-step2-next',
			name: '下一步',
			width: 70,
			height: 30
		});

		this.getMailVerifyCode = new Button({
			id: 'clp-get-mail-verify-code',
			name: '获取邮箱验证码',
			width: 110,
			height: 33
		});

		this.getPhoneVerifyCode = new Button({
			id: 'clp-get-phone-verify-code',
			name: '获取手机验证码',
			width: 110,
			height: 33
		});

		this.updatePwd = new Button({
			id: 'clp-update-pwd',
			name: '确认修改',
			width: 130,
			height: 30
		});

		this.ok = new Button({
			id: 'clp-ok',
			name: '完成',
			width: 130,
			height: 30
		});

		var temp = '<div class="change-login-pwd-dialog">' +
						'<div class="dialog-wrapper">' +
							'<div class="dialog">' +
								'<ul class="title">' +
									'<li class="active">' +
										'<div class="li-wrapper">' +
											'<span class="number">1</span>' +
											'<span class="text">选择修改密码</span>' +
										'</div>' +
									'</li>' +

									'<li>' +
										'<div class="li-wrapper">' +
											'<span class="number">2</span>' +
											'<span class="text">重置密码</span>' +
										'</div>' +
									'</li>' +

									'<li>' +
										'<div class="li-wrapper">' +
											'<span class="number">3</span>' +
											'<span class="text">完成</span>' +
										'</div>' +
									'</li>' +
								'</ul>' +

								'<div class="content">' +
									'<div class="step step2">' +
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
									'</div>' +

									'<div class="step step3">' +
										'<div class="row2">' +
											this.oldPwdInput.getDom() +
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
											this.ok.getDom() +
										'</div>' +
									'</div>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>' +

					'<div class="overlay overlay5"></div>';

		this.el = temp;
	};

	ChangeLoginPwdDialog.prototype.getDom = function () {
		return this.el;
	};

	ChangeLoginPwdDialog.prototype.show = function(){
		this.showOverlay();
	};

	ChangeLoginPwdDialog.prototype.hide = function(){
		this.hideOverlay();
	};

	ChangeLoginPwdDialog.prototype.getEmailValidateCode = function (email) {
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
			if (data === true) {
				that.zone.find('.step2 ul li.active .line1-5').show();
			} else {
				alert(data.Message);
			}
		};

		Service.post(opt, callback);
	};

	ChangeLoginPwdDialog.prototype.getPhoneValidateCode = function (phone) {
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
			debugger
			if (data === true) {
				that.zone.find('.step2 ul li.active .line1-5').show();
			}
		};

		Service.post(opt, callback);
	};

	ChangeLoginPwdDialog.prototype.step2Commit = function () {
		var opt;
		var value1;
		var value2;
		var callback;
		var step2Ul = this.zone.find('.step2 ul');
		var lis     = step2Ul.children('li');
		var that    = this;
		var titleUl = this.zone.find('ul.title');

		if ($(lis[0]).hasClass('active')) {
			value1 = this.mailInput.getValue();
			value2 = this.mailVerifyInput.getValue();
			this.verifyType = 'email';
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
				url: app.urls.validateEmail,
				data: {
					Email: value1,
					EmailValidateCode: value2,
					UserId: app.userinfo.userId
				}
			};
		} else {
			value1 = this.phoneInput.getValue();
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

	ChangeLoginPwdDialog.prototype.changePassword = function () {
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
			url: app.urls.changeLoginPassword,
			data: {
				UserName: app.userinfo.UserName,
				NewPassword: this.newPwdInput.getValue(),
				ConfirmPassword: this.confirmPwdInput.getValue(),
				ValidateType: this.verifyType
			}
		};

		if (this.verifyType === 'email') {
			opt.data.EmailValidateCode = this.verifyCode;
		} else {
			opt.data.PhoneValidateCode = this.verifyCode;
		}

		Service.post(opt, callback);
	};

	ChangeLoginPwdDialog.prototype.bindEvents = function () {
		var userName;
		var email;
		var phone;
		var titleUl;
		var callback;
		var step2;
		var that = this;

		this.zone = $('.change-login-pwd-dialog');

		titleUl = this.zone.find('ul.title');

		this.zone.find('.step2 .row2 ul li .info-zone').click(function () {
			that.zone.find('.step2 .row2 ul li').removeClass('active');
			$(this).parent('li').addClass('active');
			that.zone.find('.step2 .row2 ul li .verify-zone').hide();
			$(this).next('.verify-zone').show();
		});

		this.zone.find('#clp-step2-next').click(function () {
			that.step2Commit();
		});

		this.zone.find('#clp-update-pwd').click(function () {
			that.changePassword();
		});

		this.zone.find('#clp-ok').click(function () {
			that.hide();
		});

		this.zone.find('.verify-code').click(function () {
            $(this).attr('src', 
            	app.urls.verifyImage + '?sid=' + Math.random()
            );
		});

		this.zone.find('#clp-get-mail-verify-code').click(function () {
			email = that.mailInput.getValue();
			that.getEmailValidateCode(email);
		});

		this.zone.find('#clp-get-phone-verify-code').click(function () {
			phone = that.phoneInput.getValue();
			that.getPhoneValidateCode(phone);
		});

		this.mailInput.bindEvents();
		this.mailVerifyInput.bindEvents();
		this.phoneInput.bindEvents();
		this.phoneVerifyInput.bindEvents();
		this.oldPwdInput.bindEvents();
		this.newPwdInput.bindEvents();
		this.confirmPwdInput.bindEvents();
		this.step2Next.bindEvents();
		this.getMailVerifyCode.bindEvents();
		this.getPhoneVerifyCode.bindEvents();
		this.updatePwd.bindEvents();
		this.ok.bindEvents();
		this.bindOverlayEvents();
	};

	window.ChangeLoginPwdDialog = ChangeLoginPwdDialog;
}());
