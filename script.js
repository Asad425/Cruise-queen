

function plusMinus(whichClass,whichOne){
    const quantity=parseInt(document.getElementById(whichClass+'-input').value);

    let newQuantity=quantity;
    if(whichOne=='+'){
         newQuantity=quantity+1;
    }
    else if(whichOne=='-' && quantity>0){
         newQuantity=quantity-1;
    }
    document.getElementById(whichClass+'-input').value=newQuantity;
    priceCalculator();
}

function priceCalculator(){
    const firstClassQuantity=getQuantity('firstClass');
    const economyClassQuantity=getQuantity('economy');

    const subTotal=(firstClassQuantity*150)+(economyClassQuantity*100);
    const tax=subTotal*0.1;
    const totalPrice=subTotal+tax;
    document.getElementById('subTotal').innerText='$'+totalPrice;
    document.getElementById('taxTotal').innerText='$'+tax;
    document.getElementById('totalPrice').innerText='$'+totalPrice;

}

function getQuantity(category){
    const quantity=parseInt(document.getElementById(category+'-input').value);
    return quantity;
}

    const bookNowBtn=document.getElementById('bookNow');
    bookNowBtn.addEventListener('click',function(){
     document.getElementById('mainSection').style.display='none';

        const greetingArea= document.getElementById('greeting-area');
        greetingArea.style.display='block';

        const flyingFrom=document.getElementById('flyingFrom-input').value;
        document.getElementById('setFlyingFrom').innerText=flyingFrom;

        const flyingTo=document.getElementById('flyingTo-input').value;
        document.getElementById('setFlyingTo').innerText=flyingTo;

        const departureTime=document.getElementById('departureTime').value;
        document.getElementById('setDeparture').innerText=departureTime;

        const returnDate=document.getElementById('returnTime').value;
        document.getElementById('setReturn').innerText=returnDate;


       

    });
