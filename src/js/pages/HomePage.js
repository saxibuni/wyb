(function () {
	function HomePage () {
		this.initDom();
	}
	
	HomePage.prototype.initDom = function () {
		this.suspension = new Suspension();

		this.notice = new Notice2({
			id: 'home-page-notice',
			hasBtn: false
		});

		var temp = 	'<div class="page home-page">' +
						'<div class="wrapper">' +
							'<div class="sliders"></div>' +

							'<div class="content">' +
							'</div>' +
						'</div>' +
						
						this.suspension.getDom() +
					'</div>';

		this.el  = temp;
	};

	HomePage.prototype.getDom = function () {
		return this.el;
	};

	HomePage.prototype.setLuckyDrawItems = function (data) {
		var i;
		var temp = '';
		var data = {
			name: 'dong62192******',
			gift: 'Macbook Pro'
		};

		for (i = 0; i < 100; i++) {
			temp += this.createLuckyDrawItem(data);
		}

		this.zone.find('.lucky-draw-tbody').html($(temp));
	};

	HomePage.prototype.createLuckyDrawItem = function (data) {
		var temp =	'<div class="tr">' +
						'<span class="td1">' +
							data.name +
						'</span>' +
						'<span class="td2">' +
							data.gift +
						'</span>' +
					'</div>';

		return temp;
	};

	HomePage.prototype.show = function () {
		this.zone.fadeIn(500);
		this.getAds();
		// this.setPtSumBaseValue();
		// if (app.signedIn) {
		// 	this.getLuckyDrawWinRecords();
		// }
	};

	HomePage.prototype.hide = function () {
		this.zone.fadeOut(500);
	};

    HomePage.prototype.createLoader = function() {
        var wrapper1 = this.zone.find('.sliders')[0];
        this.loader1 = new Loader(wrapper1, {
        	top: '35%'
        });
    };

    HomePage.prototype.setJackpotValue = function () {
    	this.zone.find('.pt-jackpot-value').text('509,456,228.88');
    };

	HomePage.prototype.getPtJackpot = function () {
		var that = this;

		var callback = function (data) {
			that.loader1.stop();
			that.setJackpotValue(data);
		};

		this.loader1.play();
		app.getJackpotsGames(callback.bind(this));
	};

	HomePage.prototype.getLuckyDrawWinRecords = function () {
		var url;
		var that = this;
		var today = new Date();

		this.loader2.play();

		today = today.formatDate();
		url  = 	app.urls.luckyDrawWinRecords +
				'?beginTime=20150101&endTime=' + today + 
				'&status=1&pageIndex=0&pageSize=4';

        $.ajax({
            type: 'GET',
            url: url,
            dataType: 'json',
            timeout: app.timeout,
            xhrFields: {
            	withCredentials: true
            }
        }).done(function (json) {
        	that.loader2.stop();
			if (json.StatusCode && json.StatusCode != 0) {
				alert(json.Message);
				return;
			}
        	that.setLuckyDrawItems(json.Data);
        }).fail(function (xhr, testStatus, error) {
            alert(error);
        });
	};

	HomePage.prototype.getAds = function () {
		var callback;
		var that    =  this;
		var opt     =  {
			url: app.urls.getAds,
			data: {
				type: 'pd_wyb_index_ads',
				pageIndex: 0,
				pageSize: 10
			}
		};

		this.loader1.play();
		callback = function (data) {
			if (!data) {
				return;
			}
			debugger
			that.addSliders(data);
			this.loader1.stop();
		};

		Service.get(opt, callback);
	};

	HomePage.prototype.setPtSumBaseValue = function () {
		var callback;
		var that =  this;
		var opt  =  {
			url: app.urls.getJackpotsByUrl,
	        data: {
	        	'': app.urls.getPtSumJackpotBaseValue
	        }
		};

		callback = function (data) {
			that.zone.find('.pt-jackpot-value').text(data.Data);
			that.startJackpotAnimation();
		};

		Service.post(opt, callback);
	};

	HomePage.prototype.startJackpotAnimation = function () {
		var base;
		var jackpot = this.zone.find('.pt-jackpot-value')
		var that    = this;
		var gap     = 35.57;

		this.setInterval = setInterval(function () {
			base = parseFloat(jackpot.text());
			base += gap;
			base = base.toFixed(2);
			jackpot.text(base);
		}, 1000);
	};

	HomePage.prototype.showSliders = function () {
		if (this.logoHtml) {
			$('.main .logo-wrapper').html(this.logoHtml);
			$('.home-pages-sliders').unslider({
				speed: 500,
				delay: 5000,
				autoplay: true,
				arrows: {
					prev: 	'<a class="unslider-arrow prev" style="margin-top: -15%">' +
								'<img src="../img/left-normal.png">' +
							'</a>',
					next: 	'<a class="unslider-arrow next" style="margin-top: -15%">' +
								'<img src="../img/right-normal.png">' +
							'</a>'
				}
			});
		}
	};

	HomePage.prototype.addSliders = function (data) {
		var i;
		var len = data.count;
		var arr = data.list;
		var logoTemp = 	'<ul>';

		for (i = 0; i < len; i++) {
			logoTemp += 	'<li>' +
								'<img src="' + app.imageServer + arr[i].ImgUrl + '">' +
							'</li>';
		}

		logoTemp +=		'</ul>';

		this.logoHtml = logoTemp;
		this.zone.find('.sliders').html(logoTemp);
		this.zone.find('.sliders').unslider({
			speed: 500,
			delay: 5000,
			autoplay: true,
			arrows: {
				prev: 	'<a class="unslider-arrow prev" style="margin-top: -15%">' +
							'<img src="../img/left-normal.png">' +
						'</a>',
				next: 	'<a class="unslider-arrow next" style="margin-top: -15%">' +
							'<img src="../img/right-normal.png">' +
						'</a>'
			}
		});
	};

	HomePage.prototype.bindEvents = function () {
		var luckyDrawButton;
		var luckyDrawTable;

		this.zone        = $('.home-page');
		luckyDrawTable   = this.zone.find('.zone2-down .table .tbody');
		luckyDrawButton  = this.zone.find('.zone2-down .lucky-draw');

		luckyDrawButton.click(function () {
			window.open('http://www.baidu.com');
		});

		this.zone.find('.zone1-up-left-up').click(function () {
			window.open(app.liveCsUrl);
		});

		this.zone.find('.zone1-up-left-down').click(function () {
			app.goTo('clientDownload');
		});

		this.zone.find('.zone1-up-right .info').click(function () {
			app.goTo('eEntertainment');
		});

		this.zone.find('.zone2-up-left .info').click(function () {
			app.goTo('sportsCompetition');
		});

		this.zone.find('.zone2-up-right .info').click(function () {
			app.goTo('liveVideo');
		});

		this.notice.bindEvents();
		this.suspension.bindEvents();
		this.createLoader();
	};

	window.HomePage = HomePage;
}());


