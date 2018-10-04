import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TreeNode } from '../tree-node';
/**
 * The NgbTreeview a simple way to create tree view in html.
 */
@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  private _collapseAll: boolean;
  private _selectAll: boolean;

  @Input() nodes: TreeNode[] = [];
  @Input() selectedId: number | string;

  @Output() select = new EventEmitter<TreeNode>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(node) {
    this.select.emit(node);
  }

  expand(node: TreeNode) {
    node.collapsed = false;
  }

  collapse(node: TreeNode) {
    node.collapsed = true;
  }

}
