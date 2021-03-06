(function() {
	function TopupConfirmDialog(opt) {
		IMDialog.call(this, opt || {});
		this.opt = opt;
		this.initDom();
	}

	TopupConfirmDialog.prototype = new IMDialog();

	TopupConfirmDialog.prototype.initDom = function() {
		var ms;
		var date  = new Date();
		var nowMs = Date.now();

		ms   = nowMs + 15 * 60 * 1000;
		date.setTime(ms);

		date = 	date.getHours() + ':' + 
				date.getMinutes() + ':' + 
				date.getSeconds();

		this.button = new Button({
			id: 'topup-confirm-dialog-button',
			name: '登录网上银行充值',
			width: 150,
			height: 30
		});

		var temp = '<div class="topup-confirm-dialog">' +
						'<div class="dialog-wrapper">' +
							'<div class="dialog">' +
								'<div class="title">' +
									'<span>充值确认</span>' +
									'<span class="close">×</span>' +
								'</div>' +

								'<div class="content">' +
									'<div class="row2">' +
										'<div>' +
											'<span class="name bank">充值银行：</span>' +
											'<span class="value bank-value"></span>' +
										'</div>' +
										'<div>' +
											'<span class="name amount">充值金额：</span>' +
											'<span class="value amount-value"></span>' +
										'</div>' +
										'<div>' +
											'<span class="name bookid">订单编号：</span>' +
											'<span class="value sncode-value"></span>' +
										'</div>' +
									'</div>' +

									'<div class="row3">' +
										'<span class="dot"></span>' +
										'<span class="countdown-info">为保证充值成功，请在15分钟之内完成支付。截止时间：</span>' +
										'<span class="countdown-time">' + date +'</span>' +
									'</div>' +

									'<div class="row4">' +
										'<table cellpadding="0" cellspacing="0">' +
											'<tbody>' +
												'<tr>' +
													'<td colspan="2">收款方信息确认</td>' +
												'</tr>' +
												'<tr>' +
													'<td class="name">收款银行</td>' +
													'<td class="value bank-name-value"></td>' +
												'</tr>' +
												'<tr>' +
													'<td class="name">账户名</td>' +
													'<td class="value">' +
														'<div class="left user-name-value">刘文慧</div>' +
														'<div class="right copy" data-clipboard-target=".user-name-value">复制</div>' +
														'<div class="clear"></div>' +
													'</td>' +
												'</tr>' +
												'<tr>' +
													'<td class="name">收款账号</td>' +
													'<td class="value">' +
														'<div class="left account-value"></div>' +
														'<div class="right copy" data-clipboard-target=".account-value">复制</div>' +
														'<div class="clear"></div>' +
													'</td>' +
												'</tr>' +
												'<tr>' +
													'<td class="name">附言</td>' +
													'<td class="value">' +
														'<div class="left postscript"></div>' +
														'<div class="right copy" data-clipboard-target=".postscript">复制</div>' +
														'<div class="clear"></div>' +
													'</td>' +
												'</tr>' +
											'</tbody>' +
										'</table>' +
									'</div>' +

									'<p class="row5">' +
										'注：附言在部分网站上会以"备注"，"用途"等名词出现，请务必正确填写此项信息，填写错误或不填写会影响充值到账' +
									'</p>' +

									// '<div class="row5">' +
									// 	this.button.getDom() +
									// '</div>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>' +

					'<div class="overlay overlay5"></div>';

		this.el = temp;
	}

	TopupConfirmDialog.prototype.getDom = function(){
		return this.el;
	}

	TopupConfirmDialog.prototype.show = function(data){
		this.showOverlay();
		
		if (!this.firstTime) {
			this.getUserAdminBank();
			this.firstTime = true;
		}

        this.zone.find('.row2 .bank-value').text(data.PayBankName);
        this.zone.find('.row2 .amount-value').text(data.Amount + '元');
        this.zone.find('.row2 .sncode-value').text(data.SNCode);
	}

	TopupConfirmDialog.prototype.hide = function(){
		this.hideOverlay();
	}

	TopupConfirmDialog.prototype.getUserAdminBank = function () {
		var i;
		var callback;
		var that = this;
		var opt  = {
			url: app.urls.getUserAdminBank,
			data: {
				type: 1
			}
		};

		callback = function (data) {
            if (data && data.StatusCode) {
                alert(data.Message);
                return;
            }

            that.userAdminBankData = data;
            that.zone.find('.row4 table .bank-name-value').text(data[0].Bank.BankName);
            that.zone.find('.row4 table .user-name-value').text(data[0].AccountName);
            that.zone.find('.row4 table .user-name-value + .copy').attr({
            	'data-clipboard-text' : data[0].AccountName
            });
            that.zone.find('.row4 table .account-value').text(data[0].AccountNo);
            that.zone.find('.row4 table .account-value + .copy').attr({
            	'data-clipboard-text' : data[0].AccountNo
            });
		};

		Service.get(opt, callback);
	};

	TopupConfirmDialog.prototype.bindEvents = function() {
		var that = this;

		this.zone = $('.topup-confirm-dialog');

		this.zone.find('.close').click(function () {
			that.hide();
		});

		that.clipboard = new Clipboard('.copy');
        this.bindOverlayEvents();
        this.button.bindEvents();
	}

	window.TopupConfirmDialog = TopupConfirmDialog;

}());