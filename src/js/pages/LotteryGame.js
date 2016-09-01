(function () {
	function LotteryGame () {
		this.initDom();
	}
	
	LotteryGame.prototype.initDom = function () {
		var temp =	'<div class="page lottery-game">' +
						'<div class="wrapper">' +
							'我是Page内容' +
						'</div>' +
					'</div>';
		
		this.el  = temp;
	};

	LotteryGame.prototype.getDom = function () {
		return this.el;
	};

	LotteryGame.prototype.show = function () {
	};

	LotteryGame.prototype.hide = function () {
	};

	LotteryGame.prototype.bindEvents = function () {
	};

	window.LotteryGame = LotteryGame;
}());
