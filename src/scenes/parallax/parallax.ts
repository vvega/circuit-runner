import * as Phaser from "./../../../node_modules/phaser/dist/phaser.js";
import { ParallaxLayer } from "./layer";

export class ParallaxScene extends Phaser.Scene {
    layers: ParallaxLayer[];
    layerData: Object[];

    constructor(...layerData: Object[][]) {
        super({active: true});
        this.layerData = layerData[0];
        this.layers = [];
    }

    create() {
        for(let i in this.layerData) {
            let layer: ParallaxLayer = this.add.existing(new ParallaxLayer(this, this.layerData[i]));
            this.layers.push(layer);
        }
    }
}