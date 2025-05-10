import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ReactiveForms';
  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
      ],
      ],
      address: this.formBuilder.group({
        street: ['', Validators.required],
        city: ['', Validators.required]
      }),
      phoneNumber: this.formBuilder.array([
        this.formBuilder.control('', [
          Validators.required,
          Validators.pattern(/^\d{10}$/),
        ])
      ]),
    });
  }

  get phoneNumber() {
    return this.userForm.get('phoneNumber') as FormArray;
  }

  removePhoneNumber(index: number) {
    this.phoneNumber.removeAt(index);
  }

  addPhoneNumber() {
    this.phoneNumber.push(
      this.formBuilder.control('', [Validators.required, Validators.pattern(/^\d{10}$/)])
    )
  }

  submitForm() {
    if (this.userForm.valid) {
      console.log(this.userForm);
    }
  }

}
