import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AntdModule } from '../antd/antd.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AntdModule
  ],
  exports:[
    AntdModule
  ]
})
export class SharedModule { }
