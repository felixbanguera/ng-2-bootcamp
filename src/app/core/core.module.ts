//(import { SharedModule } from './../shared/shared.module';
import { UserService } from './user.service';
import { UserServiceConfig } from './user-service-config';
import { TitleComponent } from './title/title.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CoreComponent, TitleComponent],
  exports: [TitleComponent],
  providers: [
        { provide: 'IUserService', useClass: UserService },
    ],
})
export class CoreModule { }
