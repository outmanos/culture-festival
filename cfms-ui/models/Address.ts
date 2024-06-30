class Address {
  id: number;
  street: string;
  city: string;
  state: string;
  zip: string;

  constructor(
    id: number,
    street: string,
    city: string,
    state: string,
    zip: string
  ) {
    this.id = id;
    this.street = street;
    this.city = city;
    this.state = state;
    this.zip = zip;
  }
}

export default Address;
