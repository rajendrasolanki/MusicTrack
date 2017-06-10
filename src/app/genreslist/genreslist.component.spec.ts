import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreslistComponent } from './genreslist.component';

describe('GenreslistComponent', () => {
  let component: GenreslistComponent;
  let fixture: ComponentFixture<GenreslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenreslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
