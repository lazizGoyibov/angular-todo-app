import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Single0ItemComponent } from './single0-item.component';

describe('Single0ItemComponent', () => {
  let component: Single0ItemComponent;
  let fixture: ComponentFixture<Single0ItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Single0ItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Single0ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
