import {RouterModule, Routes} from '@angular/router';
import {CvComponent} from './cvTeck/cv/cv.component';
import {ColorComponent} from './color/color.component';
import {ClassComponent} from './derective/class/class.component';
import {StyleComponent} from './derective/style/style.component';
import {PetitComponent} from './petit/petit.component';
import {DetailPlusComponent} from "./cvTeck/detail-plus/detail-plus.component";
import {DeleteCvComponent} from "./cvTeck/delete-cv/delete-cv.component";
import {AddCvComponent} from "./cvTeck/add-cv/add-cv.component";
import {ErrorComponent} from "./error/error.component";


const APP_ROUTING: Routes = [
      {path: 'cv', children: [
          {path: '', component: CvComponent},
          {path: 'add', component: AddCvComponent},
          {path: 'delete/:id', component: DeleteCvComponent},
          {path: ':id', component: DetailPlusComponent},
        ]},
  {path: '', component: CvComponent},
  {path: 'color', component: ColorComponent},
  {path: 'color/:default', component: ColorComponent},
  {path: 'class', component: ClassComponent},
  {path: 'style', component: StyleComponent},
  {path: 'petit', component: PetitComponent},
  {path: '**', component: ErrorComponent}

];

export const ROUTING = RouterModule.forRoot(APP_ROUTING);
