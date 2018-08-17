import * as Phaser from "./../node_modules/phaser/dist/phaser.js";
import { LoadScene } from "./scenes/preloader";
import { PlayScene } from "./scenes/gameplay";
import { EndScene } from "./scenes/endcard";

let game: any = new Phaser.Game({
    width: 450,
    height: 720,
    backgroundColor: "#fff",
    scene: {
        preload: function() {
            console.log("In preload")
        },
        create: function() {
            this.scene.add("preloader", LoadScene, true);
            this.scene.add("gameplay", PlayScene);
            this.scene.add("endcard", EndScene);
        }
    }
});

export { game }