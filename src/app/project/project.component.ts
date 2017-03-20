import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  providers: [ProjectsService]
})
export class ProjectComponent implements OnInit {

  constructor(private projectsService: ProjectsService, private route: ActivatedRoute) { }

  public project;

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.projectsService.getProduct(id).subscribe(result => {
        this.project = result;
      });
    });
  }

}
