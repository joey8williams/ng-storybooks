import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';
import { ClickOutsideModule } from 'ng-click-outside';
import { NgxPopper } from 'angular-popper';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MultiDropdownComponent } from '../multi-dropdown/multi-dropdown.component';



@NgModule({
  declarations: [DropdownComponent, MultiDropdownComponent, ],
  imports: [
    CommonModule,
    NgxPopper,
    ClickOutsideModule,
    AngularFontAwesomeModule
  ],
  exports:[
    DropdownComponent,
  ]

})
export class DropdownModule { }
