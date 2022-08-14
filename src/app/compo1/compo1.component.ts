import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compo1',
  template: `
    <p>
      compo1 works!
    </p>
  `,
  styleUrls: ['./compo1.component.css']
})
export class Compo1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
