import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usersList:any = [
    {
      name: "Akash",
      lastName: "Singh",
      dob:"2022-07-19T09:59:41.775Z",
      email: "akash@gmail.com",
      gender: "male",
      phoneNumber: 8989789234
    },
    {
      name: "Ayush",
      lastName: "Singh",
      dob:"2022-07-19T09:59:41.775Z",
      email: "ayush@gmail.com",
      gender: "male",
      phoneNumber: 8989789234
    },
    {
      name: "Anish",
      lastName: "Singh",
      dob:"2022-07-19T09:59:41.775Z",
      email: "anish@gmail.com",
      gender: "male",
      phoneNumber: 8989789234
    }
  ];
  constructor(
    private usersService : UsersService
  ) { }

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList() {
    this.usersService.getUserList({}).subscribe((res:any)=>{
      if (res.status == 200 && res.data.length > 0) {
        this.usersList =  res.data;
      }
    });
  }

}
