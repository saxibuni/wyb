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
					this.homePage.getDom() +
					this.footer.getDom();

		this.zone.append(this.el);
	};
	
	app.prototype.bindEvents = function () {
		this.header.bindEvents();
		this.footer.bindEvents();
		this.homePage.bindEvents();
	};

	window.app = new app();
})();