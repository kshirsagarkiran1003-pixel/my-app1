import { Component ,NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs  from 'emailjs-com';


interface Message {
  name: string;
  title: string;
  email: string;
  phone:string;
  message: string;
  date: Date;
}
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {
  name = '';
  title = '';
  email = '';
  phone='';
  message='';
  isSending = false;
  successMsg='';
  errorMsg='';
messages: Message[] = []; // <-- Store all submitted messages
    
 constructor(private zone: NgZone) {}


sendMessage() {

  if (!this.name || !this.title || !this.email || !this.phone ||!this.message) {
    this.errorMsg = "Please fill all fields";
    this.successMsg = '';
    return;
  }

  this.isSending = true;
  this.successMsg = '';
  this.errorMsg = '';

  const params = {
    name: this.name,
    title: this.title,
    email: this.email,
    phone:this.phone,
    message: this.message,
    to_email: ""
  };

  emailjs.send(
    "service_szgt3l3",
    "template_s0vbh3s",
    params,
    "FNmPgCHJX-qfms-rh"
  )
  .then(() => {
    this.zone.run(() => {

      this.messages.unshift({
        name: this.name,
        title: this.title,
        email: this.email,
        phone:this.phone,
        message: this.message,
        date: new Date()
      });

      this.name = '';
      this.title = '';
      this.email = '';
      this.phone='';
      this.message = '';

      this.successMsg = "🎉 Message sent successfully!";
      this.isSending = false;
    });
  })
  .catch((err) => {
    console.error("EmailJS Error:", err);
    this.zone.run(() => {
      this.errorMsg = "Failed to send message";
      this.isSending = false;
    });
  });

}
}


























