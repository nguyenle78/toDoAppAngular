import { Component, OnInit } from '@angular/core';
import { Item} from "../../../app/models/Item";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  todos:Item[];
  inputTodo = "";
  constructor() { }

  ngOnInit(): void {
    this.todos =[
      {
        content: "clean house",done :false
      },
      {
        content: "learn angular", done: true
      }
    ] 
  }

  onToogle(id:number) {
    this.todos.map((v,i)=>{
      if(i == id) v.done = !v.done; 
    
      return v; 
    })
  }
  
  deleteAllItem (){
    this.todos = [];
  }
  
  addItem(){
    this.todos.push(
      {
        content: this.inputTodo,
        done: false
      }
    )
      this.inputTodo ="";
  }
}
