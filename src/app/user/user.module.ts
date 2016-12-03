import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule, SharedModule
  ],
  declarations: [UserComponent, ProfileComponent],
  exports: [UserComponent, ProfileComponent]
})
export class UserModule { }
