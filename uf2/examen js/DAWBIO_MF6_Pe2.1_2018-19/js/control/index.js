/*
 @name= UF 2 Estructures definides pel programador - Examen PE 2.1
 @author= Pablo Rodriguez Fraga
 @version= 1.0
 @description= General functions and jquery for this exam
 @date = 18/01/2019
 @params -
 @return -
 */


//here I declare a couple of constants: the two arrays informed in the Examen
//and one regex for dna code
var illnessesArray = ["Acute lymphoblastic leukemia", "Acute myeloid leukemia", "Adrenocortical carcinoma", "Cervical cancer", "Childhood cancers", "Gestational trophoblastic tumor", "Laryngeal cancer", "Lung cancer", "AIDS", "Oral cancer", "Throat cancer"];
var analysisTypeNamesArray = ["Accurate analysis","Ordinary analysis", "Minumim analysis"];
var adn_code = new RegExp("[^ACGT]", "i");


/*
 @name= document ready
 @author= Pablo Rodriguez Fraga
 @version= 1.0
 @description= document ready for the html, it will only show the option for new research
 and generate dynamically the illnes lists
 @date = 18/01/2019
 @params -
 @return -
 */
$(document).ready(function(){

  /*When we click the new research botton, this jquery will print all the illness list and show its div
  */
  $("#new_research").click(function(){
    var options ="";
    for(var i = 0; i<illnessesArray.length; i++){
      options += "<p > <a href='#' id='ill_"+i+"' onclick='pat_form("+i+")'>" + illnessesArray[i] + " </a></p><br>";
    }

    options += "<br><button id='back_btn' class='btn btn-danger' onclick=goBack()> Back </button>";

    $("#illnessesArea").append(options);
    $("#illnessesArea").show();
  });

  /*
   @name= register_research button
   @author= Pablo Rodriguez Fraga
   @version= 1.0
   @description= Jquery that will return the input information on patient form, validate validate
   all the data and if it's everything ok, it will generate 3 type of objects
   @date = 18/01/2019
   @params -
   @return -
   */
  $("#register_research").click(function(){

    //this is a simple way to generate a random id for patient, illnes and analysis object
    var id = Math.floor(Math.random() * 500) + 1;

    //first we capture the analysis name, and then we create an analysis object
    var analysis_name = $("#select_analysis").val();
    var analysis = new AnalysisTypeObj(id, analysis_name);

    //as we did for analysis, we do for illness
    var illnes_name = $("#analytic_name").text();
    var illnes = new IllnessObj(id, illnes_name);

    //here we recover the values of non-objects attributes of patientObj
    var name = $("#name").val();
    var dna_code = $("#dna_code").val();
    var age = $("#age").val();

    //if everything is ok, then we create a new patientObj
    if (validateAll(name, dna_code, age)){
      var patient = new PatientObj(id, illnes, analysis, name, dna_code, age);
      console.log(patient);
    }


  });


});

/*
 @name= window onload
 @author= Pablo Rodriguez Fraga
 @version= 1.0
 @description= Jquery for onload window, when we first enter this page it will
 show the main menu and hide everything else
 @date = 18/01/2019
 @params -
 @return -
 */
$(window).on("load", function () {
  $("#mainMenu").show();
  $("#illnessesArea").hide();
  $("#patientArea").hide();

});
/*/////////////FUNCTIONS////////////////*/

/*
 @name= PAT_FORM
 @author= Pablo Rodriguez Fraga
 @version= 1.0
 @description= Jquery to generate the patient form
 @date = 18/01/2019
 @params I value
 @return the name of analysis and the options int the select form
 */

function pat_form(i){
  $("#illnessesArea").hide();
  $("#patientArea").show();
  $("#errors").text("");

  $("#analytic_name").text("");
  var name = illnessesArray[i];
  $("#analytic_name").append(name);

  var options ="";
  for (var i = 0; i < analysisTypeNamesArray.length; i ++){
    options += "<option value="+analysisTypeNamesArray[i]+ " >" + analysisTypeNamesArray[i] +" </option>";
  }
  $("#select_analysis").append(options);

}


/*
 @name= validate all
 @author= Pablo Rodriguez Fraga
 @version= 1.0
 @description= Jquery that will return the input information on patient form, validate validate
 all the data and if it's everything ok, it will generate 3 type of objects
 @date = 18/01/2019
 @params 2 strings and 1 integer
 @return true if everything is validated ok, false if not
 */
function validateAll(name, dna_code, age) {
  var result = false;
  if (is_number_valid(age) && is_text_not_Empty(name) && validate_code(dna_code)){
    result = true
  }
  return result;
}

/*
 @name= goBack
 @author= Pablo Rodriguez Fraga
 @version= 1.0
 @description= simple function to show the first page
 @date = 18/01/2019
 @params
 @return
 */

function goBack(){
  $("#mainMenu").show();
  $("#illnessesArea").hide();
  $("#patientArea").hide();
}

/*
 @name= goBack2
 @author= Pablo Rodriguez Fraga
 @version= 1.0
 @description= simple function to show the second page (illness list)
 @date = 18/01/2019
 @params
 @return
 */
function goBack2(){
  $("#mainMenu").show();
  $("#illnessesArea").show();
  $("#patientArea").hide();
}

/*
 @name= is_number_valid
 @author= Pablo Rodriguez Fraga
 @version= 1.0
 @description= simple function to validate numbers
 @date = 18/01/2019
 @params number_prod (a supposed integer)
 @return true if its a number, false if not
 */
function is_number_valid(number_prod){
  if(isNaN(number_prod)  || number_prod <= 0){
    $("#errors").removeClass("text-dark").addClass("text-danger");
    $("#errors").text("You must put at least one valid integer value");
    return false;
  }
  return true;
}
/*
 @name= is text not empty
 @author= Pablo Rodriguez Fraga
 @version= 1.0
 @description= validates if a string is empty or not
 @date = 18/01/2019
 @params a string
 @return true if its not empty, false if it is
 */

function is_text_not_Empty(str) {
  var result = true;
  if (!str || 0 === str.length){
    $("#errors").removeClass("text-dark").addClass("text-danger");
    $("#errors").text("Your name is empty");
    result = false;
  }
  return result;
}

/*
 @name= validate code
 @author= Pablo Rodriguez Fraga
 @version= 1.0
 @description= validates if a string is dna code using a regex
 @date = 18/01/2019
 @params a string
 @return true if its dna code, false if it's not
 */

function validate_code(dna_code){
  for (var i = 0; i < dna_code.length; i++){
    if (adn_code.test(dna_code[i]) || dna_code[i] == "") {
      $("#errors").removeClass("text-dark").addClass("text-danger");
      $("#errors").text("Non valid dna_code");
      return false;
  }
  return true;
  }
}
