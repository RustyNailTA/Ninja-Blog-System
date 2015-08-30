import { Parse as Parse } from 'parse';

var db = (function (Parse) {
    function init() {
        Parse.initialize("by6R7kv1sgAk4lRHRQHZkSGogK9ow8JdZAcLNk55",
        "uJcZm7i4Xvc11Zs9R8mEAHBxS3zVwdATQnEtSbuB");
    }

    return {
        init: init
    }

}) (Parse);

export default db;
