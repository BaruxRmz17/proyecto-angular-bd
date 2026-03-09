import { Routes } from '@angular/router';

import { ArticuloComponent } from './components/articulo/articulo.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ErrorComponent } from './components/error/error.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: PrincipalComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'articulo', component: ArticuloComponent },
  { path: 'blog', component: BlogComponent },
  { path: '**', component: ErrorComponent }
];
