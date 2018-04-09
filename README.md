# Phaser starter

simple (work in progess) boilerplate ready to develop games with [Phaser](https://phaser.io) and typescript

## Install

```sh
$ git clone --depth=1 https://github.com/gvinaccia/phaser-starter.git <project-name>
$ cd <project-name>
$ yarn install
```

## Usage

`yarn run dev` will start the devserver in watch mode and open the browser

`yarn run lint` will run tslint on the codebase using the rules specificed in tslint.json

`yarn run build` will compile and minify the code making it ready for deploy

### Phaser3 typings definitions

Since type definitions aren't available yet via npm they are included in this repository, is is always possible to update them by running `yarn run typings:update`


## Credits

this work is ispired by 

* [https://github.com/justweb/ts-template](https://github.com/justweb/ts-template)
* [https://github.com/troyedwardsjr/phaser3-typescript-webpack](https://github.com/troyedwardsjr/phaser3-typescript-webpack)
