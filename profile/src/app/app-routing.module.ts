import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MeetingComponent } from './meeting/meeting.component';
import { MentorComponent } from './mentor/mentor.component';
import { MilestoneComponent } from './milestone/milestone.component';
import { ResourcesComponent } from './resources/resources.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
{path: 'home', component: HomeComponent, pathMatch: 'full'},
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{path: 'team', component: TeamComponent, pathMatch: 'full'},
{path: 'mentor', component: MentorComponent, pathMatch: 'full'},
{path: 'meeting', component: MeetingComponent, pathMatch: 'full'},
{path: 'milestone', component: MilestoneComponent, pathMatch: 'full'},
{path: 'resource', component: ResourcesComponent, pathMatch: 'full'},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
