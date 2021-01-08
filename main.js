/* global console, alert, prompt,  */


/*
function myFunc() {

    "use strict";

    alert("My Function");

}
myFunc();
*/

/*
(function saywelcome() {

    "use strict";

    alert("Welcome To My Website");

})();
*/

/*
function convertUsdToRiyal(amount) {

    "use strict";

    var result = amount * 3.75;

    return alert(result);

};
convertUsdToRiyal(100)
*/

/*
function convertUsdToRiyal(amount) {

    "use strict";


    return alert(amount * 3.75);

};
convertUsdToRiyal(100)

*/
/*
function convertUsdToRiyal() {

    "use strict";

    var amount = document.getElementById("price").innerHTML; //100

    alert(amount * 3.75);

}
convertUsdToRiyal();
*/
/*
(function convertUsdToRiyal() {

    "use strict";

    var amount = document.getElementById("price").innerHTML; //100

    alert(amount * 3.75);

})
();
*/

/*
function convertUsdToRiyal() {

    "use strict";

    var amount = document.getElementById("dollar").value;

    console.log(amount);
}
*/

function convertUsdToRiyal() {

    "use strict";

    var amount = document.getElementById("dollar").value,

    result = amount * 3.75; // 100 * 3.75 = 375

    document.getElementById("massage").innerHTML = 
    
    amount + " Dollar Is Worth " + result + " Riyal";
}


