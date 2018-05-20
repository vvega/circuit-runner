import * as Phaser from "./../node_modules/phaser/dist/phaser.js";
import { LoadScene } from "./scenes/load";
import { PlayScene } from "./scenes/play";
import { EndScene } from "./scenes/end";

class CircuitRunner extends Phaser.Game {
    container: any;
    atlas: any;

    constructor(config: any) {
        super(config);
        this.scene.add("load", LoadScene, true);
        this.scene.add("play", PlayScene);
        this.scene.add("end", EndScene);
    }
}

let game: CircuitRunner = new CircuitRunner({
    width: 450,
    height: 720
});

export { game }