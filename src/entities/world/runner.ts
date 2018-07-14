import * as Phaser from "./../../../node_modules/phaser/dist/phaser.js";

export class Runner extends Phaser.GameObjects.Sprite {
    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, "atlas", "guy/jump/01.png");
        this.setScale(0.6);
        this.setAngle(90);

        console.log(this)
    }
}