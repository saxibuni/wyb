(function () {
	function LotteryGame () {
		this.initDom();
	}
	
	LotteryGame.prototype.initDom = function () {
		var temp =	'<div class="page lottery-game">' +
						'<div class="wrapper">' +
							'彩票游' +
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
