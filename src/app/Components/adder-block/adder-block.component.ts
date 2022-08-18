import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Todos } from 'src/app/Todos';
@Component({
  selector: 'app-adder-block',
  templateUrl: './adder-block.component.html',
  styleUrls: ['./adder-block.component.scss']
  
  
})
export class AdderBlockComponent implements OnInit {
  @Input() todo: any
  @Output() Addto: EventEmitter<Todos> = new EventEmitter()
  @Output() filterer = new EventEmitter();
  @ViewChild("selectInput" , {static:false}) inputSelect: ElementRef|undefined
  @ViewChild("adderForm" , {static:false}) formAdder: ElementRef|undefined
  

  todoTitle:string = "";
  arr: string[] = ["All", "Completed", "Uncompleted"]
  todoId: number = 0
  

  constructor() { }

  ngOnInit(): void {
  }


  onSubmit() {
    let todo = {
      id: this.todoId,
      title: this.todoTitle,
      status: false
    }


    if(this.todoTitle.length > 0) {
      this.Addto.emit(todo)
    } else {
      alert("not enough word")
    }
    this.todoId++

 
    this.formAdder?.nativeElement.reset()
    console.log("Suuuuuuuuuuuuuuuuuuubmit")
  }


  filterFunc () {


    this.filterer.emit(this.inputSelect)
    
    

  }
}
