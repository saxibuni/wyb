(function () {
	function Header () {
		this.initDom();
	}
	
	Header.prototype.initDom = function () {
		var temp =	'<div class="header">' +
						'<div class="wrapper">' +
							'<div class="row1">' +
								'<div class="language">' +
									'语言' +
								'</div>' +

								'<div class="bzzx top-item">' +
									'设为首页' +
								'</div>' +

								'<div class="bzzx top-item">' +
									'帮助中心' +
								'</div>' +

								'<div class="bzzx top-item">' +
									'我的收藏' +
								'</div>' +
							'</div>' +

							'<div class="row2">' +
							'</div>' +
						'</div>' +
					'</div>';
		
		this.el  = temp;
	};

	Header.prototype.getDom = function () {
		return this.el;
	};

	Header.prototype.show = function () {
	};

	Header.prototype.hide = function () {
	};

	Header.prototype.bindEvents = function () {
	};

	window.Header = Header;
}());
