const quizData = [
	{
		question: "What is the capital of France?",
		options: ["Paris", "Madrid", "Berlin", "Rome"],
		answer: "Paris"
	},
	{
		question: "Which planet is known as the Red Planet?",
		options: ["Earth", "Mars", "Jupiter", "Saturn"],
		answer: "Mars"
	},
	{
		question: "Who wrote the play 'Romeo and Juliet'?",
		options: ["William Shakespeare", "Leo Tolstoy", "Jane Austen", "Mark Twain"],
		answer: "William Shakespeare"
	},
	{
		question: "What is the largest mammal in the world?",
		options: ["Elephant", "Blue Whale", "Hippopotamus", "Giraffe"],
		answer: "Blue Whale"
	},
	{
		question: "Which country is known as the Land of the Rising Sun?",
		options: ["Japan", "China", "Thailand", "South Korea"],
		answer: "Japan"
	},
	{
		question: "What is the smallest prime number?",
		options: ["0", "1", "2", "3"],
		answer: "2"
	},
	{
		question: "Which element has the chemical symbol 'O'?",
		options: ["Oxygen", "Osmium", "Gold", "Silver"],
		answer: "Oxygen"
	},
	{
		question: "Which continent is the Sahara Desert located in?",
		options: ["Asia", "Africa", "Australia", "Europe"],
		answer: "Africa"
	},
	{
		question: "What is the boiling point of water at sea level?",
		options: ["90°C", "100°C", "110°C", "120°C"],
		answer: "100°C"
	},
	{
		question: "Who painted the Mona Lisa?",
		options: ["Vincent Van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
		answer: "Leonardo da Vinci"
	},
	{
		question: "Which ocean is the largest?",
		options: ["Atlantic", "Indian", "Arctic", "Pacific"],
		answer: "Pacific"
	},
	{
		question: "In which year did World War II end?",
		options: ["1945", "1939", "1918", "1950"],
		answer: "1945"
	},
	{
		question: "Which gas do plants use for photosynthesis?",
		options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
		answer: "Carbon Dioxide"
	},
	{
		question: "What is the longest river in the world?",
		options: ["Amazon", "Yangtze", "Nile", "Mississippi"],
		answer: "Nile"
	},
	{
		question: "Who invented the light bulb?",
		options: ["Albert Einstein", "Nikola Tesla", "Thomas Edison", "Isaac Newton"],
		answer: "Thomas Edison"
	},
	{
		question: "What is the national sport of Japan?",
		options: ["Karate", "Baseball", "Sumo Wrestling", "Judo"],
		answer: "Sumo Wrestling"
	},
	{
		question: "Which language has the most native speakers?",
		options: ["English", "Mandarin Chinese", "Hindi", "Spanish"],
		answer: "Mandarin Chinese"
	},
	{
		question: "Which metal is liquid at room temperature?",
		options: ["Iron", "Mercury", "Lead", "Copper"],
		answer: "Mercury"
	},
	{
		question: "How many continents are there on Earth?",
		options: ["5", "6", "7", "8"],
		answer: "7"
	},
	{
		question: "What is the hardest natural substance?",
		options: ["Steel", "Gold", "Diamond", "Granite"],
		answer: "Diamond"
	},
	{
		question: "What does the 'www' stand for in a website browser?",
		options: ["World Wide Web", "World Web Wide", "Web World Wide", "Web Wide World"],
		answer: "World Wide Web"
	},
	{
		question: "How many bones are there in the human body?",
		options: ["200", "206", "201", "210"],
		answer: "206"
	},
	{
		question: "Which country is the Great Pyramid of Giza located in?",
		options: ["Mexico", "Egypt", "India", "Iraq"],
		answer: "Egypt"
	},
	{
		question: "Who discovered penicillin?",
		options: ["Marie Curie", "Alexander Fleming", "Isaac Newton", "Louis Pasteur"],
		answer: "Alexander Fleming"
	},
	{
		question: "What is the tallest mountain in the world?",
		options: ["K2", "Mount Everest", "Kangchenjunga", "Makalu"],
		answer: "Mount Everest"
	},
	{
		question: "Which is the largest organ in the human body?",
		options: ["Liver", "Heart", "Skin", "Lungs"],
		answer: "Skin"
	},
	{
		question: "Which instrument has keys, pedals, and strings?",
		options: ["Piano", "Guitar", "Violin", "Drum"],
		answer: "Piano"
	},
	{
		question: "Which planet has the most moons?",
		options: ["Earth", "Jupiter", "Saturn", "Mars"],
		answer: "Saturn"
	},
	{
		question: "What is the main language spoken in Brazil?",
		options: ["Spanish", "Portuguese", "English", "French"],
		answer: "Portuguese"
	},
	{
		question: "Which bird is known for mimicking human speech?",
		options: ["Eagle", "Parrot", "Sparrow", "Owl"],
		answer: "Parrot"
	},
	{
		question: "Which vitamin is produced when a person is exposed to sunlight?",
		options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin B12"],
		answer: "Vitamin D"
	}
];

function getRandomIdx(arr){
    let size = arr.length;
    let randomIdx = Math.floor(Math.random() * size);
    return randomIdx;
}
let usedIndices = []
let point = 0;
let turn = 0;
let question_counter = 0;
let timer = 100;
let timer_show_garna = 25; 
let game_win = false;
function generateQuestion(arr) {

	let randomInt;
	do {
		randomInt = getRandomIdx(arr);
	} while (usedIndices.includes(randomInt));

	usedIndices.push(randomInt);
	return arr[randomInt];
}


let q = generateQuestion(quizData);
show_element(q);

function show_element(q){

    document.getElementById("question_id").innerText = q.question;
    document.getElementById("btn1").innerText = q.options[0];
    document.getElementById("btn2").innerText = q.options[1];
    document.getElementById("btn3").innerText = q.options[2];
    document.getElementById("btn4").innerText = q.options[3];
	
}
function setCountDown(){
  setInterval(()=>{
    timer -= 4;
    timer_show_garna--;
    document.getElementById("timer-countdown").style.width = `${timer}%`
    document.getElementById("timer").innerText = `${timer_show_garna}s`
	if(timer_show_garna <= 3){
		document.getElementById("timer").style.color = "red"

	}
	if(timer_show_garna < 0){
		game_win = false;
		localSet()
		reset_game()
		console.log("time sako")
		return
	}
  },1000)
}
setCountDown()





document.getElementById("div_id").addEventListener("click", (e) => {
    /**@type {HTMLButtonElement}*/
    let btn = e.target;

    if(["btn1", "btn2", "btn3", "btn4"].includes(btn.id)) {
		/**@type {HTMLObjectElement} */
		let btns = document.querySelectorAll('#btn1, #btn2, #btn3, #btn4');

		let wrongAns = Array.from(btns).filter(x => x.innerText !== q.answer);
		let correctAns = Array.from(btns).find(x => x.innerText === q.answer);

      	if(btn.innerText === q.answer){
			btn.style.background =  "#DCFCE7";
			btn.style.borderColor = "#4ADE80";
			btn.classList.add("btn_animation");
			correctAns.classList.add("btn_animation")
			btn.addEventListener('animationend',()=>{
				btn.classList.remove("btn_animation");
				correctAns.classList.remove('btn_animation')
			})

        	btn.classList.add('correct')
			wrongAns.forEach(element => {
				element.style.backgroundColor = "#f3f4f6";
				element.style.borderColor = "e5e7eb";
				element.style.color = "6b7280" 				
			});
			point++;
		}else{
			btn.style.background = "#FEE2E2";
			btn.style.borderColor = "#F87171";
			btn.classList.add('wrong');
			correctAns.classList.add("btn_animation");
			btn.classList.add('btn_animation')
			btn.addEventListener('animationend',()=>{
				btn.classList.remove("btn_animation");
				correctAns.classList.remove('btn_animation')
			})
			let filteredWrongAns = Array.from(wrongAns).filter(x => x != btn )
			filteredWrongAns.forEach(element => {
				element.style.backgroundColor = "#f3f4f6";
				element.style.borderColor = "e5e7eb";
				element.style.color = "6b7280" 				
			});
			correctAns.style.background =  "#DCFCE7";
			correctAns.style.borderColor = "#4ADE80";
			correctAns.classList.add('correct');
		}
    turn += 20;
    question_counter++;
    document.getElementById("progress-bar").style.width = `${turn}%`;
    document.getElementById("progress-percent").innerText = `${turn}% Complete`;
    document.getElementById("question-counter").innerText = `Question ${question_counter}/5`;
	document.getElementById("question-counter-1").innerText = `Question ${question_counter}/5`
    
    win_loss(btn, correctAns)


    }
})
document.getElementById('signUp').addEventListener('click',()=>{
	window.location.href = "../../src/htmls/signup.html";
})
function win_loss(btn, correctAns){
  setTimeout(()=>{
	console.log("we are inside set Time out")

		if(point === 5){
			game_win = true;
			console.log("point 5")
			localSet()
			reset_game()
			return;
		}
	
		if(turn === 100){
			localSet()
			reset_game()
			console.log('haryo 5 turn sako')
			return
	
		}
		console.log("q mathi")
		q = generateQuestion(quizData);
		show_element(q);
		reset_color()

	    btn.classList.remove('correct');
		btn.classList.remove('wrong');
		correctAns.classList.remove('correct')


  	
	},1000)
}

function localSet(){
	localStorage.setItem("points", point);
	localStorage.setItem("percentage", turn);
}


function reset_game(){
	usedIndices = [];
	point = 0;
	turn = 0;
	question_counter = 0;
	timer = 100;
	timer_show_garna = 25; 
	game_win = false;
  	window.location.href = "./../htmls/result.html"
}



function reset_color() {
	document.getElementById("btn1").style.background = "#ffffff";
  document.getElementById("btn1").style.borderColor = "#D1D5DB";

	document.getElementById("btn2").style.background = "#ffffff";
  document.getElementById("btn2").style.borderColor = "#D1D5DB";

	document.getElementById("btn3").style.background = "#ffffff";
  document.getElementById("btn3").style.borderColor = "#D1D5DB";

	document.getElementById("btn4").style.background = "#ffffff";
  document.getElementById("btn4").style.borderColor = "#D1D5DB";

}



