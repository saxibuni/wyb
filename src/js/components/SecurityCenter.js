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
							'<a class="modify-pwd">修改</a>' +
						'</div>' +

						'<div>' +
							'<div class="status warn"></div>' +
							'<img src="../img/t05.png" /><span class="item">资金密码</span>' +
							'<span class="text">安全级别：</span><span class="text security-level">中</span>' +
							'<a class="set-pwd">设置</a>' +
						'</div>' +

						'<div class="row3">' +
							'<div class="status pass"></div>' +
							'<img src="../img/t06.png" /><span class="item">银行卡</span>' +
							'<span class="text">已绑定<span class="card-count">2</span>张</span>' +
							'<a class="manage">管理</a>' +
						'</div>' +

						'<div class="row4">' +
							'<div class="status pass"></div>' +
							'<img src="../img/t07.png" /><span class="item">手机号码</span>' +
							'<span class="text">128******63</span>' +
							'<a class="phone-detail">修改</a>' +
						'</div>' +

						'<div class="row5">' +
							'<div class="status pass"></div>' +
							'<img src="../img/t08.png" /><span class="item">登录密码</span>' +
							'<span class="text">立即绑定</span>' +
							'<a class="email-detail">修改</a>' +
						'</div>' +

					'</div>' +								
				'</div>';

		this.el = temp;		
	}

	SecurityCenter.prototype.getDom = function(){
		return this.el;
	}

	SecurityCenter.prototype.show = function(){
		this.zone.show();
	}

	SecurityCenter.prototype.hide = function(){
		this.zone.hide();
	}

	SecurityCenter.prototype.bindEvents = function(){
		var that = this;

		this.zone = $('.security-center');

		this.zone.find('.modify-pwd').click(function(){
			if (!that.modifyPwdDialog) {
				that.modifyPwdDialog = new ModifyPwdDialog();
				$('.app').append(that.modifyPwdDialog.getDom());
				that.modifyPwdDialog.bindEvents();
			}
			that.modifyPwdDialog.show();
		});

		this.zone.find('.set-pwd').click(function(){
			if (!that.setPwdDialog) {
				that.setPwdDialog = new SetPwdDialog();
				$('.app').append(that.setPwdDialog.getDom());
				that.setPwdDialog.bindEvents();
			}
			that.setPwdDialog.show();
		});
		
	}

	window.SecurityCenter = SecurityCenter;
}());