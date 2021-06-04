import { BaseComponent } from '../../shared/html';
import './gameClock.scss';

export class GameClock extends BaseComponent {
  constructor() {
    super('div', ['game__clock']);
    this.element.innerHTML = `
        <p>
          00:00
        </p>
    `;
  }
}
