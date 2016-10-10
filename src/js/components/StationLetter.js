$(function(){
	function StationLetter(opt){
		this.opt = opt;
		this.initDom();
	}

	StationLetter.prototype.initDom = function(){
		var temp;

		this.button = new Button({
			id: 'station-letter-button',
			name: '查询',
			width: 60,
			height: 25			
		});

		this.pager = new Pager({
			id: 'station-letter-pager',
			callback: this.bindData.bind(this)
		});

		temp = '<div class="station-letter znx-info-action">' +
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

						'</div>' +

						'<div class="table-zone">' +
							'<table>' +
								'<thead><tr>' +
									'<th>通知内容</th><th>时间</th>' +
								'</tr><thead>' +
								'<tbody>' +
								'</tbody>' +
							'</table>' + 

							 '<div class="page-content">' +
 								this.pager.getDom() +
 							'</div>' +
						'</div>' +
				'</div>';


		this.el = temp;
	}

	StationLetter.prototype.getDom = function(){
		return this.el;
	}

	StationLetter.prototype.show = function() {
		this.zone.show();
		this.queryData(0, true);
	};

	StationLetter.prototype.hide = function (){
		this.zone.hide();
	};

    StationLetter.prototype.createLoader = function() {
        var wrapper1 = this.zone.find('.table-zone tbody')[0];

        this.loader1 = new Loader(wrapper1, {
        	top: '84%',
        	color: '#000'
        });
    };

	StationLetter.prototype.queryData = function(pageIndex, firstTime) {
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
            url: app.urls.queryStationLetter + params,
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

	StationLetter.prototype.setData = function(data){
		var dom = '';
		var i = 0;
		var currentData = data.list;

		for(i = 0; i < currentData.length; i++){
			if (i % 2 == 0) {
				dom +=	'<tr class="odd">' +
							'<td>' + currentData[i].Message + '</td>' +
							'<td>' + currentData[i].SendTime + '</td>' +
						'</tr>';
			} else {
				dom +=	'<tr class="even">' +
							'<td>' + currentData[i].Message + '</td>' +
							'<td>' + currentData[i].SendTime + '</td>' +
						'</tr>';
			}
		}

		this.zone.find('.table-zone tbody').html(dom);
	};

	StationLetter.prototype.bindData = function(pageIndex) {
		var dom = this.queryData(pageIndex);
		this.zone.find('.table-zone  table > tbody').html(dom);
	};

	StationLetter.prototype.setDatetime = function () {
		var li       = this.zone.find('.fast-date .selected');
		var interval = parseInt(li.attr('data-value'));
		var endDay   = new Date();
		var beginDay = Util.getIntervalDate(endDay, interval);

		beginDay = beginDay.formatDate() + ' 00:00';
        endDay   = endDay.formatDate() + '23:59';
        this.zone.find('.starttime').datetimepicker({value: beginDay});
        this.zone.find('.endtime').datetimepicker({value: endDay});
	};

	StationLetter.prototype.bindEvents = function () {
		var fastDateUl;
		var that     = this;
		var endDay   = new Date();
		var beginDay = Util.getIntervalDate(endDay, 0);

		this.zone    = $('.station-letter');
		fastDateUl   = this.zone.find('.fast-date'); 

		beginDay = beginDay.formatDate() + ' 00:00';;
        endDay   = endDay.formatDate() + '23:59';
        this.zone.find('.starttime').datetimepicker({
        	value: beginDay,
        	timepicker: false
        });
        this.zone.find('.endtime').datetimepicker({
        	value: endDay,
        	timepicker: false
        });

        fastDateUl.delegate('li', 'click', function () {
			fastDateUl.children('li').removeClass('selected');
	        $(this).addClass('selected');
        	that.setDatetime();
        });

        this.zone.find('#station-letter-button').click(function () {
        	that.queryData(0, true);
        });

		this.pager.bindEvents();
		this.createLoader();
	};

	window.StationLetter = StationLetter;
}());