import { Component, OnInit } from '@angular/core';

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
  reservation: Reservation;
  reservationTimes : ReservationTime[]=[];

  //Methods
  //ngOnInit will be executed teh moment the component is loaded
  // in the application
  ngOnInit(): void {
    // We access to the server in order to get
    // table preferences and reservation times
    let reservationTimesAux: string[]=["12:00","13:00","14:00","15:00"];

    for (let i:number = 0; i < reservationTimesAux.length; i++) {
        let reservationTime = new ReservationTime(i,reservationTimesAux[i]);

        this.reservationTimes.push(reservationTime);
    }


    //this.reservation = new Reservation(0,"","","","",new Date(),"14:00");
    this.reservation = new Reservation();

    let today = new Date();
    this.reservation.setReservationDate(
      { date: { year: today.getFullYear(),
                month: today.getMonth()+1,
                day: today.getDate() } });
    this.reservation.setReservationTime(this.reservationTimes[2]);
    //this.reservation.setTablePreference(this.tablePreferences[0]);
    this.reservation.setSpecialRequests([]);
    this.reservation.setTotalPrice(18);


  }

  resevartionEntry(): void {
    console.log(this.reservation);
  }

}
