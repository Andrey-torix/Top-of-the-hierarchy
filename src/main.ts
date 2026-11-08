import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

// iOS Safari применяет :active при касании, только если на странице есть слушатель touchstart.
document.addEventListener('touchstart', () => {}, { passive: true });

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled' }),
    ),
  ],
}).catch((error: unknown) => console.error(error));
