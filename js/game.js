import config from './config.js';
import Start from './scenes/start.js';
import Preloader from './scenes/preloader.js';

class Game extends Phaser.Game {
    constructor() {
        super(config);

        this.scene.add('Start', Start);
        this.scene.start('Start');
        this.scene.add('Preloader', Preloader);
    }
}

window.onload = () => {
    const game = new Game();
};
