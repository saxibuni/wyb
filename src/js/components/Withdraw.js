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

		this.withdrawInput = new Input({
			id: 'withdraw-input',
			width: 200,
			height: 30,
			reg: app.moneyReg
		});

		temp 	= 	'<div class="withdraw grzx-money-action">' +
						'<div class="title">' +
							'<div class="left">' +
								'<span class="text">尊敬的</span>' +
								'<span class="username value">DOMO001</span>' +
								'<span class="text">，目前账户可用提现余额：</span>' +
								'<span class="balance value">9998.25</span>' +
								'<span class="text">元</span>' +
							'</div>' +

							'<div class="right">' +
								'<span class="text">今日提现次数：</span>' +
								'<span class="withdraw-times value">5/5</span>' +
							'</div>' +

							'<div class="clear"></div>' +
						'</div>' +

						'<div class="content">' +
							'<div class="row1">' +
								'<div class="title">请选择收款银行卡</div>' +

								'<ul>' +
									this.createCardItem(1) +
									this.createCardItem(2) +
								'</ul>' +
							'</div>' +

							'<div class="row2">' +
								'<div class="text">提现金额</div>' +
								this.withdrawInput.getDom() +
								'<div class="text unit">元</div>' +
								'<div class="input-notice">' +
									'充值额度限定： 最低100元，最高150000元' +
								'</div>' +
							'</div>' +

							'<div class="row3">' +
								this.button.getDom() +
							'</div>' +
						'</div>' +
					'</div>';

		this.el = temp;
	}

	Withdraw.prototype.createCardItem = function(index) {
		var top;
		var positions = {
			1: {
				top: '-32'
			},
			2: {
				top: '-130'
			}
		};

		top = positions[index].top;

		var temp =	'<li>' +
						'<input type="radio" name="withdrawBankRidio">' +
						'<div class="logo text">' +
							'<img style="top:' + top + 'px" src="../img/bankLogo.jpg">' +
						'</div>' +
						'<span class="text">尾号：****</span>' +
						'<span class="value tailnumber">8410</span>' +
						'<span class="text">[**</span>' +
						'<span class="value tailname">天</span>' +
						'<span class="text">]</span>' +
					'</li>';

		return temp;
	}

	Withdraw.prototype.getDom = function() {
		return this.el;
	}

	Withdraw.prototype.show = function() {
		this.zone.show();
	};

	Withdraw.prototype.hide = function() {
		this.zone.hide();
	};

	Withdraw.prototype.submit = function() {
		if (!this.withdrawInput.isPass()) {
			alert('格式不对');
		} else {
			window.open('http://www.baidu.com');
		}
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
		this.withdrawInput.bindEvents();
	}

	window.Withdraw = Withdraw;
}());