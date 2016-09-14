$(function(){
	function SetPwdDialog(opt){
		IMDialog.call(this, opt || {});
		this.initDom();
	}

	SetPwdDialog.prototype = new IMDialog();

	SetPwdDialog.prototype.initDom = function(){
		var temp = '<div class="set-pwd-content">' +
						'<div class="dialog-wrapper">' +
							'<div class="dialog">' +
								'<div class="row1">' +
									'<div class="input-outer">' +
										'<img src="../img/t04.png" />' +
										'<input type="old-psw" placeholder="请输入您的资金密码" />' +
									'</div>' +
								'</div>' +

								'<div class="row2">' +
									'<div class="input-outer">' +
										'<img src="../img/t04.png" />' +
										'<input type="confirm-psw" placeholder="请再次输入您的资金密码" />' +
									'</div>' +
								'</div>' +

								'<div class="row3">' +
									'<div class="button">' +
										'确定' +
									'</div>' +
									'<div class="button">' +
										'取消' +
									'</div>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>' +

					'<div class="overlay overlay5"></div>';

		this.el = temp;

	}

	SetPwdDialog.prototype.getDom = function(){
		return this.el;
	}

	SetPwdDialog.prototype.show = function(){
		this.showOverlay();
	}

	SetPwdDialog.prototype.hide = function(){
		this.hideOverlay();
	}

	SetPwdDialog.prototype.bindEvents = function(){
		var that = this;

		this.zone = $('.set-pwd-content');



        this.bindOverlayEvents();
	}

	window.SetPwdDialog = SetPwdDialog;

}());