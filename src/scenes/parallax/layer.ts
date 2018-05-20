import * as Phaser from "./../../../node_modules/phaser/dist/phaser.js";
import { ParallaxScene } from "./parallax";
import { game } from "./../../game";

export class ParallaxLayer extends Phaser.GameObjects.Container {
    components: any[];
    config: any;

    constructor(scene: ParallaxScene, config: any) {
        super(scene, 0, 0);
        this.components = [];

        for(let i in config) {
            let item = config[i];
            //let img = scene.add.image(item.position.x, item.position.y, "atlas", item.textureName);
            let img = scene.add.image(Math.random() * game.canvas.width, Math.random() * game.canvas.height, "atlas", item.textureName);
            img.setScale(item.scale.x, item.scale.y);
            this.components.push(img);
            this.add(img);
        }
    }
}