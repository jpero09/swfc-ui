# swfc-ui
UI for Star Wars Force Collection data

Note:Everything is very much a work in progress at this point. Just building out a basic framework to eventually build out into something hopefully useful.

# Getting started
* `npm install` installs all the node modules
* `npm build` clean and compile all the good stuffs (css, js, html, etc)
* `npm start` Starts the app

# Rules for Contributors
* Please run 'npm run lint' before requesting PR. Clean code only! 
Don't worry, [pre-commit](http://pre-commit.com) will catch it if you forget. 


Built to work with the [swfc service](https://github.com/jpero09/swfc)

# FAQ
* **Why aren't you using [grunt | gulp]?** Wanted to test out doing things via the package.json. If things get much more complex, I'll likely shift over to one of those packages, but for now, it's nice to know the 'how' on how those things are doing the things they do under the covers. It's a learning experience. Further reading [here](http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool)