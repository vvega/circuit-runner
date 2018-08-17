import * as Phaser from "./../../../node_modules/phaser/dist/phaser.js";
import { ParallaxLayer } from "./layer";

export class ParallaxScene extends Phaser.Scene {
    layers: ParallaxLayer[];
    layerData: Object[];
    velocity: number;
    add: any;

    constructor(...layerData: Object[][]) {
        super({active: true});
        this.layerData = layerData[0];
        this.layers = [];
        this.velocity = 0.05;
    }

    create() {
        let layer: ParallaxLayer;

        for(let i = 0; i < 5; i++) {
            layer = this.add.existing(new ParallaxLayer(this, this.velocity * (i*2+1), 1 * (i+1), this.layerData[0]));
            layer.setScale(0.6 + (i/10))
            layer.setAlpha(0.5 + (i/10));
            this.layers.push(layer);

            layer.init();
        }
    }

    update() {
        for(let i = this.layers.length - 1; i >= 0; i--) {
            this.layers[i].update();
        }
    }
}