import * as Phaser from "./../../../node_modules/phaser/dist/phaser.js";
import { ParallaxLayer } from "./layer";
import { BuildingPool } from "./../../entities/world/buildingPool";
import { Building } from "./../../entities/world/building";

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
        let building: Building;

        this.threeDeeCam = this.cameras3d.add().setPosition(0,0,20000);

        let buildingPool = new BuildingPool(this, 200, this.layerData[0]);
        for(let i = 0; i < 150; i++) {
            building = buildingPool.spawnBuilding();

            this.threeDeeCam.add(building);
            this.threeDeeCam.displayList.add(building.gameObject);
            this.threeDeeCam.updateList.add(building.gameObject);
        }

        this.input.on("pointerdown", this.shiftForward, this);
    }

    shiftForward(x, y) {
        //TODO
    }

    update() {
        this.threeDeeCam.z -= 15;
        this.threeDeeCam.update();
    }
}