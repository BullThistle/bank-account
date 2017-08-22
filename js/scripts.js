function Account(name, initDeposit){
  this.name = name;
  this.initDeposit = initDeposit;
  this.balance = initDeposit;
  this.deposit = function(depoIn){
    this.balance += depoIn;
  }
  this.withdrawal = function(withd){
    this.balance -= withd;
  }
}

// function register(event){
//   event.preventDefault();
//   var name = $("#name").val();
//   var initDeposit = parseInt($("#initDeposit").val());
//   newAccount.name = name;
//   newAccount.initDeposit = initDeposit;
//   newAccount.balance = initDeposit;
//   alert(newAccount.name);
//   alert(newAccount.initDeposit);
//   alert(newAccount.balance);
// }

function depo(){
  // alert(newAccount.initDeposit);
  // var depoIn = parseInt($("#depoIn").val());
  // newAccount.deposit(depoIn);
}

$(document).ready(function(){
  $('form#reg').submit(function() {
    event.preventDefault();
    var name = $("#name").val();
    var initDeposit = parseInt($("#initDeposit").val());
    newAccount.name = name;
    newAccount.initDeposit = initDeposit;
    newAccount.balance = initDeposit;
    $("#balanceOut").text(newAccount.balance);
  });

  $('form#dep').submit(function() {
    event.preventDefault();
    var depoIn = parseInt($("#depoIn").val());
    newAccount.deposit(depoIn);
    $("#balanceOut").text(newAccount.balance);
  });

  $('form#withD').submit(function() {
    event.preventDefault();
    var withd = parseInt($("#withdrawal").val());
    newAccount.withdrawal(withd);
    $("#balanceOut").text(newAccount.balance);
  });

});
var newAccount = new Account();
