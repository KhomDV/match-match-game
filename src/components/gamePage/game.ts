import { BaseComponent } from '../../shared/base-component';
import './game.scss';

export class GameField extends BaseComponent {
  constructor() {
    super();
    this.element.innerHTML = `
    <div class="game__container">
      <div class="container__card">
      </div>
    </div>
    `;
  }
}
