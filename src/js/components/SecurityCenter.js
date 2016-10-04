$(function(){
	function SecurityCenter(opt){
		this.opt = opt;
		this.initDom();
	}

	SecurityCenter.prototype.initDom = function(){
		var temp;

		temp = '<div class="security-center zhsz-info-action">' +
					'<div class="wrapper">' +
						'<div>' +
							'<div class="status pass"></div>' +
							'<img src="../img/t04.png" /><span class="item">登录密码</span>' +
							'<span class="text">安全级别：</span><span class="text security-level">中</span>' +
							'<a class="change-login-pwd">修改</a>' +
						'</div>' +

						'<div>' +
							'<div class="status warn"></div>' +
							'<img src="../img/t05.png" /><span class="item">资金密码</span>' +
							'<span class="text">安全级别：</span><span class="text security-level">中</span>' +
							'<a class="change-withdraw-pwd">设置</a>' +
						'</div>' +

						'<div class="row3">' +
							'<div class="status pass"></div>' +
							'<img src="../img/t06.png" /><span class="item">银行卡</span>' +
							'<span class="text">已绑定<span class="card-count">2</span>张</span>' +
							'<a class="card-manage">管理</a>' +
						'</div>' +

						// '<div class="row4">' +
						// 	'<div class="status pass"></div>' +
						// 	'<img src="../img/t07.png" /><span class="item">手机号码</span>' +
						// 	'<span class="text">128******63</span>' +
						// 	'<a class="set-phonenumber">修改</a>' +
						// '</div>' +

						// '<div class="row5">' +
						// 	'<div class="status pass"></div>' +
						// 	'<img src="../img/t08.png" /><span class="item">电子邮箱</span>' +
						// 	'<span class="text">立即绑定</span>' +
						// 	'<a class="set-email">修改</a>' +
						// '</div>' +

					'</div>' +								
				'</div>';

		this.el = temp;		
	}

	SecurityCenter.prototype.getDom = function(){
		return this.el;
	}

	SecurityCenter.prototype.show = function(){
		this.zone.show();
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
				that.cardManagerDialog = new BankCarkManagerDialog();
				$('.app').append(that.cardManagerDialog.getDom());
				that.cardManagerDialog.bindEvents();
			}
			that.cardManagerDialog.show();
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