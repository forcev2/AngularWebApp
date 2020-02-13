import { Component, OnInit, Inject } from '@angular/core';
import { HttpService } from '../http.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { MatTableDataSource, MatPaginator, MAT_DIALOG_DATA } from '@angular/material'
import { ViewChild, Injectable } from '@angular/core';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';
import { DialogDelComponent } from '../dialog-del/dialog-del.component';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

  brews: Object;
  users: Users;

  constructor(
    private _http: HttpService,
    private dialog: MatDialog
  ) { }


  displayedColumns: string[] = ['first_name', 'last_name', 'email', 'profil', 'edit', 'delete'];
  // dataSource = new MatTableDataSource<UsersInter>(this.users);
  dataSource;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;


  ngOnInit() {
    this._http.getUsers().subscribe((users: Users) => {
      this.users = users;
      this.dataSource = new MatTableDataSource<UsersInter>(users.result);
      this.dataSource.paginator = this.paginator;
      console.log("well...", this.dataSource, users.result);
    });

  }

  opD() {
    console.log(this.users);
  }

  openDialog(user: UsersInter) {
    const dialogRef = this.dialog.open(DialogExampleComponent, {
      width: '350px',
      data: { title: 'Edit user', userData: { id: user.id, address: user.address, phone: user.phone, first_name: user.first_name, last_name: user.last_name, email: user.email } },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this._http.putUser(result, this);
      }
    });
  }

  openDialogDelete(user: UsersInter) {
    const dialogRef = this.dialog.open( DialogDelComponent, {
      data: { id: user.id, first_name: user.first_name, last_name: user.last_name, email: user.email},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        console.log("3", result);
        this._http.delUser(result, this);
      }
    });
  }

  dialogNewUser() {
    const dialogRef = this.dialog.open(DialogExampleComponent, {
      width: '350px',
      data: { title: 'Add new user', userData: {} }
    });


    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this._http.addUser(result, this);
      }
    });
  }
}


export interface Users {
  result: UsersInter[];
}

export interface UsersInter {
  id: String;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address: string;
}

//QWxVVUpqbWkT-QC-sTjjcrMltZLkNVLuonQa Access-token
