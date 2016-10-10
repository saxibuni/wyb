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
			callback: this.bindData.bind(this)
		});

		temp = '<div class="announcement-info znx-info-action">' +
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
		this.queryData(0, true);
	}

	Announcement.prototype.hide = function (){
		this.zone.hide();
	}

    Announcement.prototype.createLoader = function() {
        var wrapper1 = this.zone.find('.table-zone tbody')[0];

        this.loader1 = new Loader(wrapper1, {
        	top: '84%',
        	color: '#000'
        });
    };

	Announcement.prototype.queryData = function(pageIndex, firstTime) {
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

		callback = function (json) {
            if (json && json.StatusCode) {
                alert(json.Message);
                return;
            }

            that.setData(json.list);

        	if (firstTime) {
        		that.pager.setTotal(json.count);
        	}
		};

		Service.get(opt, callback);
	};

	Announcement.prototype.setData = function(data){
		var dom = '';
		var i = 0;
		var currentData = data;

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
							'<td data-content="' + currentData[i].Content + '"><p>' + currentData[i].Content_RemoveHtml + '</p></td>' +
							'<td>' + currentData[i].CreateTime + '</td>' +			
						'</tr>';
			}
		}

		this.zone.find('.table-zone  table > tbody').html(dom);
	}

	Announcement.prototype.bindData = function(pageIndex) {
		var dom = this.queryData(pageIndex);
		this.zone.find('.table-zone  table > tbody').html(dom);
	};

	Announcement.prototype.bindEvents = function () {
		var that     = this;

		this.zone    = $('.announcement-info');
        this.zone.find('#announcement-info-button').click(function () {
        	that.queryData(0, true);
        });

		this.pager.bindEvents();
		this.createLoader();
	};

	window.Announcement = Announcement;
}());