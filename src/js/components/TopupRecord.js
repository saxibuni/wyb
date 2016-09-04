(function () {
	function TopupRecord () {
		this.initDom();
	}
	
	TopupRecord.prototype.initDom = function () {
		var temp;

		this.select = new Select({
			id: 'topup-record-select',
			width: 150,
			height: 30,
			data: [
				{
					'text': '充值类型',
					'value': '0'
				}
			]
		});

		this.button = new Button({
			id: 'topup-record-button',
			name: '查询',
			width: 80,
			height: 30
		});

		temp = 		'<div class="topup-record">' +
						'<div class="bar-zone">' +
							'<div class="up">' +
								this.select.getDom() +

								'<div class="time-section">' +
									'<span class="title">日期</span>' +
									'<input class="starttime" type="text"/>' +
									'<span class="divider">-</span>' +
									'<input class="endtime" type="text"/>' +
								'</div>' +

								this.button.getDom() +

								'<ul>' +
									'<li class="selected"><span>今日</span></li>' +
									'<li><span>昨日</span></li>' +
									'<li><span>3日</span></li>' +
									'<li><span>7日</span></li>' +
								'</ul>' +

								'<div class="clear"></div>' +
								'</div>' +
							'</div>' +

							'<div class="down">' +
								'<span class="text">当前小计</span>' +
								'<span class="value sub-total">2000</span>' +
								'<span class="text">元，总计</span>' +
								'<span class="value total">2000</span>' +
								'<span class="text">元</span>' +
							'</div>' +
						'</div>' +

						'<div class="table-zone">' +
						'</div>' +
					'</div>';

		this.el  = temp;
	};

	TopupRecord.prototype.getDom = function () {
		return this.el;
	};

	TopupRecord.prototype.bindEvents = function () {
		var today;
		var that = this;

		this.zone = $('.topup-record');

        today = today.formatDate();

        this.zone.find('.starttime').datetimepicker({value: today + ' 00:00', lang: 'en'});
        this.zone.find('.endtime').datetimepicker({value: today + ' 23:59', lang: 'en'});

		this.select.bindEvents();
	};

	window.TopupRecord = TopupRecord;
}());
