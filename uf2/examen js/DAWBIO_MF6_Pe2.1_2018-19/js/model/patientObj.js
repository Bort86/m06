class PatientObj{

  constructor(id, illness, analysisType, fullName, DNACode, age){
    this._id = id ;
    this._illness = illness ;
    this._analysisType = analysisType;
    this._fullName = fullName ;
    this._dnacode = DNACode;
    this._age = age ;
  }

  get id(){
    return this._id;
  }
  set id(id){
    this._ = id;
  }

  get illness(){
    return this._illness;
  }
  set illness(illness){
    this._illness = illness;
  }

  get analysisType(){
    return this._analysisType;
  }
  set analysisType(analysisType){
    this._analysisType = analysisType;
  }

  get fullName(){
    return this._fullName;
  }
  set fullName(fullName){
    this._fullName = fullName;
  }

  get dnacode(){
    return this._dnacode;
  }
  set dnacode(dnacode){
    this._dnacode = dnacode;
  }

  get age(){
    return this._age;
  }
  set age(age){
    this._age = age;
  }


}
