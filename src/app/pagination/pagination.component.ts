import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() page: number = 1

  constructor() { }

  ngOnInit(): void {
  }


  pageIncrement() {
    this.page++
    console.log(this.page)
  }

  pageDecrement() {
    if(this.page > 0) {
      this.page--
      console.log(this.page)
    }
  }



}
