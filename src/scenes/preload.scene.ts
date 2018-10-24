import { Scene } from 'phaser';

import { Scenes } from './keys';

export class PreloadScene extends Phaser.Scene {
    constructor() {
        super({
            key: Scenes.PRELOAD
        });
    }

    create() {
        console.log(`create ${Scenes.PRELOAD}`);
        this.scene.start(Scenes.MAIN);
    }

    shutdown() {
        console.log(`shutdown ${Scenes.PRELOAD}`);
    }
}
