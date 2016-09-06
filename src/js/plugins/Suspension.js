/**
 * Created by Annie on 2016/9/3.
 */
(function () {
    function Suspension(opt) {
        this.opt = opt;
        this.initDom();
    }

    Suspension.prototype.initDom = function() {
        var temp =  '<div class="suspension">' +
                        '<div class="arrow">' +
                            '<a>' +
                                '<i class="tab-icon"></i>' +
                            '</a>' +
                        '</div>' +
                        '<div class="qrcode">' +
                            '<a>' +
                                '<i class="tab-icon"></i>' +
                                '<em class="tab-text">二维码</em>' +
                            '</a>' +
                        '</div>' +
                        '<div class="activity">' +
                            '<a >' +
                                '<i class="tab-icon"></i>' +
                                '<em class="tab-text">活动</em>' +
                            '</a>' +
                        '</div>' +
                        '<div class="qq-kf">' +
                            '<a>' +
                                '<i class="tab-icon"></i>' +
                                '<em class="tab-text">QQ在线客服</em>' +
                            '</a>' +
                        '</div>' +
                        '<div class="phone-kf">' +
                                '<a>' +
                                    '<i class="tab-icon"></i>' +
                                    '<em class="tab-text">电话客服</em>' +
                                '</a>' +
                        '</div>' +
                        '<div class="online-kf">' +
                                '<a>' +
                                    '<i class="tab-icon"></i>' +
                                    '<em class="tab-text">在线客服</em>' +
                                '</a>' +
                        '</div>' +
                    '</div>';

        this.el = temp;
    };

    Suspension.prototype.getDom = function() {
        return this.el;
    };

    window.Suspension = Suspension;

}());