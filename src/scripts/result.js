function Ui_Update(){
    let points = parseInt(localStorage.getItem("points"))
    document.getElementById("points").innerText = points;
    document.getElementById("score_percentage").innerText = `${points*20}%`;
    if(points === 5){
        document.getElementById("feedback").textContent = "Bravo!!"
    }else if(points === 4){
        document.getElementById("feedback").textContent = "Perfect!"
    }else if(points === 3){
        document.getElementById("feedback").textContent = "Nice";
    }else if(points === 2){
        document.getElementById("feedback").textContent = "Meh"
    }else if(points === 1){
        document.getElementById("feedback").textContent = "Hahahaha"
    }else{
        document.getElementById("feedback").textContent = "May God Find Peace For You"
    }
}


let btn = document.getElementById("play_again");
btn.addEventListener("click", ()=>{
    window.location.href = "../../index.html";
})

window.addEventListener('load', ()=>{
    Ui_Update()
})



