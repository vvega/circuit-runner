import * as Phaser from "./../../../node_modules/phaser/dist/phaser.js";

export class Building extends Phaser.GameObjects.Sprite3D {
    active: Boolean;

    constructor(scene: Phaser.scene, x: Number, y: Number, z: Number, textureName: String = "front1.png") {
        super(scene, x, y, z, "atlas", textureName);
        //add touch areas
        this.setInteractive();
        this.on("pointerdown", () => scene.shiftForward(this.x, this.y), scene);
    }

    kill() {
        this.active = false;
    }

    revive() {
        this.active = true;
    }
}