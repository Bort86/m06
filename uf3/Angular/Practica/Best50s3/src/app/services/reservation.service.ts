//permite el cambio de informacion entre componentes
import { Injectable } from '@angular/core';
//Model
import {Reservation} from '../model/reservation';
import {ReservationTime} from "../model/reservationTime"
import {TablePreference} from "../model/tablePreference"
import {SpecialRequest} from "../model/specialRequest"

@Injectable({
  //a quien inyecto esta info
  providedIn: 'root'
})
export class ReservationService {
  //declaro un service
  numElementCarrito: number;

  constructor() { }
  // We access to the server in order to get
  // table preferences and reservation times
  getReservationTimes():ReservationTime[]{
    let reservationTimes: ReservationTime[]=[];
    let reservationTimesAux: string[]=["12:00","13:00","14:00","15:00"];

    for (let i:number = 0; i < reservationTimesAux.length; i++) {
        let reservationTime = new ReservationTime(i,reservationTimesAux[i]);

        reservationTimes.push(reservationTime);
    }
    return reservationTimes;
  }

  getTablePreferences():TablePreference[]{
    let tablePreferences: TablePreference[]=[];
    let tablePreferencesAux: string[]=
    ["Nex to the window","Nex to the door","Private room"];
    let tablePreferenceTemp;
    for (let i:number = 0; i < tablePreferencesAux.length; i++) {
        tablePreferenceTemp = new TablePreference(i,tablePreferencesAux[i],i*2+3);

        tablePreferences.push(tablePreferenceTemp);
    }
    return tablePreferences;
  }


  getSpecialRequests():SpecialRequest[]{
    let specialRequests: SpecialRequest[]=[];
    let specialRequestsAux: string[]=
    ["Vegetarian menu","Lactose intolerance","Celiac"];
    let specialRequestsTemp;
    for (let i:number = 0; i < specialRequestsAux.length; i++) {
        specialRequestsTemp = new SpecialRequest(i,specialRequestsAux[i],i*3+1);

        specialRequests.push(specialRequestsTemp);
    }
    return specialRequests;
  }




}
