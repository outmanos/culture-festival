import Address from "./Address";

class Venue {
    id: number;
    name: string;
    address: Address;
    capacity: number;
  
    constructor(id: number, name: string, address: Address, capacity: number) {
      this.id = id;
      this.name = name;
      this.address = address;
      this.capacity = capacity;
    }
  }
  
  export default Venue;
  