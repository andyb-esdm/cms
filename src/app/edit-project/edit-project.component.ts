import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CmsService } from '../cms.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

  id: number;
  isCompleted: boolean;
  data = {
    email: 'test@test.com'
  };
  model = {};

  selectedProjectTypes = [];
  projectTypes = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cmsService: CmsService
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.projectTypes = this.cmsService.getProjectTypes();
  }

  onStep1Next() {
    console.log(this.selectedProjectTypes);

  }

  onStep2Next() {

  }

  onStep3Next() {

  }

  onComplete() {
    this.isCompleted = true;
  }

}
