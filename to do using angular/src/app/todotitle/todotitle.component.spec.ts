import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodotitleComponent } from './todotitle.component';

describe('TodotitleComponent', () => {
  let component: TodotitleComponent;
  let fixture: ComponentFixture<TodotitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodotitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodotitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
