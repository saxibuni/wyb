$(function(){
	function ChangeLoginPwdDialog(opt){
		IMDialog.call(this, opt || {});
		this.initDom();
	}

	ChangeLoginPwdDialog.prototype = new IMDialog();

	ChangeLoginPwdDialog.prototype.initDom = function() {
		var inputWidth  = 280;
		var inputHeihgt = 30;

		this.oldPasswordInput = new Input({
			id: 'clp-old-password-input',
			width: inputWidth,
			height: inputHeihgt,
			reg: app.passwordReg,
			placeholder: '请输入您的旧密码',
			type: 'password'
		});

		this.newPasswordInput = new Input({
			id: 'clp-new-password-input',
			width: inputWidth,
			height: inputHeihgt,
			reg: app.passwordReg,
			placeholder: '请输入您的新密码',
			type: 'password'
		});

		this.verifyPasswordInput = new Input({
			id: 'clp-verify-password-input',
			width: inputWidth,
			height: inputHeihgt,
			reg: app.passwordReg,
			placeholder: '请再次输入您的新密码',
			type: 'password'
		});

		var temp = '<div class="change-login-pwd-dialog">' +
						'<div class="dialog-wrapper">' +
							'<div class="dialog">' +
								'<div class="row0">' +
									'修改密码' +
								'</div>' +

								'<div class="row">' +
									'<span class="title">旧密码</span>' +
									this.oldPasswordInput.getDom() +
								'</div>' +

								'<div class="row">' +
									'<span class="title">新密码</span>' +
									this.newPasswordInput.getDom() +
								'</div>' +

								'<div class="row">' +
									'<span class="title">新密码</span>' +
									this.verifyPasswordInput.getDom() +
								'</div>' +

								'<div class="btn-row">' +
									'<div class="button ok">' +
										'确定' +
									'</div>' +
									'<div class="button cancel">' +
										'取消' +
									'</div>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>' +

					'<div class="overlay overlay5"></div>';

		this.el = temp;
	};

	ChangeLoginPwdDialog.prototype.getDom = function(){
		return this.el;
	};

	ChangeLoginPwdDialog.prototype.show = function(){
		this.resetDialog();
		this.showOverlay();
	};

	ChangeLoginPwdDialog.prototype.hide = function(){
		this.hideOverlay();
	};

	ChangeLoginPwdDialog.prototype.resetDialog = function() {
		this.allPass = false;
		this.oldPasswordInput.setValue('');
		this.newPasswordInput.setValue('');
		this.verifyPasswordInput.setValue('');
		this.zone.find('.ok, .cancel').removeClass('active');
	};

	ChangeLoginPwdDialog.prototype.commit = function() {
		var callback;
		var opt;
		var that   = this;
		var oValue = $.trim(this.oldPasswordInput.getValue());
		var nValue = $.trim(this.newPasswordInput.getValue());
		var rValue = $.trim(this.verifyPasswordInput.getValue());

		if (nValue !== rValue) {
			alert('新密码和确认密码不一样!');
			return;
		}

		callback;
		that = this;
		opt  = {
			url: app.urls.changeLoginPassword,
			
			data: {
				NewPassword: nValue,
				ConfirmPassword: oValue    //确认密码就是旧密码
			}
		};

		callback = function (data) {
			if (data.StatusCode && data.StatusCode !== 0) {
				alert(data.Message);
				return;
			}

			if (data === true) {
				alert('修改成功!');
				that.hide();
			} else {
				alert('修改失败!');
			}
		};

		Service.post(opt, callback);
	};

	ChangeLoginPwdDialog.prototype.checkInputPass = function () {
		if (this.oldPasswordInput.isPass() && 
			this.newPasswordInput.isPass() &&
			this.verifyPasswordInput.isPass()) {

			this.zone.find('.ok, .cancel').addClass('active');
			this.allPass = true;
		} else {
			this.zone.find('.ok, .cancel').removeClass('active');
			this.allPass = false;
		}
	};

	ChangeLoginPwdDialog.prototype.bindEvents = function() {
		var that = this;

		this.zone = $('.change-login-pwd-dialog');

		this.zone.find('.ok').click(function () {
			if ($(this).hasClass('active')) {
				that.commit();
			}
		});

		this.zone.find('.cancel').click(function () {
			that.hide();
		});

		this.oldPasswordInput.bindEvents(this.checkInputPass.bind(this));
		this.newPasswordInput.bindEvents(this.checkInputPass.bind(this));
		this.verifyPasswordInput.bindEvents(this.checkInputPass.bind(this));
        this.bindOverlayEvents();
	};

	window.ChangeLoginPwdDialog = ChangeLoginPwdDialog;

}());