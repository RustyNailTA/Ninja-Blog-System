import { Parse as Parse } from 'parse';

var fbApi = (function (Parse) {
    function init() {

        Parse.initialize("by6R7kv1sgAk4lRHRQHZkSGogK9ow8JdZAcLNk55",
            "uJcZm7i4Xvc11Zs9R8mEAHBxS3zVwdATQnEtSbuB");

        window.fbAsyncInit = function() {
            Parse.FacebookUtils.init({
                appId      : '487505241412918',
                status     : true,
                cookie     : true,
                xfbml      : true,
                version    : 'v2.4'
            });
        };

        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }

    return {
        init: init
    }

}) (Parse);

export default fbApi;
