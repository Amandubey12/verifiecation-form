function aman(){
    if(document.from.irst.value==""){
        alert("Please enter your First name! ");
        document.from.irst.focus();
       return false;
   }
  
   if(document.from.ast.value==""){
       alert("please enter your Last name !");
       document.from.ast.focus();
       return false;
   }
   if(document.from.birth.value==""){
      alert("please enter your Date of Birth! !");
      document.from.birth.focus();
      return false;
  }
  if(document.from.phone.value==""|| document.from.phone.value.length  !=10){
    alert("please enter atleast  10 digits  mobile number !");
    document.from.phone.focus();
    return false;
}
if(document.from.email.value==""){
    alert("enter Email!");
    document.from.email.focus();
    return false;

}
if(document.from.fax.value==""){
    alert("please enter your fax number !");
    document.from.fax.focus();
    return false;
}
if(document.from.exp.value==""){
    alert("please enter your graduation term and year!");
    document.from.exp.focus();
    return false;
}
if(document.from.term.value==""){
    alert("please enter terms to be verified !");
    document.from.term.focus();
    return false;
}
if(document.from.sent.value==""){
    alert("please  seclect  !");
    
    return false;
}
if(document.from.st.value==""){
    alert("Please enter your First name! ");
    document.from.st.focus();
   return false;
}

if(document.from.lat.value==""){
   alert("please enter your Last name !");
   document.from.lat.focus();
   return false;
}
if(document.from.area.value==""){
    alert("please enter Note or Comment to recipient !");
    document.from.area.focus();
    return false;
}
if(document.from.pro.value==""){
    alert("please enter Provide street address or PO box of recipien !");
    document.from.pro.focus();
    return false;
}


alert("  your form is summited");
return true;
}