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
			width: 150,
			height: 30,
			reg: app.moneyReg
		});

		this.fromSelect = new Select({
			id: 'money-transfer-from-select',
			width: 150,
			height: 36,
			data: [
				{
					'text': '主账户',
					'value': '0'
				}
			]
		});

		this.toSelect = new Select({
			id: 'money-transfer-to-select',
			width: 150,
			height: 36,
			data: [
				{
					'text': '主账户',
					'value': '0'
				}
			]
		});

		temp = 		'<div class="money-transfer grzx-money-action">' +
						'<div class="wrapper">' +
							'<div class="row1">' +
								'<div class="text">从</div>' +

								this.fromSelect.getDom() +

								'<div class="from-balance">' +
									'<span class="from-balance-value"></span>' +
									'<span>&nbsp;&nbsp;RMB</span>' +
								'</div>' +
							'</div>' +

							'<div class="row2">' +
								'<div class="text">转账到</div>' +

								this.toSelect.getDom() +

								'<div class="to-balance">' +
									'<span class="to-balance-value"></span>' +
									'<span>&nbsp;&nbsp;RMB</span>' +
								'</div>' +
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
	};

	MoneyTransfer.prototype.show = function() {
		this.zone.show();

		if (!this.firstTime) {
			this.getAllPlatforms();
			this.firstTime = true;
		}
	};

	MoneyTransfer.prototype.hide = function() {
		this.zone.hide();
	};

	MoneyTransfer.prototype.setSelects = function() {
		var i;
		var temp = ''

		for (i = 0; i < this.selectData.length; i++) {
			temp += '<option data-value="' + this.selectData[i].id + '">' +
						this.selectData[i].name +
					'</option>';
		}

		this.fromSelect.setOptions(temp);
		this.toSelect.setOptions(temp);
	};

	MoneyTransfer.prototype.getAllPlatforms = function () {
		var i;
		var temp;
		var callback;
		var that = this;
		var opt  = {
			url: app.urls.getAllAPI,
			data: {}
		};

		callback = function (data) {
			if (!data) {
				return;
			}
			
			that.selectData = [];

			for (i = 0; i < data.length; i++) {
				temp = {
					id: data[i].GamePlatform,
					name: data[i].GameName
				}

				if (temp.walletType === '沙巴体育(新)') {
					temp.id = 'sb-sports';
				}

				that.selectData.push(temp);
			}

			that.setSelects();
			that.bindEvents();

			that.getPlatformBalance(that.selectData[0].id, 'all');
		};

		Service.get(opt, callback);
	};

	MoneyTransfer.prototype.getPlatformBalance = function (platform, type) {
		var i;
		var callback;
		var that = this;
		var opt  = {
			url: app.urls.getPlatformBalance,
			data: {
				gamePlatform: platform
			}
		};

		callback = function (data) {
			if (type === 'from') {
				that.zone.find('.from-balance-value').text(data);
			} else if (type === 'to') {
				that.zone.find('.to-balance-value').text(data);
			} else {
				that.zone.find('.from-balance-value').text(data);
				that.zone.find('.to-balance-value').text(data);
			}
		};

		Service.get(opt, callback);
	};

	MoneyTransfer.prototype.getBalanceSum = function () {
		var i;
		var callback;
		var that = this;
		var opt  = {
			url: app.urls.getBalanceSum,
			data: {}
		};

		callback = function (data) {
			that.zone.find('.center-wallet').children('.balance').text(data);
		};

		Service.get(opt, callback);
	};

	MoneyTransfer.prototype.submit = function() {
		if (!this.moneyTransferInput.isPass()) {
			alert('格式不对');
		}
	};

	MoneyTransfer.prototype.transferToPlatform = function() {
		var i;
		var callback;
		var that     = this;
		var opt  = {
			url: app.urls.transferToPlatform,
			data: {
			}
		};

		callback = function (data) {
			debugger
		};

		Service.post(opt, callback);
	};

	MoneyTransfer.prototype.transferToAccount = function() {
		var i;
		var callback;
		var that     = this;
		var opt  = {
			url: app.urls.transferToAccount,
			data: {
			}
		};

		callback = function (data) {
			debugger
		};

		Service.post(opt, callback);
	};

	MoneyTransfer.prototype.bindEvents = function() {
		var that  = this;
		this.zone = $('.money-transfer');

		this.zone.find('#money-transfer-button').click(function () {
			that.submit();
		});

		this.zone.find('#money-transfer-from-select').change(function () {
			that.getPlatformBalance(that.fromSelect.getValue(), 'from');
		});

		this.zone.find('#money-transfer-to-select').change(function () {
			that.getPlatformBalance(that.toSelect.getValue(), 'to');
		});

		this.button.bindEvents();
		this.moneyTransferInput.bindEvents();
		this.fromSelect.bindEvents();
		this.toSelect.bindEvents();
	}

	window.MoneyTransfer = MoneyTransfer;
}());