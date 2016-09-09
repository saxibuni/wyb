(function () {
	function SportsCompetition () {
		this.initDom();
	}
	
	SportsCompetition.prototype.initDom = function () {
		var temp =	'<div class="page sports-competition">' +
						'<div class="wrapper">' +
							'<div class="row1">' +
								'<img src="../img/sports-competition-img1.png">' +
							'</div>' +

							'<div class="row2">' +
								'<div class="sbty">' +
									'<img src="../img/sports-competition-img2.png">' +
								'</div>' +

								'<div class="threedty">' +
									'<img src="../img/sports-competition-img3.png">' +
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
		this.zone.show();
	};

	SportsCompetition.prototype.hide = function () {
		this.zone.hide();
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
