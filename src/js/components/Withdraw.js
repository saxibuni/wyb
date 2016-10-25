(function () {
	function Withdraw(opt) {
		this.opt  = opt;
		this.initDom();
	}

	Withdraw.prototype.initDom = function() {
		var temp;

		this.button = new Button({
			id: 'withdraw-button',
			name: '立即提现',
			width: 128,
			height: 42
		});

		this.moneyInput = new Input({
			id: 'withdraw-input',
			width: 200,
			height: 30,
			reg: app.moneyReg
		});

		this.passwordInput = new Input({
			id: 'withdraw-pwd-input',
			width: 200,
			height: 30,
			reg: '',
			type: 'password'
		});

		temp 	= 	'<div class="withdraw grzx-money-action">' +
						'<div class="title">' +
							'<div class="left">' +
								'<span class="text">尊敬的</span>' +
								'<span class="username value">' + app.userTotalInfo.UserName + '</span>' +
								'<span class="text">，目前账户可用提现余额：</span>' +
								'<span class="balance value">' + app.userTotalInfo.Cash + '</span>' +
								'<span class="text">元</span>' +
							'</div>' +

							// '<div class="right">' +
							// 	'<span class="text">今日提现次数：</span>' +
							// 	'<span class="withdraw-times value">5/5</span>' +
							// '</div>' +

							'<div class="clear"></div>' +
						'</div>' +

						'<div class="content">' +
							'<div class="row1">' +
								'<div class="title">请选择收款银行卡</div>' +
								'<ul class="user-banks"></ul>' +
							'</div>' +

							'<div class="row2">' +
								'<div class="text">提现金额</div>' +
								this.moneyInput.getDom() +
								'<div class="text unit">元</div>' +
								'<div class="input-notice">' +
									'<span>单次提现额度限定： 最低</span>' +
									'<span class="min-single-withdraw">' +
										app.userTotalInfo.SingleMinWithdraw +
									'</span>' +
									'<span>元，最高</span>' +
									'<span class="max-single-withdraw">' +
										app.userTotalInfo.SingleMaxWithdraw +
									'</span>元' +
								'</div>' +
							'</div>' +

							'<div class="row21">' +
								'<div class="text">取款密码</div>' +
								this.passwordInput.getDom() +
							'</div>' +

							'<div class="row3">' +
								this.button.getDom() +
							'</div>' +
						'</div>' +
					'</div>';

		this.el = temp;
	}

	Withdraw.prototype.addCardItem = function(data, index) {
		var i;
		var temp;
		var cssName;
		var bankName   =  data.Bank.BankName;
		var accountLen =  data.AccountNo.length;
		var tailnumber =  data.AccountNo.substring(accountLen - 4);
		var nameLen    =  data.AccountName.length;
		var tailname   =  data.AccountName[nameLen - 1];
		var cardId     =  data.Bank.Id;

		var nameStart  =  '';

		for (i = 0; i < nameLen - 1; i++) {
			nameStart += '*';
		}

		// for (i = 0; i < app.bankList.length; i++) {
		// 	if (app.bankList[i].id == data.Bank.Id) {
		// 		cssName = app.bankList[i].CssName;
		// 		break;
		// 	}
		// }

		temp 	=	'<li ' + ((index === 0)?'class="selected" ' : '') + 'data-index="' + index + '">' +
						'<input type="radio" name="withdrawBankRidio">' +
						'<div class="logo text">' +
							//'<img class="bankLogo ' + cssName + '" src="../img/bankLogo.jpg">' +
							bankName +
						'</div>' +
						'<span class="text">尾号：****</span>' +
						'<span class="value tailnumber">' + tailnumber + '</span>' +
						'<span class="text">[' + nameStart + '</span>' +
						'<span class="value tailname">' + tailname +'</span>' +
						'<span class="text">]</span>' +
						'<div class="card-overlay"></div>' +
					'</li>';

		this.zone.find('.user-banks').append(temp);
	}

	Withdraw.prototype.getDom = function() {
		return this.el;
	}

	Withdraw.prototype.show = function() {
		this.zone.show();

		if (!this.firstTime) {
			this.getUserBankList();
			this.firstTime = true;
		}
	};

	Withdraw.prototype.hide = function() {
		this.zone.hide();
	};

	Withdraw.prototype.getUserBankList = function() {
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

	Withdraw.prototype.submit = function() {
		var i;
		var callback;
		var opt;
		var that  = this;
		var index = this.zone.find('.user-banks li.selected').attr('data-index');

		if (!this.moneyInput.isPass()) {
			alert('格式不对');
			return;
		}

		opt = {
			url: app.urls.withdraw,
			data: {
				BankAccountId: that.userBanks[index].Id,
				Amount: this.moneyInput.getValue(),
				WithdrawPwd: this.passwordInput.getValue()
			}
		};

		callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				alert(json.Message);
				return;
			}

			if (json.Success === true) {
				alert('取款成功');
				that.moneyInput.setValue('');
				that.passwordInput.setValue('');
			} else {
				alert('取款失败');
			}
		};

		Service.post(opt, callback);
	};
	
	Withdraw.prototype.bindEvents = function() {
		var row1Ul;
		var that = this;

		this.zone = $('.withdraw');

		row1Ul = this.zone.find('.content .row1');

		row1Ul.delegate('li','click',function(){
			row1Ul.find('li').removeClass('selected');
			$(this).addClass('selected');
			row1Ul.find('input[type="radio"]').attr('checked',false);
			$(this).find('input[type="radio"]').attr('checked',true);
		});

		this.zone.find('#withdraw-button').click(function () {
			that.submit();
		});

		this.button.bindEvents();
		this.moneyInput.bindEvents();
		this.passwordInput.bindEvents();
	}

	window.Withdraw = Withdraw;
}());