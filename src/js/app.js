/*
 *  bet页面 入口函数
 */

(function () {
	'use strict';

	function app () {
		this.zone   = $('.app');		
		this.init();
		this.bindEvents();
	}

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

		this.goTo('routeCheck');
	};
	
	app.prototype.goTo = function (pageName, params) {
		var className = pageName[0].toUpperCase() + pageName.substring(1);
		var dict = {
			'homePage': HomePage,
			'routeCheck': RouteCheck
		}

		this.zone.find('.page').hide();

		if (!this[pageName]) {
			this[pageName] = new (dict[pageName])();
			this[pageName].bindEvents();
			this.zone.find('.main').append(this[pageName].getDom());
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