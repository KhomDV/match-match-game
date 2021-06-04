import { HTMLComponent } from '../../shared/html';
// import './header.scss';

export class Header extends HTMLComponent {
  constructor(style) {
    super('header', ['header']);
    this.element.innerHTML = `
    <div class="container">
      <div class="container__nav">
      </div>
    </div>
    `;
  }



}

console.log(new Header());
