import * as Phaser from "./../../node_modules/phaser/dist/phaser.js";
import { ParallaxScene } from "./parallax/parallax";
import { Runner } from "./../entities/world/runner";
import { LayerData } from "./parallax/layerData";
import { game } from "./../game";

export class PlayScene extends Phaser.Scene {
    bg: ParallaxScene;
    runner: Runner;

    constructor() {
        super({});
    }

    preload() {
        this.bg = new ParallaxScene(LayerData);
        game.scene.add("bg", this.bg, true);
    }

    create() {
        game.scene.start("bg");
        this.bg.add.existing(new Runner(this, 160, 400));
    }
}