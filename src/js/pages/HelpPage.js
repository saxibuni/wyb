$(function() {
    function HelpPage() {
        this.initDom();
    }

    HelpPage.prototype.initDom = function() {
    	var temp = '<div class="page help-page">' + 
    					'<div class="wrapper">' +
                            '<div class="tree">' +
                                '<div class="title">澳门金沙娱乐</div>' +
                                '<ul>' + 
                                    '<li><span>关于我们</span><div></div></li>' +
                                    '<li><span>联系我们</span><div></div></li>' +
                                    '<li><span>存款帮助</span><div></div></li>' +
                                    '<li><span>合作伙伴</span><div></div></li>' +
                                    '<li><span>常见问题</span><div></div></li>' +
                                    '<li><span>市场合作</span><div></div></li>' +
                                    '<li><span>新人引导</span><div></div></li>' +
                                    
                                '</ul>' + 
                                '<div class="stick"></div>' +
                            '</div>' +

                            '<div class="container">' +
                                '<div class ="title">' +
                                     "关于我们" +
                                '</div>' +
                                '<hr class="line" />' +

                                '<div class="content">' +
                                    '<p>' + 
                                        '哈哈哈哈哈哈哈哈哈哈哈哈哈阿斯顿发放哈哈哈哈哈哈哈哈哈哈哈哈哈阿斯顿发放' +
                                        '哈哈哈哈哈哈哈哈哈哈哈哈哈阿斯顿发放哈哈哈哈哈哈哈哈哈哈哈哈哈阿斯顿发放' +
                                        '哈哈哈哈哈哈哈哈哈哈哈哈哈阿斯顿发放哈哈哈哈哈哈哈哈哈哈哈哈哈阿斯顿发放' +
                                    '</p>' +

                                    '<div class="subtile">' +
                                        '<span>监督及管理</span>' +
                                    '</div>' +
                                    '<p>' + 
                                        '哈哈哈哈哈哈哈哈哈哈哈哈哈阿斯顿发放哈哈哈哈哈哈哈哈哈哈哈哈哈阿斯顿发放' +
                                        '哈哈哈哈哈哈哈哈哈哈哈哈哈阿斯顿发放哈哈哈哈哈哈哈哈哈哈哈哈哈阿斯顿发放' +
                                        '哈哈哈哈哈哈哈哈哈哈哈哈哈阿斯顿发放哈哈哈哈哈哈哈哈哈哈哈哈哈阿斯顿发放' +
                                    '</p>' + 

                                    '<div class="subtile">' +
                                        '<span>监督及管理</span>' +
                                    '</div>' +
                                    '<p>' + 
                                        '哈哈哈哈哈哈哈哈哈哈哈哈哈阿斯顿发放哈哈哈哈哈哈哈哈哈哈哈哈哈阿斯顿发放' +
                                        '哈哈哈哈哈哈哈哈哈哈哈哈哈阿斯顿发放哈哈哈哈哈哈哈哈哈哈哈哈哈阿斯顿发放' +
                                        '哈哈哈哈哈哈哈哈哈哈哈哈哈阿斯顿发放哈哈哈哈哈哈哈哈哈哈哈哈哈阿斯顿发放' +
                                    '</p>' + 

                                    '<div class="subtile">' +
                                        '<span>监督及管理</span>' +
                                    '</div>' +
                                    '<p>' + 
                                        '哈哈哈哈哈哈哈哈哈哈哈哈哈阿斯顿发放哈哈哈哈哈哈哈哈哈哈哈哈哈阿斯顿发放' +
                                        '哈哈哈哈哈哈哈哈哈哈哈哈哈阿斯顿发放哈哈哈哈哈哈哈哈哈哈哈哈哈阿斯顿发放' +
                                        '哈哈哈哈哈哈哈哈哈哈哈哈哈阿斯顿发放哈哈哈哈哈哈哈哈哈哈哈哈哈阿斯顿发放' +
                                    '</p>' + 

                                    '<div class="subtile">' +
                                        '<span>监督及管理</span>' +
                                    '</div>' +
                                    '<p>' + 
                                        '哈哈哈哈哈哈哈哈哈哈哈哈哈阿斯顿发放哈哈哈哈哈哈哈哈哈哈哈哈哈阿斯顿发放' +
                                        '哈哈哈哈哈哈哈哈哈哈哈哈哈阿斯顿发放哈哈哈哈哈哈哈哈哈哈哈哈哈阿斯顿发放' +
                                        '哈哈哈哈哈哈哈哈哈哈哈哈哈阿斯顿发放哈哈哈哈哈哈哈哈哈哈哈哈哈阿斯顿发放' +
                                    '</p>' + 

                                '</div>' +

                            '</div>' +
                            '<div class="clear"></div>' +

                        '</div>' +
                    '</div>';
    		
    	this.el  = temp;
    }

    HelpPage.prototype.getDom = function() {
        return this.el;
    }

    HelpPage.prototype.show = function() {
        this.zone.show();
    }

    HelpPage.prototype.hide = function() {
        this.zone.hide();
    }

    HelpPage.prototype.bindEvents = function() {
        var pageUl;
        var stick;
        var index;
        var that = this;

        this.zone = $('.help-page');
        pageUl = this.zone.find('ul');
        stick = this.zone.find('.stick');

        pageUl.delegate('li','click',function(){
            index = $(this).index();
            stick.css('top',(index * 40 + 50) + 'px');
        });
    }

    window.HelpPage = HelpPage;
}());
