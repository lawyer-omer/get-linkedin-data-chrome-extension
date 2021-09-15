var url = "https://api.airtable.com/v0/${YOUR_AIRTABLE_BASE_CODE}/Companies";

var xhr = new XMLHttpRequest();
xhr.open("POST", url);

xhr.setRequestHeader("Authorization", "Bearer ${YOUR_AIRTABLE_API_KEY}");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

var title = document.getElementsByTagName("title")[0].innerHTML;
   var data = `{
  "records": [
    {
      "fields": {
        "Name": "${title}",
        "LinkedIn": "${window.location.href}"
      }
    }
  ]
}`;

function consoleLoge () {
  window.onload = () => {
    const  button = document.createElement('button');
    button.id = "getDataButton";
    button.textContent = "Get Data";
    document.querySelector('#ember45').prepend(button);
    button.addEventListener("click", function() {
      var xhr = new XMLHttpRequest();
      var url = "https://api.airtable.com/v0/${YOUR_AIRTABLE_BASE_CODE}/Companies";
      xhr.open("POST", url);
      xhr.setRequestHeader("Authorization", "Bearer  ${YOUR_AIRTABLE_API_KEY}");
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
           console.log(xhr.status);
           console.log(xhr.responseText);
        }};
      xhr.send(data);
      }, false);
}};

consoleLoge()

