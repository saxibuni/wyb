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

		this.fromSelect = new Select({
			id: 'money-transfer-from-select',
			width: 200,
			height: 36,
			data: [
				{
					'text': '中心钱包',
					'value': '0'
				},
				{
					'text': 'PT钱包',
					'value': '1'
				}
			]
		});

		this.toSelect = new Select({
			id: 'money-transfer-to-select',
			width: 200,
			height: 36,
			data: [
				{
					'text': '中心钱包',
					'value': '0'
				},
				{
					'text': 'PT钱包',
					'value': '1'
				}
			]
		});

		temp = 		'<div class="money-transfer grzx-money-action">' +
						'<div class="wrapper">' +
							'<div class="row1">' +
								'<div class="text">从</div>' +
								this.fromSelect.getDom() +
							'</div>' +

							'<div class="row2">' +
								'<div class="text">转账到</div>' +
								this.toSelect.getDom() +
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
		this.fromSelect.bindEvents();
		this.toSelect.bindEvents();
	}

	window.MoneyTransfer = MoneyTransfer;
}());