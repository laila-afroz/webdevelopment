let basicRoomNumber = 1;
let proRoomNumber = 1 ; 


function basicMinusFunction(){
    let previousBasicount = document.getElementById('basicPrice').innerHTML;
    previousBasicount = Number(previousBasicount.substring(1));
    previousBasicount = previousBasicount - 199;
    basicRoomNumber -= basicRoomNumber;
    if (previousBasicount < 0)  return '$'+'0';
    else return '$' + previousBasicount ;
    
}

function basicPlusFunction(){
    let previousBasicount = document.getElementById('basicPrice').innerHTML;
    previousBasicount = Number(previousBasicount.substring(1));
    previousBasicount = previousBasicount + 249;
    basicRoomNumber += basicRoomNumber;
    return '$' + previousBasicount ;
}


function proMinusFunction(){
    let previousProcount = document.getElementById('proPrice').innerHTML;
    previousProcount = Number(previousProcount.substring(1));
    previousProcount = previousProcount - 249;
    proRoomNumber -= proRoomNumber;
    if (previousProcount < 0)  return '$'+'0';
    else return '$' + previousProcount ;
    
}



function proPlusFunction(){
    let previousProcount = document.getElementById('proPrice').innerHTML;
    previousProcount = Number(previousProcount.substring(1));
    previousProcount = previousProcount + 249;
    proRoomNumber += proRoomNumber;
    if (previousProcount < 0)  return '$'+'0';
    else return '$' + previousProcount ;
}

function thankYouBasicFunction(){
    document.getElementById('thankYouBasic').style.visibility = 'visible';
    return 'thank you for choosing ' + basicRoomNumber + ' room';
}


function thankYouProFunction(){
    document.getElementById('thankYouPro').style.visibility = 'visible';
    return 'thank you for choosing ' + proRoomNumber + ' room';
}

function checkInputValidity(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    if (name != null && email !='' && message!='' ) {
        alert('Form submitted successfully!');
    }else{
        alert('Information missing');

    }
}
