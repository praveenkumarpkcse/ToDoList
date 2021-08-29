import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ToDoList';
  taskInput : String = '';
  taskArray = [];
  emptyArray = true;
  constructor(){}

  ngOnInit(){
  }

  TaskAdd(){
    this.emptyArray = false;
    this.taskArray.push(this.taskInput);
    this.taskInput = '';
  }

  deleteTask(TaskList)
  {
    this.taskArray.forEach((value,index)=>{
      if(value==TaskList) this.taskArray.splice(index,1);
    });

    if(this.taskArray.length == 0)
    {
      this.emptyArray = true;
    }
  }
}
