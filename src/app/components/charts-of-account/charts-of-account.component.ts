import { Component, OnInit} from '@angular/core';
import { DataService } from '../../../services/dataservice';

import {  MessageService, TreeNode} from 'primeng/api';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';




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
  selector: 'app-charts-of-account',
  templateUrl: './charts-of-account.component.html',
  styleUrl: './charts-of-account.component.css',

 
  
})
export class ChartsOfAccountComponent implements OnInit{

 

  files!: TreeNode[];

  selectedNode!: TreeNode;

  cols: any[] = [];

  isExpanded:boolean = false;

  showAccount: boolean = false;

  visible: boolean = false;
  
  selectedForm: string = 'AC';

  forms: Form[] = []; 
  

  formGroup: FormGroup 

  globalFilterFields: string[] = [];

  


  

 


  constructor(
    private dataService: DataService,
    private messageService: MessageService,
    private fb: FormBuilder

  ) {
    this.formGroup = this.fb.group({
      selectedForm: new FormControl(null),
      mainAccount: new FormControl(''),
      accountType: new FormControl(''),
      accountName: new FormControl(''),
      transactions: new FormControl(''),
      openingType: new FormControl(''),
      accountGroup: new FormControl('')
      
    });
  }

  ngOnInit() {
    
    this.dataService.getFilesystem().then((files) => (this.files = files));
    this.cols = [
      { field: 'name', header: 'Account' },
      { field: 'size', header: 'Type' },
      { field: 'name', header: 'Alias' },
      { field: 'type', header: 'Debit' },
      { field: 'credit', header: 'Credit' },
    ];
    this.globalFilterFields = this.cols.map(col => col.field);
    this.forms = [
      { name: 'Account', code: 'AC' },
            { name: 'Group', code: 'GR' },

    ];
  }
  //   this.formGroup = new FormGroup({
  //     selectedForm: new FormControl<Form | null>(null)
  // });


  

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
  toggleAccount() {
    this.showAccount = !this.showAccount;
  }

  showDialog() {
    this.visible = true;
}

toggleDialog() {
  this.visible = !this.visible;
}

// onFormChange(event: any) {
//   this.selectedForm = event.value.code;
// }

onFormChange(event: any) {
  const selectedForm = event.value?.code;
  this.selectedForm = selectedForm;
  if (selectedForm === 'AC') {
  this.formGroup.patchValue({
    mainAccount: '',
    accountType: '',
    accountName: '',
    // transactions: '',
    // openingType: '',
    // accountGroup: ''
  });
} else {
  this.formGroup.patchValue({
    mainAccount: '',
    accountType: '',
    // accountName: '',
    // transactions: '',
    // openingType: '',
    // accountGroup: ''
  });
}
}

}

  