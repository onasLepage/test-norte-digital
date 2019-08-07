import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatListModule,
  MatDividerModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule

} from '@angular/material';


@NgModule({
  imports: [
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class MaterialModule { }
