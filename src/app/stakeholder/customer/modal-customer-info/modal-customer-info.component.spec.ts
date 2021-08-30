import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCustomerInfoComponent } from './modal-customer-info.component';

describe('ModalCustomerInfoComponent', () => {
  let component: ModalCustomerInfoComponent;
  let fixture: ComponentFixture<ModalCustomerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCustomerInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCustomerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
