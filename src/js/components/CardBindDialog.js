$(function(){
	function CardBindDialog(opt){
		IMDialog.call(this, opt || {});
		this.initDom();
	}

	CardBindDialog.prototype = new IMDialog();

	CardBindDialog.prototype.initDom = function(){
		this.selectBank = new Select({
			id: 'card-bind-bink',
			width: 380,
			height: 36,
			data:[
				{
					'text': '请选择您的开户银行',
					'value': '0'	
				}
			]
		});

		this.selectProvince = new Select({
			id: 'card-bind-province',
			width: 100,
			height: 36,
			data:[
				{
					'text': '湖北省',
					'value': '0'	
				}
			]
		});

		this.selectCity = new Select({
			id: 'card-bind-city',
			width: 100,
			height: 36,
			data:[
				{
					'text': '武汉市',
					'value': '0'	
				}
			]
		});


		var temp = '<div class="card-bind-content">' +
						'<div class="dialog-wrapper">' +
							'<div class="dialog">' +

								'<div class="row">' +
									'<div class="input-outer">' +
										'<img src="../img/t04.png" />' +
										this.selectBank.getDom() +
									'</div>' + 
								'</div>' +

								'<div class="row">' +
									'<div class="input-outer">' +
										'<img src="../img/t04.png" />' +
										'<input type="old-psw" placeholder="请输入您的资金密码" />' +
									'</div>' +
								'</div>' +

								'<div class="row">' +
									'<div class="input-outer">' +
										'<img src="../img/t04.png" />' +
										this.selectProvince.getDom() +
										this.selectCity.getDom() +
										'<span>* 请选择您的开户银行所在地</span>' +									
									'</div>' +
								'</div>' +

								'<div class="row">' +
									'<div class="input-outer">' +
										'<img src="../img/t04.png" />' +
										'<input type="old-psw" placeholder="请输入您的开户行支行" />' +
									'</div>' +
								'</div>' +

								'<div class="row">' +
									'<div class="input-outer">' +
										'<img src="../img/t04.png" />' +
										'<input type="old-psw" placeholder="请输入您的银行卡卡号" />' +
									'</div>' +
								'</div>' +

								'<div class="row">' +
									'<div class="button ok">' +
										'确定' +
									'</div>' +
									'<div class="button cancel">' +
										'取消' +
									'</div>' +
								'</div>' +	

							'</div>' +
						'</div>' +
					'</div>'+

					'<div class="overlay overlay8"></div>';

		this.el = temp;
	}

	CardBindDialog.prototype.getDom = function(){
		return this.el;
	}

	CardBindDialog.prototype.show = function(){
		this.showOverlay();
	}

	CardBindDialog.prototype.hide = function(){
		this.hideOverlay();
	}

	CardBindDialog.prototype.bindEvents = function(){
		var that = this;

		this.zone = $('.card-bind-content');

		this.zone.find('.ok').click(function(){
			that.hide();
		});

		this.zone.find('.cancel').click(function(){
			that.hide();	
		});

		this.selectBank.bindEvents();
		this.selectProvince.bindEvents();
		this.selectCity.bindEvents();
        this.bindOverlayEvents();
	}

	window.CardBindDialog = CardBindDialog;

}());