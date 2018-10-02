import { Component, OnInit } from '@angular/core';
import { CmsService } from '../cms.service';

@Component({
  selector: 'app-help-list',
  templateUrl: './help-list.component.html',
  styleUrls: ['./help-list.component.css']
})
export class HelpListComponent implements OnInit {
  helpItems = [];

  constructor(private cmsService: CmsService) { }

  ngOnInit() {
    this.helpItems = this.cmsService.getHelpItems();
    console.log(this.helpItems);
  }

}
