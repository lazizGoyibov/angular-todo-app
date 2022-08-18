import { Component, ElementRef, OnInit } from '@angular/core';
import { Todos } from 'src/app/Todos';

@Component({
  selector: 'app-todo-wrapper',
  templateUrl: './todo-wrapper.component.html',
  styleUrls: ['./todo-wrapper.component.scss']
})
export class TodoWrapperComponent implements OnInit {
  localItem: any;
  val: any
  orgObj: any;
  orgObjArr: Todos[] = []

  unCompletedBase: Todos[] = [];
  completedBase: Todos[] = [];
  todosBase: Todos[];

  inputV: any;

  page: number = 1;
  count: number = 0;
  lengthSize: number = 10;
  


  
  constructor() {

    this.localItem = localStorage.getItem("todos");
    if(this.localItem == null){
    this.todosBase = [];
    }
    else{ 
      this.todosBase = JSON.parse(this.localItem); 
    }

  }

 
  

  ngOnInit(): void {
    this.todosBase
  }

  fromAddTo(todo: any) {
    this.todosBase.push(todo)
    todo.id++

    localStorage.setItem("todos", JSON.stringify(this.todosBase))
    console.log(this.todosBase)
  }

  onDeleterr(todo:any) {
      const index = this.todosBase.indexOf(todo)

      this.todosBase.splice(index,1)
      localStorage.setItem("todos", JSON.stringify(this.todosBase))
      
  }

  onComp(todo:any) {
    const index = this.todosBase.indexOf(todo)
    console.log(this.todosBase[index].status)
    this.todosBase[index].status = !this.todosBase[index].status;
    localStorage.setItem("todos", JSON.stringify(this.todosBase))
  }



  original(todo:any) {
    this.orgObj = todo
    this.orgObjArr.push(todo)
    console.log("originalll ichi:", this.orgObj)
    console.log("originalll arrni ichi:", this.orgObjArr)
  }

  onEdit(todo: any) {
    console.log(todo)

    for(let el of this.orgObjArr) {
      if(el.id === todo.id) {
        const index = this.todosBase.indexOf(el)
   
      this.todosBase.splice(index,1, todo)
        console.log(this.todosBase)
        localStorage.setItem("todos", JSON.stringify(this.todosBase))
      }
    }
    

      
  }
  

  filtered(select: ElementRef|undefined) {

    this.inputV =select?.nativeElement.value
    
    
  }


  onDataChange(event: any) {
    this.page = event;
    this.todosBase
  }

}
