/*
 *  bet页面 入口函数
 */

(function () {
	'use strict';

	function app () {
		this.zone   = $('.app');
		this.init();
		this.bindEvents();
		//this.history();
	}

	app.prototype.history = function () {
	    // Bind to StateChange Event
	    History.Adapter.bind(window,'statechange',function(){ // Note: We are using statechange instead of popstate
	        var State = History.getState(); // Note: We are using History.getState() instead of event.state
	    });

	    // Change our States
	    History.pushState({state:1}, "State 1", "?state=1"); // logs {state:1}, "State 1", "?state=1"
	    History.pushState({state:2}, "State 2", "?state=2"); // logs {state:2}, "State 2", "?state=2"
	    History.replaceState({state:3}, "State 3", "?state=3"); // logs {state:3}, "State 3", "?state=3"
	    History.pushState(null, null, "?state=4"); // logs {}, '', "?state=4"
	    History.back(); // logs {state:3}, "State 3", "?state=3"
	    History.back(); // logs {state:1}, "State 1", "?state=1"
	    History.back(); // logs {}, "Home Page", "?"
	    History.go(2); // logs {state:3}, "State 3", "?state=3"
	};

	app.prototype.init = function () {
		this.header   = new Header();
		this.footer   = new Footer();
		this.homePage = new HomePage();

		this.el  = 	this.header.getDom() +

					'<div class="main">' +
						this.homePage.getDom() +
					'</div>' +

					this.footer.getDom();

		this.zone.append(this.el);
		this.homePage.bindEvents();
		this.goTo('homePage');
	};
	
	app.prototype.goTo = function (pageName, params) {
		var dict;
		var className;

		if (pageName === '403' || pageName === '404' || pageName === '500') {
			window.location.href = '../html/' + pageName + '.html';
			return;
		}

		className = pageName[0].toUpperCase() + pageName.substring(1);
		dict = {
			'homePage'          : HomePage,
			'liveVideo'         : LiveVideo,
			'eEntertainment'    : EEntertainment,
			'sportsCompetition' : SportsCompetition,
			'lotteryGame'       : LotteryGame,
			'promoActivity'     : PromoActivity,
			'clientDownload'    : ClientDownload,
			'routeCheck'        : RouteCheck,
			'helpPage'			: HelpPage,
			'personalCenter'	: PersonalCenter
		}

		this.zone.find('.page').hide();

		if (!this[pageName]) {
			this[pageName] = new (dict[pageName])();
			this.zone.find('.main').append(this[pageName].getDom());
			this[pageName].bindEvents();
		}

		this[pageName].show();
	};

	app.prototype.bindEvents = function () {
		this.header.bindEvents();
		this.footer.bindEvents();
		this.homePage.bindEvents();
	};

	window.app = new app();
})();