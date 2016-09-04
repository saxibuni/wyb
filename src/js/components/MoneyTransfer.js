(function () {
	function MoneyTransfer(opt) {
		this.opt  = opt;
		this.initDom();
	}

	MoneyTransfer.prototype.initDom = function() {
		var temp = 	'<div class="money-transfer grzx-money-action">' +
						'<div class="wrapper">' +
							'<div class="row1">' +
								'<div class="text">从</div>' +
								'<select>' +	
									'<option>中心钱包</option>' +
									'<option>PT钱包</option>' +
								'</select>' +
							'</div>' +

							'<div class="row2">' +
								'<div class="text">转账到</div>' +
								'<select>' +	
									'<option>中心钱包</option>' +
									'<option>PT钱包</option>' +
								'</select>' +
							'</div>' +

							'<div class="row3">' +
								'<div class="text">转账金额</div>' +
								'<div class="input-outer">' +
									'<input type="text">' +
									'<img class="pass" src="../img/pass.png">' +
									'<img class="warning" src="../img/warning.png">' +
									'<div class="clear"></div>' +
								'</div>' +
							'</div>' +

							'<div class="row4">' +
								'<div class="button">' +
									'确认转账' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>';

		this.el = temp;
	}

	MoneyTransfer.prototype.getDom = function() {
		return this.el;
	}

	MoneyTransfer.prototype.show = function() {
		this.zone.show();
	};

	MoneyTransfer.prototype.hide = function() {
		this.zone.hide();
	};


	MoneyTransfer.prototype.bindEvents = function() {
		this.zone = $('.money-transfer');
	}

	window.MoneyTransfer = MoneyTransfer;
}());