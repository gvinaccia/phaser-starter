import { Scene } from "phaser";

export class MainScene extends Phaser.Scene {

  constructor() {
    super({
      key: "mainScene",
    });
  }

  preload() {
    console.log("preload");
  }

}
