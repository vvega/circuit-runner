import * as Phaser from "./../../../node_modules/phaser/dist/phaser.js";

export class Building extends Phaser.GameObjects.Sprite {
    active: Boolean;

    constructor(scene: Phaser.scene, x: Number, y: Number, textureName: String) {
        super(scene, x, y, "atlas", textureName);
        //add touch areas
    }

    kill() {
        this.active = false;
    }

    revive() {
        this.active = true;
    }
}