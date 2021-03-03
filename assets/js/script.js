/// <reference path="../../typings/globals/jquery/index.d.ts" />

$(function() {
   $('[data-toggle="tooltip"]').tooltip();
   $('[data-toggle="popover"]').popover();

   $("#botao-enviar").click(function() {
      let sender_name = $("#nameFrom")
      let sender_surname = $("#surnameFrom")
      let sender_email = $("#emailFrom")
      let sender_gender = $("#genderFrom")

      let receiver_name = $("#nameTo")
      let receiver_surname = $("#surnameTo")
      let receiver_email = $("#emailTo")
      let receiver_gender = $("#genderTo")

      let valid_sender_name = validaTextboxFunction(sender_name)
      let valid_sender_surname = validaTextboxFunction(sender_surname)
      let valid_sender_email = validaTextboxFunction(sender_email)


      let valid_receiver_name = validaTextboxFunction(receiver_name)
      let valid_receiver_surname = validaTextboxFunction(receiver_surname)
      let valid_receiver_email = validaTextboxFunction(receiver_email)


      if(valid_sender_name && valid_sender_surname && valid_sender_email && valid_receiver_name && valid_receiver_surname && valid_receiver_email) { alert("OK!") }
      else {alert("Error!")}
   })
})

function validaTextboxFunction(text){

   if(text.val() == '') {
      text.addClass("is-invalid")
      text.removeClass("is-valid")
      return false
   }
   else {
      text.addClass("is-valid")
      text.removeClass("is-invalid")
      return true
   }
}

function validaGenderFunction(radioName, genderM, genderF, genderO){
   let botoes = $("input[name="+ radioName +"]:checked")
   if (botoes.length === 0) {
      genderM.addClass("is-invalid")
      genderM.removeClass("is-valid")
      genderF.addClass("is-invalid")
      genderF.removeClass("is-valid")
      genderO.addClass("is-invalid")
      genderO.removeClass("is-valid")
      $(radioName+"-feedback").addClass("d-block")
      return false
   }
   else {
      genderM.removeClass("is-invalid")
      genderM.addClass("is-valid")
      genderF.removeClass("is-invalid")
      genderF.addClass("is-valid")
      genderO.removeClass("is-invalid")
      genderO.addClass("is-valid")
      $(radioName+"-feedback").removeClass("d-block")
      return true
   }
}