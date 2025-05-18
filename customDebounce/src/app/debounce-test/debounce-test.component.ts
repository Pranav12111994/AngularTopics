import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'app-debounce-test',
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './debounce-test.component.html',
  styleUrl: './debounce-test.component.css'
})
export class DebounceTestComponent {

  searchControl = new FormControl('');
  results: any[] = [];

  constructor(private http: HttpClient) {
    this.searchControl.valueChanges.pipe(
      debounceTime(10),
      // distinctUntilChanged(),
      switchMap((searchTerm: any) =>
        this.http.get<{ products: any[] }>(
          `https://dummyjson.com/products/search?q=${encodeURIComponent(searchTerm)}`
        )
      )
    ).subscribe(response => {
      this.results = response.products;
    });
  }

}
