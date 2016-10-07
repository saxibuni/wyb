(function () {
	function TopUp(opt) {
		this.opt  = opt;
		this.initDom();
	}

	TopUp.prototype.initDom = function() {
		var temp;

		this.button = new Button({
			id: 'topup-button',
			name: '立即充值',
			width: 128,
			height: 42
		});

		this.button3 = new Button({
			id: 'topup-button3',
			name: '提交订单',
			width: 128,
			height: 42
		});

		this.topupInput = new Input({
			id: 'topup-input',
			width: 200,
			height: 30,
			reg: app.moneyReg
		});

		this.topupInput3 = new Input({
			id: 'topup-input3',
			width: 200,
			height: 30,
			reg: app.moneyReg
		});

		this.bankBranchInput = new Input({
			id: 'topup-bank-branch-input',
			width: 200,
			height: 35
		});

		this.selectProvince = new Select({
			id: 'topup-province',
			width: 100,
			height: 36,
			data:[
				{
					'text': '省',
					'value': '-1'	
				}
			]
		});

		this.selectCity = new Select({
			id: 'topup-city',
			width: 100,
			height: 36,
			data:[
				{
					'text': '市',
					'value': '-1'	
				}
			]
		});

		temp = 		'<div class="top-up grzx-money-action">' +
						'<div class="row1">' +
							'<ul class="deposit-types"></ul>' +
						'</div>' +

						'<div class="content"></div>' +
					'</div>';

		this.el = temp;
	};

	TopUp.prototype.getDom = function() {
		return this.el;
	};

	TopUp.prototype.show = function() {
		this.zone.show();

		if (!this.firstTime) {
			this.getUserPays();
			this.firstTime = true;
		}
	};

	TopUp.prototype.hide = function() {
		this.zone.hide();
	};

	TopUp.prototype.createUserAdminUl = function(data) {
		var i;
		var temp = '';

		for (i = 0; i < data.length; i++) {
			temp += '<option>' +
						data[i].Bank.BankName + ', ' + data[i].AccountName + ', ' + data[i].AccountNo + 
					'</option>';
		}

		this.zone.find('.user-admin-banks-select').append(temp);
	};

	TopUp.prototype.submit1 = function() {
		if (!this.topupInput.isPass()) {
			alert('格式不对');
		}

		var i;
		var callback;
		var selectedBank = this.zone.find("input[name='bank']:checked").parent('li');
		var that = this;
		var opt  = {
			url: app.urls.payForm,
			data: {
				Amount: this.topupInput.getValue(),
				UserName: app.userinfo.userName,
				PayPlatform: that.payPlatform,
				PayMerCode: that.thirdPayMerCode,
	            PayBankCode: selectedBank.attr('data-code'),
	            PayBankName: selectedBank.attr('data-name')
			}
		};

		callback = function (data) {
            var payWin = window.open("", "payWin");

            if (!payWin) {
                alert('请在浏览口中设置允许本网站的弹出式窗口');
                return;
            }

            payWin.document.write(data.Data);
            payWin.document.close();  // 弹出提示层
		};

		Service.post(opt, callback);
	};

	TopUp.prototype.submit2 = function() {
		var selectedBank = this.zone.find("input[name='bank']:checked").parent('li');

		if (!this.topupInput.isPass()) {
			alert('格式不对');
			return;
		}

		if (!this.topupConfirmDialog) {
			this.topupConfirmDialog = new TopupConfirmDialog();
			$('.app').append(this.topupConfirmDialog.getDom());
			this.topupConfirmDialog.bindEvents();
		}

		this.topupConfirmDialog.show({
			Amount: this.topupInput.getValue(),
			UserName: app.userinfo.userName,
			PayPlatform: this.payPlatform,
			PayMerCode: this.thirdPayMerCode,
            PayBankCode: selectedBank.attr('data-code'),
            PayBankName: selectedBank.attr('data-name')
		});
	};

	TopUp.prototype.submit3 = function() {
		if (!this.topupInput3.isPass()) {
			alert('格式不对');
			return;
		}

		var i;
		var callback;
		var transType = this.zone.find('input[name="deposit-method"]:checked').attr('data-value');
		var that      = this;
		var opt       = {
			url: app.urls.addDeposit,
			data: {
				UserName: app.userinfo.userName,
				TrueName: app.userinfo.trueName,
				BankId: this.zone.find('.bank-topup table .account-value').text(),
				Amount: this.topupInput3.getValue(),
				DepositType: 0,
				TransType: transType
			}
		};

		if (transType == 2 || transType == 3 || transType == 4) {
			opt.data.Province = this.selectProvince.getValue();
			opt.data.City     = this.selectCity.getValue();
			opt.data.Address  = this.bankBranchInput.getValue();
		}

		callback = function (data) {
			if (data.StatusCode && data.StatusCode != 0) {
				alert(data.Message);
				return;
			}
		};

		Service.post(opt, callback);
	};

	TopUp.prototype.getUserPays = function () {
		var i;
		var callback;
		var that = this;
		var opt  = {
			url: app.urls.getUserPays,
			data: {}
		};

		callback = function (data) {
            if (data && data.StatusCode) {
                alert(data.Message);
                return;
            }

            that.setDepositTypes(data);
            that.userPaysData    = data;
            that.thirdPayMerCode = data.UserGroup.ThirdPays[0].MerCode;
            that.payPlatform     = data.UserGroup.ThirdPays[0].ThirdPayCode;
            that.setThirdAndAutoContent(data.UserGroup.ThirdPays[0].BankList);
		};

		Service.get(opt, callback);
	};

	TopUp.prototype.setThirdAndAutoContent = function (bankList) {
		var temp ='';
		var that = this;

		temp +=		'<div class="content-item">' +
						'<div class="bank-cards">' +
							'<div class="title">' +
								'请选择充值银行：' +
							'</div>' +

							'<ul>';

        for (i = 0; i < bankList.length; i++) {
        	temp += 			'<li data-id="' + (this.depositType==='ThirdPays'? bankList[i].Id: bankList[i].ID) + '"' +
	        						' data-code="' + bankList[i].BankCode + '"' + 
	        						' data-name="' + (this.depositType==='ThirdPays'? bankList[i].BankName: bankList[i].Name) + '"' +
	        						'>' +
									'<input type="radio" name="bank" />' +
									'<span class="bankLogo ' + bankList[i].CssName + '" src="../img/bankLogo.jpg"></span>' +
								'</li>';
        }

	    temp += 			'</ul>' +
						'</div>' +

						'<div class="row4">' +
							'<div class="text">充值金额</div>' +
							this.topupInput.getDom() +
							'<div class="text unit">元</div>' +
							'<div class="input-notice">' +
								'充值额度限定： 最低2.00元，最高45000.00元' +
							'</div>' +
						'</div>' +

						'<div class="row5">' +
							this.button.getDom() +
						'</div>' +
					'</div>';

		this.zone.find('.content').html(temp);
		this.bindOtherTransferEvents();
	};

	TopUp.prototype.setBankContent = function () {
		var temp = '';

		temp += '<div class="content-item bank-topup">' +
					'<select class="user-admin-banks-select">' +
					'</select>' +

					'<table>' +
						'<tbody>' +
							'<tr>' +
								'<td class="bank-name">收款银行</td>' +
								'<td class="bank-name-value"></td>' +
							'</tr>' +
							'<tr>' +
								'<td class="user-name">账户名</td>' +
								'<td class="user-name-value"></td>' +
							'</tr>' +
							'<tr>' +
								'<td class="account">收款账号</td>' +
								'<td class="account-value"></td>' +
							'</tr>' +
						'</tbody>' +
					'</table>' +

					'<div class="deposit-method">' +
						'<span class="title">存款方式</span>' +
						'<ul>' +
							'<li>' +
								'<input name="deposit-method" type="radio" id="topup-wyzz" data-value="1" checked="checked">' +
								'<label for="topup-wyzz">网银转账</label>' +
							'</li>' +
							'<li>' +
								'<input name="deposit-method" type="radio" id="topup-atm-autocounter" data-value="2">' +
								'<label for="topup-atm-autocounter">ATM自动柜员机</label>' +
							'</li>' +
							'<li>' +
								'<input name="deposit-method" type="radio" id="topup-atm-cash" data-value="3">' +
								'<label for="topup-atm-cash">ATM现金入款</label>' +
							'</li>' +
							'<li>' +
								'<input name="deposit-method" type="radio" id="topup-bank-counter" data-value="4">' +
								'<label for="topup-bank-counter">银行柜台</label>' +
							'</li>' +
							'<li>' +
								'<input name="deposit-method" type="radio" id="topup-mobile-bank" data-value="5">' +
								'<label for="topup-mobile-bank">手机银行</label>' +
							'</li>' +
						'</ul>' +
					'</div>' +

					'<div class="payment-counter">' +
						'<div class="text">银行所属支行</div>' +
						this.selectProvince.getDom() +
						this.selectCity.getDom() +
						this.bankBranchInput.getDom() +
					'</div>' +

					'<div class="row4">' +
						'<div class="text">充值金额</div>' +
						this.topupInput3.getDom() +
						'<div class="text unit">元</div>' +
						'<div class="input-notice">' +
							'充值额度限定： 最低2.00元，最高45000.00元' +
						'</div>' +
					'</div>' +

					'<div class="row5">' +
						this.button3.getDom() +
					'</div>' +
				'</div>';

		this.zone.find('.content').html(temp);
		this.getUserAdminBank();
		this.bindBankTransferEvents();
	};

	TopUp.prototype.setDepositTypes = function (data) {
		var i;
		var alipay     = null;
		var wechat     = null;
		var temp       = '';
		var thirdPays  = data.UserGroup.ThirdPays;
		var autoPays   = data.UserGroup.AutoPays;
		var adminBanks = data.UserGroup.AdminBanks;

		for (i = 0; i < thirdPays.length; i++) {
			temp += '<li ' + (i == 0?' class="selected"': '') + 'data-id="' + thirdPays[i].Id + '" data-type="ThirdPays" data-index="' + i + '">' +
						'<span>' +
							thirdPays[i].MerName +
						'</span>' +
					'</li>';
		}

		for (i = 0; i < autoPays.length; i++) {
			if (autoPays[i].CustId.replace("-", "") == "DADDYPAYCARD") {
				temp += '<li data-type="AutoPays" data-index="' + i + '">' +
							'<span>' +
								autoPays[i].CustName +
							'</span>' +
						'</li>';
			}
		}

		for (i = 0; i < adminBanks.length; i++) {
            if (wechat == null && adminBanks[i].Type == 0) {
                wechat = adminBanks[i];
            }

            if (alipay == null && adminBanks[i].Type == 2) {
                alipay = adminBanks[i];
            }
		}

        if (alipay != null) {
			temp += '<li>' +
						'<span>' +
							'支付宝' +
						'</span>' +
					'</li>';
        }

        if (wechat != null) {
			temp += '<li>' +
						'<span>' +
							'微信' +
						'</span>' +
					'</li>';
        }

		temp +=	'<li data-value="bank-topup" data-type="bank-pay">' +
					'<span>银行转账</span>' +
				'</li>';

		this.zone.find('.deposit-types').html(temp);
		this.bindDepositTypesEvents();
	};

	TopUp.prototype.getUserAdminBank = function () {
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
            that.createUserAdminUl(data);
            that.zone.find('.bank-topup table .bank-name-value').text(data[0].Bank.BankName);
            that.zone.find('.bank-topup table .user-name-value').text(data[0].AccountName);
            that.zone.find('.bank-topup table .account-value').text(data[0].AccountNo);
		};

		Service.get(opt, callback);
	};

	TopUp.prototype.createProvinceUl = function(data) {
		var i;
		var temp = '';

		for (i = 0; i < data.length; i++) {
			temp += '<option data-value="' + data[i].Id + '">' +
						data[i].Name +
					'</option>';
		}

		this.selectProvince.setOptions(temp);
	};

	TopUp.prototype.createCityUl = function(data) {
		var i;
		var temp = '';

		for (i = 0; i < data.length; i++) {
			temp += '<option data-value="' + data[i].Id + '">' +
						data[i].Name +
					'</option>';
		}

		this.selectCity.setOptions(temp);
	};

	TopUp.prototype.getProvinceList = function() {
		var callback;
		var that    =  this;
		var opt     =  {
			url: app.urls.getProvinceList,
			data: {}
		};

		callback = function (data) {
			if (!data) {
				return;
			}

			that.createProvinceUl(data);
		};

		Service.get(opt, callback);
	};

	TopUp.prototype.getCityList = function(provinceId) {
		var callback;
		var that    =  this;
		var opt     =  {
			url: app.urls.getCityList,
			data: {
				provinceId: provinceId
			}
		};

		callback = function (data) {
			if (!data) {
				return;
			}

			that.createCityUl(data);
		};

		Service.get(opt, callback);
	};
	
	TopUp.prototype.bindOtherTransferEvents = function() {
		var that         = this;
		var bankCardsUl  = this.zone.find('.bank-cards ul');
		var button       = this.zone.find('#topup-button');

		bankCardsUl.delegate('li','click',function() {
			bankCardsUl.find('li').removeClass('selected');
			$(this).addClass('selected');
			bankCardsUl.find('input[type="radio"]').attr('checked',false);
			$(this).find('input[type="radio"]').attr('checked',true);
		});

		button.click(function () {
			if (that.depositType === 'ThirdPays') {
				that.submit1();
			} else {
				that.submit2();
			}
		});

		this.button.bindEvents();
		this.topupInput.bindEvents();
	};

	TopUp.prototype.bindBankTransferEvents = function() {
		var methodId;
		var that = this;

		this.zone.find('#topup-button3').unbind('click').click(function () {
			that.submit3();
		});

		this.zone.find('#topup-province').change(function () {
			that.getCityList(that.selectProvince.getValue());
		});

		this.zone.find('input[name="deposit-method"]').click(function () {
			methodId = $(this).attr('id');
			
			if (methodId === 'topup-wyzz' || methodId === 'topup-mobile-bank') {
				that.zone.find('.payment-counter').hide();
			} else {
				that.zone.find('.payment-counter').show();
			}
		});

		this.button3.bindEvents();
		this.topupInput3.bindEvents();
		this.bankBranchInput.bindEvents();
		this.selectProvince.bindEvents();
		this.selectCity.bindEvents();
	};

	TopUp.prototype.bindDepositTypesEvents = function() {
		var row1Ul;
		var content;
		var contentName;
		var type;
		var index;
		var bankList;
		var methodId;
		var verifyReg     = '^[0-9]{4}$';
		var inputEvents   = 'input';
		var that          = this;

		row1Ul  = this.zone.find('.row1 ul');
		content = this.zone.find('.content');
		
		row1Ul.children('li').unbind('click').click(function () {
			row1Ul.find('li').removeClass('selected');
			$(this).addClass('selected');

			contentName = $(this).attr('data-value');
			content.children('.content-item').hide();
			content.children('.' + contentName).show();

			if (contentName === 'bank-topup') {
				if (!that.bankTopupFirstTime) {
					that.getProvinceList();
					that.bankTopupFirstTime = false;
				}
			}

			type = $(this).attr('data-type');
			that.depositType = type;

			if (type === 'ThirdPays') {
				index    = $(this).attr('data-index');
				bankList = that.userPaysData.UserGroup[type][index].BankList;
				that.setThirdAndAutoContent(bankList);
			} else if (type === 'AutoPays') {
				index    = $(this).attr('data-index');
				bankList = that.userPaysData.UserGroup[type][index].ThirdPayPlatformBanks;
				that.setThirdAndAutoContent(bankList);
			} else {
				that.setBankContent();
			}
		});
	};

	TopUp.prototype.bindEvents = function() {
		this.zone    = $('.top-up');
	};

	window.TopUp = TopUp;
}());