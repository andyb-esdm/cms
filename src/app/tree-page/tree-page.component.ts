import { Component, OnInit, TemplateRef } from '@angular/core';
import { CmsService } from '../cms.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tree-page',
  templateUrl: './tree-page.component.html',
  styleUrls: ['./tree-page.component.css']
})
export class TreePageComponent implements OnInit {

  projectCodes = [];
  collapseAll: boolean;
  selectAll: boolean;

  name: string;
  projectTypeCode: number | string;

  closeResult: string;

  constructor(private cmsService: CmsService, private modalService: NgbModal) {
  }

  ngOnInit() {
    this.projectCodes = this.cmsService.getProjectCodes();
    this.projectTypeCode = 'MI40';
  }

  open(content) {
    this.modalService.open(content, {size: 'lg', ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}

