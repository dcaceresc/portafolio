import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { ProjectsComponent } from './components/projects/projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,AboutComponent,ContactComponent,JobsComponent,PresentationComponent,ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
