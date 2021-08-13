function formValid() {
  var name = document.orderReg.fname.value;
  var email = document.orderReg.email.value;
  var address = document.orderReg.address.value;
  var contact_number = document.orderReg.contact.value;
  var date = document.orderReg.ddate.value;
  var time = document.orderReg.dtime.value;

  if (name == "") {
    document.querySelector(".valid").innerHTML = "  !!!Please Enter Your Name!!!";
    return false;
  }
  if (!isNaN(name)) {
    document.querySelector(".valid").innerHTML = "  !!!Please Enter Valid Name!!!";
    return false;
  }
  if (contact_number == "") {
    document.querySelector(".valid").innerHTML = "  !!!Please Enter Your Contact Number!!!";
    return false;
  }
  if (isNaN(contact_number) || contact_number.length != 10) {
    document.querySelector(".valid").innerHTML = "  !!!Please Enter Valid Contact Number!!!";
    return false;
  }
  if (address == "") {
    document.querySelector(".valid").innerHTML = "  !!!Please Enter Your Address !!!";
    return false;
  }
  if (email == "") {
    document.querySelector(".valid").innerHTML = " !!!Please Enter Your Email Id!!!";
  }
  var dotpos = email.indexOf(".");
  var atpos = email.lastIndexOf("@");
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
    document.querySelector(".valid").innerHTML = " !!!Please Enter Valid Email Id!!!";
    return false;
  }

  if (date == "") {
    document.querySelector(".valid").innerHTML = " !!!Please Select Delivery Date!!!";
    return false;
  }

  if (time == "") {
    document.querySelector(".valid").innerHTML = " !!!Please Select Delivery Time!!!";
    return false;
  }

}
