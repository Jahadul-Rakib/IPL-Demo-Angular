import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundComponentComponentComponent } from './page-not-found-component-component.component';

describe('PageNotFoundComponentComponentComponent', () => {
  let component: PageNotFoundComponentComponentComponent;
  let fixture: ComponentFixture<PageNotFoundComponentComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNotFoundComponentComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundComponentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
