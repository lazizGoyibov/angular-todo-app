import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdderBlockComponent } from './adder-block.component';

describe('AdderBlockComponent', () => {
  let component: AdderBlockComponent;
  let fixture: ComponentFixture<AdderBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdderBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdderBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
