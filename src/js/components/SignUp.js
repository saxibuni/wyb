(function () {
	function SignUp (opt) {
		IMDialog.call(this, opt || {});
		this.initDom();
	}
	
	SignUp.prototype = new IMDialog();

	SignUp.prototype.initDom = function () {
		var temp =	'<div class="sign-up">' +
						'<div class="dialog-wrapper">' +
							'<div class="dialog">' +
								'<div class="row1">' +
								'</div>' +
								'<div class="row2">' +
									'<div class="text">用户名</div>' +
									'<div class="input-outer">' +
										'<input type="text" placeholder="用户名由3-12位数字和字母组成">' +
										'<img class="pass" src="../img/pass.png">' +
										'<img class="warning" src="../img/warning.png">' +
										'<div class="clear"></div>' +
									'</div>' +
								'</div>' +
								'<div class="row3">' +
									'<div class="text">密码</div>' +
									'<div class="input-outer">' +
										'<input type="text" placeholder="密码由6-12位数字和字母组成，不含字符">' +
										'<img class="pass" src="../img/pass.png">' +
										'<img class="warning" src="../img/warning.png">' +
										'<div class="clear"></div>' +
									'</div>' +
								'</div>' +
								'<div class="row4">' +
									'<div class="input-outer">' +
										'<input type="text" placeholder="再次输入密码">' +
										'<img class="pass" src="../img/pass.png">' +
										'<img class="warning" src="../img/warning.png">' +
										'<div class="clear"></div>' +
									'</div>' +
								'</div>' +
								'<div class="row5">' +
									'<div class="text">推广码</div>' +
									'<div class="input-outer">' +
										'<input type="text" placeholder="请输入推广码，如无请留空">' +
										'<img class="pass" src="../img/pass.png">' +
										'<img class="warning" src="../img/warning.png">' +
										'<div class="clear"></div>' +
									'</div>' +
								'</div>' +
								'<div class="row6">' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>' +

					'<div class="overlay overlay3"></div>';
		
		this.el  = temp;
	};

	SignUp.prototype.getDom = function () {
		return this.el;
	};

	SignUp.prototype.show = function () {
		this.showOverlay();
	};

	SignUp.prototype.hide = function () {
		this.hideOverlay();
	};

	SignUp.prototype.bindEvents = function () {
		this.zone = $('.sign-up');

		this.bindOverlayEvents();
	};

	window.SignUp = SignUp;
}());
