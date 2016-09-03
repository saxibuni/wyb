(function () {
	function LotteryGame () {
		this.initDom();
	}
	
	LotteryGame.prototype.initDom = function () {
		var temp =	'<div class="page lottery-game">' +
						'<div class="wrapper">' +
							'<div class="content1">' +
								'<div class="left">' +
									'<div class="row1">' +
										'<img src="../img/keno-logo.png">' +
									'</div>' +

									'<div class="row2">' +
										'<div class="text">' +
											'KENO拥有专业的游戏研发及顶尖的设计团队为后盾，' +
											'团队不间断的运用创新技术，逐渐构建亚洲最大的网络博彩娱乐事业体' +
										'</div>' +
									'</div>' +

									'<div class="row3">' +
										'<div class="button">' +
											'立即投注' +
										'</div>' +
									'</div>' +
								'</div>' +

								'<div class="right">' +

								'</div>' +
							'</div>' +

							'<div class="content2">' +
								'<div class="left">' +
								'</div>' +

								'<div class="right">' +
									'<div class="row1">' +
										'<img src="../img/bbin-normal.png">' +
										'<span>彩票</span>' +
									'</div>' +

									'<div class="row2">' +
										'<div class="text">' +
											'BBIN成立于1999年，为亚洲最具代表地位的网络博彩娱乐集团，' +
											'在线博弈游戏软件研发并提供整合平台服务' +
										'</div>' +
									'</div>' +

									'<div class="row3">' +
										'<div class="button">' +
											'立即投注' +
										'</div>' +
									'</div>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>';
		
		this.el  = temp;
	};

	LotteryGame.prototype.getDom = function () {
		return this.el;
	};

	LotteryGame.prototype.show = function () {
		this.zone.show();
	};

	LotteryGame.prototype.hide = function () {
		this.zone.hide();
	};

	LotteryGame.prototype.bindEvents = function () {
		this.zone = $('.lottery-game');
	};

	window.LotteryGame = LotteryGame;
}());
