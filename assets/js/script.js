/// <reference path="../../typings/globals/jquery/index.d.ts" />

$(function() {
   $('[data-toggle="tooltip"]').tooltip();
   $('[data-toggle="popover"]').popover();

   $("#botao-enviar").click(function() {
      let sender_name = $("#nameFrom")
      let sender_surname = $("#surnameFrom")
      let sender_email = $("#emailFrom")

      let receiver_name = $("#nameTo")
      let receiver_surname = $("#surnameTo")
      let receiver_email = $("#emailTo")

      let valid_sender_name = validaTextboxFunction(sender_name)
      let valid_sender_surname = validaTextboxFunction(sender_surname)
      let valid_sender_email = validaTextboxFunction(sender_email)
      let valid_sender_gender = validaGenderFunction()


      let valid_receiver_name = validaTextboxFunction(receiver_name)
      let valid_receiver_surname = validaTextboxFunction(receiver_surname)
      let valid_receiver_email = validaTextboxFunction(receiver_email)

      let valid_delivery = validaDeliveryFunction()


      if(valid_sender_name && valid_sender_surname && valid_sender_email && valid_sender_gender && valid_receiver_name && valid_receiver_surname && valid_receiver_email && valid_delivery) { alert("OK!") }
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

function validaGenderFunction() {
   let male = $("#gender-masc")
   let fem = $("#gender-fem")
   let other = $("#gender-other")

   let botoes = $("input[name='gender']:checked")
   if (botoes.length === 0) {
      male.addClass("is-invalid")
      male.removeClass("is-valid")
      fem.addClass("is-invalid")
      fem.removeClass("is-valid")
      other.addClass("is-invalid")
      other.removeClass("is-valid")
      $("#gender-feedback").addClass("d-block")
      return false
   }
   else {
      male.removeClass("is-invalid")
      male.addClass("is-valid")
      fem.removeClass("is-invalid")
      fem.addClass("is-valid")
      other.removeClass("is-invalid")
      other.addClass("is-valid")
      $("#gender-feedback").removeClass("d-block")
      return true
   }
}

function validaDeliveryFunction() {
   let delivery = $("#delivery")

   if(delivery.val() === '') {
      delivery.addClass("is-invalid")
      delivery.removeClass("is-valid")
      return false
   }
   else {
      delivery.removeClass("is-invalid")
      delivery.addClass("is-valid")
      return true
   }
}
