import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersInter } from '../list/list.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.scss']
})

export class DialogExampleComponent {


  datar: UsersInter;
  dialogTitle: String;
  constructor(
    public dialogRef: MatDialogRef<DialogExampleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Data) {
    this.dialogTitle = data.title;
    this.datar = data.userData;
  }

  onNoClick(): void {
    this.dialogRef.close(null);
  }


  onConfifmClick(): void {
    console.log(this.datar)
    if (this.datar.first_name != null
      && this.datar.last_name != null
      && this.datar.email != null) {
      this.dialogRef.close(this.datar);
    } 
    else{
      this.dialogRef.close(null);
    }
  }

}

export interface Data {
  userData: UsersInter;
  title: String;
}


