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
								this.createBankCards() +
								
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
								
								this.createBankCards() +

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
								
								this.createBankCards() +

								'<table>' +
									'<tbody>' +
										'<tr>' +
											'<td class="bank-name">收款银行</td>' +
											'<td>中国工商银行</td>' +
										'</tr>' +
										'<tr>' +
											'<td class="user-name">账户名</td>' +
											'<td>刘文慧</td>' +
										'</tr>' +
										'<tr>' +
											'<td class="account">收款账号</td>' +
											'<td>collowzuez99@sina.com</td>' +
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

	TopUp.prototype.createBankCards = function() {
		var temp = '<div class="bank-cards">' +
						'<div class="title">' +
							'请选择充值银行：' +
						'</div>' +

						'<ul>' +
							'<li data-value="zggsyh">' +
								'<input type="radio" name="bank" />' +
								'<img style="top: -32px;" src="../img/bankLogo.jpg">' +
							'</li>' +
							'<li data-value="zgjsyh">' +
								'<input type="radio" name="bank" />' +								
								'<img style="top: -130px;" src="../img/bankLogo.jpg">' +
							'</li>' +
							'<li data-value="jtyh">' +
								'<input type="radio" name="bank" />' +
								'<img style="top: -165px;" src="../img/bankLogo.jpg">' +
							'</li>' +
							'<li data-value="zgyh">' +
								'<input type="radio" name="bank" />' +
								'<img style="top: -98px;" src="../img/bankLogo.jpg">' +
							'</li>' +
							'<li data-value="zgnyyh">' +
								'<input type="radio" name="bank" />' +
								'<img style="top: -67px;" src="../img/bankLogo.jpg">' +
							'</li>' +
							'<li data-value="zsyh">' +
								'<input type="radio" name="bank" />' +
								'<img style="top: -428px;" src="../img/bankLogo.jpg">' +
							'</li>' +
							'<li data-value="pfyh">' +
								'<input type="radio" name="bank" />' +
								'<img style="top: -495px;" src="../img/bankLogo.jpg">' +
							'</li>' +
							'<li data-value="zgyzcxyh">' +
								'<input type="radio" name="bank" />' +
								'<img style="top: -195px;" src="../img/bankLogo.jpg">' +
							'</li>' +
						'</ul>' +
					'</div>' +

					'<div class="more-bank-cards">' +
						'<span>更多网银</span>' +
						'<img class="message-img" src="../img/sxl.png">' +
					'</div>';

		return temp;
	};

	TopUp.prototype.addBankCards = function() {
		var i;
		var temp =  '';

		for (i = 0; i < 8; i++) {
			temp += '<li data-value="zggsyh">' +
						'<input type="radio" name="bank" />' +
						'<img style="top: -32px;" src="../img/bankLogo.jpg">' +
					'</li>';
		}

		return temp;
	};

	TopUp.prototype.getDom = function() {
		return this.el;
	};

	TopUp.prototype.show = function() {
		this.zone.show();
	};

	TopUp.prototype.hide = function() {
		this.zone.hide();
	};

	TopUp.prototype.submit1 = function() {
		if (!this.topupInput.isPass()) {
			alert('格式不对');
		} else {
			window.open('http://www.baidu.com');
		}
	};

	TopUp.prototype.submit2 = function() {
		if (!this.topupInput2.isPass()) {
			alert('格式不对');
		} else {
			window.open('http://www.baidu.com');
		}
	};

	TopUp.prototype.submit3 = function() {
		if (!this.topupInput3.isPass()) {
			alert('格式不对');
		} else {
			window.open('http://www.baidu.com');
		}
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
		bankCardsUl  = this.zone.find('.bank-cards ul');

		row1Ul.delegate('li', 'click', function () {
			row1Ul.find('li').removeClass('selected');
			$(this).addClass('selected');

			contentName = $(this).attr('data-value');
			content.children('.content-item').hide();
			content.children('.' + contentName).show();
		});

		bankCardsUl.delegate('li','click',function(){
			bankCardsUl.find('li').removeClass('selected');
			$(this).addClass('selected');
			bankCardsUl.find('input[type="radio"]').attr('checked',false);
			$(this).find('input[type="radio"]').attr('checked',true);
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

		this.button.bindEvents();
		this.button2.bindEvents();
		this.button3.bindEvents();
		this.topupInput.bindEvents();
		this.topupInput2.bindEvents();
		this.topupInput3.bindEvents();
	};

	window.TopUp = TopUp;
}());