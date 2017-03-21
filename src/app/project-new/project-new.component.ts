import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-project-new',
  templateUrl: './project-new.component.html',
  styleUrls: ['./project-new.component.scss'],
  providers: [ProjectsService]
})
export class ProjectNewComponent implements OnInit {
  model: any = {};

  constructor(private projectsService: ProjectsService, private router: Router) { }

  ngOnInit() {
    this.model.is_active   = false;
    this.model.is_billable = false;

  }

  createProject() {
    this.projectsService.newProduct(this.model).subscribe(result => {
      this.router.navigateByUrl('/projects');
    });
  }
}
