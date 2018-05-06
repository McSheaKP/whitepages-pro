import { Component, OnInit } from '@angular/core';
import { ReversePhoneService} from '../reverse-phone.service'
@Component({
  selector: 'app-phonedisplay',
  templateUrl: './phonedisplay.component.html',
  styleUrls: ['./phonedisplay.component.css']
})
export class PhonedisplayComponent implements OnInit {


  userPhoneData: String = "";

  constructor(private _rps: ReversePhoneService){

   
      // this._rps.userPhoneService = userPhoneNum;
      // this._rps.getData();
      // userPhoneNum = "";
    }
  
    //Function that takes in the user input and returns the owners name

    //Function that gets data when user clicks the button
    getPhoneData(){
      this._rps.getData();
      this.userPhoneNum = "";
    }

    //Take in the user phone number and pass it into the services.ts contructor

    
    //this._rps.userPhoneNum = this.userPhoneNum;

    // addTodo: string = "";
    // toDoList: string[] = [];

    // addNewToDo(){
    //   this.toDoList = this._rps.addNewItem(this.toDoList, this.addTodo);
    //   this.addTodo = "";
    // }
    
    // deleteToDo(i){
    //   this.todohandlerService.deleteItem(this.toDoList, i);
    

  


  ngOnInit(){
    this._rps.getData()
    .subscribe( data => console.log(data))


  }
}
