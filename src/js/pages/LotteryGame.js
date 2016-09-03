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
									this.createLotteryItem(1) +
								'</div>' +
							'</div>' +

							'<div class="content2">' +
								'<div class="left">' +
									this.createLotteryItem(2) +
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

	LotteryGame.prototype.createLotteryItem = function (type) {
		var i;
		var data;
		var temp;
		var dict = {
			1: [
				{
					'subtitle': 'BBIN',
					'title': '秒秒彩'
				},
				{
					'subtitle': 'BBIN',
					'title': '分分彩'
				},
				{
					'subtitle': 'BBIN',
					'title': '五分彩'
				},
				{
					'subtitle': '江西',
					'title': '11选5'
				},
				{
					'subtitle': '北京',
					'title': 'PK10'
				},
				{
					'subtitle': '3D',
					'title': '福彩'
				}
			],
			
			2: [
				{
					'subtitle': '新疆',
					'title': '时时彩'
				},
				{
					'subtitle': 'BBIN',
					'title': '秒秒彩'
				},
				{
					'subtitle': 'BBIN',
					'title': '分分彩'
				},
				{
					'subtitle': '广东',
					'title': '11选5'
				},
				{
					'subtitle': '江西',
					'title': '11选5'
				},
				{
					'subtitle': '北京',
					'title': 'PK10'
				}
			]
		}

		data = dict[type];
		temp =	'<table>' +
					'<tbody>';

		for (i = 0; i < data.length; i++) {
			if (i === 0 || i === 3) {
				temp +=	'<tr>' +
							'<td>' +
								'<div class="item">' +
									'<i class="subtitle">' +
										data[i].subtitle +
									'</i>' +
									'<i class="title">' +
										data[i].title +
									'</i>' +
								'</div>' +
							'</td>';
			} else if (i === 2 || i === 5) {
				temp +=	    '<td>' +
								'<div class="item">' +
									'<i class="subtitle">' +
										data[i].subtitle +
									'</i>' +
									'<i class="title">' +
										data[i].title +
									'</i>' +
								'</div>' +
							'</td>' +
						'</tr>';
			} else {
				temp +=	    '<td>' +
								'<div class="item">' +
									'<i class="subtitle">' +
										data[i].subtitle +
									'</i>' +
									'<i class="title">' +
										data[i].title +
									'</i>' +
								'</div>' +
							'</td>';
			}
		}

		temp +=		'</tbody>' +
				'</table>';

		return temp;
	};

	LotteryGame.prototype.bindEvents = function () {
		this.zone = $('.lottery-game');
	};

	window.LotteryGame = LotteryGame;
}());
