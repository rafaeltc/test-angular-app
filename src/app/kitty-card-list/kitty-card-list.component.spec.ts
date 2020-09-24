import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KittyCardListComponent } from './kitty-card-list.component';

describe('KittyCardListComponent', () => {
  let component: KittyCardListComponent;
  let fixture: ComponentFixture<KittyCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KittyCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KittyCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
