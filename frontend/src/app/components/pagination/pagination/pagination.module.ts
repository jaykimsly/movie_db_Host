import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from '../pagination.component';



@NgModule({
  declarations: [
    PaginationModule],
  exports: [
    PaginationComponent],
  imports: [
    CommonModule
  ]
})
export class PaginationModule { }
