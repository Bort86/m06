import { Component, OnInit, ViewChild } from '@angular/core';
//import for cookies
import { CookieService } from 'ngx-cookie-service';
//Model
import {Reservation} from '../model/reservation';
import {ReservationTime} from "../model/reservationTime";
import {TablePreference} from "../model/tablePreference";
import {SpecialRequest} from "../model/specialRequest";
//service
import {ReservationService} from "../services/reservation.service";

//DatePicker
// import {INgxMyDpOptions, IMyDateModel} from 'ngx-mydatepicker';

@Component({
  selector: 'app-reservation-entry',
  templateUrl: './reservation-entry.component.html',
  styleUrls: ['./reservation-entry.component.css']
})
export class ReservationEntryComponent implements OnInit {

  //properties
  reservation: Reservation;
  reservationTimes : ReservationTime[]=[];
  tablePreferences : TablePreference[]=[];
  specialRequests : SpecialRequest[]=[];
  @ViewChild('reservationEntryForm') reservationEntryForm: HTMLFormElement;

  //Methods
  //ngOnInit will be executed the moment the component is loaded
  // in the application

  //angular es capaz de crear un atributo a partir de un parámetro pasado
  //por el constructor
  constructor(private cookieService: CookieService, private reservationService: ReservationService){}

  ngOnInit(): void {

    this.reservationTimes = this.reservationService.getReservationTimes();
    this.tablePreferences = this.reservationService.getTablePreferences();
    this.specialRequests = this.reservationService.getSpecialRequests();

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

    this.reservationService.numchar = 2;
    
    this.initializeForm();

    if(this.cookieService.check("reservation")){
      //console.log(JSON.parse(this.cookieService.get("reservation")));
      let CookieObj: any = JSON.parse(this.cookieService.get("reservation"));

      Object.assign(this.reservation, CookieObj);
      console.log(this.reservation);

      this.reservation.setReservationTime(CookieObj.reservationTime);
      this.reservation.setTablePreference(CookieObj.tablePreference);

      this.reservation.specialRequests = [];
      for (let specialRequest of CookieObj.specialRequests) {
        this.reservation.specialRequests.push(specialRequest);
      }
    }

  }

  checkSpecialRequestExist(specialRequest: SpecialRequest) : boolean {
    for (let spAux of this.reservation.getSpecialRequests()){
      if(JSON.stringify(spAux)==JSON.stringify(specialRequest)) {
        return true;
      }
    }
    return false;
  }

  reservationEntry(): void {
    this.cookieService.delete("reservation");
    //crea la coikie reservation con un string "aplanao" por JSON
    this.cookieService.set("reservation", JSON.stringify(this.reservation));
    console.log(JSON.stringify(this.reservation));
  }

  addRemoveSpecialRequest(specialRequest: SpecialRequest): void {
    if(!this.checkSpecialRequestExist(specialRequest)) {
      this.reservation.specialRequests.push(specialRequest);
    }else{
      for(let spAux of this.reservation.getSpecialRequests()){
        if (JSON.stringify(spAux)==JSON.stringify(specialRequest)){
          this.reservation.specialRequests.splice(this.reservation.getSpecialRequests().indexOf(spAux), 1)
        }
      }
    }
    this.calculateTotalPrice()
  }

  calculateTotalPrice(): void {
    this.reservation.calculateTotalPrice();
  }

  clickPreference(tablePreference: TablePreference): void {
    this.reservation.setTablePreference(tablePreference);
    this.calculateTotalPrice();
  }

  initializeForm(){
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
