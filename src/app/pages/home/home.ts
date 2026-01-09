import { Component,NgZone } from '@angular/core';
import { GalleryCollection } from '../gallery-collection/gallery-collection';
import emailjs from 'emailjs-com';
import { FormsModule } from '@angular/forms';

interface Message {
  name: string;
  title: string;
  email: string;
  phone:string;
  message: string;
  date: Date;
}

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
ngOnInit() {
  const slideTexts = [
    "Creative Fabric & Modern Designs",
    "Premium Interior Styling",
    "Modern Art & Fabric Creations",
    "Beautiful Designs Crafted for You"
  ];

  /*let index = 0;
  const typedSpan = document.getElementById("typedText");

  function typeText() {
    let currentText = texts[index];
    let charIndex = 0;

    function typing() {
      if (charIndex < currentText.length) {
        typedSpan!.textContent += currentText.charAt(charIndex);
        charIndex++;
        setTimeout(typing, 60);
      } else {
        setTimeout(eraseText, 1500);
      }
    }
    typing();
  }

  function eraseText() {
    let text = typedSpan!.textContent!;
    let length = text.length;

    function erasing() {
      if (length > 0) {
        typedSpan!.textContent = text.substring(0, length - 1);
        length--;
        setTimeout(erasing, 40);
      } else {
        index = (index + 1) % texts.length;
        setTimeout(typeText, 400);
      }
    }
    erasing();
  }

  typeText();
}

}*/
 const typingSpeed = 45;

  const typeText = (container: HTMLElement, text: string) => {
    const span = container.querySelector('.typed-text') as HTMLElement;

    span.innerHTML = '';
    container.classList.remove('show');

    let i = 0;

    // fade in first
    setTimeout(() => {
      container.classList.add('show');
    }, 500);

    const typing = () => {
      if (i < text.length) {
        span.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, typingSpeed);
      }
    };

    typing();
  };

  // 🔥 START IMMEDIATELY (NO DELAY)
  requestAnimationFrame(() => {
    const first = document.querySelector(
      '.carousel-item.active .fade-text'
    ) as HTMLElement;

    if (first) {
      typeText(first, slideTexts[0]);
    }
  });

  // 🔁 RUN ON EVERY SLIDE CHANGE
  const carousel = document.getElementById('heroCarousel');

  carousel?.addEventListener('slid.bs.carousel', (e: any) => {
    const index = e.to;
    const active = document.querySelector(
      '.carousel-item.active .fade-text'
    ) as HTMLElement;

    if (active) {
      typeText(active, slideTexts[index]);
    }
  });
}
}










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





