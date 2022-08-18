import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Todos } from 'src/app/Todos';

@Component({
  selector: 'app-single0-item',
  templateUrl: './single0-item.component.html',
  styleUrls: ['./single0-item.component.scss']
})
export class Single0ItemComponent implements OnInit {

  @ViewChild("editableInput", {static: false}) InputEditable: ElementRef | undefined
  @Input() title: any
  @Input() id: any = 0
  @Output() deleter: EventEmitter<Todos> = new EventEmitter()
  @Output() completer: EventEmitter<Todos> = new EventEmitter()
  @Output() editer: EventEmitter<Todos> = new EventEmitter()
  @Output() originalObj: EventEmitter<Todos> = new EventEmitter()
  compBol: boolean = true
  valu: string = ""

  constructor() { }

  ngOnInit(): void {
  }

  onDelete() {
    this.deleter.emit(this.title)
  }

  onComp() {
    this.completer.emit(this.title)
  }

  @HostListener("keypress", ["$event"]) onEnter(event: KeyboardEvent) {
    if(event.key === "Enter") {
      this.compBol = true


      console.log("Hostni ichi log1:", this.title)
     this.valu = this.InputEditable?.nativeElement.value
     console.log("Hostni ichi log2:",this.title)
     this.title.title = this.valu
      console.log("Hostni ichi log3:", this.title)
      this.editer.emit(this.title)
    }
    
     
  }


  onEdit(title:any) {
    this.compBol = !this.compBol
    
    setTimeout(() => {
      this.InputEditable?.nativeElement.focus()
     
    })

   console.log(title)
    this.originalObj.emit(title)
   
    
  }
}
