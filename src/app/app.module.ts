import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoWrapperComponent } from './Components/todo-wrapper/todo-wrapper.component';
import { AdderBlockComponent } from './Components/adder-block/adder-block.component';
import { Single0ItemComponent } from './Components/single0-item/single0-item.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoWrapperComponent,
    AdderBlockComponent,
    Single0ItemComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
