import { Component, OnInit, Input } from '@angular/core';
import { TreeNode } from '../tree-node';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {

  public nodes = [];
  public treeData = [];

  @Input() data = [];
  @Input() idProperty: string;
  @Input() parentProperty: string;
  @Input() selectedId: number | string;

  constructor() {
  }

  ngOnInit() {
    this.nodes = this.prepareData(this.data);
    this.expandToSelection();
  }

  onSelected(node: TreeNode) {
    this.selectedId = node.id;
  }

  collapseAll() {
    this.setCollapse(this.nodes, true);
  }

  expandAll() {
    this.setCollapse(this.nodes, false);
  }

  setCollapse(nodes: TreeNode[], collapse: boolean) {
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].collapsed = collapse;
      if (nodes[i].children.length) {
        this.setCollapse(nodes[i].children, collapse);
      }
    }
  }

  expandToSelection() {
    this.collapseAll();
    if (this.selectedId) {
      let node = this.findNodeById(this.nodes, this.selectedId);
      if (node) {
        while (node.parent) {
          node = this.findNodeById(this.nodes, node.parent);
          node.collapsed = false;
        }
      }
    }
  }

  private findNodeById(nodes: TreeNode[], id: number | string): TreeNode {
    let result: TreeNode = null;
    for (let i = 0; result === null && i < nodes.length; i++) {
      result =  this.searchNode(nodes[i], id);
    }
    return result;
  }

  private searchNode(node: TreeNode, id: number | string): TreeNode {
    if (node.id === id) {
      return node;
    } else if (node.children.length) {
      let result: TreeNode = null;
      for (let i = 0; result === null && i < node.children.length; i++) {
        result = this.searchNode(node.children[i], id);
      }
      return result;
    }
    return null;
  }

  private prepareData(list): TreeNode[] {
    const tree: TreeNode[] = [], lookup = {};
    for (let i = 0, len = list.length; i < len; i++) {
      const item: TreeNode = {
        id: list[i][this.idProperty],
        parent: list[i][this.parentProperty],
        description: list[i][this.idProperty] + ': ' + list[i].description,
        children: [],
        collapsed: true
      };
      lookup[list[i][this.idProperty]] = item;
    }
    for (const key in lookup) {
      if (lookup.hasOwnProperty(key)) {
        const item = lookup[key];
        if (item.parent) {
          lookup[item.parent].children.push(item);
        } else {
          tree.push(item);
        }
      }
    }
    return tree;
  }
}
