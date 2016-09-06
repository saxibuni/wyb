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

		this.topupInput = new Input({
			id: 'topup-input',
			width: 200,
			height: 30
		});

		temp = 		'<div class="top-up grzx-money-action">' +
						'<div class="row1">' +
							'<ul>' +
								'<li class="selected">' +
									'<span>快捷支付</span>' +
								'</li>' +

								'<li>' +
									'<span>急速网银转账</span>' +
								'</li>' +

								'<li>' +
									'<span>银行转账</span>' +
								'</li>' +
							'</ul>' +
						'</div>' +

						'<div class="row2">' +
							'<div class="title">' +
								'请选择充值银行：' +
							'</div>' +

							'<ul>' +
								'<li data-value="zggsyh">' +
									'<img style="top: -32px;" src="../img/bankLogo.jpg">' +
								'</li>' +
								'<li data-value="zgjsyh">' +
									'<img style="top: -130px;" src="../img/bankLogo.jpg">' +
								'</li>' +
								'<li data-value="jtyh">' +
									'<img style="top: -165px;" src="../img/bankLogo.jpg">' +
								'</li>' +
								'<li data-value="zgyh">' +
									'<img style="top: -98px;" src="../img/bankLogo.jpg">' +
								'</li>' +
								'<li>' +
									'中国农业银行' +
								'</li>' +
								'<li>' +
									'招商银行' +
								'</li>' +
								'<li>' +
									'浦发银行' +
								'</li>' +
								'<li>' +
									'中国邮政储蓄银行' +
								'</li>' +
							'</ul>' +
						'</div>' +

						'<div class="row3">' +
							'<span>更多网银</span>' +
							'<img class="message-img" src="../img/sxl.png">' +
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

		this.el = temp;
	};

	TopUp.prototype.getCardPosition = function(name) {

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

	TopUp.prototype.bindEvents = function() {
		var row1Ul;
		this.zone = $('.top-up');

		row1Ul = this.zone.find('.row1 ul');

		row1Ul.delegate('li', 'click', function () {
			row1Ul.find('li').removeClass('selected');
			$(this).addClass('selected');
		});

		this.button.bindEvents();
		this.topupInput.bindEvents();
	};

	window.TopUp = TopUp;
}());