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
			width: 210,
			height: 30,
			reg: app.moneyReg
		});

		this.selectFrom = new Select({
			id: 'money-transfer-select-from',
			width: 210
		});

		this.selectTo = new Select({
			id: 'money-transfer-select-to',
			width: 210
		});

		temp = 		'<div class="money-transfer grzx-money-action">' +
						'<div class="wrapper">' +
							'<div class="row1">' +
								'<div class="text">转出：</div>' +

								this.selectFrom.getDom() +

								'<div class="from-balance">' +
									'<span class="from-balance-value"></span>' +
									'<span>&nbsp;&nbsp;RMB</span>' +
								'</div>' +
							'</div>' +

							'<div class="row2">' +
								'<div class="text">转入：</div>' +

								this.selectTo.getDom() +

								'<div class="to-balance">' +
									'<span class="to-balance-value"></span>' +
									'<span>&nbsp;&nbsp;RMB</span>' +
								'</div>' +
							'</div>' +

							'<div class="row3">' +
								'<div class="text">金额：</div>' +
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
		var temp = '';

		for (i = 0; i < this.selectData.length; i++) {
			temp += '<option data-value="' + this.selectData[i].id + '">' +
						this.selectData[i].name +
					'</option>';
		}

		this.selectFrom.setOptions(temp);
		this.selectTo.setOptions(temp);
		this.selectTo.setValue('PT');
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
			
			that.selectData = [{
				id: '0',
				name: '主账户'
			}];

			for (i = 0; i < data.length; i++) {
				temp = {
					id: data[i].GamePlatform,
					name: data[i].GameName
				}

				that.selectData.push(temp);
			}

			that.setSelects();
			that.getCenterWalletCash('from');
			that.getPlatformBalance('to');
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

	MoneyTransfer.prototype.getCenterWalletCash = function (type) {
		var i;
		var callback;
		var that = this;
		var opt  = {
			url: app.urls.getCenterWalletCash,
			data: {}
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

	MoneyTransfer.prototype.submit = function() {
		var from = this.selectFrom.getValue();
		var to   = this.selectTo.getValue();

		if (!this.moneyTransferInput.isPass()) {
			alert('格式不对');
		}

		if (from == to) {
			alert("同账户不允许互转");
			return;
		}

		if (from != '0' && to != '0') {
			alert("游戏平台账户不允许互转");
			return;
		}

		if (from == '0') {
			this.transferToPlatform();
		} else {
			this.transferToAccount();
		}
	};

	MoneyTransfer.prototype.transferToPlatform = function() {
		var i;
		var callback;
		var that     = this;
		var amount   = $.trim(this.moneyTransferInput.getValue());
		var to       = this.selectTo.getValue();
		var opt      = {
			url: app.urls.transferToPlatform,
			data: {
				UserName: app.userTotalInfo.userName,
				Amount: amount,
				GamePlatform: to
			}
		};

		callback = function (data) {
			if (data.StatusCode && data.StatusCode != 0) {
				alert(data.Message);
				return;
			}

			if (data === true) {
				alert('转账成功');
			} else {
				alert('转账失败');
			}
		};

		Service.post(opt, callback);
	};

	MoneyTransfer.prototype.transferToAccount = function() {
		var i;
		var callback;
		var that     = this;
		var amount   = $.trim(this.moneyTransferInput.getValue());
		var from     = this.selectFrom.getValue();
		var opt      = {
			url: app.urls.transferToAccount,
			data: {
				UserName: app.userTotalInfo.userName,
				Amount: amount,
				GamePlatform: from
			}
		};

		callback = function (data) {
			if (data.StatusCode && data.StatusCode != 0) {
				alert(data.Message);
				return;
			}

			if (data === true) {
				alert('转账成功');
			} else {
				alert('转账失败');
			}
		};

		Service.post(opt, callback);
	};

	MoneyTransfer.prototype.bindEvents = function() {
		var value;
		var value1;
		var value2;
		var that  = this;

		this.zone = $('.money-transfer');

		this.zone.find('#money-transfer-button').click(function () {
			that.submit();
		});

		this.zone.find('#money-transfer-select-from select').change(function () {
			value1 = that.selectFrom.getValue();
			value2 = that.selectTo.getValue();

			if (value1 != 0) {
				that.selectTo.setValue('主账户');
				that.getCenterWalletCash('to');
			}

			if (value1 == 0 && value2 == 0) {
				that.selectTo.setValue('PT');
				that.getPlatformBalance('to');
			}

			if (value1 != 0) {
				that.getPlatformBalance(value1, 'from');
			} else {
				that.getCenterWalletCash('from');
			}
		});

		this.zone.find('#money-transfer-select-to select').change(function () {
			value1 = that.selectFrom.getValue();
			value2 = that.selectTo.getValue();

			if (value2 != 0) {
				that.selectFrom.setValue('主账户');
				that.getCenterWalletCash('from');
			}

			if (value1 == 0 && value2 == 0) {
				that.selectFrom.setValue('PT');
				that.getPlatformBalance('from');
			}

			if (value2 != 0) {
				that.getPlatformBalance(value2, 'to');
			} else {
				that.getCenterWalletCash('to');
			}
		});

		this.button.bindEvents();
		this.moneyTransferInput.bindEvents();
		this.selectFrom.bindEvents();
		this.selectTo.bindEvents();
	}

	window.MoneyTransfer = MoneyTransfer;
}());