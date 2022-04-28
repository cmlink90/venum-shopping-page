// The purpose of this javascript file is to establish function to calculate the total amount due in the Venom Fight Shop


//let sumAmount = ();
 //sumAmount is calculated by adding price of all added items

// below is function to add the items to the shopping cart element using Add to Cart buttons on the page

function addToCart(){
    let div = document.querySelector('.shopping-cart');
    div.innerHTML += '<tr><td> Snake Shorts</td><td>50.00</td></tr>'; 
};

function addToCart1(){
    let div = document.querySelector('.shopping-cart'); 
    div.innerHTML += '<tr id="dragon"><td> Dragon Shorts</td><td>50.00</td><td></td></tr>';
 };

 function addToCart2(){
     let div = document.querySelector('.shopping-cart');
     div.innerHTML += '<tr><td> Dia de Los Meurtos Shorts</td><td>50.00</td></tr>';
 };

 function addToCart3(){
    let div = document.querySelector('.shopping-cart');
    div.innerHTML += '<tr><td> Spartan Shorts</td><td>50.00</td></tr>';
};

function addToCart4(){
    let div = document.querySelector('.shopping-cart');
    div.innerHTML += '<tr><td> Beast Shorts</td><td>50.00</td></tr>';
};

function addToCart5(){
    let div = document.querySelector('.shopping-cart');
    div.innerHTML += '<tr><td> Viking Shorts </td><td>50.00</td></tr>';
};

function addToCart6(){
    let div = document.querySelector('.shopping-cart');
    div.innerHTML += '<tr><td> Viking Rash Guard</td><td>50.00</td></tr>';
};

function addToCart7(){
    let div = document.querySelector('.shopping-cart');
    div.innerHTML += '<tr><td> Sparring Kit</td><td>50.00</td></tr>';
};

function addToCart8(){
    let div = document.querySelector('.shopping-cart');
    div.innerHTML += '<tr><td> MMA gloves</td><td>50.00</td></tr>';
};
//below is the function to calculate the sumAmount from items added to the cart

//function clear(){
//    document.getElementById('dragon');
//    removeChild(dragon);
//};

//function sumAmount(){
//   let element = document.getElementById('.shopping-cart');
//   sumAmount = value;
//}


//below is the function to calculate total including tax from added items when check out button is pushed
//let taxRate = 0.05;

//let cartCalculator = function(sumAmount) {

    //take sum amount, multiplu by tax rate

  //taxAmount = (sumAmount * taxRate);

    //add taxAmount to sumAmount = totalAmount

  // totalAmount = (sumAmount + taxAmount);

  //  console.log("Your total cost for your fight gear, including 5% tax, is $", totalAmount);

    
//}

//cartCalculator(150.00);

function checkOut(){
    let div = document.querySelector('.check-out-total');
    div.innerHTML = '<p><strong>Your total cost for your fight gear, including 5% tax, is $ </strong></p>';

};