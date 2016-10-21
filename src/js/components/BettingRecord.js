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
			data: []
		});

		this.button = new Button({
			id: 'betting-record-button',
			name: '查询',
			width: 80,
			height: 30
		});

		this.pager = new Pager({
			id: 'bet-record-pager',
			callback: this.bindData.bind(this)
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
									'<li class="selected" data-value="0"><span>今日</span></li>' +
									'<li data-value="-1"><span>昨日</span></li>' +
									'<li data-value="-3"><span>3日</span></li>' +
									'<li data-value="-7"><span>7日</span></li>' +
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
									'<th>日期</th>' +
									'<th>游戏平台</th>' +
									'<th>总投注额</th>' +
									'<th>有效投注额</th>' +
									'<th>派彩</th>' +
									'<th>单量</th>' +
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

	BettingRecord.prototype.getDom = function () {
		return this.el;
	};

	BettingRecord.prototype.show = function(){
		this.zone.show();

		if (!this.firstTime) {
			this.queryPlatforms();
			this.firstTime = true;
		}

		this.queryData(0, true);
	}

	BettingRecord.prototype.hide = function(){
		this.zone.hide();
	}

	BettingRecord.prototype.queryPlatforms = function() {
		var i;
		var callback;
		var that = this;
		var opt  = {
			url: app.urls.getAllAPI,
			data: {}
		};

		callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				alert(json.Message);
				return;
			}

			that.setPlatforms(json);
		};

		Service.get(opt, callback);
	};

	BettingRecord.prototype.setPlatforms = function(data) {
		var i;
		var temp = '<option data-value="-1">游戏类型</option>';

		for (i = 0; i < data.length; i++) {
			temp += '<option data-value="' + data[i].GamePlatform + '">' +
						data[i].GameName +
					'</option>';
		}

		this.select.setOptions(temp);
	};

    BettingRecord.prototype.createLoader = function() {
        var wrapper1 = this.zone.find('.table-zone tbody')[0];

        this.loader1 = new Loader(wrapper1, {
        	top: '84%',
        	color: '#000'
        });
    };

	BettingRecord.prototype.queryData = function(pageIndex, firstTime){
		var gamePlatform = '';
		var params       = '';
		var that         = this;
		var starttime    = this.zone.find('.starttime').val();
		var endtime      = this.zone.find('.endtime').val();
		var val          = this.select.getValue();

		if (val != -1) {
			gamePlatform = val;
		}
		
		params += 	'startTime=' + starttime +
					'&endTime=' + endtime +
					'&pageIndex=' + pageIndex +
					'&pageSize=10' +
					'&gamePlatform=' + gamePlatform;

		this.loader1.play();

        $.ajax({
            type: 'GET',
            url: app.urls.bettingRecords + params,
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

	BettingRecord.prototype.setData = function(data){
		var dom = '';
		var i = 0;
		var currentData = data.list;	

		for(i = 0; i < currentData.length; i++){
			if (i % 2 == 0) {
				dom +=	'<tr class="odd">' +
							'<td>' + currentData[i].CreateTime + '</td>' +
							'<td>' + currentData[i].Amount + '</td>' +
							'<td>' + currentData[i].GameType + '</td>' +
							'<td>' + currentData[i].TypeText + '</td>' +
							'<td>' + currentData[i].StatusText + '</td>' +
						'</tr>';
			} else {
				dom +=	'<tr class="even">' +
							'<td>' + currentData[i].CreateTime + '</td>' +
							'<td>' + currentData[i].Amount + '</td>' +
							'<td>' + currentData[i].GameType + '</td>' +
							'<td>' + currentData[i].TypeText + '</td>' +
							'<td>' + currentData[i].StatusText + '</td>' +
						'</tr>';
			}
		}

		this.zone.find('.table-zone tbody').html(dom);
	};

	BettingRecord.prototype.setDatetime = function () {
		var li       = this.zone.find('.fast-date .selected');
		var interval = parseInt(li.attr('data-value'));
		var endDay   = new Date();
		var beginDay = Util.getIntervalDate(endDay, interval);

		beginDay = beginDay.formatDate() + ' 00:00';
        endDay   = endDay.formatDate() + ' 23:59';
        this.zone.find('.starttime').datetimepicker({value: beginDay});
        this.zone.find('.endtime').datetimepicker({value: endDay});
	};

	BettingRecord.prototype.bindData = function(pageIndex){
		var dom = this.queryData(pageIndex);
		this.zone.find('.table-zone  table > tbody').html(dom);
	};

	BettingRecord.prototype.bindEvents = function () {
		var fastDateUl;
		var that     = this;
		var endDay   = new Date();
		var beginDay = Util.getIntervalDate(endDay, 0);

		this.zone    = $('.betting-record');
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
        });

        this.zone.find('#betting-record-button').click(function () {
        	that.queryData(0, true);
        });

		this.select.bindEvents();
		this.pager.bindEvents();
		this.createLoader();
	};

	window.BettingRecord = BettingRecord;
}());
