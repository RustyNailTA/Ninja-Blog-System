# Ninja-Blog-System

A repository containing our teamwork project for the 'JavaScript Applications' course @ TelerikAcademy, 2015. 

## Installation and configuration

#### General

1. Clone the repository

    ```
    $ git clone https://github.com/RustyNailTA/Ninja-Blog-System
    ```
    
2. Download and install [Node.js](https://nodejs.org/download/) if you haven't installed it yet. 
3. Install [bower](http://bower.io/)
 
    ```
    $ npm install -g bower
    ```
    
4. Install all of the required Node.js packages

    ```
    $ npm install
    ```
    
    * [http-server](https://www.npmjs.com/package/http-server) - Simple http server for node
    * [babel-core](https://babeljs.io/) - Allows ES6 (especially ES6-like module loading)
    * [mocha](https://mochajs.org/) - Unit testing framework
    * [chai](http://chaijs.com/) - Assertion framework
    
5. Install all of the required bower packages

    ```
    $ bower install
    ```
    
    * [SystemJS](https://github.com/systemjs/systemjs) - Universal dynamic module loader
    * [jQuery](https://jquery.com/)

6. Start the server

    ```
    $ npm start
    ```
    
7. Start your favourite browser and open

    ```
    http://localhost:1337/
    ```

#### Additional

* Running the tests

    ```
    $ npm test
    ```
    
* Running the server on different port
  * Open `package.json`
  * Change the `scripts` object as follows

    ```
    "scripts": {
      "start": "node node_modules/http-server/bin/http-server -p PORT_NUMBER"
    }
    ```
    
## Contributors

* Ivaylo Arnaudov ([GitHub](https://github.com/arnaudoff), [TelerikAcademy](http://telerikacademy.com/Users/ivaylo.arnaudov))
* Ivo Paounov ([GitHub](https://github.com/IvoPaunov), [TelerikAcademy](http://telerikacademy.com/Users/ivo.paunov))
* Kiril Borisov ([GitHub](https://github.com/kborisov760), [TelerikAcademy](http://telerikacademy.com/Users/borisov.kiril760))
* Kristina Yoveva ([GitHub](http://telerikacademy.com/Users/KYoveva), [TelerikAcademy](http://telerikacademy.com/Users/KYoveva))
* Martin Veshev ([GitHub](https://github.com/vesheff), [TelerikAcademy](http://telerikacademy.com/Users/vesheff))
