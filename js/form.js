function checkForm()
{
 var error=false; //to znaczy, że danych nie brakuje
 var errorText=""; //komunikat z błędem
 var contactImie = document.getElementById("contactImie");
 var contactNazwisko = document.getElementById("contactNazwisko");
 var contactInfo = document.getElementById("contactInfo");
 var contactEmail = document.getElementById("contactEmail");
 contactImie.className="form-control is-valid";
 contactNazwisko.className="form-control is-valid";
 contactInfo.className="form-control is-valid";
 contactEmail.className="form-control is-valid";
 if (contactImie.value == "")
 {
   document.getElementById("errorImie").innerHTML = "Musisz wpisac Imie! ";
   contactImie.className="form-control is-invalid";
  error=true;

  }
  if (contactNazwisko.value == "")
  {
    document.getElementById("errorNazwisko").innerHTML = "Musisz wpisać nazwisko ";
    contactNazwisko.className="form-control is-invalid";
   error=true;
   }
   if (contactInfo.value == "")
   {
     document.getElementById("errorInfo").innerHTML = "Musisz wpisać Informacje";
     contactInfo.className="form-control is-invalid";
    error=true;
    }
    if (contactInfo.value.length >255)
    {
      document.getElementById("errorInfo").innerHTML = "mozesz wpisac tylko 255 znakow";
      contactInfo.className="form-control is-invalid";
     error=true;
     }
    if (contactEmail.value == "")
    {
      document.getElementById("errorEmail").innerHTML = "Musisz wpisac adres Email";
     error=true;
     contactEmail.className="form-control is-invalid";
     }else
     {
       var email = contactEmail.value;
       var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
       if(regex.test(email)==false)
       {
         document.getElementById("errorEmail").innerHTML = "Bledny Email";
         error=true;
         contactEmail.className="form-control is-invalid";
        }
        }
 if (!error) return true;
 else
 {
  return false;
 }
}
function sprawdz_imie()
{
  var contactImie = document.getElementById("contactImie");
  if (contactImie.value == "")
  {
    document.getElementById("errorImie").innerHTML = "Musisz wpisac Imie! ";
    contactImie.className="form-control is-invalid";
   }
   else {

      contactImie.className="form-control is-valid";
   }
}
function sprawdz_nazwisko()
{
  var contactNazwisko = document.getElementById("contactNazwisko");
  if (contactNazwisko.value == "")
  {
    document.getElementById("errorNazwisko").innerHTML = "Musisz wpisac Nazwisko! ";
    contactNazwisko.className="form-control is-invalid";
   }
   else {

      contactNazwisko.className="form-control is-valid";
   }
}
function sprawdz_info()
{
  var contactInfo = document.getElementById("contactInfo");
  if (contactInfo.value == "")
  {
    document.getElementById("errorInfo").innerHTML = "Musisz wpisac Info! ";
    contactInfo.className="form-control is-invalid";
   }
   else if(contactInfo.value.length>255)
   {
     document.getElementById("errorInfo").innerHTML = "mozesz wpisac tylko 255 znakow";
     contactInfo.className="form-control is-invalid";
   }
   else
   {
      contactInfo.className="form-control is-valid";
   }
}
function sprawdz_email()
{
  var contactEmail = document.getElementById("contactEmail");
  if (contactEmail.value == "")
  {
    document.getElementById("errorEmail").innerHTML = "Musisz wpisac adres Email";
   error=true;
   contactEmail.className="form-control is-invalid";
   }else
   {
     var email = contactEmail.value;
     var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
     if(regex.test(email)==false)
     {
       document.getElementById("errorEmail").innerHTML = "Bledny Email";
       error=true;
       contactEmail.className="form-control is-invalid";
      }
      else {
        contactEmail.className="form-control is-valid";
      }
      }
}
