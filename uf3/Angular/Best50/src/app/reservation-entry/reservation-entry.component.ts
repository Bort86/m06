import { Component, OnInit } from '@angular/core';
import { Reservation } from '../model/reservation';

@Component({
  selector: 'app-reservation-entry',
  templateUrl: './reservation-entry.component.html',
  styleUrls: ['./reservation-entry.component.css']
})
export class ReservationEntryComponent implements OnInit {
  reservation: Reservation;
  reservationTimes: string[]= ["12:00", "13:00", "14:00", "15:00"];

  constructor() { }

  ngOnInit() {
    this.reservation = new Reservation(0, "", "", "", "", new Date, "14:00");
  }

  reservationEntry(): void{
    if(this.reservation._name.length==0){
      alert("Hola");
    }
    console.log(this.reservation);
  }

/*  is_text_Empty(string) {
    return (!string || 0 === string._name.length);
  }*/
}
