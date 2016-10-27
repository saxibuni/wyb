$(function() {
	function SecurityCenter(opt) {
		this.opt = opt;
		this.initDom();
	}

	SecurityCenter.prototype.initDom = function() {
		var temp;

		temp = '<div class="security-center zhsz-info-action">' +
					'<div class="wrapper">' +
						'<div>' +
							'<span class="pc-icon security-lock-icon"></span>' +
							'<span class="item">登录密码</span>' +
							'<span class="text">安全级别：</span><span class="text security-level">中</span>' +
							'<a class="change-login-pwd">修改</a>' +
							'<span class="clear"></span>' +
						'</div>' +

						'<div>' +
							'<span class="pc-icon security-key-icon"></span>' +
							'<span class="item">资金密码</span>' +
							'<span class="text">安全级别：</span><span class="text security-level">中</span>' +
							'<a class="change-withdraw-pwd">设置</a>' +
						'</div>' +

						'<div class="row3">' +
							'<span class="pc-icon security-card-icon"></span>' +
							'<span class="item">银行卡</span>' +
							'<span class="text">已绑定<span class="card-count">--</span>张</span>' +
							'<a class="card-manage">管理</a>' +
						'</div>' +

						'<div class="row4">' +
							'<span class="pc-icon security-phone-icon"></span>' +
							'<span class="item">手机号码</span>' +
							'<span class="text">128******63</span>' +
							'<a class="set-phonenumber">修改</a>' +
						'</div>' +

						'<div class="row5">' +
							'<span class="pc-icon security-mail-icon"></span>' +
							'<span class="item">电子邮箱</span>' +
							'<span class="text">立即绑定</span>' +
							'<a class="set-email">修改</a>' +
						'</div>' +

					'</div>' +								
				'</div>';

		this.el = temp;		
	};

	SecurityCenter.prototype.getDom = function() {
		return this.el;
	};

	SecurityCenter.prototype.getUserBankCount = function () {
		var that = this;
		var opt  =  {
			url: app.urls.getUserBankCount,
	        data: {}
		};

		var callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				alert(json.Message);
				return;
			}

			that.zone.find('.card-count').text(json);
		};

		Service.get(opt, callback);
	};

	SecurityCenter.prototype.show = function(){
		this.zone.show();
		this.getUserBankCount();
	};

	SecurityCenter.prototype.hide = function(){
		this.zone.hide();
	}

	SecurityCenter.prototype.bindEvents = function(){
		var that = this;

		this.zone = $('.security-center');

		this.zone.find('.change-login-pwd').click(function() {
			if (!that.changeLoginPwdDialog) {
				that.changeLoginPwdDialog = new ChangeLoginPwdDialog();
				$('.app').append(that.changeLoginPwdDialog.getDom());
				that.changeLoginPwdDialog.bindEvents();
			}
			that.changeLoginPwdDialog.show();
		});

		this.zone.find('.change-withdraw-pwd').click(function(){
			if (!that.changeWithdrawPwdDialog) {
				that.changeWithdrawPwdDialog = new ChangeWithdrawPwdDialog();
				$('.app').append(that.changeWithdrawPwdDialog.getDom());
				that.changeWithdrawPwdDialog.bindEvents();
			}
			that.changeWithdrawPwdDialog.show();
		});

		this.zone.find('.card-manage').click(function(){
			if (!that.cardManagerDialog) {
				app.cardManagerDialog = new BankCarkManagerDialog();
				$('.app').append(app.cardManagerDialog.getDom());
				app.cardManagerDialog.bindEvents();
			}
			app.cardManagerDialog.show();
		})
	
		this.zone.find('.set-phonenumber').click(function(){
			if (!that.setPhonenumberDialog) {
				that.setPhonenumberDialog = new SetPhonenumberDialog();
				$('.app').append(that.setPhonenumberDialog.getDom());
				that.setPhonenumberDialog.bindEvents();
			}
			that.setPhonenumberDialog.show();
		});

		this.zone.find('.set-email').click(function(){
			if (!that.setEmailDialog) {
				that.setEmailDialog = new SetEmailDialog();
				$('.app').append(that.setEmailDialog.getDom());
				that.setEmailDialog.bindEvents();
			}
			that.setEmailDialog.show();
		});	
	};

	window.SecurityCenter = SecurityCenter;
}());