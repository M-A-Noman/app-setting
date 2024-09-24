import { Component, Input, OnInit } from '@angular/core';
import { faX } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-custom-chips',
  templateUrl: './custom-chips.component.html',
  styleUrls: ['./custom-chips.component.scss']
})
export class CustomChipsComponent implements OnInit {
  @Input() chips:string[]=[];
  chipInput:string='';
  faX=faX;
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
