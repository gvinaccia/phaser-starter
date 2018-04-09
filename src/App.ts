import { Game } from "phaser";
import { MainScene } from "./scenes/MainScene";

export class App {

  private game: Phaser.Game|null = null;

  public run(parentElement: HTMLElement|null) {

    this.game = new Game({
      parent: parentElement,
      scene: [
        new MainScene(),
      ],
    });

  }
}
