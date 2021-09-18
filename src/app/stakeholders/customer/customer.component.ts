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
  {number: 2, name: 'B', idcard: '2222', email: 'b@gmail.com', mobilenumber:'2222222222', username: 'b', status: 0},
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
  displayedColumns: string[] = ['number', 'name', 'idcard', 'email', 'mobilenumber', 'username', 'status', 'operation'];
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

    this.matIconRegistry.addSvgIcon(
      `radio_active`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/radio_active.svg")
    );

    this.matIconRegistry.addSvgIcon(
      `radio_deactive`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/radio_deactive.svg")
    );

    this.matIconRegistry.addSvgIcon(
      `lock`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/lock.svg")
    );

    this.matIconRegistry.addSvgIcon(
      `lock_open`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/lock_open.svg")
    );

    this.matIconRegistry.addSvgIcon(
      `eye`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/eye.svg")
    );
  }

  ngOnInit(): void {
  }

  openConfirmationDialog() {    
    this.dialog.open(DialogConfirmation, {
      width: String(window.innerHeight/2.324),
      data: this.customer.status
    });
  }

  openInformationDialog() {
    this.dialog.open(DialogInformation, {      
      data: this.customer      
    });
  }
  
  openEdittingDialog() {
    this.dialog.open(DialogEdit, {
      data: this.customer      
    });
  }

  openAdditionDialog() {
    this.dialog.open(DialogEdit, {
      data: this.customer      
    });
  }
}
// Dialog
@Component({
  selector: 'customer-information',
  templateUrl: 'dialog/customer-information.html',
  styleUrls: ['dialog/customer-information.css']  
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
  selector: 'customer-editting',
  templateUrl: 'dialog/customer-editting.html',
  styleUrls: ['dialog/customer-information.css']  
})
export class DialogEdit {
  constructor(
    public dialogRef: MatDialogRef<DialogEdit>,
    @Inject(MAT_DIALOG_DATA) public data: Customer) {}
  onNoClick(): void {
    this.dialogRef.close();
  }

  submit(): void {

  }
}

@Component({
  selector: 'customer-addition',
  templateUrl: 'dialog/customer-addition.html',
  styleUrls: ['dialog/customer-information.css']  
})
export class DialogAddition {
  constructor(
    public dialogRef: MatDialogRef<DialogAddition>,
    @Inject(MAT_DIALOG_DATA) public data: Customer) {}
  onNoClick(): void {
    this.dialogRef.close();
  }

  submit(): void {

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
    @Inject(MAT_DIALOG_DATA) public data: number
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

  openFailureSnackbar(){
    this.snackbar.openFromComponent(SnackbarFailure, {
      duration: this.durationInSeconds * 1000,
      panelClass: ['red-snackbar'],
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

@Component({
  selector: 'snackbar-failure',
  templateUrl: 'snackbar/snackbar-failure.html',
  // styleUrls: ['snackbar/snackbar-success.scss']
})
export class SnackbarFailure {
  constructor(
    public snackBarRef: MatSnackBarRef<SnackbarFailure>    
  ) {}
}