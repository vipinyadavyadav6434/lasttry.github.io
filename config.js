 //FORM
 $('#refreshs').click(function() {
     location.reload();
 });
 $(document).ready(function() {
     $("#business-cans").hide();
 });
 $('#refreshs').click(function() {
     location.reload();
 });

 function showCans() {
     var x = document.getElementById("business-business").value;
     console.log(x)
     if (x == "Yes") {
         $("#business-cans").show();
     } else {
         $("#business-cans").hide();
     }
 }
 $('#business-form').click(function() {
     var name = $('#business-name').val();
     var email = $('#business-email').val();
     var tel = $('#business-tel').val();
     var city = $('#business-city').val();
     var locality = $('#business-locality').val();
     var state = $('#business-state').val();
     var service = $('#business-service').val();
     var business = $('#business-business').val();
     var cans = $('#business-cans').val();

     const dataForm = {
         "name": name,
         "email": email,
         "mobileno": tel,
         "locality": locality,
         "city": city,
         "state": state,
         "service": service,
         "business": business,
         "cans": cans,
     }
     businessForm(dataForm);
     console.log(dataForm)
 });
 $('#submit-form').click(function() {
     var name = $('#form-name').val();
     var email = $('#form-email').val();
     var tel = $('#form-tel').val();
     var msg = $('#form-msg').val();
     var locality = $('#locality').val();
     var city = $('#form-city').val();
     var state = $('#form-state').val();

     const dataForm = {
         "name": name,
         "email": email,
         "mobileno": tel,
         "message": msg,
         "locality": locality,
         "city": city,
         "state": state,
     }

     sendForm(dataForm);

 });

 //SUBMIT FORM
 function sendForm(data) {
     if ((data.name === null) || (data.name === "") || (data.name === undefined)) {
         alert('Please enter a Name');
     } else {
         var namecheck = Validatename(data.name);
         if (namecheck === false) {
             alert("please enter Name correctly")
         }
         if ((data.email === null) || (data.email === "") || (data.email === undefined)) {
             alert('Please enter an Email');
         } else {
             var emailcheck = ValidateEmail(data.email);
             if (emailcheck === false) {
                 alert("please enter a valid Email")
             }
             if ((data.mobileno === null) || (data.mobileno === "") || (data.mobileno === undefined)) {
                 alert('Please enter a Phone Number');
             } else {
                 var phonecheck = Validatephone(data.mobileno);
                 if (phonecheck === false) {
                     alert("please enter a valid Phone Number")
                 }
                 if (phonecheck === true) {
                     $.ajax({
                         type: "POST",
                         url: "mail.php",
                         data: data,
                         success: function(responseText) {
                             $('#thanqmsg').modal({
                                 backdrop: "static"
                             });
                             //alert('success')
                             // $('#thanqmsg').modal({ backdrop : "static" });
                             //$('#thanqmsg').modal('show');
                         }

                     });
                 }
             }
         }
     }
 }

 function businessForm(data) {
     if ((data.name === null) || (data.name === "") || (data.name === undefined)) {
         alert('Please enter a Name');
     } else {
         var namecheck = Validatename(data.name);
         if (namecheck === false) {
             alert("please enter Name correctly")
         }
         if ((data.email === null) || (data.email === "") || (data.email === undefined)) {
             alert('Please enter an Email');
         } else {
             var emailcheck = ValidateEmail(data.email);
             if (emailcheck === false) {
                 alert("please enter a valid Email")
             }
             if ((data.mobileno === null) || (data.mobileno === "") || (data.mobileno === undefined)) {
                 alert('Please enter a Phone Number');
             } else {
                 var phonecheck = Validatephone(data.mobileno);
                 if (phonecheck === false) {
                     alert("please enter a valid Phone Number")
                 }
                 if (phonecheck === true) {
                     $.ajax({
                         type: "POST",
                         url: "mailBusiness.php",
                         data: data,
                         success: function(responseText) {
                             $('#thanqmsg').modal({
                                 backdrop: "static"
                             });
                             //alert('success')
                             // $('#thanqmsg').modal({ backdrop : "static" });
                             //$('#thanqmsg').modal('show');
                         }

                     });
                 }
             }
         }
     }
 }

 function Validatename(name) {
     var expr = /^([a-zA-Z]{3,20})$/;
     return expr.test(name);
 };
 $("#btnValidate").live("click", function() {
     if (!Validatename($("#txtName").val())) {
         return true
     } else {
         return false
     }
 });

 function ValidateEmail(email) {
     var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
     return expr.test(email);
 };
 $("#btnValidate").live("click", function() {
     if (!ValidateEmail($("#txtEmail").val())) {
         return true
     } else {
         return false
     }
 });

 function Validatephone(phone) {
     var expr = /^([0-9]{10})|(\([0-9]{3}\)\s+[0-9]{3}\-[0-9]{4})/;
     return expr.test(phone);
 };
 $("#btnValidate").live("click", function() {
     if (!Validatephone($("#txtPhone").val())) {
         return true
     } else {
         return false
     }
 });