import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CmsService } from '../cms.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit, OnDestroy {

  id: number;
  isCompleted: boolean;
  data = {
    email: 'test@test.com'
  };
  model = {};

  selectedProjectTypes = [];
  projectTypes = [];

  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private cmsService: CmsService
  ) {
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.projectTypes = this.cmsService.getProjectTypes();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
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

/*
  subscription: Subscription;
  siteCode: string;
  site: Site;

  constructor(private route: ActivatedRoute, private cmsService: CmsService) {
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.site = this.cmsService.getSite(params['siteCode']);
    });
  }

  ngOnDestroy() {
    
  }
  */
