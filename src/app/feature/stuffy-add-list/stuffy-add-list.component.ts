import { Component, OnInit } from '@angular/core';
import { Stuffy } from 'src/app/model/stuffy.class';

@Component({
  selector: 'app-stuffy-add-list',
  templateUrl: './stuffy-add-list.component.html',
  styleUrls: ['./stuffy-add-list.component.css']
})
export class StuffyAddListComponent implements OnInit {

  stuffies: Stuffy[] = [];
  stuffy: Stuffy = new Stuffy();
  // id: number = null;
  // type: string = '';
  // color: string = '';
  // size: string = '';
  // limbs: number = null;
  title: string = "Stuffies R Us";

  constructor() { }

  ngOnInit() {
    this.stuffy = new Stuffy();
  }

  addStuffy(): void {
    //create an instance of stuffy
   // let stuffy: Stuffy = new Stuffy(this.id, this.type, this.color, this.size, this.limbs);
    //add to stuffy array
    this.stuffies.push(this.stuffy);
    //clear the input fields
    // this.id = null;
    // this.type = '';
    // this.color = '';
    // this.size = '';
    // this.limbs = null;
    this.stuffy = new Stuffy();
  }

}
