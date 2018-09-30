import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.siteCode = this.route.snapshot.params['siteCode'];
    console.log(this.siteCode);
    console.log(this.data.email);
  }

  onStep1Next() {

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
