export class TablePreference {
  id:number;
  preference:string;
  price:number;

  constructor (id?:number,preference?:string, price?:number) {
    this.setId(id);
    this.setPreference(preference);
    this.setPrice(price);
  }

  getId() : number {
    return this.id;
  }

  getPreference() : string {
    return this.preference;
  }

  getPrice() : number {
    return this.price;
  }

  setId(id:number) : void {
    this.id = id;
  }

  setPreference(preference:string) : void {
    this.preference = preference;
  }

  setPrice(price:number) : void {
    this.price = price;
  }
}
