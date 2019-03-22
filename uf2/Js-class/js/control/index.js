$(document).ready(function(){
  $("#myFS").on("blur", ".currency", function(){
    $(".currency").formatCurrency({
      region: 'es-ES',
      symbol: '€',
      positiveFormat: '%n %s',
      negativeFormat: '-%n %s',
      decimalSymbol: ',',
      digitalSymbolGroup: '.',
      groupDigits: true
    });
  })


  $("#butSubmit").click(function(event){
    event.preventDefault();

    let dni = $("#dni").val();
    let empName = $("#empName").val();
    let surname = $("#surname").val();
    let phone = $("#phone").val();
    let birthdate = $("#birthdate").val();
    let salary = $("#salary").val();

    let objEmployee = new Employee(dni, empName, surname, phone, birthdate, salary);
    console.log(objEmployee);
    console.log(objEmployee.validateDni());

  });
});

// CONTENEDOR ESTÁTICO.on("evento", selector, function(){})
