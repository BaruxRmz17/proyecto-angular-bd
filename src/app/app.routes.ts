import { Routes } from '@angular/router';

import { ArticuloComponent } from './components/articulo/articulo.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ErrorComponent } from './components/error/error.component';
import { Pagina1Component } from './components/pagina1/pagina1.component';
import { Pagina2Component } from './components/pagina2/pagina2.component';
import { PelicuasComponent } from './components/pelicuas/pelicuas.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: PelicuasComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'articulo', component: ArticuloComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'pelicuas', component: PelicuasComponent },
  { path: 'pagina1', component: Pagina1Component },
  { path: 'paginc a2', component: Pagina2Component },
  { path: '**', component: ErrorComponent }
];
