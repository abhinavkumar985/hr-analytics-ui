import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DataPreprationComponent } from "./data-prepration.component";
const routes: Routes = [
    { path: "", component: DataPreprationComponent},

];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class DataPreprationRoutingModule { }