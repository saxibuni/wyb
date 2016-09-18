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

		this.stationLetterData = [
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11'],
			[true, '2016-08-01奥运会活动开启，敬请关注','2016-09-09&nbsp;11:11:11']						
		];

		this.pager = new Pager({
			id: 'station-letter-pager',
			callback: this.bindData.bind(this),
			totalCount: this.stationLetterData.length
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
									'<li class="selected"><span>今日</span></li>' +
									'<li><span>昨日</span></li>' +
									'<li><span>3日</span></li>' +
									'<li><span>7日</span></li>' +
								'</ul>' +

								'<div class="clear"></div>' +
							'</div>' +

						'</div>' +

						'<div class="table-zone">' +
							'<table>' +
								'<thead><tr>' +
									'<th colspan="2">通知内容</th><th>时间</th>' +
								'</tr><thead>' +
								'<tbody>' +
									// '<tr>' +
									// 	'<td><input type="checkbox" checked="checked" /></td>' +
									// 	'<td><p>2016-08-01奥运会活动开启，敬请关注</p></td>' +
									// 	'<td>2016-09-09&nbsp;11:11:11</td>' +
									// '</tr>' +

									// '<tr class="even">' +
									// 	'<td><input type="checkbox" checked="checked" /></td>' +
									// 	'<td><p>2016-08-01奥运会活动开启，敬请关注</p></td>' +
									// 	'<td>2016-09-09&nbsp;11:11:11</td>' +
									// '</tr>' +

									// 	'<tr>' +
									// 	'<td><input type="checkbox" checked="checked" /></td>' +
									// 	'<td><p>2016-08-01奥运会活动开启，敬请关注</p></td>' +
									// 	'<td>2016-09-09&nbsp;11:11:11</td>' +
									// '</tr>' +

									// '<tr class="even">' +
									// 	'<td><input type="checkbox" checked="checked" /></td>' +
									// 	'<td><p>2016-08-01奥运会活动开启，敬请关注</p></td>' +
									// 	'<td>2016-09-09&nbsp;11:11:11</td>' +
									// '</tr>' +

									// '<tr>' +
									// 	'<td><input type="checkbox" checked="checked" /></td>' +
									// 	'<td><p>2016-08-01奥运会活动开启，敬请关注</p></td>' +
									// 	'<td>2016-09-09&nbsp;11:11:11</td>' +
									// '</tr>' +

									// '<tr class="even">' +
									// 	'<td><input type="checkbox" checked="checked" /></td>' +
									// 	'<td><p>2016-08-01奥运会活动开启，敬请关注</p></td>' +
									// 	'<td>2016-09-09&nbsp;11:11:11</td>' +
									// '</tr>' +
									this.queryData(0) +
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
	}

	StationLetter.prototype.hide = function (){
		this.zone.hide();
	}

	StationLetter.prototype.queryData = function(pageIndex){
		var dom = '';
		var i = 0;
		var currentData = [];

		currentData = this.stationLetterData.filter(function(item, index){
			return index >= pageIndex * 10 && index < (pageIndex + 1) * 10;
		});

		for(i = 0; i < currentData.length; i++){
			if (i % 2 == 0) {
				dom +=	'<tr class="odd">' +
							'<td><input type="checkbox" checked="checked" /></td>' +
							'<td><p>' + currentData[i][1] + '</p></td>' +
							'<td>' + currentData[i][2] + '</td>' +							
						'</tr>';
			}else{
				dom +=	'<tr class="even">' +
							'<td><input type="checkbox" checked="checked" /></td>' +
							'<td><p>' + currentData[i][1] + '</p></td>' +
							'<td>' + currentData[i][2] + '</td>' +		
						'</tr>';
			}
		}

		return dom;
	}

	StationLetter.prototype.bindData = function(pageIndex){
		var dom = this.queryData(pageIndex);
		this.zone.find('.table-zone  table > tbody').html(dom);
	}

	StationLetter.prototype.bindEvents = function(){
		var today = new Date();
		var that = this;
		var fastDateUl;

		this.zone = $('.station-letter');
		fastDateUl   = this.zone.find('.fast-date'); 

        today = today.formatDate();

        this.zone.find('.starttime').datetimepicker({value: today + ' 00:00', lang: 'en'});
        this.zone.find('.endtime').datetimepicker({value: today + ' 23:59', lang: 'en'});
		
        fastDateUl.delegate('li', 'click', function () {
        	fastDateUl.children('li').removeClass('selected');
        	$(this).addClass('selected');
        });
        
		this.button.bindEvents();
		this.pager.bindEvents();
	}


	window.StationLetter = StationLetter;
}());