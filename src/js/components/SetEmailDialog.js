(function(){
	function SetEmailDialog(opt){
		IMDialog.call(this, opt || {});
		this.initDom();
	}

	SetEmailDialog.prototype = new IMDialog();

	SetEmailDialog.prototype.initDom = function(){
		this.step1EmailInput = new Input({
			id: 'sed-step1-email-input',
			width: 330,
			height: 40,
			reg: app.emailReg,
			disabled: true
		});

		this.step1VerifyInput = new Input({
			id: 'sed-step1-verify-input',
			width: 165,
			height: 40,
			reg: app.verifyReg
		});

		this.step1VerifyCodeButton = new Button({
			id: 'sed-step1-verify-code-button',
			name: '获取验证码',
			width: 140,
			height: 40
		});

		this.step1OkButton = new Button({
			id: 'sed-step1-ok-button',
			name: '下一步',
			width: 150,
			height: 40
		});

		this.step1CancelButton = new Button({
			id: 'sed-step1-cancel-button',
			name: '取消',
			width: 150,
			height: 40
		});

		this.step2EmailInput = new Input({
			id: 'sed-step2-email-input',
			width: 330,
			height: 40,
			reg: app.emailReg
		});

		this.step2VerifyInput = new Input({
			id: 'sed-step2-verify-input',
			width: 165,
			height: 40,
			reg: app.verifyReg
		});

		this.step2VerifyCodeButton = new Button({
			id: 'sed-step2-verify-code-button',
			name: '获取验证码',
			width: 140,
			height: 40
		});

		this.step2OkButton = new Button({
			id: 'sed-step2-ok-button',
			name: '下一步',
			width: 150,
			height: 40
		});

		this.step2CancelButton = new Button({
			id: 'sed-step2-cancel-button',
			name: '取消',
			width: 150,
			height: 40
		});

		this.step3Button = new Button({
			id: 'sed-step3-button',
			name: '完成',
			width: 150,
			height: 40
		});

		var temp = '<div class="set-email-dialog">' +
						'<div class="dialog-wrapper">' +
							'<div class="dialog">' +
								'<div class="title">验证电子邮箱</div>' +

								'<div class="row1">' +
									'<ul class="steps">' +
										'<li data-value="content1" class="step step1 active">' +
											'<span class="number">1</span>' +
											'<span class="text">验证邮箱</span>' +
											'<span class="arrow">&gt;</span>' +
										'</li>' +
										'<li data-value="content2" class="step step2">' +
											'<span class="number">2</span>' +
											'<span class="text">绑定邮箱</span>' +
											'<span class="arrow">&gt;</span>' +
										'</li>' +
										'<li data-value="content3" class="step step3">' +
											'<span class="number">3</span>' +
											'<span class="text">完成</span>' +
										'</li>' +
									'</ul>' +
								'</div>' +

								'<div class="row2">' +
									'<div class="content content1">' +
										'<table>' +
											'<tbody>' +
												'<tr>' +
													'<td class="text">' +
														'原有邮箱' +
													'</td>' +
													'<td>' +
														this.step1EmailInput.getDom() +
													'</td>' +
												'</tr>' +

												'<tr>' +
													'<td class="text">' +
														'验证码：' +
													'</td>' +
													'<td>' +
														this.step1VerifyInput.getDom() +
														this.step1VerifyCodeButton.getDom() +
													'</td>' +
												'</tr>' +
											'</tbody>' +
										'</table>' +

										'<div class="buttons">' +
											this.step1OkButton.getDom() +
											this.step1CancelButton.getDom() +
										'</div>' +
									'</div>' +

									'<div class="content content2">' +
										'<table>' +
											'<tbody>' +
												'<tr>' +
													'<td class="text">' +
														'新邮箱' +
													'</td>' +
													'<td>' +
														this.step2EmailInput.getDom() +
													'</td>' +
												'</tr>' +

												'<tr>' +
													'<td class="text">' +
														'验证码：' +
													'</td>' +
													'<td>' +
														this.step2VerifyInput.getDom() +
														this.step2VerifyCodeButton.getDom() +
													'</td>' +
												'</tr>' +
											'</tbody>' +
										'</table>' +

										'<div class="buttons">' +
											this.step2OkButton.getDom() +
											this.step2CancelButton.getDom() +
										'</div>' +
									'</div>' +

									'<div class="content content3">' +
										'<div class="success">' +
											'<div class="success-img">' +
												'<img src="../img/success.png">' +
											'</div>' +

											'<div class="success-info">' +
												'<p>恭喜您的邮箱绑定成功</p>' +
												'<p>您新绑定的邮箱为：</p>' +
												'<div class="success-phonenumber">194***324@qq.com</div>' +
											'</div>' +
										'</div>' +

										this.step3Button.getDom() +
									'</div>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>' +

					'<div class="overlay overlay5"></div>';

		this.el = temp;
	};

	SetEmailDialog.prototype.getDom = function(){
		return this.el;
	};

	SetEmailDialog.prototype.show = function() {
		this.resetDialog();
		this.showOverlay();
	};

	SetEmailDialog.prototype.hide = function() {
		this.hideOverlay();
	};

	SetEmailDialog.prototype.resetDialog = function() {
		this.step1EmailInput.setValue(app.userTotalInfo.Email);
		this.step1VerifyInput.setValue('');
		this.step2EmailInput.setValue('');
		this.step2VerifyInput.setValue('');
		this.step1VerifyCodeButton.setName('获取验证码');
		this.step2VerifyCodeButton.setName('获取验证码');
		this.zone.find('.content').hide();
		this.zone.find('.content1').show();
		this.zone.find('.step').removeClass('active');
		this.zone.find('.step1').addClass('active');

		if (!app.userTotalInfo.Email) {
			this.goToStep2();
		}
	};

	SetEmailDialog.prototype.getVerifyCode = function(step) {
		var opt;
		var email;
		var callback;
		var that = this;

		if (step == 1) {
			email = this.step1VerifyInput.getValue();
		} else {
			email = this.step2VerifyInput.getValue();
		}

		opt = {
			url: app.urls.sendEmailValidateCode,
			data: {
				email: email
			}
		};

		callback = function (data) {
			if (data === true) {
				if (step == 1) {
					that.step1VerifyCodeButton.setName('验证码已发送');
				} else {
					that.step2VerifyCodeButton.setName('验证码已发送');
				}
			} else {
				alert(data.Message);
			}
		};

		Service.post(opt, callback);
	};

	SetEmailDialog.prototype.commitStep1 = function() {
		var opt;
		var callback;
		var that  = this;

		opt = {
			url: app.urls.validateEmail,
			data: {
				Id: app.userTotalInfo.Id,
				Email: this.step1EmailInput.getValue(),
				EmailValidateCode: this.step1VerifyInput.getValue()
			}
		};

		callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				alert(json.Message);
				return;
			}

			if (json === true) {
				this.goToStep2();
			}
		};

		Service.post(opt, callback);
	};

	SetEmailDialog.prototype.commitStep2 = function() {
		var opt;
		var callback;
		var that  = this;

		opt = {
			url: app.urls.updateUserInfo,
			data: {
				Email: this.step2EmailInput.getValue(),
			}
		};

		callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				alert(json.Message);
				return;
			}

			if (json === true) {
				this.goToStep3();
			}
		};

		Service.post(opt, callback);
	};

	SetEmailDialog.prototype.goToStep1 = function() {
		this.zone.find('.content').hide();
		this.zone.find('.content2').show();
		this.zone.find('.step').removeClass('active');
		this.zone.find('.step1').addClass('active');
	};

	SetEmailDialog.prototype.goToStep2 = function() {
		this.zone.find('.content').hide();
		this.zone.find('.content2').show();
		this.zone.find('.step').removeClass('active');
		this.zone.find('.step2').addClass('active');
	};

	SetEmailDialog.prototype.goToStep3 = function() {
		this.zone.find('.content').hide();
		this.zone.find('.content3').show();
		this.zone.find('.step').removeClass('active');
		this.zone.find('.step3').addClass('active');
	};

	SetEmailDialog.prototype.bindEvents = function() {
		var steps;
		var contentName;
		var that = this;

		this.zone = $('.set-email-dialog');
		
		this.zone.find('#sed-step1-ok-button').click(function () {
			that.commitStep1();
		});

		this.zone.find('#sed-step1-cancel-button').click(function () {
			that.hide();
		});

		this.zone.find('#sed-step1-verify-code-button').click(function () {
			that.getVerifyCode(1);
		});

		this.zone.find('#sed-step1-verify-input input').focus(function () {
			that.step1VerifyCodeButton.setName('获取验证码');			
		});

		this.zone.find('#sed-step2-verify-input input').focus(function () {
			that.step2VerifyCodeButton.setName('获取验证码');			
		});

		this.zone.find('#sed-step2-ok-button').click(function () {
			that.commitStep2();
		});

		this.zone.find('#sed-step2-cancel-button').click(function () {
			if (app.userTotalInfo.Email) {
				that.goToStep1();
			} else {
				that.hide();
			}
		});

		this.zone.find('#sed-step2-verify-code-button').click(function () {
			that.getVerifyCode(2);
		});

		this.zone.find('#sed-step3-button').click(function () {
			that.hide();
		});

		this.step1EmailInput.bindEvents();
		this.step1VerifyInput.bindEvents();
		this.step1VerifyCodeButton.bindEvents();
		this.step1OkButton.bindEvents();
		this.step1CancelButton.bindEvents();
		this.step2EmailInput.bindEvents();
		this.step2VerifyInput.bindEvents();
		this.step2VerifyCodeButton.bindEvents();
		this.step2OkButton.bindEvents();
		this.step2CancelButton.bindEvents();
		this.step3Button.bindEvents();

        this.bindOverlayEvents();
	};

	window.SetEmailDialog = SetEmailDialog;
}());