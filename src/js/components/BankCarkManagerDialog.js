$(function(){
	function BankCarkManagerDialog(opt){
		IMDialog.call(this, opt || {});
		this.initDom();
	}

	BankCarkManagerDialog.prototype = new IMDialog();

	BankCarkManagerDialog.prototype.initDom = function(){
		var temp = '<div class="bank-card-manager-content">' +
						'<div class="dialog-wrapper">' +
							'<div class="dialog">' +
								'<div class="subtile">' +
									'<div class="title-name">银行卡管理</div>' +
									'<div class="close">×</div>' +
								'</div>' +

								'<div class="card-content">' +
									'<div class="add-card-info">'+
										'<span>添加银行卡</span>' +
									'</div>'+
									'<div class="clear"></div>'+
								'</div>'+

							'</div>' +
						'</div>' +
					'</div>' +

					'<div class="overlay overlay7"></div>';

		this.el = temp;
	}

	BankCarkManagerDialog.prototype.getDom = function(){
		return this.el;
	};

	BankCarkManagerDialog.prototype.addCardItem = function(data) {
		var i;
		var cssName;
		var temp       = '';
		var bankName   =  data.Bank.BankName;
		var accountLen =  data.AccountNo.length;
		var prePart    =  data.AccountNo.substring(accountLen - 4);
		var lastPart   =  data.AccountNo.substring(0, 4);

		temp +=	'<div class="card-info">' +
					'<div class="img-content">' +
						//'<img style="top: -32px;" src="../img/bankLogo.jpg">' +
						bankName +
					'</div>' +
					'<div class="card-number">' +
						'<span class="pre-part">' + prePart + '</span>' +
						'<span class="starts">&nbsp;****&nbsp;****&nbsp;****</span>' +
						'<span class="last-part">' + lastPart + '</span>'
					'</div>' +
				'</div>';

		this.zone.find('.card-content').prepend(temp);
	};

	BankCarkManagerDialog.prototype.show = function(){
		this.showOverlay();

		if (!this.firstTime) {
			this.getUserBankList();
			this.firstTime = true;
		}
	};

	BankCarkManagerDialog.prototype.refresh = function(){
		var temp =	'<div class="add-card-info">'+
						'<span>添加银行卡</span>' +
					'</div>'+
					'<div class="clear"></div>';

		this.zone.find('.card-content').html(temp);
		this.getUserBankList();
	}

	BankCarkManagerDialog.prototype.hide = function(){
		this.hideOverlay();
	}

	BankCarkManagerDialog.prototype.getUserBankList = function() {
		var i;
		var callback;
		var that = this;

		var opt  = {
			url: app.urls.getUserBankList,
			data: {}
		};

		callback = function (data) {
			if (data.StatusCode && data.StatusCode != 0) {
				alert(data.Message);
				return;
			}

			for (i = 0; i < data.length; i++) {
				that.addCardItem(data[i], i);
			}

			that.userBanks = data;
		};

		Service.get(opt, callback);
	};

	BankCarkManagerDialog.prototype.bindEvents = function(){
		var that = this;
		
		this.zone = $('.bank-card-manager-content');
		
		this.zone.find('.add-card-info').click(function(){
			if (!that.cardBindDiag) {
				that.cardBindDiag = new CardBindDialog();
				$('.app').append(that.cardBindDiag.getDom());
				that.cardBindDiag.bindEvents();
			}
			that.cardBindDiag.show();
		});

		that.zone.find('.close').click(function(){
			that.hide();
		});

        this.bindOverlayEvents();
	}

	window.BankCarkManagerDialog = BankCarkManagerDialog;


}());