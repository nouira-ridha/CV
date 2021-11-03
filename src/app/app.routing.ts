import {RouterModule, Routes} from '@angular/router';
import {CvComponent} from './cvTeck/cv/cv.component';
import {ColorComponent} from './color/color.component';
import {ClassComponent} from './derective/class/class.component';
import {StyleComponent} from './derective/style/style.component';
import {PetitComponent} from './petit/petit.component';
import {DetailPlusComponent} from "./cvTeck/detail-plus/detail-plus.component";


const APP_ROUTING: Routes = [
  {path: 'cv', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: CvComponent},
  {path: 'cv/:id', component: DetailPlusComponent},
  {path: 'color', component: ColorComponent},
  {path: 'color/:default', component: ColorComponent},
  {path: 'class', component: ClassComponent},
  {path: 'style', component: StyleComponent},
  {path: 'petit', component: PetitComponent},
  //{path: '**', component: ErrorComponent}

];

export const ROUTING = RouterModule.forRoot(APP_ROUTING);
