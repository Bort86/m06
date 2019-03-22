class Person {
  constructor(pDni, pName, pSurname, pPhone, pBirthdate){
    this._dni = pDni;
    this._name = pName;
    this._surname = pSurname;
    this._phone = pPhone;
    this._birthdate = pBirthdate;

  }
  get dni(){
    return this._dni;
  }
  set dni(pDni){
    this._dni = pDni;
  }

  get name(){
    return this._name;
  }
  set name(pDni){
    this._name = pName;
  }

  get surname(){
    return this._surname;
  }
  set surname(pSurname){
    this._surname = pSurname;
  }

  get phone(){
    return this._phone;
  }
  set phone(pPhone){
    this._phone = pPhone;
  }

  get birthdate(){
    return this._birthdate;
  }
  set birthdate(pBirthname){
    this._birthdate = pBirthname;
  }

   validateDni() {
    var numero
    var letr
    var letra
    var expresion_regular_dni

    expresion_regular_dni = /^\d{8}[a-zA-Z]$/;

    if(expresion_regular_dni.test (this._dni) == true){
      numero = this._dni.substr(0,this._dni.length-1);
      letr = this._dni.substr(this._dni.length-1,1);
      numero = numero % 23;
      letra='TRWAGMYFPDXBNJZSQVHLCKET';
      letra=letra.substring(numero,numero+1);
      if (letra!=letr.toUpperCase()) {
        return 'Dni erróneo, la letra del NIF no se corresponde';
      }else{
        return 'Dni correcto';
      }
    }else{
      return 'Dni erróneo, formato no válido';
    }
  }
}
