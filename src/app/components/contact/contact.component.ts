import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup
  isSubmit = false
  constructor(private fb: FormBuilder) {

  }
  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      budget: ['', Validators.required],
      projectDetails: ['', Validators.required]
    })

  }

  get form() {
    return this.contactForm.controls
  }

  onSubmit() {
    this.isSubmit = true
    const payload = this.contactForm.value
    console.log("Contact Form =>", payload);

  }

}
