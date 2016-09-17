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
									'<div class="card-info">' +
										'<div class="img-content"><img style="top: -32px;" src="../img/bankLogo.jpg"></div>' +
										'<div class="card-number">4038 **** **** **** 210</div>' +
									'</div>' +

									'<div class="card-info">' +
										'<div class="img-content"><img style="top: -32px;" src="../img/bankLogo.jpg"></div>' +
										'<div class="card-number">4038 **** **** **** 210</div>' +
									'</div>' +

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
	}

	BankCarkManagerDialog.prototype.getCardInfo = function(){

	}


	BankCarkManagerDialog.prototype.show = function(){
		this.showOverlay();
	}

	BankCarkManagerDialog.prototype.hide = function(){
		this.hideOverlay();
	}

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