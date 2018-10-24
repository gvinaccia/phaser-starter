import { Scene } from 'phaser';

import { Scenes } from './keys';

export class MainScene extends Phaser.Scene {

  constructor() {
    super({
      key: Scenes.MAIN,
    });
  }

  create() {
    console.log('MAIN');
  }

}
