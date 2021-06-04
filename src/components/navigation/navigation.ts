import { BaseComponent } from '../../shared/base-component';
import './navigation.scss';

export class Navigation extends BaseComponent {
  constructor() {
    super('nav');
    this.element.innerHTML = `
          <ul class="nav__header">
            <li>
              <a class="nav__elements" id="active" href="#about">
                <div class="circle">
                  <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.88379 9.39648C2.89551 8.69922 2.97461 8.14844 3.12109 7.74414C3.26758 7.33984
                    3.56641 6.8916 4.01758
                    6.39941L5.16895 5.21289C5.66113 4.65625 5.90723 4.05859 5.90723
                    3.41992C5.90723 2.80469 5.74609 2.32422 5.42383
                    1.97852C5.10156 1.62695 4.63281
                    1.45117 4.01758 1.45117C3.41992 1.45117
                    2.93945 1.60938 2.57617 1.92578C2.21289 2.24219 2.03125 2.66699
                    2.03125 3.2002H0.405273C0.416992 2.25098
                    0.753906 1.48633 1.41602 0.90625C2.08398 0.320312
                    2.95117 0.0273438 4.01758 0.0273438C5.125 0.0273438
                    5.98633 0.326172 6.60156 0.923828C7.22266 1.51562 7.5332 2.33008 7.5332 3.36719C7.5332 4.39258
                    7.05859 5.40332 6.10938 6.39941L5.15137 7.34863C4.72363 7.82324 4.50977 8.50586
                    4.50977 9.39648H2.88379ZM2.81348 12.1826C2.81348 11.9189 2.89258 11.6992 3.05078
                    11.5234C3.21484 11.3418 3.45508 11.251
                    3.77148 11.251C4.08789 11.251 4.32812 11.3418 4.49219
                    11.5234C4.65625 11.6992 4.73828 11.9189 4.73828 12.1826C4.73828 12.4463 4.65625 12.666 4.49219
                    12.8418C4.32812 13.0117 4.08789 13.0967 3.77148 13.0967C3.45508 13.0967 3.21484 13.0117 3.05078
                    12.8418C2.89258 12.666 2.81348 12.4463 2.81348 12.1826Z" fill="#2196F3"/>
                  </svg>
                </div>
                <p class="nav__text">
                  About Game
                </p>
              </a>
            </li>
            <li>
              <a class="nav__elements" href="#score">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48
                  15.52 0 9.99 0ZM14.23 16L10 13.45L5.77 16L6.89 11.19L3.16 7.96L8.08 7.54L10 3L11.92 7.53L16.84
                  7.95L13.11 11.18L14.23 16Z" fill="white" fill-opacity="0.7"/>
                </svg>
                <p class="nav__text">
                  Best Score
                </p>
              </a>
            </li>
            <li>
              <a class="nav__elements" href="#settings">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48
                  17.52 2 11.99 2ZM16.23 18L12 15.45L7.77 18L8.89 13.19L5.16 9.96L10.08 9.54L12 5L13.92
                  9.53L18.84 9.95L15.11 13.18L16.23 18Z" fill="white" fill-opacity="0.7"/>
                  <circle cx="12" cy="12" r="10" fill="white"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7487
                  12.624C16.7727 12.424 16.7887 12.216 16.7887 12C16.7887 11.784 16.7727
                  11.576 16.7407 11.376L18.0927 10.32C18.2127 10.224 18.2447 10.048 18.1727 9.91201L16.8927
                  7.69601C16.8127 7.55201 16.6447 7.50401 16.5007 7.55201L14.9087 8.19201C14.5727 7.93601
                  14.2207 7.72801 13.8287 7.56801L13.5887 5.87201C13.5647 5.71201 13.4287 5.60001 13.2687
                  5.60001H10.7087C10.5487 5.60001 10.4207 5.71201 10.3967 5.87201L10.1567 7.56801C9.76474
                  7.72801 9.40474 7.94401 9.07674 8.19201L7.48474 7.55201C7.34074 7.49601 7.17274 7.55201
                  7.09274 7.69601L5.81274 9.91201C5.73274 10.056 5.76474 10.224 5.89274 10.32L7.24474
                  11.376C7.21274 11.576 7.18874 11.792 7.18874 12C7.18874 12.208 7.20474 12.424 7.23674
                  12.624L5.88474 13.68C5.76474 13.776 5.73274 13.952 5.80474 14.088L7.08474 16.304C7.16474
                  16.448 7.33274 16.496 7.47674 16.448L9.06874 15.808C9.40474 16.064 9.75674 16.272 10.1487
                  16.432L10.3887 18.128C10.4207 18.288 10.5487 18.4 10.7087 18.4H13.2687C13.4287 18.4 13.5647
                  18.288 13.5807 18.128L13.8207 16.432C14.2127 16.272 14.5727 16.056 14.9007 15.808L16.4927
                  16.448C16.6367 16.504 16.8047 16.448 16.8847 16.304L18.1647 14.088C18.2447 13.944 18.2127
                  13.776 18.0847 13.68L16.7487 12.624ZM11.9887 14.4C10.6687 14.4 9.58874 13.32 9.58874
                  12C9.58874 10.68 10.6687 9.60001 11.9887 9.60001C13.3087 9.60001 14.3887 10.68 14.3887
                  12C14.3887 13.32 13.3087 14.4 11.9887 14.4Z" fill="#2F80ED"/>
                </svg>
                <p class="nav__text" id="bag">Game Settings</p>
              </a>
            </li>
          </ul>
    `;
  }
}
