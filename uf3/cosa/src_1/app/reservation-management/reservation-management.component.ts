import { Component, OnInit } from '@angular/core';
import {ReservationService} from "../services/reservation.service";
//Model
import {Reservation} from '../model/reservation';
import {ReservationTime} from "../model/reservationTime";
import {TablePreference} from "../model/tablePreference";
import {SpecialRequest} from "../model/specialRequest";

@Component({
  selector: 'app-reservation-management',
  templateUrl: './reservation-management.component.html',
  styleUrls: ['./reservation-management.component.css']
})
export class ReservationManagementComponent implements OnInit {

  reservationTimes : ReservationTime[]=[];
  tablePreferences : TablePreference[]=[];
  specialRequests : SpecialRequest[]=[];
  reservations : Reservation []=[];
  reservationsFiltered: Reservation []=[];

  //Pagination properties
  itemsPerPage: number;
  currentPage: number;
  totalItems: number;

  //Filter properties
  priceFilter: number;
  nameFilter: string;

  constructor(private reservationService: ReservationService) { }

  ngOnInit() {
    this.reservationTimes = this.reservationService.getReservationTimes();
    this.tablePreferences = this.reservationService.getTablePreferences();
    this.specialRequests = this.reservationService.getSpecialRequests();

    //Pagination and Filter properties' initialization
    this.itemsPerPage = 10;
    this.currentPage = 1;
    this.totalItems = this.reservations.length;

    this.priceFilter = 500;
    this.reservationsFiltered = this.reservations;
  }

}
