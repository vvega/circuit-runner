import * as Phaser from "./../../node_modules/phaser/dist/phaser.js";
import { ParallaxScene } from "./parallax/parallax";
import { ParallaxLayer } from "./parallax/layer";
import { LayerData } from "./parallax/layerData";
import { game } from "./../game";

export class PlayScene extends Phaser.Scene {

    constructor() {
        super({});
    }

    preload() {
        console.log("playing");
        game.scene.add("bg", new ParallaxScene(LayerData), true);
    }

    create() {
        game.scene.start("bg");
    }
}