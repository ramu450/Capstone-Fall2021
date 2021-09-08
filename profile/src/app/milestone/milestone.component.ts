import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-milestone',
  templateUrl: './milestone.component.html',
  styleUrls: ['./milestone.component.css']
})
export class MilestoneComponent implements OnInit {

  constructor() { }

    Milestones : Milestone[] = [
    {date :"September 7st,2021" ,task:"Project Website",status:"Completed"},
    {date :"September 7st,2021" ,task:"Installation of HyperLedge Fabric v2.3 & Environment Setup",status:"In Progress"},
    {date :"September 7st,2021" ,task:"Understanding the previous project semester code and Coming up with the Requirements",status:"In Progress"},
  ]

  

  ngOnInit(): void {
  }

}

class Milestone{
  task ! : string
  date ! : string;
  status!:string
}
