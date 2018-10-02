import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CmsService } from '../cms.service';

@Component({
  selector: 'app-help-details',
  templateUrl: './help-details.component.html',
  styleUrls: ['./help-details.component.css']
})
export class HelpDetailsComponent implements OnInit {

  help: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cmsService: CmsService) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.help = this.cmsService.getHelp(id);
  }

}
