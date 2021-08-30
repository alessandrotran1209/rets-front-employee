import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBrokerInfoComponent } from './modal-broker-info.component';

describe('ModalBrokerInfoComponent', () => {
  let component: ModalBrokerInfoComponent;
  let fixture: ComponentFixture<ModalBrokerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalBrokerInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBrokerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
