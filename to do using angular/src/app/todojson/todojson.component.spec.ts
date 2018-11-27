import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodojsonComponent } from './todojson.component';

describe('TodojsonComponent', () => {
  let component: TodojsonComponent;
  let fixture: ComponentFixture<TodojsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodojsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodojsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
