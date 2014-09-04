# [Moravia Styleguide](http://moravia.github.io/ux)

Moravia Styleguide is a extension of  [Twitter Bootstrap](http://getbootstrap.com) - intuitive and powerful front-end framework for faster and easier web development, created by [Mark Otto](http://twitter.com/mdo) and [Jacob Thornton](http://twitter.com/fat), and maintained by the [core team](https://github.com/twbs?tab=members) with the massive support and involvement of the community.

Moravia Styleguide is maintained by [Luboš Schrámek](http://twitter.com/1ubos)

---

## Build System
It uses Grunt for its build system, with convenient methods for working with the framework. It's how we compile our code.

### Install Grunt

To install Grunt, you must first **download and install node.js** (which includes npm). Npm stands for node packaged modules and is a way to manage development dependencies through node.js. Install grunt-cli globally with ```npm install -g grunt-cli```. Navigate to the root directory, then run ```npm install```. Npm will look at the package.json file and automatically install the necessary local dependencies listed there. When completed, you'll be able to run the various Grunt commands provided from the command line.

### Install Bower

Bower is a package manager for the web. Install bower globally with ```npm install -g bower```. Navigate to the root directory, then run ```bower install```.

---

## Grunt building commands

```grunt dev``` - Build a non-minified CSS /dist/css/moravia.css and start grunt watcher

```grunt dist``` - Build a minified CSS /dist/css/moravia.min.css and copy Javascript dependencies from bower.json, actually Bootstrap and jQuery into /dist/js/. As a Bootstrap user, this is normally the command you want.

---

Special thanks: [Jan Remunda](https://twitter.com/JanRemunda), [Přemysl Krajčovič](https://twitter.com/Myslik)