import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor() { }

  Teams : Team[] =[
    {Image : "../../assets/images/Ramu.JPG", Name : "Kodanda Ramu",email:"vankayalapatk3960@uhcl.edu",description:"History is created by fighters. And I am surely that.",linkedin:"https://www.linkedin.com/in/kodandaramuvp/",github:"https://github.com/ramu450"},
    {Image : "../../assets/images/Puneeth.jpg", Name : "Puneeth Pavan",email:"Desinenip2980@uhcl.edu",description:"Learn Front end ,Master Backend, Enjoy the Weekend",linkedin:"https://www.linkedin.com/in/puneeth-pavan",github:""},
    {Image : "../../assets/images/Nitya.jpeg", Name : "Nitya Chanda",email:"chandan1840@uhcl.edu",description:"Strategy is not a solo sport, even if you’re the CEO!",linkedin:"https://www.linkedin.com/in/nithya-santhoshini-chanda-125858172",github:""},
    {Image : "../../assets/images/Shrav.jpg", Name : "Sai Shravanth",email:"aenneypallys6817@uhcl.edu",description:"Hardwork is worthless for those that don't believe in themselves",linkedin:"https://www.linkedin.com/in/sai-shravanth-reddy-aenneypally-8a074a21b/",github:""},
    {Image : "../../assets/images/Nanda.jpg", Name : "Nanda",email:"Kanakamedalan6645@uhcl.edu",description:"work smart with heart and have the success pot",linkedin:"www.linkedin.com/in/nanda-kanakamedala-367647126",github:""}
  ]

  ngOnInit(): void {
  }

}

class Team {
  Image !: string;
  Name !: string;
  email !: string;
  description !: string;
  linkedin !: string;
  github !:string;
  
}
