import { Injectable } from '@angular/core';
//Model
import {Reservation} from '../model/reservation';
import {ReservationTime} from "../model/reservationTime";
import {TablePreference} from "../model/tablePreference";
import {SpecialRequest} from "../model/specialRequest";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  numchar : number;

  constructor() { }

  getReservationTimes() : ReservationTime[] {
    let reservationTimes: ReservationTime[]=[];
    let reservationTimesAux: string[]=["12:00","13:00","14:00","15:00"];

    for (let i:number = 0; i < reservationTimesAux.length; i++) {
        let reservationTime = new ReservationTime(i,reservationTimesAux[i]);

      reservationTimes.push(reservationTime);
    }
    return reservationTimes;
  }


  getTablePreferences() : TablePreference[] {
    let tablePreferences : TablePreference[]=[];
    let tablePreferencesAux: string[]=["Next to the door","Next to the window","Private Room"];
    let tablePreferenceTemp;

    for (let i:number = 0; i < tablePreferencesAux.length; i++) {
        tablePreferenceTemp = new TablePreference(i,tablePreferencesAux[i], i*2+3);

        tablePreferences.push(tablePreferenceTemp);
    }
    return tablePreferences;
  }


  getSpecialRequests(): SpecialRequest [] {
    let specialRequests: SpecialRequest[] = [];
    let specialRequestAux: string[]=["Vegetarian Menu","Lactose intolerance","Celiac"];
    let specialRequestTemp;

    for (let i:number = 0; i < specialRequestAux.length; i++) {
        specialRequestTemp = new SpecialRequest(i,specialRequestAux[i], i*2+40);

        specialRequests.push(specialRequestTemp);
    }
    return specialRequests;
  }


}
