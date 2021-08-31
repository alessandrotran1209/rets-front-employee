export class Customer {
  id: number;
  brokercode: number;
  signdate: Date;
  resignationDate: Date;
  status: number;

  constructor(
    id: number,
    brokercode: number,
    signdate: Date,
    resignationDate: Date,
    status: number
  ) {
    this.id = id;
    this.brokercode = brokercode;
    this.signdate = signdate;
    this.resignationDate = resignationDate;
    this.status = status
  }
}
