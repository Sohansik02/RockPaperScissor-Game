document.querySelectorAll("button")[0].addEventListener("click",changetorock);
document.querySelectorAll("button")[1].addEventListener("click",changetopaper);
document.querySelectorAll("button")[2].addEventListener("click",changetoscissor);
var input=0;
function changetorock(){
    document.querySelectorAll("img")[0].setAttribute("src","images/stone.png");
    input=1;
    compmove();
}
function changetopaper(){
    document.querySelectorAll("img")[0].setAttribute("src","images/paper.png");
    input=2;
    compmove();
}
function changetoscissor(){
    document.querySelectorAll("img")[0].setAttribute("src","images/scissor.png");
    input=3;
    compmove();
}
function compmove(){
    var randomnumber=Math.random();
    randomnumber=randomnumber*3;
    randomnumber=Math.floor(randomnumber)+1;

    switch(randomnumber){
        case 1:
            document.querySelectorAll("img")[1].setAttribute("src","images/stone.png");
            break;
        case 2:
            document.querySelectorAll("img")[1].setAttribute("src","images/paper.png");
            break;
        case 3:
            document.querySelectorAll("img")[1].setAttribute("src","images/scissor.png");
            break;
    }
    giveoutput(input,randomnumber);
}

function giveoutput(num1,num2){
    var hd=document.querySelector("h1");
    //num1 you num2 -comp
    //1-stone
    //2-paper
    //3-scissor
    if(num1==num2){
        hd.innerHTML="Draw";
    }
    if(num1==1 && num2==2){
        hd.innerHTML="Computer is Winner";
    }
    if(num1==2 && num2==1){
        hd.innerHTML="You are Winner";
    }
    if(num1==1 && num2==3){
        hd.innerHTML="You are Winner";
    }
    if(num1==3 && num2==1){
        hd.innerHTML="Computer is Winner";
    }
    if(num1==3 && num2==2){
        hd.innerHTML="You are Winner";
    }
    if(num1==2 && num2==3){
        hd.innerHTML="Computer is Winner";
    }
}

