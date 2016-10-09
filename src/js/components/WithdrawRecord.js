(function () {
	function WithdrawRecord () {
		this.initDom();
	}
	
	WithdrawRecord.prototype.initDom = function () {
		var temp;

		this.button = new Button({
			id: 'withdraw-record-button',
			name: '查询',
			width: 80,
			height: 30
		});

		this.pager = new Pager({
			id: 'withdraw-pager',
			callback: this.bindData.bind(this),
			totalCount: 0
		});

		temp = 		'<div class="withdraw-record jyjl-money-action">' +
						'<div class="bar-zone">' +
							'<div class="up">' +
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
									'<th>日期</th><th>订单号</th><th>转提款金额</th><th>状态</th><th>备注</th>' +
								'</tr></tobdy>' +
								'<tbody>' +
									// '<tr class="odd"><td></td><td></td><td></td><td></td><td></td></tr>' +
									// '<tr class="even"><td></td><td></td><td></td><td></td><td></td></tr>' +
									// '<tr class="odd"><td></td><td></td><td></td><td></td><td></td></tr>' +
									// '<tr class="even"><td></td><td></td><td></td><td></td><td></td></tr>' +
									// '<tr class="odd"><td></td><td></td><td></td><td></td><td></td></tr>' +
									// '<tr class="even"><td></td><td></td><td></td><td></td><td></td></tr>' +									
									//this.queryData(0) +
								'</tobdy>' +
 							'</table>' +
 							'<div class="page-content">' +
 								this.pager.getDom() +
 							'</div>' +
						'</div>' +

					'</div>';

		this.el  = temp;
	};

	WithdrawRecord.prototype.getDom = function () {
		return this.el;
	};

	WithdrawRecord.prototype.show = function(){
		this.zone.show();

		if (!this.firstTime) {
			this.queryData(0);
			this.firstTime = true;
		}
	};

	WithdrawRecord.prototype.hide = function(){
		this.zone.hide();
	};

    WithdrawRecord.prototype.createLoader = function() {
        var wrapper1 = this.zone.find('.table-zone tbody')[0];

        this.loader1 = new Loader(wrapper1, {
        	top: '84%',
        	color: '#000'
        });
    };

	WithdrawRecord.prototype.queryData = function(pageIndex){
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
            url: app.urls.withdrawRecords + params,
            dataType: 'json',
            timeout: app.timeout,
            xhrFields: {
            	withCredentials: true
            }
        }).done(function (json) {
        	that.loader1.stop();
        	that.setData(json.list);
        }).fail(function (xhr, testStatus, error) {
            alert(error);
        });
	};

	WithdrawRecord.prototype.setData = function(data, pageIndex){
		var dom = '';
		var i = 0;
		var currentData = [];

		this.withDrawData = data;

		// currentData = this.withDrawData.filter(function(item, index){
		// 	return index >= pageIndex * 10 && index < (pageIndex + 1) * 10;
		// });

		currentData = this.withDrawData;
		 
		for(i = 0; i < currentData.length; i++){
			if (i % 2 == 0) {
				dom +=	'<tr class="odd">' +
							'<td>' + currentData[i].CreateTime.substring(0, 10) + '</td>' +
							'<td>' + currentData[i].OrderNo + '</td>' +
							'<td>' + currentData[i].Amount + '</td>' +
							'<td>' + currentData[i].StatusText + '</td>' +
							'<td>' + currentData[i].OrderNo + '</td>' +
						'</tr>';
			} else {
				dom +=	'<tr class="even">' +
							'<td>' + currentData[i].CreateTime.substring(0, 10) + '</td>' +
							'<td>' + currentData[i].OrderNo + '</td>' +
							'<td>' + currentData[i].Amount + '</td>' +
							'<td>' + currentData[i].StatusText + '</td>' +
							'<td>' + currentData[i].OrderNo + '</td>' +
						'</tr>';
			}
		}

		this.zone.find('.table-zone tbody').html(dom);
	};

	WithdrawRecord.prototype.bindData = function(pageIndex){
		var dom = this.queryData(pageIndex);
		this.zone.find('.table-zone  table > tbody').html(dom);
	};

	WithdrawRecord.prototype.bindEvents = function () {
		var today = new Date();
		var that = this;
		var fastDateUl;

		this.zone = $('.withdraw-record');
		fastDateUl   = this.zone.find('.fast-date'); 

        fastDateUl.delegate('li', 'click', function () {
        	fastDateUl.children('li').removeClass('selected');
        	$(this).addClass('selected');
        });
        
        today = today.formatDate();

        this.zone.find('.starttime').datetimepicker({value: today + ' 00:00', lang: 'en'});
        this.zone.find('.endtime').datetimepicker({value: today + ' 23:59', lang: 'en'});

        this.pager.bindEvents();
        this.createLoader();
	};

	window.WithdrawRecord = WithdrawRecord;
}());
