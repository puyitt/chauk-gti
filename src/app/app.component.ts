import { AfterViewInit, Component, ViewChildren, QueryList, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'invitation';
  images: string[] = [
    'assets/img1_11.jpg',
    'assets/img1_1.jpg',
    'assets/img1_2.jpg',
    'assets/img1_3.jpg',
    'assets/img1_4.jpg',
    'assets/img1_5.jpg',
    'assets/img1_6.jpg',
    'assets/img1_7.jpg',
    'assets/img1_8.jpg',
    'assets/img1_9.jpg',
    'assets/img1_12.jpg',
    'assets/img1_13.jpg',
    'assets/img1_14.jpg',
    'assets/img1_15.jpg',
    'assets/img1_16.jpg',
    'assets/img1_17.jpg',
    'assets/img1_18.jpg',
    'assets/img1_10.jpg',
  ];

  imageDisplayDuration = 80 / this.images.length;
  // @ViewChildren('page') pages!: QueryList<ElementRef>;


   ngOnInit() {
    // Optional preload for smoother transition
    this.images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }

  open() {
    const element = document.getElementById('envelope');
    
    if (element) {
      element.classList.add('open');
      element.classList.remove('close');
    }

    if (element) {
      setTimeout(() => {
        element.classList.add('my-class');
      }, 1000);

    }

  }

  close() {
    const element = document.getElementById('envelope');
    if (element) {
      element.classList.add('close');
      element.classList.remove('open');
    }
  }


  playSound() {
    let audio = new Audio();
    audio.src = '../assets/music.mp3'; // Path to your sound file
    audio.load();
    audio.play();
  }

  click1() {
    const element = document.getElementById('page1');
    const element2 = document.getElementById('page2');
    
    if (element) {
      element.classList.toggle('flipped');
    }

    if (element2) {
      element2.classList.remove('incz');

    }
  }

  click2() {
    const element = document.getElementById('page2');
    const element1 = document.getElementById('page1');

    if (element) {
      element.classList.toggle('flipped');
      element.classList.add('incz');

    }
    if (element1) {
      element1.classList.add('incz');

    }
  }
}
