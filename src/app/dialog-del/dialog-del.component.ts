import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersInter } from '../list/list.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog-del',
  templateUrl: './dialog-del.component.html',
  styleUrls: ['./dialog-del.component.scss']
})
export class DialogDelComponent{

  datar: UsersInter;
  dialogTitle: String;
  constructor(
    public dialogRef: MatDialogRef<DialogDelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UsersInter) {
      console.log("1", data);
    this.datar = data;
  }

  Cancel(){
    this.dialogRef.close(null);
  }

  confirmClick(){
    console.log("2" , this.datar);
    this.dialogRef.close(this.datar);
  }

  ngOnInit() {
  }

}
