import { Component, OnInit } from '@angular/core';

import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-project-new',
  templateUrl: './project-new.component.html',
  styleUrls: ['./project-new.component.scss'],
  providers: [ProjectsService]
})
export class ProjectNewComponent implements OnInit {

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.projectsService.newProduct().subscribe(result => {
    });
  }
}
