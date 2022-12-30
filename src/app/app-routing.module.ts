import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './componentes/banner/banner.component';
import { IndexComponent } from './componentes/index/index.component';
import { LoginComponent } from './componentes/login/login.component';
import { PaginaErrorComponent } from './componentes/pagina-error/pagina-error.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { FormacionComponent } from './componentes/formacion/formacion.component';

const routes: Routes = [
  {path:'',component:IndexComponent},
  {path:'banner',component:BannerComponent},
  {path:'sobre-mi',component:SobreMiComponent},
  {path:'login',component:LoginComponent},
  {path:'formacion',component:FormacionComponent},
  {path:'**',component:PaginaErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
