(function () {
	function MoneyTransfer(opt) {
		this.opt  = opt;
		this.initDom();
	}

	MoneyTransfer.prototype.initDom = function() {
		var temp;

		this.button = new Button({
			id: 'money-transfer-button',
			name: '确认转账',
			width: 128,
			height: 42
		});

		this.moneyTransferInput = new Input({
			id: 'money-transfer-input',
			width: 178,
			height: 30
		});

		temp = 		'<div class="money-transfer grzx-money-action">' +
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
								this.moneyTransferInput.getDom() +
							'</div>' +

							'<div class="row4">' +
								this.button.getDom() +
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

		this.button.bindEvents();
		this.moneyTransferInput.bindEvents();
	}

	window.MoneyTransfer = MoneyTransfer;
}());