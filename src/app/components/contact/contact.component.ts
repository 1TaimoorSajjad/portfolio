import { HttpClient } from '@angular/common/http';
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
  constructor(private fb: FormBuilder, private http: HttpClient) {

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
    this.http.post('http://localhost:3000/send-email', payload).subscribe(
      (response) => {
        console.log('Email sent successfully', response);
        // You can add code to show a success message or redirect the user to a thank-you page.
      },
      (error) => {
        console.error('Error sending email', error);
        // You can add code to show an error message.
      }
    );

  }

}
