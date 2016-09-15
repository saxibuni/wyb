(function () {
	function BettingRecord () {
		this.initDom();
	}
	
	BettingRecord.prototype.initDom = function () {
		var temp;

		this.select = new Select({
			id: 'betting-record-select',
			width: 100,
			height: 25,
			data: [
				{
					'text': '游戏类型',
					'value': '0'
				}
			]
		});

		this.button = new Button({
			id: 'betting-record-button',
			name: '查询',
			width: 80,
			height: 30
		});

		this.betRecordData = [
		    ['2015-01-01', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-01-02', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-01-03', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-01-04', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-01-05', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-01-06', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-01-07', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-01-08', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-01-09', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-01-10', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-01-11', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-01-12', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-01-13', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-01-14', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-01-15', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-01-16', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-01-17', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-01-18', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-01-19', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-01-20', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-01-21', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-01-22', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-01-23', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-01-24', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-01-25', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-01-26', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-01-27', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-01-28', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-01-29', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-01-30', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-02-01', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-02-02', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-02-03', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-02-04', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-02-05', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-02-06', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-02-07', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-02-08', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-02-09', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-02-10', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],	
		    ['2015-02-02', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-02-03', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-02-04', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-02-05', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-02-06', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-02-07', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-02-08', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-02-09', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-02-10', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],	
		    ['2015-02-02', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-02-03', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-02-04', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-02-05', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-02-06', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-02-07', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-02-08', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-02-09', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-02-10', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-02-02', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-02-03', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-02-04', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-02-05', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-02-06', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-02-07', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-02-08', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-02-09', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-02-10', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],	
		    ['2015-02-02', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-02-03', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-02-04', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-02-05', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-02-06', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-02-07', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-02-08', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-02-09', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-02-10', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1],
		    ['2015-02-11', 'SG游戏', '6000.00', '3000.00', '10', '派彩', 1]
		];

		this.pager = new Pager({
			id: 'bet-record-pager',
			callback: this.bindData.bind(this),
			totalCount: this.betRecordData.length
		});

		temp = 		'<div class="betting-record jyjl-money-action">' +
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

								'<ul class="fast-date">' +
									'<li class="selected"><span>今日</span></li>' +
									'<li><span>昨日</span></li>' +
									'<li><span>3日</span></li>' +
									'<li><span>7日</span></li>' +
								'</ul>' +

								'<div class="clear"></div>' +
							'</div>' +

							'<div class="down">' +
								'<span class="text">总投注额：</span>' +
								'<span class="value total-bet">10,000</span>' +
								'<span class="text">有效投注：</span>' +
								'<span class="value effect-bet">20.00</span>' +
								'<span class="text">单量:</span>' +
								'<span class="value single-amount">100</span>' +
								'<span class="text">派奖</span>' +
								'<span class="value return-money">1999</span>' +
							'</div>' +				
						'</div>' +

						'<div class="table-zone">' +
							'<table>' +
								'<thead><tr>' + 
									'<th>日期</th><th>游戏类型</th><th>总投注额</th><th>有效投注额</th><th>单量</th><th>派奖</th>' +
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

	BettingRecord.prototype.getDom = function () {
		return this.el;
	};

	BettingRecord.prototype.show = function(){
		this.zone.show();
	}

	BettingRecord.prototype.hide = function(){
		this.zone.hide();
	}

	BettingRecord.prototype.queryData = function(pageIndex){
		var dom = '';
		var i = 0;
		var currentData = [];

		currentData = this.betRecordData.filter(function(item, index){
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

	BettingRecord.prototype.bindData = function(pageIndex){
		var dom = this.queryData(pageIndex);
		this.zone.find('.table-zone  table > tbody').html(dom);
	}

	BettingRecord.prototype.bindEvents = function () {
		var today = new Date();
		var that = this;
		var fastDateUl;

		this.zone = $('.betting-record');
		fastDateUl   = this.zone.find('.fast-date'); 

        fastDateUl.delegate('li', 'click', function () {
        	fastDateUl.children('li').removeClass('selected');
        	$(this).addClass('selected');
        });
        
        today = today.formatDate();

        this.zone.find('.starttime').datetimepicker({value: today + ' 00:00', lang: 'en'});
        this.zone.find('.endtime').datetimepicker({value: today + ' 23:59', lang: 'en'});

		this.select.bindEvents();
		this.pager.bindEvents();
	};

	window.BettingRecord = BettingRecord;
}());
