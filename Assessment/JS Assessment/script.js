let sub = () => {
  // first name
  if (document.frm.fname.value == "") {
    alert("Please Enter First Name");
    document.frm.fname.focus();
    return false;
  }

  // last name
  if (document.frm.lname.value == "") {
    alert("Please Enter Last Name");
    document.frm.lname.focus();
    return false;
  }

  // emial
  if (document.frm.email.value == "") {
    alert("Please Enter Email");
    document.frm.email.focus();
    return false;
  }

  let e =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!e.test(document.frm.email.value)) {
    alert("Please enter a valid email Address");
    document.frm.email.focus();
    return false;
  }

  // mobile number
  if (document.frm.number.value == "") {
    alert("Please Enter Mobile Number");
    document.frm.number.focus();
    return false;
  }

  if (isNaN(document.frm.number.value)) {
    alert("Enter Digit in Mobile Number");
    document.frm.number.focus();
    return false;
  }

  // DOB
  if (document.frm.dob.value == "") {
    alert("Please Enter Date of Birth");
    document.frm.dob.focus();
    return false;
  }

  // city
  if (document.frm.city.value == "") {
    alert("Please Enter City");
    document.frm.city.focus();
    return false;
  }

  // area pin
  if (document.frm.pin.value == "") {
    alert("Please Enter Area Pin");
    document.frm.pin.focus();
    return false;
  }

  // state
  if (document.frm.state.value == "") {
    alert("Please Enter State");
    document.frm.state.focus();
    return false;
  }

  // password
  if (document.frm.password.value == "") {
    alert("Please Enter Password");
    document.frm.password.focus();
    return false;
  }
};
