import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/dataservice';
import {  MessageService, TreeNode} from 'primeng/api';

 

interface NodeEvent {
  originalEvent: Event | undefined;
  node: TreeNode;
}

interface Column {
  field: string;
  header: string;
}

interface NodeEvent {
  originalEvent: Event | undefined;
  node: TreeNode;
}

interface Form {
  name: string;
  code: string;
}


@Component({
  selector: 'app-sd-narration',
  templateUrl: './sd-narration.component.html',
  styleUrl: './sd-narration.component.css'
})
export class SdNarrationComponent implements OnInit {
  
  
  files!: TreeNode[];

  selectedNode!: TreeNode;

  cols: any[] = [];

  isExpanded:boolean = false;

  visible: boolean = false;

  constructor(
    private dataService: DataService,
    private messageService: MessageService,
    

  ) {}

  ngOnInit() {
    
    this.dataService.getFilesystem().then((files) => (this.files = files));
    console.log(this.files,'hello')
    this.cols = [
      { field: 'name', header: 'Account' },
      { field: 'size', header: 'Type' },
      { field: 'name', header: 'Alias' },
      { field: 'type', header: 'Debit' },
      { field: 'credit', header: 'Credit' },
    ];
  }
  







  toggleExpandCollapse() {
    this.isExpanded = !this.isExpanded;
    this.files.forEach(node => {
      this.expandCollapseRecursive(node, this.isExpanded);
    });
  }

  expandCollapseRecursive(node: TreeNode, isExpand: boolean) {
    if (node) {
      node.expanded = isExpand;
      if (node.children) {
        node.children.forEach(childNode => {
          this.expandCollapseRecursive(childNode, isExpand);
        });
      }
    }
  }

  nodeSelect(event: any) {
    this.messageService.add({
      severity: 'info',
      summary: 'Node Selected',
      detail: event.node.data.Account,
    });
  }

  nodeUnselect(event: any) {
    this.messageService.add({
      severity: 'warn',
      summary: 'Node Unselected',
      detail: event.node.data.Account,
    });
  }

}
