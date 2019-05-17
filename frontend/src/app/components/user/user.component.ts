import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user:any={
  _id:'',
  name:'',
  email:'',
  password:'',
  phone:''
  }


  userData:any;
  constructor(private userService:UserService) {}

  ngOnInit() {
    document.getElementById('form1').style.display="none";
  
    this.userService.getUsersData().subscribe(
      res=>this.userData=res
    );
  }
  display(name)
  {
    const state =document.getElementById(name).style.display;
    if(state=="none") document.getElementById(name).style.display="inline";
    else document.getElementById(name).style.display="none";
  }
  
  onSubmit({form1,valid})
  {
    if(!valid) return alert('Please Complete the fields');
    this.userService.register(this.user).subscribe(res=>{
     if(!res.success) return alert('The email entered is already used');
      alert('DONE');
      this.userService.getUsersData().subscribe(res=>this.userData=res);
      document.getElementById("reset").click();
    })

  }

  Fill(number)
  {
    this.user=this.userData[number];
    document.getElementById('form1').style.display="inline";
    console.log(this.user._id);
  }

  delete(index)
  {
    const id = this.userData[index]._id;
    this.userService.deleteUser(id).subscribe(res=>{
     this.userService.getUsersData().subscribe(res=>this.userData=res);
    });
  }

}
