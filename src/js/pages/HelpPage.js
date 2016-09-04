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
                                    '<p>菲律宾“永利会”是亚洲领先的网上博彩娱乐品牌之一，我们一直致力于为各大客户缔造一个公平，安全和多元化的网上博彩投注平台。</p>' +
                                    '<p>永利会是以永利独家存创始人史蒂夫·阿伦·永利（通称永利，英文：Stephen Alan Wynn）命名的，而且我们是全年24小时无间断的给广大会员提供服务，因此，我们的网址为：<a href="http://www.yynn24.com">www.yynn24.com</a></p>' +

                                    '<div class="subtile">' +
                                        '<span>监督及管辖</span>' +
                                    '</div>' +
                                    '<p>' + 
                                        '“永利会”品牌是受菲律宾博彩监督委员会First Cagayan Leisure & Resort Corporation（简称First Cagayan）监督及管辖' +
                                    '</p>' + 

                                    '<div class="subtile">' +
                                        '<span>公司执照</span>' +
                                    '</div>' +
                                    '<p>“永利会”的执照许可是由菲律宾博彩监督委员会（简称Fisrt Cagayan）所核发并受该委员会监管。<br /></p>' +
                                    '<p>菲律宾博彩监督委员会自2002年开始监督网上博彩公司的经营，其经验十分丰富及享有业界极高的公信力，确保“永利会”在所有的操作上得到核发的监管。</p>' +
                                    '<div class="subtile">' +
                                        '<span>游戏平台</span>' +
                                    '</div>' +
                                    '<p>' + 
                                        '永利会聚集业界六大顶级平台，由世界领先的线上娱乐游戏软件公司PlayTech，Ho Gaming，Micro Gaming，BBIN，' +
                                        'IBCBET，T188金宝博所支持和提供的。真人荷官娱乐场内的游戏包括有真人二十一点，真人轮盘，真人百家乐，' +
                                        '真人骰宝和真人龙虎等，游戏精彩且刺激，让你能足不出户便能体验到如同澳门真实赌场投注所带来的激情和乐趣！' +
                                    '</p>' + 

                                    '<div class="subtile">' +
                                        '<span>公司愿景</span>' +
                                    '</div>' +
                                    '<p>' + 
                                        '“永利会”已有多家顶级企业和游戏软件平台供应商合作，以求给我们忠诚的客户提供一个最佳和最安全的多元化网上博彩投注平台。' +
                                        '我们拥有强大而经验丰富的团队，并在亚洲多个城市设有办事处，我们力图为亚太地区市场提供一个完善，可靠及安全的“一站式”的网上博彩平台。' +
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
        this.zone.find('.tree').height(this.zone.find('.container').outerHeight());
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
            stick.css('top',(index * 40 + 51) + 'px');
        });

    }

    window.HelpPage = HelpPage;
}());
