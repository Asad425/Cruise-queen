

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
}