/**
@name: Employee.js
@description: class to save the Employee data
@date: 14/12/2018
@author: Marisa Gonzales
@version 1.0
@extends Person
@properties:
  DNI: dni of the Employee
  name: name of the Employee
  surname: surname of the Employee
  phone: phone of the Employee
  birthdate: birthdate of the Employee
  salary: salary of the Employee

**/


class Employee extends Person{
  constructor(pDni, pName, pSurname, pPhone, pBirthdate, pSalary){
    super(pDni, pName, pSurname, pPhone, pBirthdate);
    this._salary = pSalary;
}

    get salary(){
      return this._salary;
    }
    set salary(pSalary){
      this._salary = pSalary;
    }


}
