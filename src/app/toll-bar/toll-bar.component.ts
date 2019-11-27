import { Component, OnInit ,Output,Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toll-bar',
  templateUrl: './toll-bar.component.html',
  styleUrls: ['./toll-bar.component.css']
})
export class TollBarComponent implements OnInit {
  @Input() value:any;
  @Output() added  = new   EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  navEntreprise(){
    this.added.emit(this.value);
  }
}
