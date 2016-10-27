$(function(){
	function BasicInfo(opt){
		this.opt = opt;
		this.initDom();
	}

	BasicInfo.prototype.initDom = function(){
		var temp;
		var filler = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';

		this.button = new Button({
			id: 'basic-info-button',
			name: '提交',
			width: 120
		});

		this.realNameInput = new Input({
			id: 'real-name-input',
			width: 200,
			height: 30
		});

		this.selectProvince = new Select({
			id: 'basic-info-province',
			width: 200,
			height: 30,
			data:[
				{
					'text': '省',
					'value': '-1'	
				}
			]
		});

		this.selectCity = new Select({
			id: 'basic-info-city',
			width: 200,
			height: 30,
			data:[
				{
					'text': '市',
					'value': '-1'	
				}
			]
		});

		temp = '<div class="basic-info zhsz-info-action">' +
					'<div class="wrapper">' +
						'<div class="row row1">' +
							'<div class="text">真实姓名</div>' +
							this.realNameInput.getDom() +
						'</div>' +

						'<div class="row row3">' +
							'<div class="text">生' + filler + '日</div>' +
							'<input class="birthday" type="text" />' +
						'</div>' + 

						'<div class="row row4">' +
							'<div class="text">地' + filler + '址</div>' +

							this.selectProvince.getDom() +
							this.selectCity.getDom() +
						'</div>' +

						'<div class="row row5">' +
							'<div class="text">详细地址</div>' +
							'<textarea class="address"></textarea>' +
						'</div>' +

						'<div class="row6">' +
							this.button.getDom() +
						'</div>' +
				'</div>';

		this.el = temp;
	};

	BasicInfo.prototype.getDom = function() {
		return this.el;
	};

	BasicInfo.prototype.show = function() {
		this.zone.show();

		if (!this.firstTime) {
			this.getProvinceList();
			this.setUserInfo();
			this.firstTime = true;
		}
	};

	BasicInfo.prototype.hide = function() {
		this.zone.hide();
	};

	BasicInfo.prototype.createProvinceUl = function(data) {
		var i;
		var temp = '';

		for (i = 0; i < data.length; i++) {
			temp += '<option data-value="' + data[i].Id + '">' +
						data[i].Name +
					'</option>';
		}

		this.selectProvince.setOptions(temp);
	};

	BasicInfo.prototype.createCityUl = function(data) {
		var i;
		var temp = '';

		for (i = 0; i < data.length; i++) {
			temp += '<option data-value="' + data[i].Id + '">' +
						data[i].Name +
					'</option>';
		}

		this.selectCity.setOptions(temp);
	};

	BasicInfo.prototype.getProvinceList = function() {
		var callback;
		var that    =  this;
		var opt     =  {
			url: app.urls.getProvinceList,
			data: {}
		};

		callback = function (data) {
			if (!data) {
				return;
			}

			that.createProvinceUl(data);
		};

		Service.get(opt, callback);
	};

	BasicInfo.prototype.getCityList = function(provinceId) {
		var callback;
		var that    =  this;
		var opt     =  {
			url: app.urls.getCityList,
			data: {
				provinceId: provinceId
			}
		};

		callback = function (data) {
			if (!data) {
				return;
			}

			that.createCityUl(data);
		};

		Service.get(opt, callback);
	};

	BasicInfo.prototype.reset = function() {
		this.zone.find('.address').val('');
	};

	BasicInfo.prototype.setUserInfo = function() {
		var data = app.userTotalInfo;

		this.realNameInput.setValue(data.TrueName);
	};

	BasicInfo.prototype.commit = function() {
		var i;
		var callback;
		var that     = this;
		var trueName = $.trim(this.realNameInput.getValue());
		var birthday = $.trim(this.zone.find('.birthday').val());
		var address  = $.trim(this.zone.find('.address').val());
		var province = this.selectProvince.getValue();
		var city     = this.selectCity.getValue();

		var opt  = {
			url: app.urls.updateUserInfo,
			data: {
				TrueName: trueName,
				Birthday: birthday,
				Address: address,
				Province: province,
				City: city
			}
		};

		callback = function (data) {
			if (data === true) {
				alert('修改成功');
				that.reset();
			} else {
				alert('修改失败');
			}
		};

		Service.post(opt, callback);
	};

	BasicInfo.prototype.bindEvents = function(){
		var today = new Date();
		var that = this;

		this.zone = $('.basic-info');
		this.zone.find('.birthday').datetimepicker({
			value: today, 
			lang: 'en',
			timepicker: false,
			format:"Y-m-d"
		});

		this.zone.find('#basic-info-button').click(function () {
			that.commit();
		});

		this.zone.find('#basic-info-province').change(function () {
			that.getCityList(that.selectProvince.getValue());
		});

		this.realNameInput.bindEvents();
		this.button.bindEvents();
		this.selectProvince.bindEvents();
		this.selectCity.bindEvents();
	};

	window.BasicInfo = BasicInfo;
}());