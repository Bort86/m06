export class ReservationTime {
  id:number;
  time:string;

  constructor (id?:number,time?:string) {
    this.setId(id);
    this.setTime(time);
  }

  getId() : number {
    return this.id;
  }

  getTime() : string {
    return this.time;
  }

  setId(id:number) : void {
    this.id = id;
  }

  setTime(time:string) : void {
    this.time = time;
  }
}
