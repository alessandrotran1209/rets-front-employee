import { Component, OnInit } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
interface Node {
  name: string;
  icon: string;
  children?: Node[];
}

const TREE_DATA: Node[] = [
  {
    name: 'Các bên liên quan',
    icon: 'dashboard',
    children: [
      {name: 'Khách hàng', icon: 'people'},
      {name: 'Môi giới', icon: 'handshake'},
      {name: 'Công ty Quản lí Quỹ', icon: 'bank'},
    ]
  }, {
    name: 'Sản phẩm',
    icon: 'house',
    children: [
      {name: 'Dự án', icon: 'buildings'},
      {name: 'Quỹ', icon: 'package'},
    ]
  }, {
    name: 'Giao dịch',
    icon: 'assignment',
    children: [
      {name: 'Apple', icon: ''},
      // {name: 'Banana', icon: ''},
      // {name: 'Fruit loops', icon: ''},
    ]
  }, {
    name: 'Hợp đồng',
    icon: 'people',
    children: [
      {name: 'Apple', icon: ''},
      // {name: 'Banana', icon: ''},
      // {name: 'Fruit loops', icon: ''},
    ]
  },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  treeControl = new NestedTreeControl<Node>(node => node.children);
  dataSource = new MatTreeNestedDataSource<Node>();

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) { 
    this.matIconRegistry.addSvgIcon(
      `people`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/people.svg")
    );

    this.matIconRegistry.addSvgIcon(
      `handshake`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/handshake.svg")
    );

    this.matIconRegistry.addSvgIcon(
      `bank`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/bank.svg")
    );

    this.matIconRegistry.addSvgIcon(
      `dashboard`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/dashboard.svg")
    );

    this.matIconRegistry.addSvgIcon(
      `house`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/house.svg")
    );

    this.matIconRegistry.addSvgIcon(
      `buildings`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/buildings.svg")
    );

    this.matIconRegistry.addSvgIcon(
      `people`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/people.svg")
    );

    this.matIconRegistry.addSvgIcon(
      `assignment`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/assignment.svg")
    );

    this.matIconRegistry.addSvgIcon(
      `package`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/package.svg")
    );

    this.dataSource.data = TREE_DATA;
  } 

  ngOnInit(): void {
  } 

  hasChild = (_: number, node: Node) => !!node.children && node.children.length > 0;
}