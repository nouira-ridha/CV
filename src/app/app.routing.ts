import {RouterModule, Routes} from '@angular/router';
import {CvComponent} from './cvTeck/cv/cv.component';
import {ColorComponent} from './color/color.component';
import {ClassComponent} from './derective/class/class.component';
import {StyleComponent} from './derective/style/style.component';
import {PetitComponent} from './petit/petit.component';


const APP_ROUTING: Routes = [
  {path: 'cv', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: CvComponent},
  {path: 'color', component: ColorComponent},
  {path: 'color/:default', component: ColorComponent},
  {path: 'class', component: ClassComponent},
  {path: 'style', component: StyleComponent},
  {path: 'petit', component: PetitComponent},
  //{path: '**', component: ErrorComponent}

];

export const ROUTING = RouterModule.forRoot(APP_ROUTING);
