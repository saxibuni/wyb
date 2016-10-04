$(function(){
	function Announcement(opt){
		this.opt = opt;
		this.initDom();
	}

	Announcement.prototype.initDom = function(){
		var temp;

		this.button = new Button({
			id: 'announcement-info-button',
			name: '查询',
			width: 60,
			height: 25			
		});

		this.pager = new Pager({
			id: 'announcement-pager',
			pageSize: 5,
			callback: this.bindData.bind(this),
			totalCount: 0
		});

		temp = '<div class="announcement-info znx-info-action">' +
						// '<div class="bar-zone">' +
						// 	'<div class="up">' +
						// 		'<div class="time-section">' +
						// 			'<span class="title">日期</span>' +
						// 			'<input class="starttime" type="text"/>' +
						// 			'<span class="divider">-</span>' +
						// 			'<input class="endtime" type="text"/>' +
						// 		'</div>' +

						// 		this.button.getDom() +

						// 		'<ul>' +
						// 			'<li class="selected"><span>今日</span></li>' +
						// 			'<li><span>昨日</span></li>' +
						// 			'<li><span>3日</span></li>' +
						// 			'<li><span>7日</span></li>' +
						// 		'</ul>' +

						// 		'<div class="clear"></div>' +
						// 	'</div>' +

						// '</div>' +

						'<div class="table-zone">' +
							'<table>' +
								'<thead><tr>' +
									'<th colspan="2">通知内容</th><th>时间</th>' +
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

	Announcement.prototype.getDom = function(){
		return this.el;
	}

	Announcement.prototype.show = function() {
		this.zone.show();
		this.queryData(0);
	}

	Announcement.prototype.hide = function (){
		this.zone.hide();
	}

	Announcement.prototype.queryData = function(pageIndex){
		var i;
		var callback;
		var that = this;
		var opt  = {
			url: app.urls.getAnnouncements,
			data: {
				pageIndex: pageIndex,
				pageSize: 10
			}
		};

		callback = function (data) {
            if (data && data.StatusCode) {
                alert(data.Message);
                return;
            }

            that.announcementData = data.list;
            that.setData();
		};

		Service.get(opt, callback);
	};

	Announcement.prototype.setData = function(){
		var dom = '';
		var i = 0;
		var currentData = this.announcementData;

		for(i = 0; i < currentData.length; i++){
			if (i % 2 == 0) {
				dom +=	'<tr class="odd">' +
							'<td><input type="checkbox" checked="checked" /></td>' +
							'<td><p>' + currentData[i].Content_RemoveHtml + '</p></td>' +
							'<td>' + currentData[i].CreateTime + '</td>' +							
						'</tr>';
			}else{
				dom +=	'<tr class="even">' +
							'<td><input type="checkbox" checked="checked" /></td>' +
							'<td><p>' + currentData[i].Content_RemoveHtml + '</p></td>' +
							'<td>' + currentData[i].CreateTime + '</td>' +			
						'</tr>';
			}
		}

		this.zone.find('.table-zone  table > tbody').html(dom);
	}

	Announcement.prototype.bindData = function(pageIndex){
		this.queryData(pageIndex);
	}

	Announcement.prototype.bindEvents = function(){
		var today = new Date();
		var that = this;

		this.zone = $('.announcement-info');

        today = today.formatDate();

        this.zone.find('.starttime').datetimepicker({value: today + ' 00:00', lang: 'en'});
        this.zone.find('.endtime').datetimepicker({value: today + ' 23:59', lang: 'en'});
		this.button.bindEvents();
		this.pager.bindEvents();
	}


	window.Announcement = Announcement;
}());