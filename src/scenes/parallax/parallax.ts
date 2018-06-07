import * as Phaser from "./../../../node_modules/phaser/dist/phaser.js";
import { ParallaxLayer } from "./layer";

export class ParallaxScene extends Phaser.Scene {
    layers: ParallaxLayer[];
    layerData: Object[];
    velocity: number;

    constructor(...layerData: Object[][]) {
        super({active: true});
        this.layerData = layerData[0];
        this.layers = [];
        this.velocity = 0.1;
    }

    create() {
        for(let i in this.layerData) {
            let layer: ParallaxLayer = this.add.existing(new ParallaxLayer(this, this.layerData[i]));
            this.layers.push(layer);
        }
    }

    update() {
        for(let i = this.layers.length - 1; i >= 0; i--) {
            this.layers[i].y += this.velocity * (i*2+1);
        }
    }
}