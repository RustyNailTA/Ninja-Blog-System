var expect = require('chai').expect,
    User = require('../scripts/user.js');

describe('User', function () {
    describe('#create()', function() {
        it('should be a function', function () {
            expect(User.create).to.be.a('function');
        });

        it('should throw when username is null', function() {
            function nullUsernameTest() {
                var user = User.create(null, 'ivo123', 'ivo@ivo.com');
            }

            expect(nullUsernameTest).to.throw();
        });

        it('should throw when username is undefined', function() {
            function undefinedUsernameTest() {
                var user = User.create(undefined, 'ivo123', 'ivo@ivo.com');
            }

            expect(undefinedUsernameTest).to.throw();
        });

        it('should throw when username is an empty string', function() {
            function emptyUsernameTest() {
                var user = User.create('', 'ivo123', 'ivo@ivo.com');
            }

            expect(emptyUsernameTest).to.throw();
        });

        it('should throw when password is null', function() {
            function nullPasswordTest() {
                var user = User.create('ivo', null, 'ivo@ivo.com');
            }

            expect(nullPasswordTest).to.throw();
        });

        it('should throw when password is undefined', function() {
            function undefinedPasswordTest() {
                var user = User.create('ivo', undefined, 'ivo@ivo.com');
            }

            expect(undefinedPasswordTest).to.throw();
        });

        it('should throw when password is an empty string', function() {
            function emptyPasswordTest() {
                var user = User.create('ivo', '', 'ivo@ivo.com');
            }

            expect(emptyPasswordTest).to.throw();
        });

        it('should throw when email is null', function() {
            function nullEmailTest() {
                var user = User.create('ivo', 'ivo123', null);
            }

            expect(nullEmailTest).to.throw();
        });

        it('should throw when email is undefined', function() {
            function undefinedEmailTest() {
                var user = User.create('ivo', 'ivo123', undefined);
            }

            expect(undefinedEmailTest).to.throw();
        });

        it('should throw when email is an empty string', function() {
            function emptyEmailTest() {
                var user = User.create('ivo', 'ivo123', '');
            }

            expect(emptyEmailTest).to.throw();
        });
    });

    describe('#getAllUsers()', function () {
        it('should be a function', function () {
            expect(User.getAllUsers).to.be.a('function');
        });
    });
});
