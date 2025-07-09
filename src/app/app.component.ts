import { AfterViewInit, Component, ViewChildren, QueryList, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'invitation';
  // @ViewChildren('page') pages!: QueryList<ElementRef>;


  ngOnInit(): void {
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
