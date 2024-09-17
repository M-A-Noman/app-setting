import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-chips',
  templateUrl: './custom-chips.component.html',
  styleUrls: ['./custom-chips.component.scss']
})
export class CustomChipsComponent implements OnInit {
  @Input() chips:string[]=['hello@gmail.com','abc@gmail.com'];
  chipInput:string='';
  constructor() { }

  ngOnInit(): void {
  }

  addChip(){
    const chip=this.chipInput.trim();
    if(chip&&!this.chips.includes(chip)){
      this.chips.push(chip);
    }
    this.chipInput='';
  }
  removeChip(index:number){
    this.chips.splice(index,1);
  }
}
