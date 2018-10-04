import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
  @ViewChild('toggleButton') toggleButton: ElementRef;

  show = false;

  constructor() { }

  ngOnInit() {
  }

  // only set show to true if the navbar toggler is visible
  // otherwise the navbar will be toggled open when it appears
  // if you have already clicked other nav items
  toggleCollapse() {
    const styles = getComputedStyle(this.toggleButton.nativeElement);
    if (styles.display === 'none') {
      this.show = false;
    } else {
      this.show = !this.show;
    }
  }

}
