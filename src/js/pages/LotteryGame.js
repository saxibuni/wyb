(function () {
	function LotteryGame () {
		this.firstSignedQuery = true;
		this.initDom();
	}
	
	LotteryGame.prototype.initDom = function () {
		var temp =	'<div class="page lottery-game">' +
						'<div class="wrapper">' +
							'<div class="item">' +
								'<div class="up">' +
									'<div class="left">'+
										'<div class="row1">' +
											'<div class="lottery-icon keno-icon"></div>' +
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

									'<div class="right"></div>' +
								'</div>' +

								'<div class="down">' +
									this.createLotteryItem(1) +
								'</div>' +
							'</div>' +

							'<div class="item">' +
								'<div class="up">' +
									'<div class="left">' +
										'<div class="row1">' +
											'<div class="lottery-icon bbin-icon"></div>' +
										'</div>' +

										'<div class="row2">' +
											'<div class="text">' +
												'BBIN成立于1999年，为亚洲具代表地位的网络博彩娱乐集团，' +
												'致力于在线博弈游戏软件研发并提供整合平台服务' +
											'</div>' +
										'</div>' +

										'<div class="row3">' +
											'<div class="button">' +
												'立即投注' +
											'</div>' +
										'</div>' +
									'</div>' +

									'<div class="right"></div>' +
								'</div>' +

								'<div class="down">' +
									this.createLotteryItem(2) +
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
		this.zone.fadeIn(500);

		if (this.firstSignedQuery && app.signedIn) {
			this.getGameLoginUrls();
			this.firstSignedQuery = false;
		}
	};

	LotteryGame.prototype.hide = function () {
		this.zone.fadeOut(500);
	};

	LotteryGame.prototype.createLotteryItem = function (type) {
		var i;
		var arr;
		var temp = '';
		var dict = {
			1: ['KENO真人彩票', 'KENO时时彩', 'KENO分分彩', '重庆时时彩', 
				'北京PK10',     '新疆时时彩', '广东11选5',  '江西11选5'],
			2: ['BBIN真人彩票', 'BBIN时时彩', 'BBIN分分彩', 'BBIN秒秒彩',
				'重庆时时彩',   '北京PK10',   '新疆时时彩', '广东11选5', '江西11选5']
		};

		arr = dict[type];

		temp +=	'<ul class="down">';

		for (i = 0; i < arr.length; i++) {
			temp +=	'<li>' + arr[i] + '</li>';
		}

		temp +=	'</ul>';

		return temp;
	};

	LotteryGame.prototype.getGameLoginUrls = function () {
		var i;
		var platforms = ['KG', 'BBIN'];
		var imgs      = this.zone.find('.button');
		
		for (i = 0; i < platforms.length; i++) {
			this.getGameLoginUrl(platforms[i], $(imgs[i]));
		}
	};

    LotteryGame.prototype.getGameLoginUrl = function (platform, item) {
    	var that = this;
    	var opt =  {
			url: app.urls.getGameLoginUrl,
			data: {
				gamePlatform: platform,
				gameType: 'lottery'
			}
		};
		
		var callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				alert(json.Message);
				return;
			}

			item.attr('data-url', json);
		}

		Service.get(opt, callback);
    };

	LotteryGame.prototype.bindEvents = function () {
		var url;
		var that = this;

		this.zone = $('.lottery-game');

		this.zone.find('.item .button').click(function () {
			url = $(this).attr('data-url');

			if (!app.signedIn) {
				app.showLoginNotice();
				return;
			}

			if (!url) {
				return;
			}

			window.open(url);
		});
	};

	window.LotteryGame = LotteryGame;
}());
