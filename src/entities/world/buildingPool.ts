import { Building } from "./building";
import { game } from "./../../game";

export class BuildingPool {
    buildings: Building[];

    constructor(scene: any, max: Number, textureNames: String[]) {
        let building: Building;

        this.textureNames = textureNames;
        this.buildings = [];
        this.scene = scene;

        for(let i = 0; i < max; i++) {
            building = this._createBuilding();
            building.kill();
            this.buildings.push(building));
        }
    }

    _createBuilding() {
        let textureName: String;

        textureName = this.textureNames[Math.floor(Math.random()*this.textureNames.length)];
        return new Building(this.scene, Math.random() * game.canvas.width, Math.random() * game.canvas.height, textureName);
    }

    spawnBuilding(x: Number, y: Number) {
        console.log("spawning")
        let deadBuildings: Building[] = this.buildings.filter((el) => !el.active);
        let spawned: Building;
    
        if(deadBuildings.length) {
            spawned = deadBuildings[0];
            spawned.revive();
        } else {
            spawned = this._createBuilding();
        }

        spawned.setTexture("atlas", this.textureNames[Math.floor(Math.random()*this.textureNames.length)]);
        spawned.x = (x || Math.random() * game.canvas.width);
        spawned.y = (y || Math.random() * -1 * game.canvas.height/2));

        return spawned;
    }
}