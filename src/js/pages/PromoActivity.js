(function () {
	function PromoActivity () {
		this.initDom();
	}
	
	PromoActivity.prototype.initDom = function () {
		var temp =	'<div class="page promo-activity">' +
						'<div class="wrapper">' +
							'<div class="title">' +
								'<ul>'  +
									'<li><span>热门优惠</span></li>' +
									'<li><span>真人优惠</span></li>' +
									'<li><span>电子优惠</span></li>' +
									'<li><span>体育优惠</span></li>' +
									'<li><span>彩票优惠</span></li>' +
									'<li><span>VIP优惠</span></li>' +
									'<li><span>往期回顾</span></li>' +
									'<div class="stick"></div>' +
								'</ul>' +
							'</div>' +

							'<div class="content">' +
								'<ul>' +
									'<li>' +
										'<img class="down" src="../img/promo.jpg">' +
									'</li>' +
									'<li>' +
										'<img class="down" src="../img/promo.jpg">' +
									'</li>' +
									'<li>' +
										'<img class="down" src="../img/promo.jpg">' +
									'</li>' +
								'</ul>' +

								'<div class="pull">' +
									'<img src="../img/pull.png">' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>';
		
		this.el  = temp;
	};

	PromoActivity.prototype.getDom = function () {
		return this.el;
	};

	PromoActivity.prototype.loadImages = function () {
		var i;
		var temp    = '';
		var imageUl = this.zone.find('.content ul');

		for (i = 0; i < 3; i++) {
			temp += '<li>' +
						'<img class="down" src="../img/promo.jpg">' +
					'</li>';
		}

		imageUl.append(temp);
	};

	PromoActivity.prototype.show = function () {
		this.zone.show();
	};

	PromoActivity.prototype.hide = function () {
		this.zone.hide();
	};

	PromoActivity.prototype.bindEvents = function () {
		var titleUl;
		var stick;
		var index;
		var left;
		var pull;
		var gap  = 12.5;
		var that = this;

		this.zone = $('.promo-activity');
		titleUl   = this.zone.find('.title ul');
		stick     = titleUl.children('.stick');
		pull      = this.zone.find('.pull img');

		titleUl.delegate('li', 'click', function () {
			index = $(this).index();
			left  = index*gap +  '%';
			stick.css('left', left);
		});	

		pull.click(function () {
			that.loadImages();	
		});
	};

	window.PromoActivity = PromoActivity;
}());
