export class Reservation {
  _id: number;
  _name: string;
  _surname: string;
  _email: string;
  _phone: string;
  _reservationDate: Date;
  _reservationTime: string;

  constructor(pId: number,  pName: string,  pSurname: string,
    pEmail: string, pPhone: string, pPreservationDate: Date,
    pPreservationTime: string){
      this._id = pId;
      this._name = pName;
      this._surname = pSurname;
      this._email = pEmail;
      this._phone = pPhone;
      this._reservationDate = pPreservationDate;
      this._reservationTime = pPreservationTime;
  }

  getId(): number{
    return this._id;
  }

  getName(): string{
    return this._name;
  }

  getSurname(): string{
    return this._surname;
  }

  getEmail(): string{
    return this._email;
  }

  getPhone(): string{
    return this._phone;
  }

  getReservationDate(): Date{
    return this._reservationDate;
  }

  getReservationTime(): string{
    return this._reservationTime;
  }

  setId(pId: number): void {
    this._id = pId;
  }

  setName(pName: string): void {
    this._name = pName;
  }

  setSurname(pSurname: string): void {
    this._surname = pSurname;
  }

  setEmail(pEmail: string): void {
    this._email = pEmail;
  }

  setPhone(pPhone: string): void {
    this._phone = pPhone;
  }

  setReservationDate(pPreservationDate: Date): void {
    this._reservationDate = pPreservationDate;
  }

  setReservationTime(pPreservationTime: string): void {
    this._reservationTime = pPreservationTime;
  }

}
