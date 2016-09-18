$(function(){
	function ModifyPwdDialog(opt){
		IMDialog.call(this, opt || {});
		this.initDom();
	}

	ModifyPwdDialog.prototype = new IMDialog();

	ModifyPwdDialog.prototype.initDom = function(){
		var temp = '<div class="modify-pwd-content">' +
						'<div class="dialog-wrapper">' +
							'<div class="dialog">' +
								'<div class="row1">' +
									'<div class="input-outer">' +
										'<img src="../img/t04.png" />' +
										'<input type="old-psw" placeholder="请输入您的旧密码" />' +
									'</div>' +
								'</div>' +

								'<div class="row2">' +
									'<div class="input-outer">' +
										'<img src="../img/t04.png" />' +
										'<input type="new-psw" placeholder="请输入您的新密码" />' +
									'</div>' +
								'</div>' +

								'<div class="row3">' +
									'<div class="input-outer">' +
										'<img src="../img/t04.png" />' +
										'<input type="confirm-new-psw" placeholder="请再次输入您的新密码" />' +
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

	ModifyPwdDialog.prototype.getDom = function(){
		return this.el;
	}

	ModifyPwdDialog.prototype.show = function(){
		this.showOverlay();
	}

	ModifyPwdDialog.prototype.hide = function(){
		this.hideOverlay();
	}

	ModifyPwdDialog.prototype.bindEvents = function(){
		var that = this;

		this.zone = $('.modify-pwd-content');

		this.zone.find('.ok').click(function () {
			that.hide();
		});

		this.zone.find('.cancel').click(function () {
			that.hide();
		});

        this.bindOverlayEvents();
	}

	window.ModifyPwdDialog = ModifyPwdDialog;

}());