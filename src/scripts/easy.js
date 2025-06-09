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

let point = 0;

function getRandomIdx(object) {
	let randomInt = Math.floor(Math.random() * object.length);
	return randomInt;
}

let prevIdx = -1;
let usedIndices = []

function generateQuestion(obj) {

	let randomInt;
	do {
		randomInt = getRandomIdx(obj);
	} while (usedIndices.includes(randomInt));

	usedIndices.push(randomInt);
	return obj[randomInt];
}

function generate_elements() {
	currentQuestion = generateQuestion(quizData);

	document.getElementById("question_id").innerText = currentQuestion.question;

	document.getElementById("btn1").innerText = currentQuestion.options[0];
	document.getElementById("btn2").innerText = currentQuestion.options[1];
	document.getElementById("btn3").innerText = currentQuestion.options[2];
	document.getElementById("btn4").innerText = currentQuestion.options[3];
}

//why doesnt vsc show suggestion?
//because it dosent know the type of the parameter so it cant suggest for which we use @type 

document.getElementById("div_id").addEventListener("click", (e) => {
	/**@type {HTMLButtonElement}*/
	let btn_value = e.target;

	if(["btn1", "btn2", "btn3", "btn4"].includes(btn_value.id)) {
		if (btn_value.innerText === currentQuestion.answer) {
			btn_value.style.background = "#708238";
			point++;
		} else {
			btn_value.style.background = "#A84448";
		}

		document.querySelector("span").innerText = point;
		document.getElementById("turnSpan").innerText = turn;

		setTimeout(() => {
			if (turn === 5) {
				document.getElementById("score").innerText = `Your Score is ${point}`;
				point = 0;
				turn = 0;
				usedIndices = []
			} else {
				turn++;
				generate_elements();
			}
			reset_color();
		}, 700);
	}
});



function reset_color() {
	document.getElementById("btn1").style.background = '#D4C9BE';
	document.getElementById("btn2").style.background = '#D4C9BE';
	document.getElementById("btn3").style.background = '#D4C9BE';
	document.getElementById("btn4").style.background = '#D4C9BE';
}
window.onload = ()=>{
	turn = 1
	generate_elements()
}


