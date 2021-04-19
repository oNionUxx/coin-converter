import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Spinner */
import { SpinnerComponent } from '../spinner/spinner.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SpinnerComponent],
  exports: [CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule, SpinnerComponent],
})
export class SharedModule {}
