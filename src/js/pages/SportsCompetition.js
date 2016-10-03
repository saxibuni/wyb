(function () {
	function SportsCompetition () {
		this.initDom();
	}
	
	SportsCompetition.prototype.initDom = function () {
		var temp =	'<div class="page sports-competition">' +
						'<div class="wrapper">' +
							'<div class="row1">' +
								'<img src="">' +
							'</div>' +

							'<div class="row2">' +
								'<div class="sbty">' +
									'<img src="">' +
								'</div>' +

								'<div class="threedty">' +
									'<img src="">' +
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
		var len  = data.count;
		var arr  = data.list;
		var imgs = this.zone.find('img');

		for (i = 0; i < imgs.length; i++) {
			$(imgs[i]).attr('src', app.imageServer + arr[i].ImgUrl );
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

	SportsCompetition.prototype.bindEvents = function () {
		this.zone = $('.sports-competition');

		this.zone.find('.sbty').click(function () {
			window.open('http://www.baidu.com');
		});

		this.zone.find('threedty').click(function () {
			window.open('http://www.baidu.com');
		});
	};

	window.SportsCompetition = SportsCompetition;
}());
