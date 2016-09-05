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

		temp = '<div class="announcement-info znx-info-action">' +
						'<div class="bar-zone">' +
							'<div class="up">' +
								'<div class="time-section">' +
									'<span class="title">日期</span>' +
									'<input class="starttime" type="text"/>' +
									'<span class="divider">-</span>' +
									'<input class="endtime" type="text"/>' +
								'</div>' +

								this.button.getDom() +

								'<ul>' +
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
									'<tr>' +
										'<td><input type="checkbox" checked="checked" /></td>' +
										'<td><p>尊敬的会员，目前PT电子游艺园收到国际线路的影响，导致游戏暂时无法正常运行，' +
										'部分会员额度放在【PT额度】将会为会员陆续从【PT额度】转回【BB额度】内，还请耐心等待’' +
										'由此给你带来不便，还请多多谅解，感谢您一如既往的支持' +
										'</p></td>' +
										'<td>2016-09-09&nbsp;11:11:11</td>' +
									'</tr>' +

									'<tr class="even">' +
										'<td><input type="checkbox" checked="checked" /></td>' +
										'<td><p>尊敬的会员，目前PT电子游艺园收到国际线路的影响，导致游戏暂时无法正常运行，' +
										'部分会员额度放在【PT额度】将会为会员陆续从【PT额度】转回【BB额度】内，还请耐心等待’' +
										'由此给你带来不便，还请多多谅解，感谢您一如既往的支持' +
										'</p></td>' +
										'<td>2016-09-09&nbsp;11:11:11</td>' +
									'</tr>' +

									'<tr>' +
										'<td><input type="checkbox" checked="checked" /></td>' +
										'<td><p>尊敬的会员，目前PT电子游艺园收到国际线路的影响，导致游戏暂时无法正常运行，' +
										'部分会员额度放在【PT额度】将会为会员陆续从【PT额度】转回【BB额度】内，还请耐心等待’' +
										'由此给你带来不便，还请多多谅解，感谢您一如既往的支持' +
										'</p></td>' +
										'<td>2016-09-09&nbsp;11:11:11</td>' +
									'</tr>' +

									'<tr class="even">' +
										'<td><input type="checkbox" checked="checked" /></td>' +
										'<td><p>尊敬的会员，目前PT电子游艺园收到国际线路的影响，导致游戏暂时无法正常运行，' +
										'部分会员额度放在【PT额度】将会为会员陆续从【PT额度】转回【BB额度】内，还请耐心等待’' +
										'由此给你带来不便，还请多多谅解，感谢您一如既往的支持' +
										'</p></td>' +
										'<td>2016-09-09&nbsp;11:11:11</td>' +
									'</tr>' +

									'<tr>' +
										'<td><input type="checkbox" checked="checked" /></td>' +
										'<td><p>尊敬的会员，目前PT电子游艺园收到国际线路的影响，导致游戏暂时无法正常运行，' +
										'部分会员额度放在【PT额度】将会为会员陆续从【PT额度】转回【BB额度】内，还请耐心等待’' +
										'由此给你带来不便，还请多多谅解，感谢您一如既往的支持' +
										'</p></td>' +
										'<td>2016-09-09&nbsp;11:11:11</td>' +
									'</tr>' +

									'<tr class="even">' +
										'<td><input type="checkbox" checked="checked" /></td>' +
										'<td><p>尊敬的会员，目前PT电子游艺园收到国际线路的影响，导致游戏暂时无法正常运行，' +
										'部分会员额度放在【PT额度】将会为会员陆续从【PT额度】转回【BB额度】内，还请耐心等待’' +
										'由此给你带来不便，还请多多谅解，感谢您一如既往的支持' +
										'</p></td>' +
										'<td>2016-09-09&nbsp;11:11:11</td>' +
									'</tr>' +
								'</tbody>'
							'</table>' + 
						'</div>' +
				'</div>';


		this.el = temp;
	}

	Announcement.prototype.getDom = function(){
		return this.el;
	}

	Announcement.prototype.show = function() {
		this.zone.show();
	}

	Announcement.prototype.hide = function (){
		this.zone.hide();
	}

	Announcement.prototype.bindEvents = function(){
		var today = new Date();
		var that = this;

		this.zone = $('.announcement-info');

        today = today.formatDate();

        this.zone.find('.starttime').datetimepicker({value: today + ' 00:00', lang: 'en'});
        this.zone.find('.endtime').datetimepicker({value: today + ' 23:59', lang: 'en'});
		this.button.bindEvents();
	}


	window.Announcement = Announcement;
}());