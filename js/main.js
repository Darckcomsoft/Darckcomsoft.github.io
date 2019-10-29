var str = window.location.href;

if (getCookie("location") != null){
    if (str.includes("?l=BR") || getCookie("location").includes("BR")){
       print("O site esta em construcao, talvez voce tenha problema nos dispositivos celulares.");
       document.cookie = "location=BR; max-age=350";
    }else{
        print("Site is under construction, maybe on mobile devices have some problems. ");
       document.cookie = "location=none; max-age=350";
    }   
 }else{
    if (str.includes("?l=BR")){
        print("O site esta em construcao, talvez voce tenha problema nos dispositivos celulares.");
        document.cookie = "location=BR; max-age=350";
     }else{
        print("Site is under construction, maybe on mobile devices have some problems. ");
        document.cookie = "location=none; max-age=350";
     }   
 }

function getCookie(name) {
    // Split cookie string and get all individual name=value pairs in an array
    var cookieArr = document.cookie.split(";");
    
    // Loop through the array elements
    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        
        /* Removing whitespace at the beginning of the cookie name
        and compare it with the given string */
        if(name == cookiePair[0].trim()) {
            // Decode the cookie value and return
            return decodeURIComponent(cookiePair[1]);
        }
    }
    
    // Return null if not found
    return null;
}