import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { EmptyComponent } from './components/pages/empty/empty.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'fatura',
    component: EmptyComponent,
  },
  {
    path: 'cartao',
    component: EmptyComponent,
  },
  {
    path: 'shop',
    component: EmptyComponent,
  },
];
