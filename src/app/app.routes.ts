import { Routes } from '@angular/router';
import { FormularioComponentComponent } from './formulario-component/formulario-component.component';
import { InfoProjetoComponentComponent } from './info-projeto-component/info-projeto-component.component';
import { ListaComponent } from './lista/lista.component';

export const routes: Routes = [
    { path:'', redirectTo:'/formulario', pathMatch:'full'},
    { path:'formulario', component: FormularioComponentComponent},
    { path:'info', component: InfoProjetoComponentComponent},
    { path:'lista', component: ListaComponent}
];
