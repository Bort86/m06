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
  reservationFiltered: Reservation []=[];
  reservationSelected: Reservation;

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
    this.generateRandomReservations();

    //Pagination and Filter properties' initialization
    this.itemsPerPage = 10;
    this.currentPage = 1;
    this.totalItems = this.reservations.length;

    this.priceFilter = 500;
    this.reservationFiltered = this.reservations;
  }

  generateRandomReservations(){
    let randomReservPrice: number;
    let randomTablePreference: number;
    let randomReservationTime: number;
    let randomName: string;
    let today = new Date();

    //10. We go to the server and download all reservations
    for (let i = 0; i < 154; i++) {
        randomReservPrice = Math.floor(Math.random() * 500);
        randomTablePreference = Math.floor(Math.random() * 2);
        randomReservationTime = Math.floor(Math.random() * 3);

        if(i%5 == 0) {randomName="pepito";}
        else{randomName = "Name"+i;}

        let reservation = new Reservation(i,
                          randomName,
                          "Surname"+i,
                          "email"+i+"@email.com",
                          "606666666",
                          { date: { year: today.getFullYear(),
                                    month: today.getMonth()+1,
                                    day: today.getDate() } },
                          this.reservationTimes[randomReservationTime],
                          this.tablePreferences[randomTablePreference],
                          [],
                          randomReservPrice);
        this.reservations.push(reservation);
    }
  }

  filter(): void {
    //Attay.filter needs a callback function as parameter
    this.reservationFiltered = this.reservations.filter(
      reservation => {
        let priceValid = false;
        let nameValid = false;

        priceValid = reservation.getTotalPrice() <= this.priceFilter;

        if(this.nameFilter && this.nameFilter !="") {
          nameValid = reservation.getName().toLowerCase().indexOf(this.nameFilter.toLowerCase())!=1;
        } else {
          nameValid=true;
        }
        return (nameValid && priceValid)
      }
    );
  }

  onSelect(reservation: Reservation){
    this.reservationSelected = reservation;
    console.log(this.reservationSelected);
  }

}
