import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CmsService } from '../cms.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

  siteCode: string;
  isCompleted: boolean;
  data = {
    email: 'test@test.com'
  };

  selectedProjectTypes = [];
  projectTypes = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cmsService: CmsService
  ) { }

  ngOnInit() {
    this.siteCode = this.route.snapshot.params['siteCode'];
    this.projectTypes = this.cmsService.getProjectTypes();
    console.log(this.siteCode);
    console.log(this.data.email);
  }

  onStep1Next() {
    console.log(this.selectedProjectTypes);

  }

  onStep2Next() {

  }

  onStep3Next() {

  }

  onComplete(a) {
    this.isCompleted = true;
    console.log(a);
  }

}
