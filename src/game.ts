import * as Phaser from "./../node_modules/phaser/dist/phaser.js";
import { LoadScene } from "./scenes/preloader";
import { PlayScene } from "./scenes/gameplay";
import { EndScene } from "./scenes/endcard";

class CircuitRunner extends Phaser.Game {
    container: any;
    atlas: any;

    constructor(config: any) {
        super(config);
        this.scene.add("preloader", LoadScene, true);
        this.scene.add("gameplay", PlayScene);
        this.scene.add("endcard", EndScene);
    }
}

let game: CircuitRunner = new CircuitRunner({
    width: 450,
    height: 720,
    backgroundColor: "#fff"
});

export { game }