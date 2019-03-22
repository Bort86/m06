import {ReservationTime} from "./reservationTime"
import {TablePreference} from "./tablePreference"
import {SpecialRequest} from "./specialRequest"

export class Reservation {

  //properties
  id: number;
  name: string;
  surname: string;
  email: string;
  phone: string;
  reservationDate: any;
  reservationTime: ReservationTime;
  tablePreference: TablePreference;
  specialRequests: SpecialRequest[];
  totalPrice:number;

  constructor (id?:number,name?:string, surname?:string, email?:string, phone?:string, reservationDate?:any, reservationTime?:ReservationTime, tablePreference?:TablePreference, specialRequests?:SpecialRequest[],totalPrice?:number )  {
    this.setId(id);
    this.setName(name);
    this.setSurname(surname);
    this.setEmail(email);
    this.setPhone(phone);
    this.setReservationDate(reservationDate);
    this.setReservationTime(reservationTime);
    this.setTablePreference(tablePreference);
    this.setSpecialRequests(specialRequests);
    this.setTotalPrice(totalPrice);
  }

  //Methods
  getId() : number {
    return this.id;
  }

  getName() : string {
    return this.name;
  }

  getSurname() : string {
    return this.surname;
  }

  getEmail() : string {
    return this.email;
  }

  getPhone() : string {
    return this.phone;
  }

  getReservationDate() : any {
    return this.reservationDate;
  }

  getReservationTime() : ReservationTime {
    return this.reservationTime;
  }

  getTablePreference(): TablePreference {
    return this.tablePreference;
  }

  getSpecialRequests(): SpecialRequest[] {
    return this.specialRequests;
  }

  getTotalPrice() : number {
    return this.totalPrice;
  }

  setId(id:number) : void {
    this.id = id;
  }

  setName(name:string) : void {
    this.name = name;
  }

  setSurname(surname:string) : void {
    this.surname = surname;
  }

  setPhone(phone:string) : void {
    this.phone = phone;
  }

  setEmail(email:string) : void {
    this.email = email;
  }

  setReservationDate(reservationDate:any) : void {
    this.reservationDate = reservationDate;
  }

  setReservationTime(reservationTime: ReservationTime) : void {
    this.reservationTime = reservationTime;
  }

  setTablePreference(tablePreference: TablePreference): void {
    this.tablePreference = tablePreference;
  }

  setSpecialRequests(specialRequests: SpecialRequest[]): void {
    this.specialRequests=specialRequests;
  }

  setTotalPrice(totalPrice:number) : void {
    this.totalPrice = totalPrice;
  }
}
