import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountersListComponent } from './counters-list.component';

describe('CountersListComponent', () => {
  let component: CountersListComponent;
  let fixture: ComponentFixture<CountersListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountersListComponent]
    });
    fixture = TestBed.createComponent(CountersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
