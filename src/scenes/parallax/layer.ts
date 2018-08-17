import * as Phaser from "./../../../node_modules/phaser/dist/phaser.js";
import { ParallaxScene } from "./parallax";
import { BuildingPool } from "./../../entities/world/buildingPool";
import { game } from "./../../game";

export class ParallaxLayer extends Phaser.GameObjects.Container {
    components: any[];
    config: any;
    add: any;
    x: Number;
    y: number;
    pool: BuildingPool;
    velocity: Number;

    constructor(scene: ParallaxScene, velocity: Number = 0.1, maxBuildings: Number = 5, textures: any = []) {
        super(scene, 0, 0);
        this.components = [];
        this.velocity = velocity;
        this.pool = new BuildingPool(scene, maxBuildings * 2, textures);
        this.maxBuildings = maxBuildings;
    }

    init() {
        let building;

        for(let i = 0; i < this.maxBuildings; i++) {
            building = this.pool.spawnBuilding((game.canvas.width/this.maxBuildings) * i, game.canvas.height/2);
            this.add(building);
        }
    }

    update() {
        let building;

        this.y += this.velocity;
/*

        for(let i = 0; i < this.pool.buildings.length; i++) {
            building = this.pool.buildings[i];

            if(!building) continue;
    
            if(building.displayOriginY > game.canvas.height) {
                building.kill();
                console.log('reached the top')
                
            }
        }*/
    }
}