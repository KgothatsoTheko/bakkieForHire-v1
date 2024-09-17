import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  constructor() { }

  public slides = [
    { src: "../../../assets/Images/img4.jpg" },
    { src: "../../../assets/Images/img3.jpg" },
    { src: "../../../assets/Images/img1.jpg" },
    { src: "../../../assets/Images/img5.jpg" }
  ];


  ngOnInit(): void {
    this.onScroll(); // Initial check
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event?: Event): void {
    const elements = document.querySelectorAll('.fade-in');
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;

    elements.forEach(element => {
      const { top } = element.getBoundingClientRect();
      const elementTop = top + scrollY;

      if (scrollY + windowHeight > elementTop) {
        element.classList.add('fade-in-visible');
      } else {
        element.classList.remove('fade-in-visible');
      }
    });
  }
}
