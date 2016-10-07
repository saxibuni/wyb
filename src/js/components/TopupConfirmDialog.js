(function(){
	function TopupConfirmDialog(opt){
		IMDialog.call(this, opt || {});
		this.opt = opt;
		this.initDom();
	}

	TopupConfirmDialog.prototype = new IMDialog();

	TopupConfirmDialog.prototype.initDom = function(){
		this.button = new Button({
			id: 'topup-confirm-dialog-button',
			name: '登录网上银行充值',
			width: 150,
			height: 30
		});

		var temp = '<div class="topup-confirm-dialog">' +
						'<div class="dialog-wrapper">' +
							'<div class="dialog">' +
								'<div class="row1">' +
									'<div class="title">充值确认</div>' +
									'<div class="close">×</div>' +
									'<div class="clear"></div>' +
								'</div>' +

								'<div class="row2">' +
									'<div class="row2-left">' +
										'<table>' +
											'<tbody>' +
												'<tr>' +
													'<td class="name bank">充值银行：</td>' +
													'<td class="value bank-value"></td>' +
												'</tr>' +
												'<tr>' +
													'<td class="name amount">充值金额：</td>' +
													'<td class="value amount-value"></td>' +
												'</tr>' +
												'<tr>' +
													'<td class="name bookid">单号：</td>' +
													'<td class="value sncode-value">SN00204040420332</td>' +
												'</tr>' +
											'</tbody>' +
										'</table>' +
									'</div>' +

									'<div class="row2-right">' +
										'<div class="countdown">' +
											'<div class="countdown-time">' +
												'02:01' +
											'</div>' +

											'<p class="countdown-info">' +
												'为保障充值成功，请在15分钟之内完成支付' +
											'</>' +
										'</div>' +
									'</div>' +
								'</div>' +

								'<div class="row3">' +
									'<div class="title">' +
										'收款方信息确认' +
									'</div>' +

									'<table>' +
										'<tbody>' +
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

								'<p class="row4">' +
									'注：附言在部分网站上会以"备注"，"用途"等名词出现，请务必正确填写此项信息，填写错误或不填写会影响充值到账' +
								'</p>' +

								// '<div class="row5">' +
								// 	this.button.getDom() +
								// '</div>' +
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

        this.zone.find('.row2 table .bank-value').text(data.PayBankName);
        this.zone.find('.row2 table .amount-value').text(data.Amount + '元');
        this.zone.find('.row2 table .sncode-value').text(data.SNCode);
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
            that.zone.find('.row3 table .bank-name-value').text(data[0].Bank.BankName);
            that.zone.find('.row3 table .user-name-value').text(data[0].AccountName);
            that.zone.find('.row3 table .account-value').text(data[0].AccountNo);
		};

		Service.get(opt, callback);
	};

	TopupConfirmDialog.prototype.bindEvents = function(){
		var that = this;

		this.zone = $('.topup-confirm-dialog');

		this.zone.find('.close').click(function () {
			that.hide();
		});

        this.bindOverlayEvents();
        this.button.bindEvents();

        this.clipboard = new Clipboard('.copy');
	}

	window.TopupConfirmDialog = TopupConfirmDialog;

}());