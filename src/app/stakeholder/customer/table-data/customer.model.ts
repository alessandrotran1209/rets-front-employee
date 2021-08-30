export class Customer {
  id: number;
  name: string;
  account: string;
  status: boolean;
  identity_card: number;
  issue_date: Date;
  dob: Date;
  phone: number;
  email: string;
  address: string;

  constructor(
    id: number,
    name: string,
    account: string,
    status: boolean,
    identity_card: number,
    issue_date: Date,
    dob: Date,
    phone: number,
    email: string,
    address: string
  ) {
    this.id = id;
    this.name = name;
    this.account = account;
    this.status = status;
    this.identity_card = identity_card;
    this.issue_date = issue_date;
    this.dob = dob;
    this.phone = phone;
    this.email = email;
    this.address = address;
  }
}
