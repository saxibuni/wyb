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

		this.button2 = new Button({
			id: 'topup-button2',
			name: '下一步',
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

		this.topupInput2 = new Input({
			id: 'topup-input2',
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

		temp = 		'<div class="top-up grzx-money-action">' +
						'<div class="row1">' +
							'<ul>' +
								'<li data-value="fast-topup" class="selected">' +
									'<span>快捷支付</span>' +
								'</li>' +

								'<li data-value="superfast-topup">' +
									'<span>急速网银转账</span>' +
								'</li>' +

								'<li data-value="bank-topup">' +
									'<span>银行转账</span>' +
								'</li>' +
							'</ul>' +
						'</div>' +

						'<div class="content">' +
							'<div class="content-item fast-topup">' +
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
							'</div>' +

							'<div class="content-item superfast-topup">' +
								'<div class="row4">' +
									'<div class="text">充值金额</div>' +
									this.topupInput2.getDom() +
									'<div class="text unit">元</div>' +
									'<div class="input-notice">' +
										'充值额度限定： 最低2.00元，最高45000.00元' +
									'</div>' +
								'</div>' +

								'<div class="row5">' +
									this.button2.getDom() +
								'</div>' +
							'</div>' +

							'<div class="content-item bank-topup">' +
								
								//this.createBankCards() +
								'<select class="user-admin-banks-select">' +
								'</select>' +

								'<table>' +
									'<tbody>' +
										'<tr>' +
											'<td class="bank-name">收款银行</td>' +
											'<td class="bank-name-value">中国工商银行</td>' +
										'</tr>' +
										'<tr>' +
											'<td class="user-name">账户名</td>' +
											'<td class="user-name-value">刘文慧</td>' +
										'</tr>' +
										'<tr>' +
											'<td class="account">收款账号</td>' +
											'<td class="account-value">collowzuez99@sina.com</td>' +
										'</tr>' +
									'</tbody>' +
								'</table>' +

								'<div class="deposit-method">' +
									'<span class="title">存款方式</span>' +
									'<ul>' +
										'<li>' +
											'<input name="deposit-method" type="radio" id="topup-wyzz" checked="checked">' +
											'<label for="topup-wyzz">网银转账</label>' +
										'</li>' +
										'<li>' +
											'<input name="deposit-method" type="radio" id="topup-atm-autocounter">' +
											'<label for="topup-atm-autocounter">ATM自动柜员机</label>' +
										'</li>' +
										'<li>' +
											'<input name="deposit-method" type="radio" id="topup-atm-cash">' +
											'<label for="topup-atm-cash">ATM现金入款</label>' +
										'</li>' +
										'<li>' +
											'<input name="deposit-method" type="radio" id="topup-bank-counter">' +
											'<label for="topup-bank-counter">银行柜台</label>' +
										'</li>' +
										'<li>' +
											'<input name="deposit-method" type="radio" id="topup-mobile-bank">' +
											'<label for="topup-mobile-bank">手机银行</label>' +
										'</li>' +
									'</ul>' +
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
							'</div>' +
						'</div>' +
					'</div>';

		this.el = temp;
	};

	TopUp.prototype.getCardPosition = function(name) {
	};

	TopUp.prototype.setBankCards = function(data) {
		var that = this;
        var bankList = data.UserGroup.ThirdPays[0].BankList;
		var temp = '<div class="bank-cards">' +
						'<div class="title">' +
							'请选择充值银行：' +
						'</div>' +

						'<ul>';

        for (i = 0; i < bankList.length; i++) {
        	temp += 		'<li data-id="' + bankList[i].Id + '"' +
        						' data-code="' + bankList[i].BankCode + '"' + 
        						' data-name="' + bankList[i].BankName + '"' +
        						'>' +
								'<input type="radio" name="bank" />' +
								'<span class="bankLogo ' + bankList[i].CssName + '" src="../img/bankLogo.jpg"></span>' +
							'</li>';
        }

        temp += 		'</ul>' +
					'</div>';

					// '<div class="more-bank-cards">' +
					// 	'<span>更多网银</span>' +
					// 	'<img class="message-img" src="../img/sxl.png">' +
					// '</div>';

        this.zone.find('.fast-topup').prepend(temp);
        this.zone.find('.superfast-topup').prepend(temp);
        this.bindBankCardsEvents();
	};

	TopUp.prototype.getDom = function() {
		return this.el;
	};

	TopUp.prototype.show = function() {
		this.zone.show();

		if (!this.firstTime) {
			this.getUserPays();
			this.getUserAdminBank();
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
		var selectedBank = $("input[name='bank']:checked").parent('li');
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
		if (!this.topupInput2.isPass()) {
			alert('格式不对');
		}

		if (that.userPaysData.UserGroup.AutoPays.length < 1) {
			alert('你所在的组不能进行极速转账！');
			return;
		}
	};

	TopUp.prototype.submit3 = function() {
		if (!this.topupInput3.isPass()) {
			alert('格式不对');
		}


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

            that.userPaysData    = data;
            that.thirdPayMerCode = data.UserGroup.ThirdPays[0].MerCode;
            that.payPlatform     = data.UserGroup.ThirdPays[0].ThirdPayCode;
            that.setBankCards(data);
		};

		Service.get(opt, callback);
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

            that.banTopupInfo = data;
            that.createUserAdminUl(data);

            that.zone.find('.bank-topup table .bank-name-value').text(data[0].Bank.BankName);
            that.zone.find('.bank-topup table .user-name-value').text(data[0].AccountName);
            that.zone.find('.bank-topup table .account-value').text(data[0].Bank.AccountNo);
		};

		Service.get(opt, callback);
	};

	TopUp.prototype.bindBankCardsEvents = function() {
		var bankCardsUl  = this.zone.find('.bank-cards ul');

		bankCardsUl.delegate('li','click',function() {
			bankCardsUl.find('li').removeClass('selected');
			$(this).addClass('selected');
			bankCardsUl.find('input[type="radio"]').attr('checked',false);
			$(this).find('input[type="radio"]').attr('checked',true);
		});

		this.zone.find('.more-bank-cards').click(function () {
			ul = $(this).siblings('.bank-cards').children('ul');

			if ($(this).hasClass('full')) {
				ul.children('li:gt(7)').remove();
				$(this).removeClass('full');
				$(this).children('span').text('更多网银');
				$(this).children('img').removeClass('img-rotate');
			} else {
				ul.append(that.addBankCards());
				$(this).addClass('full');
				$(this).children('span').text('收起');
				$(this).children('img').addClass('img-rotate');
			}
		});
	};

	TopUp.prototype.bindEvents = function() {
		var row1Ul;
		var bankCardsUl;
		var content;
		var contentName;
		var ul;
		var verifyReg     = '^[0-9]{4}$';
		var inputEvents   = 'input';
		var that          = this;

		this.zone    = $('.top-up');
		content      = this.zone.find('.content');
		row1Ul       = this.zone.find('.row1 ul');
		

		row1Ul.delegate('li', 'click', function () {
			row1Ul.find('li').removeClass('selected');
			$(this).addClass('selected');

			contentName = $(this).attr('data-value');
			content.children('.content-item').hide();
			content.children('.' + contentName).show();
		});

		this.zone.find('#topup-button').click(function () {
			that.submit1();
		});

		this.zone.find('#topup-button2').click(function () {
			if (!that.submit2()) {
				return;
			}

			if (!that.topupConfirmDialog) {
				that.topupConfirmDialog = new TopupConfirmDialog();
				$('.app').append(that.topupConfirmDialog.getDom());
				that.topupConfirmDialog.bindEvents();
			}

			that.topupConfirmDialog.show();
		});

		this.zone.find('#topup-button3').click(function () {
			that.submit3();
		});

		this.button.bindEvents();
		this.button2.bindEvents();
		this.button3.bindEvents();
		this.topupInput.bindEvents();
		this.topupInput2.bindEvents();
		this.topupInput3.bindEvents();
	};

	window.TopUp = TopUp;
}());