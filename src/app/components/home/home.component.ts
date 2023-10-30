import Swal from 'sweetalert2'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {

  }
  downloadCV() {

    const cvUrl = '/assets/TaimoorCV.pdf';
    const a = document.createElement('a');
    a.href = cvUrl;
    a.download = 'Taimoor.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href="">Why do I have this issue?</a>'
    })

  }
}
