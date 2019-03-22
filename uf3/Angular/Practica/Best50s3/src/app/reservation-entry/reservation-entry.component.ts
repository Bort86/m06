import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {ReservationService} from '../services/reservation.service'
//Model
import {Reservation} from '../model/reservation';
import {ReservationTime} from "../model/reservationTime"
import {TablePreference} from "../model/tablePreference"
import {SpecialRequest} from "../model/specialRequest"

//DatePicker
// import {INgxMyDpOptions, IMyDateModel} from 'ngx-mydatepicker';

@Component({
  selector: 'app-reservation-entry',
  templateUrl: './reservation-entry.component.html',
  styleUrls: ['./reservation-entry.component.css']
})
export class ReservationEntryComponent implements OnInit {

  //properties
  @Input() reservation: Reservation;
  reservationTimes : ReservationTime[]=[];
  tablePreferences: TablePreference[]=[]; //creo array de tablePreference
  specialRequests: SpecialRequest[]=[];

  @ViewChild('reservationEntryForm') reservationEntryForm: HTMLFormElement;

  constructor(private cookieService:CookieService, private reservationService: ReservationService){

  }
  //Methods
  //ngOnInit will be executed teh moment the component is loaded
  // in the application
  ngOnInit(): void {

    this.reservationTimes = this.reservationService.getReservationTimes();
    this.tablePreferences = this.reservationService.getTablePreferences();
    this.specialRequests = this.reservationService.getSpecialRequests();
    //this.reservation = new Reservation(0,"","","","",new Date(),"14:00");
    this.reservationService.numElementCarrito = 2;

    this.initializeForm();

    //1-03-19
    if(this.cookieService.check("reservation")){
      //The cookie exist

    //  console.log(this.cookieService.get("reservation"));
      let CookieObj : any =
      JSON.parse(this.cookieService.get("reservation"));
      //lo metemos en un objet reservation
      Object.assign(this.reservation, CookieObj);
    //  console.log(this.reservation);
      //corregir los objetos que son complejos
      this.reservation.setReservationTime(CookieObj.reservationTime);
      this.reservation.setTotalPrice(CookieObj.tablePreference);

      this.reservation.specialRequests=[];

      for(let specialRequest of CookieObj.specialRequests){
        this.reservation.specialRequests.push(specialRequest);
      }
    }
  }
//MIRAR
  initializeForm(){

    if(!this.reservation) {
      this.reservation = new Reservation();
      this.reservationEntryForm.reset();
      this.reservationEntryForm.form.markAsPristine();

      this.reservation = new Reservation();

      let today = new Date();
      this.reservation.setReservationDate(
        { date: { year: today.getFullYear(),
                  month: today.getMonth()+1,
                  day: today.getDate() } });
      this.reservation.setReservationTime(this.reservationTimes[2]);
      this.reservation.setTablePreference(this.tablePreferences[0]);
      this.reservation.setSpecialRequests([]);
      this.reservation.setTotalPrice(18);
    }

  }


  reservationEntry(): void {
    //console.log(this.reservation);
    console.log(JSON.stringify(this.reservation));

    this.cookieService.delete("reservation");
    //convert the object JSON a string json
    this.cookieService.set("reservation", JSON.stringify(this.reservation));
  }

  calculateTotalPrice(): void{
    this.reservation.calculateTotalPrice();
  }

  addRemoveSpecialRequest(specialRequest:SpecialRequest):void{
    //this.reservation.getSpecialRequests().indexOf(specialRequest)==-1
    if(!this.checkSpecialRequestExist(specialRequest)){
      this.reservation.specialRequests.push(specialRequest)
    }else{
      for(let spAux of this.reservation.getSpecialRequests()){
        if(JSON.stringify(spAux)==JSON.stringify(specialRequest)){
          this.reservation.specialRequests.splice(
            this.reservation.getSpecialRequests().indexOf(spAux),1);
        }
      }
      // index,

      this.reservation.specialRequests.splice(
        this.reservation.getSpecialRequests().indexOf(specialRequest),1);
    }
    this.calculateTotalPrice();
  }

  checkSpecialRequestExist(specialRequest: SpecialRequest):boolean{
    for(let spAux of this.reservation.getSpecialRequests()){
      if(JSON.stringify(spAux)==JSON.stringify(specialRequest)){
        return true;
      }
    }
    return false;
  }

  clickPreference(tablePreference:TablePreference): void{
    this.reservation.setTablePreference(tablePreference);
    this.calculateTotalPrice();
  }
}
