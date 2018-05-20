import * as Phaser from "./../../node_modules/phaser/dist/phaser.js";
import { PlayScene } from "./play";
import { game } from "./../game";

export class LoadScene extends Phaser.Scene {

    constructor() {
        super({});
    }

    preload() {
        game.atlas = this.load.atlas("atlas", "./assets/main.png", "./assets/main.json");
    }

    create() {
        let splash = this.add.image(game.canvas.width/2, game.canvas.height/2, "atlas", "splash.png");
        splash.setScale(game.canvas.width/splash.width, game.canvas.height/splash.height);

        game.scene.stop("load");
        game.scene.start("play");
    }
}