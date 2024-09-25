import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input('label')buttonLabel:string=''
  @Input()disabled:boolean=false;
  constructor() { }

  ngOnInit(): void {
    // console.log(this.disabled)
  }

}
