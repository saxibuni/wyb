(function () {
	function MoneyTransferRecord () {
		this.initDom();
	}
	
	MoneyTransferRecord.prototype.initDom = function () {
		var temp;

		this.selectFrom = new Select({
			id: 'money-transfer-select-from',
			width: 60,
			height: 25,
			data: [
				{
					'text': '全部',
					'value': '0'
				}
			]
		});

		this.selectTo = new Select({
			id: 'money-transfer-select-to',
			width: 60,
			height: 25,
			data: [
				{
					'text': 'PT',
					'value': '0'
				}
			]
		})

		this.button = new Button({
			id: 'money-transfer-record-button',
			name: '查询',
			width: 80,
			height: 30
		});

		temp = 		'<div class="money-transfer-record jyjl-money-action">' +
						'<div class="bar-zone">' +
							'<div class="up">' +
								this.selectFrom.getDom() +
								this.selectTo.getDom() +

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

							'<div class="down">' +
								'<span class="text">当前小计</span>' +
								'<span class="value sub-total">2000</span>' +
								'<span class="text">元，总计</span>' +
								'<span class="value total">2000</span>' +
								'<span class="text">元</span>' +
							'</div>' +				
						'</div>' +

						'<div class="table-zone">' +
							'<table>' +
								'<thead><tr>' + 
									'<th>日期</th><th>订单号</th><th>充值类型</th><th>充值金额</th><th>状态</th>' +
								'</tr></tobdy>' +
								'<tbody>' +
									'<tr class="odd"><td></td><td></td><td></td><td></td><td></td></tr>' +
									'<tr class="even"><td></td><td></td><td></td><td></td><td></td></tr>' +
									'<tr class="odd"><td></td><td></td><td></td><td></td><td></td></tr>' +
									'<tr class="even"><td></td><td></td><td></td><td></td><td></td></tr>' +
									'<tr class="odd"><td></td><td></td><td></td><td></td><td></td></tr>' +
									'<tr class="even"><td></td><td></td><td></td><td></td><td></td></tr>' +									
								'</tobdy>' +
 							'</table>' +
 							'<div class="page-content">' +
 								'<span>目前加载</span><span class="total-count">0</span><span>条,当前第</span><span>1</span><span>页</span>' +
 								 '<div class="pager">' +
 								 	'<span class="current-page">1</span>' +
 								 	'<span class="next-page"></span>' +
 								 	'<span>共</span><span class="page-count">1</span><span>页</span>' +
 								 '</div>' +
 							'</div>' +
						'</div>' +

					'</div>';

		this.el  = temp;
	};

	MoneyTransferRecord.prototype.getDom = function () {
		return this.el;
	};

	MoneyTransferRecord.prototype.show = function(){
		this.zone.show();
	}

	MoneyTransferRecord.prototype.hide = function(){
		this.zone.hide();
	}

	MoneyTransferRecord.prototype.bindEvents = function () {
		var today = new Date();
		var that = this;

		this.zone = $('.money-transfer-record');

        today = today.formatDate();

        this.zone.find('.starttime').datetimepicker({value: today + ' 00:00', lang: 'en'});
        this.zone.find('.endtime').datetimepicker({value: today + ' 23:59', lang: 'en'});

		this.selectFrom.bindEvents();
		this.selectTo.bindEvents();
	};

	window.MoneyTransferRecord = MoneyTransferRecord;
}());