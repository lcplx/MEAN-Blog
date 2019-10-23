import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProfileCreateComponent } from "./profile-create/profile-create.component";
import { ProfileAnalysisComponent } from "./profile-analysis/profile-analysis.component";

const routes: Routes = [
  { path: "create", component: ProfileCreateComponent },
  { path: "analysis", component: ProfileAnalysisComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProfileRoutingModule {}
