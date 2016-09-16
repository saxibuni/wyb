(function(){
	function SetEmailDialog(opt){
		IMDialog.call(this, opt || {});
		this.initDom();
	}

	SetEmailDialog.prototype = new IMDialog();

	SetEmailDialog.prototype.initDom = function(){
		this.step1PhonenumberInput = new Input({
			id: 'sed-step1-phonenumber-input',
			width: 220,
			height: 30
		});

		this.step1VerifyInput = new Input({
			id: 'sed-step1-verify-input',
			width: 100,
			height: 30
		});

		this.step1VerifyCodeButton = new Button({
			id: 'sed-step1-verify-code-button',
			name: '获取验证码',
			width: 100,
			height: 30
		});

		this.step1OkButton = new Button({
			id: 'sed-step1-ok-button',
			name: '下一步',
			width: 128,
			height: 42
		});

		this.step1CancelButton = new Button({
			id: 'sed-step1-cancel-button',
			name: '取消',
			width: 128,
			height: 42
		});

		this.step2PhonenumberInput = new Input({
			id: 'sed-step2-phonenumber-input',
			width: 220,
			height: 30
		});

		this.step2VerifyInput = new Input({
			id: 'sed-step2-verify-input',
			width: 100,
			height: 30
		});

		this.step2VerifyCodeButton = new Button({
			id: 'sed-step2-verify-code-button',
			name: '获取验证码',
			width: 100,
			height: 30
		});

		this.step2OkButton = new Button({
			id: 'sed-step2-ok-button',
			name: '下一步',
			width: 128,
			height: 42
		});

		this.step2CancelButton = new Button({
			id: 'sed-step2-cancel-button',
			name: '取消',
			width: 128,
			height: 42
		});

		this.step3Button = new Button({
			id: 'sed-step3-button',
			name: '完成',
			width: 128,
			height: 42
		});

		var temp = '<div class="set-email-dialog">' +
						'<div class="dialog-wrapper">' +
							'<div class="dialog">' +
								'<div class="row1">' +
									'<ul class="steps">' +
										'<li data-value="conten1" class="step step1 active">' +
											'<span>1、验证邮箱</span>' +
										'</li>' +
										'<li data-value="conten2" class="step step2">' +
											'<span>2、绑定新邮箱</span' +
										'</li>' +
										'<li data-value="conten3" class="step step3">' +
											'<span>3、完成</span' +
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
														this.step1PhonenumberInput.getDom() +
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
														this.step2PhonenumberInput.getDom() +
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
								'</div>'
							'</div>' +
						'</div>' +
					'</div>' +

					'<div class="overlay overlay5"></div>';

		this.el = temp;
	};

	SetEmailDialog.prototype.getDom = function(){
		return this.el;
	};

	SetEmailDialog.prototype.show = function(){
		this.showOverlay();
	};

	SetEmailDialog.prototype.hide = function(){
		this.hideOverlay();
	};

	SetEmailDialog.prototype.bindEvents = function(){
		var steps;
		var contentName;
		var that = this;

		this.zone = $('.set-email-dialog');
		
		this.zone.find('#sed-step1-ok-button').click(function () {
			that.zone.find('.content').hide();
			that.zone.find('.content2').show();
			that.zone.find('.step').removeClass('active');
			that.zone.find('.step2').addClass('active');
		});

		this.zone.find('#sed-step1-cancel-button').click(function () {
			that.hide();
		});

		this.zone.find('#sed-step2-ok-button').click(function () {
			that.zone.find('.content').hide();
			that.zone.find('.content3').show();
			that.zone.find('.step').removeClass('active');
			that.zone.find('.step3').addClass('active');
		});

		this.zone.find('#sed-step2-cancel-button').click(function () {
			that.zone.find('.content').hide();
			that.zone.find('.content1').show();
			that.zone.find('.step').removeClass('active');
			that.zone.find('.step1').addClass('active');
		});

		this.zone.find('#sed-step3-button').click(function () {
			that.hide();
		});

		this.step1PhonenumberInput.bindEvents();
		this.step1VerifyInput.bindEvents();
		this.step1VerifyCodeButton.bindEvents();
		this.step1OkButton.bindEvents();
		this.step1CancelButton.bindEvents();
		this.step2PhonenumberInput.bindEvents();
		this.step2VerifyInput.bindEvents();
		this.step2VerifyCodeButton.bindEvents();
		this.step2OkButton.bindEvents();
		this.step2CancelButton.bindEvents();
		this.step3Button.bindEvents();

        this.bindOverlayEvents();
	};

	window.SetEmailDialog = SetEmailDialog;

}());