export class SpecialRequest {
  id:number;
  request:string;
  price:number;

  constructor (id?:number,request?:string, price?:number) {
    this.setId(id);
    this.setRequest(request);
    this.setPrice(price);
  }

  getId() : number {
    return this.id;
  }

  getRequest() : string {
    return this.request;
  }

  getPrice() : number {
    return this.price;
  }

  setId(id:number) : void {
    this.id = id;
  }

  setRequest(request:string) : void {
    this.request = request;
  }

  setPrice(price:number) : void {
    this.price = price;
  }
}
