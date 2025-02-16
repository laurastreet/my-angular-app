import { Routes } from '@angular/router';

import { AddinventoryComponent } from './addinventory/addinventory.component';
import { DelinventoryComponent } from './delinventory/delinventory.component';
import { UpdateinventoryComponent } from './updateinventory/updateinventory.component';
import { PrintinventoryComponent } from './printinventory/printinventory.component';
import { LowstockalertComponent } from './lowstockalert/lowstockalert.component';

export const routes: Routes = [
    // {path: '',redirectTo:'addinventory',pathMatch:'full'},          //default URL
    {path: 'addinventory',component:AddinventoryComponent},
    {path: 'delinventory',component:DelinventoryComponent},
    {path: 'updateinventory',component:UpdateinventoryComponent},
    {path: 'printinventory',component:PrintinventoryComponent},
    {path: 'lowstockalert',component:LowstockalertComponent}
];
