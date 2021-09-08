import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent implements OnInit {

  constructor() { }

  Meetings : Meet[] = [
    {date :"September 1st,2021" ,document:"assets/Minutes of Meeting/Meeting-1.pdf"}
  ]

  ngOnInit(): void {
  }

}

class Meet{
  date ! : string;
  document! : string
}

