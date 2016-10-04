$(function(){
	function ChangeLoginPwdDialog(opt){
		IMDialog.call(this, opt || {});
		this.initDom();
	}

	ChangeLoginPwdDialog.prototype = new IMDialog();

	ChangeLoginPwdDialog.prototype.initDom = function(){
		var temp = '<div class="change-login-pwd-dialog">' +
						'<div class="dialog-wrapper">' +
							'<div class="dialog">' +
								'<div class="row1">' +
									'<div class="input-outer">' +
										'<img src="../img/t04.png" />' +
										'<input type="password" class="old-psw" placeholder="请输入您的旧密码" />' +
									'</div>' +
								'</div>' +

								'<div class="row2">' +
									'<div class="input-outer">' +
										'<img src="../img/t04.png" />' +
										'<input type="password" class="new-psw" placeholder="请输入您的新密码" />' +
									'</div>' +
								'</div>' +

								'<div class="row3">' +
									'<div class="input-outer">' +
										'<img src="../img/t04.png" />' +
										'<input type="password" class="repeat-psw" placeholder="请再次输入您的新密码" />' +
									'</div>' +
								'</div>' +

								'<div class="row4">' +
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
	}

	ChangeLoginPwdDialog.prototype.getDom = function(){
		return this.el;
	}

	ChangeLoginPwdDialog.prototype.show = function(){
		this.showOverlay();
	}

	ChangeLoginPwdDialog.prototype.hide = function(){
		this.hideOverlay();
	}

	ChangeLoginPwdDialog.prototype.commit = function() {
		var callback;
		var opt;
		var that   = this;
		var oValue = $.trim(this.oldPasswordInput.val());
		var nValue = $.trim(this.newPasswordInput.val());
		var rValue = $.trim(this.repeatPasswordInput.val());

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
	}

	ChangeLoginPwdDialog.prototype.bindEvents = function() {
		var oldPasswordReg     =  app.passwordReg;
		var newPasswordReg     =  app.passwordReg;
		var repeatPasswordReg  =  app.passwordReg;
		var inputEvents        =  'input';
		var that               =  this;

		this.oldPasswordPass    =  false;
		this.newPasswordPass    =  false;
		this.repeatPasswordPass =  false;
		this.allPass            =  false;

		this.zone                = $('.change-login-pwd-dialog');
		this.oldPasswordInput    = this.zone.find('.row1 input:password');
		this.newPasswordInput    = this.zone.find('.row2 input:password');
		this.repeatPasswordInput = this.zone.find('.row3 input:password');

		this.zone.find('.ok').click(function () {
			that.commit();
		});

		this.zone.find('.cancel').click(function () {
			that.hide();
		});

        this.bindOverlayEvents();
	}

	window.ChangeLoginPwdDialog = ChangeLoginPwdDialog;

}());