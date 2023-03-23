function nameError(){
    Toastify({
        text: "Enter Full Name",
        duration: 2000,
        newWindow: true,
        close: true,
        gravity: "top", 
        position: "center", 
        stopOnFocus: true, 
        onClick: function(){} 
      }).showToast();
      return;
    }
    function emailError(){
        Toastify({
            text: 'Use "admin@gmail.com"',
            duration: 2000,
            newWindow: true,
            close: true,
            gravity: "top", 
            position: "center",
            stopOnFocus: true,
  
            onClick: function(){}
          }).showToast();
          return;
        }
        function passwordError(){
            Toastify({
                text: 'Use "123456" as a Password',
                duration: 2000,
                newWindow: true,
                close: true,
                gravity: "top", 
                position: "center", 
                stopOnFocus: true, 
               
                onClick: function(){} // Callback after click
              }).showToast();
              return;
            }
            function Thankyou(){
                Toastify({
                    text: '',
                    duration: 3000,
                    newWindow: true,
                    close: true,
                    gravity: "top", 
                    position: "center", 
                    stopOnFocus: true,
                   
                    onClick: function(){} // Callback after click
                  }).showToast();
                  return;
                }
                function cityError(){
                    Toastify({
                        text: ' Enter Your City',
                        duration: 2000,
                        newWindow: true,
                        close: true,
                        gravity: "top", // `top` or `bottom`
                        position: "center", // `left`, `center` or `right`
                        stopOnFocus: true, // Prevents dismissing of toast on hover
                      
                        onClick: function(){} // Callback after click
                      }).showToast();
                      return;
                    }
                
function Login(){
    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("inputEmail").value;
        email = email.toLowerCase()
    let password = document.getElementById("inputPassword").value;
    if(!fullName || fullName.length < 3){
        nameError()
        return;
    }
    if(email !== "admin@gmail.com"){
        emailError()
        return;
    }
    if(password !== "123456"){
        passwordError()
        return;
    }
    window.location.href = 'home.html'
}


let cities = [ "Gujrat ", "Faisalabad", "Lahore", "Karachi", "Islamabad", , "Sheikhupura", "Kashmir"]



function PrintCity (){
    document.getElementById("Output").innerHTML = "";
    for(let i = 0; i < cities.length ; i++){
        let num = i + 1;
            document.getElementById("Output").innerHTML += num + ')' + cities[i] + '<br>' 
        }
    }

    // add city---
    function AddCity(){
        newCity = document.getElementById("input").value;
        
        
        if(!newCity || newCity.length < 3){
            cityError();
            return;
        }
       
            let cityFound = false;
            for (i = 0; i < cities.length; i++) {
                if (cities[i] === newCity) {
                    cityFound = true;
                    document.getElementById("Output").innerHTML = '<span style="color:white">"'  + newCity  + '"</span>' +  ' is already in  list'
                }
            }
        
            if (cityFound === false) {
                cities.push(newCity);
                document.getElementById("Output").innerHTML = '<span style="color:white">"' + newCity  + '"</span>' + ' has been successfully added into the list'
            }
        }
        document.getElementById("clear1").onclick = function(){
            document.getElementById("Output").innerHTML = ""
        }
        document.getElementById("clear").onclick = function(){
          document.getElementById("Output").innerHTML = ""
      }