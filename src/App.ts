import { Game } from "phaser";

import { MainScene, BootScene, PreloadScene } from "./scenes";

export class App {

  private game!: Phaser.Game;

  public run(parentElement: HTMLElement|string) {

    this.game = new Game({
      parent: parentElement,
      scene: [
        new BootScene(),
        new PreloadScene(),
        new MainScene(),
      ],
    });

  }
}
