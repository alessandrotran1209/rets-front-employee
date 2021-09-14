import { Component, OnInit, Inject } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatSnackBar, MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

export interface Customer {
  number: number;
  name: string;
  idcard: string;
  email: string;
  mobilenumber: string
  username: string
  status: number
}

const ELEMENT_DATA: Customer[] = [
  {number: 1, name: 'A', idcard: '1111', email: 'a@gmail.com', mobilenumber:'1111111111', username: 'a', status: 1},
  {number: 2, name: 'B', idcard: '2222', email: 'b@gmail.com', mobilenumber:'2222222222', username: 'b', status: 1},
  {number: 3, name: 'C', idcard: '3333', email: 'c@gmail.com', mobilenumber:'3333333333', username: 'c', status: 1},
  {number: 4, name: 'D', idcard: '4444', email: 'd@gmail.com', mobilenumber:'4444444444', username: 'd', status: 1},
  {number: 5, name: 'E', idcard: '5555', email: 'e@gmail.com', mobilenumber:'5555555555', username: 'e', status: 1},
  {number: 6, name: 'F', idcard: '6666', email: 'f@gmail.com', mobilenumber:'6666666666', username: 'f', status: 1},
  {number: 7, name: 'G', idcard: '7777', email: 'g@gmail.com', mobilenumber:'7777777777', username: 'g', status: 1},
  {number: 8, name: 'H', idcard: '8888', email: 'h@gmail.com', mobilenumber:'8888888888', username: 'h', status: 1},
  {number: 9, name: 'I', idcard: '9999', email: 'i@gmail.com', mobilenumber:'9999999999', username: 'i', status: 1},
];

export interface CustomerData {
  number: 1, name: 'A', idcard: '1111', email: 'a@gmail.com', mobilenumber:'1111111111', username: 'a', status: 1
}
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  displayedColumns: string[] = ['STT', 'Họ và tên', 'CMND/CCCD', 'Email', 'Số điện thoại', 'Username', 'Trạng thái', 'Thao tác'];
  dataSource = ELEMENT_DATA;

  customer: Customer = {number: 1, name: 'A', idcard: '1111', email: 'a@gmail.com', mobilenumber:'1111111111', username: 'a', status: 1}
  
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private dialog: MatDialog,    
  ) { 
    this.matIconRegistry.addSvgIcon(
      `note_pencil`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/note_pencil.svg")
    );
  }

  ngOnInit(): void {
  }

  openConfirmationDialog() {    
    this.dialog.open(DialogConfirmation, {
      width: String(window.innerHeight/2.324),
      data: this.customer      
    });
  }

  openInformationDialog() {
    this.dialog.open(DialogInformation, {
      width: '250px',
      data: this.customer      
    });
  }  
}
// Dialog
@Component({
  selector: 'customer-information',
  templateUrl: 'dialog/customer-information.html',  
})
export class DialogInformation {
  constructor(
    public dialogRef: MatDialogRef<DialogInformation>,
    @Inject(MAT_DIALOG_DATA) public data: Customer) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'customer-confirmation',
  templateUrl: 'dialog/customer-confirmation.html',
  styleUrls: ['dialog/customer-confirmation.css']
})
export class DialogConfirmation {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private dialogRef: MatDialogRef<DialogConfirmation>,
    private snackbar: MatSnackBar,
    ) {
      this.matIconRegistry.addSvgIcon(
        `warning_circle`,
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/warning_circle.svg")
      );
    }
  onNoClick(): void {
    this.dialogRef.close();
  }

  durationInSeconds = 60;
  openSuccessSnackbar(action: string){
    this.snackbar.openFromComponent(SnackbarSuccess, {
      duration: this.durationInSeconds * 1000,
      panelClass: ['green-snackbar'],
      data: action
    })
  }
}

// Snackbar 
@Component({
  selector: 'snackbar-success',
  templateUrl: 'snackbar/snackbar-success.html',
  // styleUrls: ['snackbar/snackbar-success.scss']
})
export class SnackbarSuccess {
  constructor(
    public snackBarRef: MatSnackBarRef<SnackbarSuccess>,
    @Inject(MAT_SNACK_BAR_DATA) public data: string,
  ) {}
}