import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AngularMaterialModule } from "../angular-material.module";
import { ProfileCreateComponent } from "./profile-create/profile-create.component";
import { ProfileAnalysisComponent } from "./profile-analysis/profile-analysis.component";
import { ProfileRoutingModule } from "./profile-routing.module";

@NgModule({
  declarations: [ProfileCreateComponent, ProfileAnalysisComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    RouterModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule {}
