
let min = 0;
let max = 100;
let middle = Math.floor((min + max)/2)
let stage = 1;






function start(){


    document.getElementById("startText").classList.add("hideBlock")
    document.getElementById("startButton").classList.add("hideBlock")
    
    document.getElementById("question").classList.remove("hideBlock")
    document.getElementById("question").innerHTML = `Попытка ${stage} : ${middle}`

    document.getElementById("small").classList.remove("hideBlock");
    document.getElementById("bingo").classList.remove("hideBlock");
    document.getElementById("big").classList.remove("hideBlock");

}


function smallClick(){

    max = middle ;

    middle = Math.floor((min + max)/2)

    if (max == middle){
        middle -= 1;
    }

    checkGame();

}


function BigClick(){

    mix = middle ;

    middle = Math.floor((min + max)/2)

    if (min == middle){
        middle += 1;
    }

    checkGame();

}


function bingoClick() {

    max = middle;
    min = middle;


    document.getElementById("af").classList.remove("hideBlock");

    checkGame()

}


function checkGame(){

    if (min == max){

        document.getElementById("question").innerHTML = "Вы Загадали число " + min;
        
        document.getElementById("small").classList.remove("hideBlock");
        document.getElementById("bingo").classList.remove("hideBlock");
        document.getElementById("big").classList.remove("hideBlock");

        
        return;
    }

    stage += 1;
    if (stage == 8){
        document.getElementById("question").innerHTML = "читер бугага!"
    }
    document.getElementById("question").innerHTML = `Попытка ${stage}: ${middle}`    
    


}







