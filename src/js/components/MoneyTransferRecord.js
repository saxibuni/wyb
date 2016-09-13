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

		this.moneyTransferData = [
		    ['2015-01-01', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-01-02', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-01-03', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-01-04', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-01-05', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-01-06', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-01-07', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-01-08', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-01-09', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-01-10', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-01-11', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-01-12', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-01-13', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-01-14', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-01-15', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-01-16', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-01-17', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-01-18', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-01-19', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-01-20', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-01-21', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-01-22', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-01-23', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-01-24', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-01-25', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-01-26', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-01-27', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-01-28', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-01-29', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-01-30', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-02-01', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-02-02', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-02-03', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-02-04', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-02-05', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-02-06', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-02-07', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-02-08', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-02-09', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-02-10', '123123', 'SG', 'PT', '3000,000.00', '是', 1],	
		    ['2015-02-02', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-02-03', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-02-04', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-02-05', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-02-06', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-02-07', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-02-08', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-02-09', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-02-10', '123123', 'SG', 'PT', '3000,000.00', '是', 1],	
		    ['2015-02-02', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-02-03', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-02-04', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-02-05', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-02-06', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-02-07', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-02-08', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-02-09', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-02-10', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-02-02', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-02-03', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-02-04', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-02-05', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-02-06', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-02-07', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-02-08', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-02-09', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-02-10', '123123', 'SG', 'PT', '3000,000.00', '是', 1],	
		    ['2015-02-02', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-02-03', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-02-04', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-02-05', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-02-06', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-02-07', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-02-08', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-02-09', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-02-10', '123123', 'SG', 'PT', '3000,000.00', '是', 1],
		    ['2015-02-11', '123123', 'SG', 'PT', '3000,000.00', '是', 1]
		];

		this.pager = new Pager({
			id: 'money-transfer-pager',
			callback: this.bindData.bind(this),
			totalCount: this.moneyTransferData.length
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
									'<th>日期</th><th>订单号</th><th>转出账户</th><th>转入账户</th><th>金额</th><th>状态</th>' +
								'</tr></tobdy>' +
								'<tbody>' +
									// '<tr class="odd"><td></td><td></td><td></td><td></td><td></td></tr>' +
									// '<tr class="even"><td></td><td></td><td></td><td></td><td></td></tr>' +
									// '<tr class="odd"><td></td><td></td><td></td><td></td><td></td></tr>' +
									// '<tr class="even"><td></td><td></td><td></td><td></td><td></td></tr>' +
									// '<tr class="odd"><td></td><td></td><td></td><td></td><td></td></tr>' +
									// '<tr class="even"><td></td><td></td><td></td><td></td><td></td></tr>' +									
									this.queryData(0) +
								'</tobdy>' +
 							'</table>' +
 							'<div class="page-content">' +
 								this.pager.getDom() +
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

	MoneyTransferRecord.prototype.queryData = function(pageIndex){
		var dom = '';
		var i = 0;
		var currentData = [];

		currentData = this.moneyTransferData.filter(function(item, index){
			return index >= pageIndex * 10 && index < (pageIndex + 1) * 10;
		});
		 
		for(i = 0; i < currentData.length; i++){
			if (i % 2 == 0) {
				dom +=	'<tr class="odd">' +
							'<td>' + currentData[i][0] + '</td>' +
							'<td>' + currentData[i][1] + '</td>' +
							'<td>' + currentData[i][2] + '</td>' +
							'<td>' + currentData[i][3] + '</td>' +
							'<td>' + currentData[i][4] + '</td>' +
							'<td>' + currentData[i][5] + '</td>' +							
						'</tr>';
			}else{
				dom +=	'<tr class="even">' +
							'<td>' + currentData[i][0] + '</td>' +
							'<td>' + currentData[i][1] + '</td>' +
							'<td>' + currentData[i][2] + '</td>' +
							'<td>' + currentData[i][3] + '</td>' +
							'<td>' + currentData[i][4] + '</td>' +
							'<td>' + currentData[i][5] + '</td>' +
						'</tr>';
			}
		}

		return dom;
	}

	MoneyTransferRecord.prototype.bindData = function(pageIndex){
		var dom = this.queryData(pageIndex);
		this.zone.find('.table-zone  table > tbody').html(dom);
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
		this.pager.bindEvents();
	};

	window.MoneyTransferRecord = MoneyTransferRecord;
}());
