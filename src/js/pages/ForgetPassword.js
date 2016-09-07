(function () {
	function ForgetPassword () {
		this.initDom();
	}
	
	ForgetPassword.prototype.initDom = function () {
		var temp =	'<div class="forget-password">' +
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
								'<div class="step1">' +
								'</div>' +

								'<div class="step2">' +
								'</div>' +

								'<div class="step3">' +
								'</div>' +

								'<div class="step4">' +
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

	ForgetPassword.prototype.bindEvents = function () {
		var that = this;

		this.zone = $('.forget-password');
	};

	window.ForgetPassword = ForgetPassword;
}());
