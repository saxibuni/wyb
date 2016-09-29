(function () {
	var Config = {
        platforms: [
            'MG', 'PT', 'HG', 'BBIN', 'IBC', 'T188', 'EA', 'TB', 'AB', 'TTG', 'OW'
            , 'MT', 'HY', 'FG', 'OPUS', 'OPUS2', 'AG'
        ],
        timeout : 12000,
        domain  : 'http://api.vbetctrl.net/',
        imageServer : 'http://img.lb118.com/',

        urls: {
            signUp: this.domain + 'api/Account/Regist',
            signIn: this.domain + 'api/Account/Login',
            signOut: this.domain + 'api/Account/Logout',
            verifyImage: this.domain + 'api/AuthCode/CreateImageCode',
            checkVerifyImage: this.domain + 'api/AuthCode/CheckImageCode?securityCode=',
            loginStatus: this.domain + 'api/Account/GetLoginStatus',
            luckyDrawWinRecords: this.domain + 'api/Lucky/GetPrizes',
            
            getFavoriteGames: this.domain + 'api/Game/GetFavoriteGames?', //获取所有收藏的游戏
            addFavoriteGameById: this.domain + 'api/Game/AddFavorite',       //添加收藏游戏
            deleteFavoriteGameById: this.domain + 'api/Game/DeleteFavorite',  //删除收藏游戏

            getAds: this.domain + 'api/News/GetAds?',

            getJackpotsGames: this.domain + 'api/Game/GetJackpotsGames?',   //获取PT奖金池游戏
            getGameCategories: this.domain + 'api/Game/GetCategories?',   //获取电子游艺游戏类型
            getGameList: this.domain + 'api/Game/GetList?',              //获取电子游艺游戏列表

            getGameUrlForLogin: this.domain + 'api/Game/GetGameUrlForLogin?',

            queryPromoTypes: this.domain + 'api/Promo/GetAllType?',
            queryPromoListByType: this.domain + 'api/Promo/GetList',
            queryPromoContentById: this.domain + 'api/Promo/GetInfo',

            topupRecords: this.domain + 'api/Deposit/GetDepositList?',   //获取充值列表
            transferRecords: this.domain + 'api/Transfer/GetTransferList',
            withdrawRecords: this.domain + 'api/Withdrawal/GetWithdrawalList',
            bettingRecords: this.domain + 'api/Bet/GetBetList',
            dividentRecords: this.domain + '',
            queryStationLetter: this.domain + 'api/User/GetMessageList',
            queryNotices: this.domain + 'api/News/GetNotices',

            checkUserName: this.domain + 'api/User/CheckUserName?',    //检查用户名是否存在
        },

        regs: {
            usernameReg         :  '^[A-Za-z0-9]{6,12}$',
            passwordReg         :  '^[A-Za-z0-9]{6,50}$',
            verifyReg           :  '^[A-Za-z0-9]{4}$',
            popularizeReg       :  '^[A-Za-z0-9]{10}$',
            emailReg            :  '^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$',
            emailVerifyCodeReg  :  '^[0-9]{4}$',
            moneyReg            :  '^[0-9]+(.[0-9]{1,2})?$',
            phoneNumberReg      :  '^[0-9]{11}$'
        }
    };

	window.Config = Config;
}());