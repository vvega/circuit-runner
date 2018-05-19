import * as Phaser from "./../node_modules/phaser/dist/phaser.js";
import { LoadScene } from "./scenes/load";
import { PlayScene } from "./scenes/play";

class CircuitRunner extends Phaser.Game {
    constructor(config: any) {
        super(config);
    }
}

new CircuitRunner({
    width: 450,
    height: 720,
    scene: new LoadScene()
});