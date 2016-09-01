(function () {
	function SportsCompetition () {
		this.initDom();
	}
	
	SportsCompetition.prototype.initDom = function () {
		var temp =	'<div class="page sports-competition">' +
						'<div class="wrapper">' +
							'体育竞技' +
						'</div>' +
					'</div>';
		
		this.el  = temp;
	};

	SportsCompetition.prototype.getDom = function () {
		return this.el;
	};

	SportsCompetition.prototype.show = function () {
		this.zone.show();
	};

	SportsCompetition.prototype.hide = function () {
		this.zone.hide();
	};

	SportsCompetition.prototype.bindEvents = function () {
		this.zone = $('.sports-competition');
	};

	window.SportsCompetition = SportsCompetition;
}());
