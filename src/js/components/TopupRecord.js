(function () {
	function TopupRecord () {
		this.initDom();
	}
	
	TopupRecord.prototype.initDom = function () {
		var temp;

		this.select = new Select({
			id: 'topup-record-select',
			width: 100,
			height: 25,
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

		//日期、订单号、充值类型、充值金额、状态
		this.recordData = [
		    ['2015-01-01', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-01-02', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-01-03', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-01-04', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-01-05', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-01-06', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-01-07', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-01-08', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-01-09', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-01-10', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-01-11', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-01-12', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-01-13', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-01-14', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-01-15', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-01-16', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-01-17', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-01-18', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-01-19', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-01-20', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-01-21', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-01-22', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-01-23', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-01-24', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-01-25', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-01-26', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-01-27', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-01-28', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-01-29', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-01-30', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-02-01', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-02-02', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-02-03', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-02-04', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-02-05', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-02-06', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-02-07', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-02-08', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-02-09', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-02-10', '123123', '银行卡', '3000,000.00', '是', 1],	
		    ['2015-02-02', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-02-03', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-02-04', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-02-05', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-02-06', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-02-07', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-02-08', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-02-09', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-02-10', '123123', '银行卡', '3000,000.00', '是', 1],	
		    ['2015-02-02', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-02-03', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-02-04', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-02-05', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-02-06', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-02-07', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-02-08', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-02-09', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-02-10', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-02-02', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-02-03', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-02-04', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-02-05', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-02-06', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-02-07', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-02-08', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-02-09', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-02-10', '123123', '银行卡', '3000,000.00', '是', 1],	
		    ['2015-02-02', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-02-03', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-02-04', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-02-05', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-02-06', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-02-07', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-02-08', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-02-09', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-02-10', '123123', '银行卡', '3000,000.00', '是', 1],
		    ['2015-02-11', '123123', '银行卡', '3000,000.00', '是', 1]
		];

		this.pager = new Pager({
			id: 'topUp-record-pager',
			callback: this.bindData.bind(this),
			totalCount: this.recordData.length
		});

		temp = 		'<div class="topup-record jyjl-money-action">' +
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
									// '<tr class="odd"><td></td><td></td><td></td><td></td><td></td></tr>' +
									// '<tr class="even"><td></td><td></td><td></td><td></td><td></td></tr>' +
									// '<tr class="odd"><td></td><td></td><td></td><td></td><td></td></tr>' +
									// '<tr class="even"><td></td><td></td><td></td><td></td><td></td></tr>' +
									// '<tr class="odd"><td></td><td></td><td></td><td></td><td></td></tr>' +
									// '<tr class="even"><td></td><td></td><td></td><td></td><td></td></tr>' +									
									// this.queryData(0) +
								'</tobdy>' +
 							'</table>' +
 							'<div class="page-content">' +
 								this.pager.getDom() +	
 							'</div>' +
						'</div>' +

					'</div>';

		this.el  = temp;
	};

	TopupRecord.prototype.getDom = function () {
		return this.el;
	};

	TopupRecord.prototype.show = function(){
		this.zone.show();

		if (!this.firstTime) {
			//this.queryData(0);
			this.firstTime = true;
		}
	};

	TopupRecord.prototype.hide = function(){
		this.zone.hide();
	};

    TopupRecord.prototype.createLoader = function() {
        var wrapper1 = this.zone.find('.table-zone tbody')[0];

        this.loader1 = new Loader(wrapper1, {
        	top: '84%',
        	color: '#000'
        });
    };

	TopupRecord.prototype.queryData = function(pageIndex){
		var params  = '';
		var that = this;

		var starttime = this.zone.find('.starttime').val();
		var endtime   = this.zone.find('.end').val();
		
		params += 	'status=' + '0' +
					'type=' + '0' +
					'&startTime=' + '20150101' + 
					'&endTime=' + '20161010' + 
					'&pageIndex=' + pageIndex +
					'&pageSize=10';

		this.loader1.play();

        $.ajax({
            type: 'GET',
            url: app.urls.topupRecords + params,
            dataType: 'json',
            timeout: app.timeout,
            xhrFields: {
            	withCredentials: true
            }
        }).done(function (json) {
        	debugger
        	that.loader1.play();
        	that.setData(json);
        }).fail(function (xhr, testStatus, error) {
            alert(error);
        });
	};

	TopupRecord.prototype.setData = function(data){
		var dom = '';
		var i = 0;
		var currentData = [];

		currentData = this.recordData.filter(function(item, index){
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
						'</tr>';
			}else{
				dom +=	'<tr class="even">' +
							'<td>' + currentData[i][0] + '</td>' +
							'<td>' + currentData[i][1] + '</td>' +
							'<td>' + currentData[i][2] + '</td>' +
							'<td>' + currentData[i][3] + '</td>' +
							'<td>' + currentData[i][4] + '</td>' +
						'</tr>';
			}
		}

		return dom;
	};

	TopupRecord.prototype.bindData = function(pageIndex){
		var dom = this.queryData(pageIndex);
		this.zone.find('.table-zone  table > tbody').html(dom);
	};

	TopupRecord.prototype.bindEvents = function () {
		var today = new Date();
		var that = this;
		var fastDateUl;

		this.zone    = $('.topup-record');
		fastDateUl   = this.zone.find('.fast-date'); 

        today = today.formatDate();
        this.zone.find('.starttime').datetimepicker({value: today + ' 00:00', lang: 'en'});
        this.zone.find('.endtime').datetimepicker({value: today + ' 23:59', lang: 'en'});

        fastDateUl.delegate('li', 'click', function () {
        	fastDateUl.children('li').removeClass('selected');
        	$(this).addClass('selected');
        });

		this.select.bindEvents();
		this.pager.bindEvents();
		this.createLoader();
	};

	window.TopupRecord = TopupRecord;
}());
