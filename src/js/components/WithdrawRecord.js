(function () {
	function WithdrawRecord () {
		this.initDom();
	}
	
	WithdrawRecord.prototype.initDom = function () {
		var temp;

		this.button = new Button({
			id: 'withdraw-record-button',
			name: '查询',
			search: true,
			width: 90,
			height: 28
		});

		this.pager = new Pager({
			id: 'withdraw-pager',
			callback: this.bindData.bind(this)
		});

		temp = 		'<div class="withdraw-record jyjl-money-action">' +
						'<div class="bar-zone">' +
							'<div class="up">' +
								'<div class="time-section">' +
									'<span class="title">日期</span>' +
									'<input class="starttime" type="text"/>' +
									'<span class="divider">至</span>' +
									'<input class="endtime" type="text"/>' +
								'</div>' +

								this.button.getDom() +

								'<ul class="fast-date">' +
									'<li class="selected" data-value="0"><span>今日</span></li>' +
									'<li data-value="-1"><span>昨日</span></li>' +
									'<li data-value="-3"><span>3日</span></li>' +
									'<li data-value="-7"><span>7日</span></li>' +
								'</ul>' +

								'<div class="clear"></div>' +
							'</div>' +

							'<div class="down">' +
								'<span class="text">当前小计</span>' +
								'<span class="value sub-total">0.00</span>' +
								'<span class="text">元，总计</span>' +
								'<span class="value total">0.00</span>' +
								'<span class="text">元</span>' +
							'</div>' +
						'</div>' +

						'<div class="table-zone">' +
							'<table cellspacing="0">' +
								'<thead><tr>' + 
									'<th>日期</th>' +
									'<th>申请额度</th>' +
									'<th>实际提款</th>' +
									'<th>优惠扣款</th>' +
									'<th>行政扣款</th>' +
									'<th>转账手续费</th>' +
									'<th>状态</th>' +
								'</tr></thead>' +
								'<tbody>' +
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

	WithdrawRecord.prototype.show = function() {
		this.zone.show();
		this.queryData(0, true);
		this.queryTotal();
	};

	WithdrawRecord.prototype.hide = function() {
		this.zone.hide();
	};

    WithdrawRecord.prototype.createLoader = function() {
        var wrapper1 = this.zone.find('.table-zone tbody')[0];

        this.loader1 = new Loader(wrapper1, {
        	top: '84%',
        	color: '#000'
        });
    };

	WithdrawRecord.prototype.queryData = function(pageIndex, firstTime){
		var params    = '';
		var that      = this;
		var starttime = this.zone.find('.starttime').val();
		var endtime   = this.zone.find('.endtime').val();
		
		params += 	'beginTime=' + starttime +
					'&endTime=' + endtime +
					'&pageIndex=' + pageIndex +
					'&pageSize=10' +
					'&status=';

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
        	that.setData(json);
        	if (firstTime) {
        		that.pager.setTotal(json.count);
        	}
        }).fail(function (xhr, testStatus, error) {
            alert(error);
        });
	};

	WithdrawRecord.prototype.queryTotal = function() {
		var that      = this;
		var starttime = this.zone.find('.starttime').val();
		var endtime   = this.zone.find('.endtime').val();
		
		var opt = {
			url: app.urls.getWithdrawTotal,
			data: {
				status: '',
				beginTime: starttime,
				endTime: endtime
			}
		};

		var callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				alert(json.Message);
				return;
			}

			that.zone.find('.bar-zone .total').text(json.toFixed(2));
		};

		Service.get(opt, callback);
	};

	WithdrawRecord.prototype.setData = function(data) {
		var i           = 0;
		var dom         = '';
		var subTotal    = 0;
		var currentData = data.list;

		for(i = 0; i < currentData.length; i++){
			if (i % 2 == 0) {
				dom +=	'<tr class="odd">' +
							'<td>' + currentData[i].CreateTime + '</td>' +
							'<td>' + currentData[i].Amount + '</td>' +
							'<td>' + currentData[i].ActualAmount + '</td>' +
							'<td>' + currentData[i].PrefFee + '</td>' +
							'<td>' + currentData[i].MgrFee + '</td>' +
							'<td>' + currentData[i].TransferFee + '</td>' +
							'<td>' + currentData[i].StatusText + '</td>' +
						'</tr>';
			} else {
				dom +=	'<tr class="even">' +
							'<td>' + currentData[i].CreateTime + '</td>' +
							'<td>' + currentData[i].Amount + '</td>' +
							'<td>' + currentData[i].ActualAmount + '</td>' +
							'<td>' + currentData[i].PrefFee + '</td>' +
							'<td>' + currentData[i].MgrFee + '</td>' +
							'<td>' + currentData[i].TransferFee + '</td>' +
							'<td>' + currentData[i].StatusText + '</td>' +
						'</tr>';
			}

			subTotal += currentData[i].Amount;
		}

		this.zone.find('.table-zone tbody').html(dom);
		this.zone.find('.bar-zone .sub-total').text(subTotal.toFixed(2));
	};

	WithdrawRecord.prototype.bindData = function(pageIndex){
		var dom = this.queryData(pageIndex);
		this.zone.find('.table-zone  table > tbody').html(dom);
	};

	WithdrawRecord.prototype.setDatetime = function () {
		var li       = this.zone.find('.fast-date .selected');
		var interval = parseInt(li.attr('data-value'));
		var endDay   = new Date();
		var beginDay = Util.getIntervalDate(endDay, interval);

		beginDay = beginDay.formatDate() + ' 00:00';
        endDay   = endDay.formatDate() + ' 23:59';
        this.zone.find('.starttime').datetimepicker({value: beginDay});
        this.zone.find('.endtime').datetimepicker({value: endDay});
	};

	WithdrawRecord.prototype.bindEvents = function () {
		var fastDateUl;
		var that     = this;
		var endDay   = new Date();
		var beginDay = Util.getIntervalDate(endDay, 0);

		this.zone    = $('.withdraw-record');
		fastDateUl   = this.zone.find('.fast-date'); 

		beginDay = beginDay.formatDate() + ' 00:00';
        endDay   = endDay.formatDate() + ' 23:59';
        this.zone.find('.starttime').datetimepicker({value: beginDay, timepicker: false});
        this.zone.find('.endtime').datetimepicker({value: endDay, timepicker: false});

        fastDateUl.delegate('li', 'click', function () {
			fastDateUl.children('li').removeClass('selected');
	        $(this).addClass('selected');
        	that.setDatetime();
        	that.queryData(0, true);
        	that.queryTotal();
        });

        this.zone.find('#withdraw-record-button').click(function () {
        	that.queryData(0, true);
        	that.queryTotal();
        });

        this.button.bindEvents();
        this.pager.bindEvents();
        this.createLoader();
	};

	window.WithdrawRecord = WithdrawRecord;
}());
