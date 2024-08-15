import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { ColDef } from 'ag-grid-community';
import { GridComponent } from '../../grid/grid.component';

@Component({
  selector: 'app-cases-home-page',
  standalone: true,
  imports: [
    MatButtonModule,
    RouterLink,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    GridComponent,
  ],
  templateUrl: './cases-home-page.component.html',
  styleUrl: './cases-home-page.component.scss',
})
export class CasesHomePageComponent {
  quickSearchForm = new FormGroup({
    caseNumber: new FormControl('', [Validators.required]),
  });

  onQuickSearchFormSubmit() {
    if (this.quickSearchForm.valid) {
      console.log(this.quickSearchForm.value);
    }
  }

  columnDefs: ColDef[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
  ];
}
