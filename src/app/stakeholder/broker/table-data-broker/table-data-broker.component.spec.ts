import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDataBrokerComponent } from './table-data-broker.component';

describe('TableDataBrokerComponent', () => {
  let component: TableDataBrokerComponent;
  let fixture: ComponentFixture<TableDataBrokerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableDataBrokerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDataBrokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
