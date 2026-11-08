import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { DownloadComponent } from './pages/download/download.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Вершина иерархии' },
  { path: 'about', component: AboutComponent, title: 'О книге — Вершина иерархии' },
  { path: 'download', component: DownloadComponent, title: 'Скачать — Вершина иерархии' },
  { path: '**', redirectTo: '' },
];
