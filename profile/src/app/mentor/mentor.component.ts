import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.css']
})
export class MentorComponent implements OnInit {

  constructor() { }

  Mentors : Mentor[] = [
    {Image:"../../assets/images/yue-bun.jpg",Name:"Dr. Kwok-Bun Yue",Description:"Mentor",Email:"YUE@UHCL.EDU"},
    {Image:"../../assets/images/kewei-sha.jpg",Name:"Dr. Kewei Sha",Description:"Academic Faculty",Email:"SHA@UHCL.EDU"},
    {Image:"../../assets/images/person.jpg",Name:"Joses Selvan",Description:"Mentor",Email:"JOSES.SELVAN@TIETRONIX.COM"},
    {Image:"../../assets/images/person.jpg",Name:"Kayaanoosh Collector",Description:"Mentor",Email:"KAYAANOOSH.COLLECTOR@TIETRONIX.COM"},
  ]

  ngOnInit(): void {
  }

}

class Mentor{
  Image !:string
  Name ! : string
  Description !:string
  Email !: string
}
