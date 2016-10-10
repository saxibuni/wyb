(function () {
	function DividendRecord () {
		this.initDom();
	}
	
	DividendRecord.prototype.initDom = function () {
		var temp;

		this.button = new Button({
			id: 'dividend-record-button',
			name: '查询',
			width: 80,
			height: 30
		});

		this.pager = new Pager({
			id: 'dividend-record-pager',
			callback: this.bindData.bind(this)
		});

		temp = 		'<div class="dividend-record jyjl-money-action">' +
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
									'<li class="selected" data-value="0"><span>今日</span></li>' +
									'<li data-value="-1"><span>昨日</span></li>' +
									'<li data-value="-3"><span>3日</span></li>' +
									'<li data-value="-7"><span>7日</span></li>' +
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
									'<th>中奖日期</th>' +
									'<th>游戏名称</th>' +
									'<th>奖项</th>' +
									'<th>奖项类型</th>' +
									'<th>奖品</th>' +
									'<th>发放状态</th>' +
								'</tr></tobdy>' +
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

	DividendRecord.prototype.getDom = function () {
		return this.el;
	};

	DividendRecord.prototype.show = function(){
		this.zone.show();
		this.queryData(0, true);
	};

	DividendRecord.prototype.hide = function(){
		this.zone.hide();
	};

    DividendRecord.prototype.createLoader = function() {
        var wrapper1 = this.zone.find('.table-zone tbody')[0];

        this.loader1 = new Loader(wrapper1, {
        	top: '84%',
        	color: '#000'
        });
    };

	DividendRecord.prototype.queryData = function(pageIndex, firstTime) {
		var params    = '';
		var that      = this;
		var starttime = this.zone.find('.starttime').val();
		var endtime   = this.zone.find('.endtime').val();
		
		params += 	'startDate=' + starttime +
					'&endDate=' + endtime +
					'&pageIndex=' + pageIndex +
					'&pageSize=10' +
					'&gamePlatform=' +
					'&betType=';

		this.loader1.play();

        $.ajax({
            type: 'GET',
            url: app.urls.dividentRecords + params,
            dataType: 'json',
            timeout: app.timeout,
            xhrFields: {
            	withCredentials: true
            }
        }).done(function (json) {
        	that.loader1.stop();
        	that.setData(json.Data);
        	if (firstTime) {
        		that.pager.setTotal(json.Data.count);
        	}
        }).fail(function (xhr, testStatus, error) {
            alert(error);
        });
	};

	DividendRecord.prototype.setData = function(data){
		var dom = '';
		var i = 0;
		var currentData = data.list;

		for(i = 0; i < currentData.length; i++){
			if (i % 2 == 0) {
				dom +=	'<tr class="odd">' +
							'<td>' + currentData[i].CreateTime + '</td>' +
							'<td>' + currentData[i].OrderNo + '</td>' +
							'<td>' + currentData[i].TypeText + '</td>' +
							'<td>' + currentData[i].Amount + '</td>' +
							'<td>' + currentData[i].StatusText + '</td>' +
						'</tr>';
			} else {
				dom +=	'<tr class="even">' +
							'<td>' + currentData[i].CreateTime + '</td>' +
							'<td>' + currentData[i].OrderNo + '</td>' +
							'<td>' + currentData[i].TypeText + '</td>' +
							'<td>' + currentData[i].Amount + '</td>' +
							'<td>' + currentData[i].StatusText + '</td>' +
						'</tr>';
			}
		}

		this.zone.find('.table-zone tbody').html(dom);
	};

	DividendRecord.prototype.bindData = function(pageIndex) {
		var dom = this.queryData(pageIndex);
		this.zone.find('.table-zone  table > tbody').html(dom);
	};

	DividendRecord.prototype.setDatetime = function () {
		var li       = this.zone.find('.fast-date .selected');
		var interval = parseInt(li.attr('data-value'));
		var endDay   = new Date();
		var beginDay = Util.getIntervalDate(endDay, interval);

		beginDay = beginDay.formatDate() + ' 00:00';
        endDay   = endDay.formatDate() + ' 23:59';
        this.zone.find('.starttime').datetimepicker({value: beginDay});
        this.zone.find('.endtime').datetimepicker({value: endDay});
	};

	DividendRecord.prototype.bindEvents = function () {
		var fastDateUl;
		var that     = this;
		var endDay   = new Date();
		var beginDay = Util.getIntervalDate(endDay, 0);

		this.zone    = $('.dividend-record');
		fastDateUl   = this.zone.find('.fast-date'); 

		beginDay = beginDay.formatDate() + ' 00:00';
        endDay   = endDay.formatDate() + ' 23:59';
        this.zone.find('.starttime').datetimepicker({value: beginDay});
        this.zone.find('.endtime').datetimepicker({value: endDay});

        fastDateUl.delegate('li', 'click', function () {
			fastDateUl.children('li').removeClass('selected');
	        $(this).addClass('selected');
        	that.setDatetime();
        });

        this.zone.find('#dividend-record-button').click(function () {
        	that.queryData(0, true);
        });

		this.pager.bindEvents();
		this.createLoader();
	};

	window.DividendRecord = DividendRecord;
}());
