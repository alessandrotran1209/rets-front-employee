import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBrokerComponent } from './modal-broker.component';

describe('ModalBrokerComponent', () => {
  let component: ModalBrokerComponent;
  let fixture: ComponentFixture<ModalBrokerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalBrokerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBrokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
