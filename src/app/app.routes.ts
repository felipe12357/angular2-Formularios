import { RouterModule, Routes } from '@angular/router';
import{DataComponent} from './componentes/data/data.component';

import{TemplateComponent} from './componentes/template/template.component';


const app_routes: Routes = [
  { path: 'data', component: DataComponent },
  { path: 'template/:testParam', component: TemplateComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'template' }
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);
