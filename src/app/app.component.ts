import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.component.html',
  host: { '(window:scroll)': 'onScroll()' },
})
export class AppComponent {
  /** Край шапки проявляется, только когда под ней уже есть прокрученный контент. */
  protected readonly scrolled = signal(false);

  onScroll(): void {
    this.scrolled.set(window.scrollY > 4);
  }

  scrollToTop(): void {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  }
}
