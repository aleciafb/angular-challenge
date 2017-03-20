import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [ProjectsService]
})

export class ProjectsComponent implements OnInit {

  constructor(private projectsService: ProjectsService) { }

  public projects;

  ngOnInit() {
    this.projectsService.getProducts().subscribe(result => {
      this.projects = result;
    });
  }
}
