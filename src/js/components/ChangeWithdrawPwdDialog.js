$(function(){
	function ChangeWithdrawPwdDialog(opt){
		IMDialog.call(this, opt || {});
		this.initDom();
	}

	ChangeWithdrawPwdDialog.prototype = new IMDialog();

	ChangeWithdrawPwdDialog.prototype.initDom = function() {
		var temp = '<div class="change-withdraw-pwd-dialog">' +
						'<div class="dialog-wrapper">' +
							'<div class="dialog">' +
								'<div class="row0">' +
									'<div class="input-outer">' +
										'<img src="../img/t04.png" />' +
										'<input type="password" class="old-psw" placeholder="请输入您的旧密码" />' +
									'</div>' +
								'</div>' +

								'<div class="row1">' +
									'<div class="input-outer">' +
										'<img src="../img/t04.png" />' +
										'<input type="password" class="new-psw" placeholder="请输入您的资金密码" />' +
									'</div>' +
								'</div>' +

								'<div class="row2">' +
									'<div class="input-outer">' +
										'<img src="../img/t04.png" />' +
										'<input type="password" class="confirm-psw" placeholder="请再次输入您的资金密码" />' +
									'</div>' +
								'</div>' +

								'<div class="row3">' +
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

	ChangeWithdrawPwdDialog.prototype.getDom = function() {
		return this.el;
	};

	ChangeWithdrawPwdDialog.prototype.show = function() {
		this.showOverlay();
		this.oldPwdInput.val('');
		this.newPwdInput.val('');
		this.confirmPwdInput.val('');
		this.checkPwd();
	};

	ChangeWithdrawPwdDialog.prototype.hide = function() {
		this.hideOverlay();
	};

    ChangeWithdrawPwdDialog.prototype.createLoader = function() {
        var wrapper = this.zone.find('.dialog')[0];
        this.loader = new Loader(wrapper);
    };

	ChangeWithdrawPwdDialog.prototype.checkPwd = function() {
		var opt;
		var callback;
		var that = this;

		opt = {
			url: app.urls.checkWithdrawPwd,
			data: {}
		};

		callback = function (data) {
			if (data.StatusCode && data.StatusCode !== 0) {
				alert(data.Message);
				return;
			}

			if (data === false) {
				alert('请先绑定银行卡, 才能修改资金密码');
				that.hide();
				return;
			}
		};

		Service.get(opt, callback);
	};

	ChangeWithdrawPwdDialog.prototype.commit = function () {
		var opt;
		var callback;
		var that          = this;
		var oldPwdVal     = $.trim(this.oldPwdInput.val());
		var newPwdVal     = $.trim(this.newPwdInput.val());
		var confirmPwdVal = $.trim(this.confirmPwdInput.val());

		if (newPwdVal !== confirmPwdVal) {
			alert('新密码与确认密码不一致');
			return;
		}

		opt = {
			url: app.urls.changeWithdrawPassword,
			data: {
				oldPwd: $.trim(this.oldPwdInput.val()),
				newPwd: $.trim(this.newPwdInput.val())
			}
		};

		callback = function (data) {
			if (data.StatusCode && data.StatusCode !== 0) {
				alert(data.Message);
			}

			if (data === true) {
				alert('修改成功');
				that.hide();
			}
		};

		Service.post(opt, callback);
	};

	ChangeWithdrawPwdDialog.prototype.bindEvents = function() {
		var oldPwdReg         = app.passwordReg;
		var newPwdReg         = app.passwordReg;
		var comfirmPwdReg     = app.passwordReg;
		var inputEvents       = 'input';
		var that              = this;

		this.oldPwdPass      = false;
		this.newPwdPass      = false;
		this.comfirmPwdPass  = false;
		this.allPass         = false;

		this.zone            = $('.change-withdraw-pwd-dialog');
		this.oldPwdInput     = this.zone.find('.row0 input:password');
		this.newPwdInput     = this.zone.find('.row1 input:password');
		this.confirmPwdInput = this.zone.find('.row2 input:password');

		this.zone.find('.ok').click(function () {
			that.commit();
		});

		this.zone.find('.cancel').click(function () {
			that.hide();
		});

        this.bindOverlayEvents();
	};

	window.ChangeWithdrawPwdDialog = ChangeWithdrawPwdDialog;

}());