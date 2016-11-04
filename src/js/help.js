(function () {
	'use strict';

	function Help () {
        this.timeout            = 12000;
        this.domain             = 'http://api.vebets.com/';
        this.getWebPageByKeyUrl = this.domain + 'api/News/GetNewsByKey?';
        this.newsCategoriesUrl  = this.domain + 'api/News/GetSubcategories?';
    
		this.init();
		this.bindEvents();
        this.show();
	}

	Help.prototype.init = function () {
		this.header   = new Header({
            helpPage: true
        });
		this.footer   = new Footer();

		this.el  = 	this.header.getDom() +
    				'<div class="help-center">' + 
    					'<div class="wrapper">' +
                            '<div class="content">' +
                                '<div class="tree">' +
                                    '<div class="tree-title">' +
                                        '<div class="cn-title">' +
                                            '帮助中心' +
                                        '</div>' +

                                        '<div class="en-title">' +
                                            'HELP CENTER' +
                                        '</div>' +
                                    '</div>' +

                                    '<ul></ul>' +
                                '</div>' +

                                '<div class="help-content">' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +

					this.footer.getDom();

		$('.app').append(this.el);
        this.queryTreeItems();
	};
	
    Help.prototype.getDom = function() {
        return this.el;
    };

    Help.prototype.show = function() {
        var name;
        var url = window.location.href;
        var pos = url.indexOf('item=');

        if (pos === -1) {
            name = 'aboutus';
        } else {
            name = url.substring(pos + 5);
        }

        this.zone.find('.content-item').hide();
        this.zone.find('.' + name).show();
        this.zone.find('.tree ul li[data-value=' + name + ']').addClass('selected');
        this.zone.find('.tree').height(this.zone.find('.container').outerHeight());
    };

    Help.prototype.hide = function() {
        this.zone.hide();
    };

    Help.prototype.createTreeItems = function (arr) {
        var i;
        var temp = '';

        for (i = 0; i < arr.length; i++) {
            temp += '<li ' + (i === 0?'class="active" ': '') + 'data-key="' + arr[i].Key + '">' +
                        arr[i].Name +
                    '</li>';
        }

        temp += '<div class="stick"></div>';

        $('.app .tree ul').append(temp);
        $('.app .help-content').css('height', $('.app .tree').css('height'));
    };

    Help.prototype.queryTreeItems = function (key) {
        var callback;
        var that    =  this;
        var opt     =  {
            url: this.newsCategoriesUrl,
            data: {
                category: 'help'
            }
        };

        $.ajax({
            type: 'GET',
            url: opt.url,
            dataType: 'json',
            timeout: this.timeout,
            data: opt.data,
            xhrFields: {
                withCredentials: true
            }
        }).done(function (json) {
            if (json.StatusCode && json.StatusCode != 0) {
                alert(json.Message);
                return;
            }

            that.createTreeItems(json);
            that.getWebPageByKey(json[0].Key);
        }).fail(function (xhr, testStatus, error) {
            alert(error);
        });
    };

    Help.prototype.getWebPageByKey = function (key) {
        var callback;
        var that    =  this;
        var opt     =  {
            url: this.getWebPageByKeyUrl,
            data: {
                key: key
            }
        };

        $.ajax({
            type: 'GET',
            url: opt.url,
            dataType: 'json',
            timeout: this.timeout,
            data: opt.data,
            xhrFields: {
                withCredentials: true
            }
        }).done(function (json) {
            if (json.StatusCode && json.StatusCode != 0) {
                alert(json.Message);
                return;
            }

            that.zone.find('.help-content').html(json.Content);
        }).fail(function (xhr, testStatus, error) {
            alert(error);
        });
    };

    Help.prototype.bindEvents = function() {
        var treeUl;
        var stick;
        var index;
        var key;
        var that = this;

        this.zone = $('.help-center');
        treeUl    = this.zone.find('.tree ul');

        treeUl.delegate('li','click',function() {
            stick     = treeUl.find('.stick');
            index = $(this).index();
            stick.css('top',index * 50 + 'px');

            treeUl.find('li').removeClass('active');
            $(this).addClass('active');

            key = $(this).attr('data-key');
            that.getWebPageByKey(key);
        });

		this.footer.bindEvents();
        this.header.bindEvents();
    };

	window.Help = new Help();
})();
