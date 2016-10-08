(function () {
	function SportsCompetition () {
		this.initDom();
	}
	
	SportsCompetition.prototype.initDom = function () {
		var temp =	'<div class="page sports-competition">' +
						'<div class="wrapper">' +
							'<div class="row1">' +
								'<img class="item" src="">' +
							'</div>' +

							'<div class="row2">' +
								'<div class="sbty">' +
									'<img class="item" src="">' +
								'</div>' +

								'<div class="threedty">' +
									'<img class="item" src="">' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>';
		
		this.el  = temp;
	};

	SportsCompetition.prototype.getDom = function () {
		return this.el;
	};

	SportsCompetition.prototype.show = function () {
		this.zone.fadeIn(500);

		if (!this.firstTime) {
			this.getAds();
			this.firstTime = true;
		}
	};

	SportsCompetition.prototype.hide = function () {
		this.zone.fadeOut(500);
	};

	SportsCompetition.prototype.setImages = function (data) {
		var i;
		var len       = data.count;
		var arr       = data.list;
		var imgs      = this.zone.find('img');
		var platforms = ['BBIN', 'T188', 'IBC'];

		for (i = 0; i < imgs.length; i++) {
			$(imgs[i]).attr({
				'src': app.imageServer + arr[i].ImgUrl,
				'data-platform': platforms[i]
			});
		}
	};

	SportsCompetition.prototype.getAds = function () {
		var callback;
		var that    =  this;
		var opt     =  {
			url: app.urls.getAds,
			data: {
				type: 'pd_wyb_sports_ads',
				pageIndex: 0,
				pageSize: 10
			}
		};

		callback = function (data) {
			if (!data) {
				return;
			}

			that.setImages(data);
		};

		Service.get(opt, callback);
	};

    SportsCompetition.prototype.getGameLoginUrl = function (platform) {
    	var that = this;
    	var opt =  {
			url: app.urls.getGameLoginUrl,
			data: {
				gamePlatform: platform,
				gameType: 'sport'
			}
		};
		
		var callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				alert(json.Message);
				return;
			}

			window.open(json);
		}

		Service.get(opt, callback);
    };

	SportsCompetition.prototype.bindEvents = function () {
		var platform;
		var that = this;

		this.zone = $('.sports-competition');

		this.zone.find('.item').click(function () {
			platform = $(this).attr('data-platform');

			if (app.signedIn) {
				that.getGameLoginUrl(platform);
			} else {
				app.showLoginNotice();
			}
		});
	};

	window.SportsCompetition = SportsCompetition;
}());
