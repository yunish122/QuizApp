const mediumQuizData = [
  {
    question: "What is the smallest country in the world by land area?",
    options: ["Monaco", "Malta", "Vatican City", "San Marino"],
    answer: "Vatican City"
  },
  {
    question: "Which scientist developed the theory of general relativity?",
    options: ["Isaac Newton", "Galileo Galilei", "Nikola Tesla", "Albert Einstein"],
    answer: "Albert Einstein"
  },
  {
    question: "Which part of the cell contains the genetic material?",
    options: ["Cytoplasm", "Mitochondria", "Nucleus", "Ribosome"],
    answer: "Nucleus"
  },
  {
    question: "Which Greek philosopher taught Alexander the Great?",
    options: ["Plato", "Aristotle", "Socrates", "Pythagoras"],
    answer: "Aristotle"
  },
  {
    question: "In what year did the Berlin Wall fall?",
    options: ["1987", "1989", "1991", "1993"],
    answer: "1989"
  },
  {
    question: "What is the chemical formula for table salt?",
    options: ["NaCl", "KCl", "H2O", "CO2"],
    answer: "NaCl"
  },
  {
    question: "Who was the first woman to win a Nobel Prize?",
    options: ["Marie Curie", "Rosalind Franklin", "Ada Lovelace", "Jane Goodall"],
    answer: "Marie Curie"
  },
  {
    question: "What is the second largest planet in the solar system?",
    options: ["Saturn", "Jupiter", "Uranus", "Neptune"],
    answer: "Saturn"
  },
  {
    question: "Which Shakespeare play features the characters Rosencrantz and Guildenstern?",
    options: ["Othello", "Hamlet", "King Lear", "Macbeth"],
    answer: "Hamlet"
  },
  {
    question: "What is the term for animals that eat both plants and meat?",
    options: ["Carnivores", "Herbivores", "Omnivores", "Insectivores"],
    answer: "Omnivores"
  },
  {
    question: "Which war was fought between the North and South regions in the United States?",
    options: ["Revolutionary War", "Vietnam War", "Civil War", "World War I"],
    answer: "Civil War"
  },
  {
    question: "Which number is represented by the Roman numeral 'L'?",
    options: ["10", "50", "100", "500"],
    answer: "50"
  },
  {
    question: "Who wrote the novel *1984*?",
    options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.D. Salinger"],
    answer: "George Orwell"
  },
  {
    question: "Which organelle is known as the 'powerhouse of the cell'?",
    options: ["Ribosome", "Nucleus", "Mitochondria", "Golgi apparatus"],
    answer: "Mitochondria"
  },
  {
    question: "What is the longest bone in the human body?",
    options: ["Tibia", "Femur", "Humerus", "Fibula"],
    answer: "Femur"
  },
  {
    question: "What is the currency of South Korea?",
    options: ["Won", "Yen", "Ruble", "Ringgit"],
    answer: "Won"
  },
  {
    question: "Which famous artist is known for the mural 'Guernica'?",
    options: ["Picasso", "Dali", "Monet", "Matisse"],
    answer: "Picasso"
  },
  {
    question: "In computing, what does 'CPU' stand for?",
    options: ["Central Power Unit", "Computer Processing Unit", "Central Processing Unit", "Control Processing Unit"],
    answer: "Central Processing Unit"
  },
  {
    question: "Which mountain range separates Europe and Asia?",
    options: ["Andes", "Rockies", "Ural", "Alps"],
    answer: "Ural"
  },
  {
    question: "What is the name of the process by which plants lose water vapor through their leaves?",
    options: ["Photosynthesis", "Respiration", "Transpiration", "Fermentation"],
    answer: "Transpiration"
  },
  {
    question: "Which empire built Machu Picchu?",
    options: ["Aztec", "Inca", "Mayan", "Spanish"],
    answer: "Inca"
  },
  {
    question: "What is the name of the largest moon of Saturn?",
    options: ["Titan", "Europa", "Ganymede", "Callisto"],
    answer: "Titan"
  },
  {
    question: "Which gas is most abundant in Earth’s atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: "Nitrogen"
  },
  {
    question: "In music, how many semitones are there in an octave?",
    options: ["6", "8", "10", "12"],
    answer: "12"
  },
  {
    question: "Which blood type is known as the universal donor?",
    options: ["A", "B", "O-", "AB+"],
    answer: "O-"
  },
  {
    question: "Which desert is the largest in the world (excluding polar deserts)?",
    options: ["Gobi", "Sahara", "Kalahari", "Arabian"],
    answer: "Sahara"
  },
  {
    question: "Which continent has the most countries?",
    options: ["Asia", "Africa", "Europe", "South America"],
    answer: "Africa"
  },
  {
    question: "Which explorer is credited with circumnavigating the globe?",
    options: ["Marco Polo", "Christopher Columbus", "Ferdinand Magellan", "Vasco da Gama"],
    answer: "Ferdinand Magellan"
  },
  {
    question: "Which blood cells help fight infection?",
    options: ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
    answer: "White blood cells"
  },
  {
    question: "Which layer of Earth's atmosphere contains the ozone layer?",
    options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
    answer: "Stratosphere"
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

function generateQuestion(arr) {

	let randomInt;
	do {
		randomInt = getRandomIdx(arr);
	} while (usedIndices.includes(randomInt));

	usedIndices.push(randomInt);
	return arr[randomInt];
}


let q = generateQuestion(mediumQuizData);
show_element(q);
function show_element(q){

    document.getElementById("question_id").innerText = q.question;
    document.getElementById("btn1").innerText = q.options[0];
    document.getElementById("btn2").innerText = q.options[1];
    document.getElementById("btn3").innerText = q.options[2];
    document.getElementById("btn4").innerText = q.options[3];
	
}


document.getElementById("div_id").addEventListener("click", (e) => {
    /**@type {HTMLButtonElement}*/
    let btn = e.target;

    if(["btn1", "btn2", "btn3", "btn4"].includes(btn.id)) {
		/**@type {HTMLObjectElement} */
		
        if(btn.innerText === q.answer){
			console.log("milyo")
			btn.style.background = "#708238";
			point++
		}else{
			console.log("milena")
			btn.style.background = "#A84448";
			
		}
		turn++;

		document.querySelector('span').innerText = point;
		document.getElementById("turnSpan").innerText = turn;

		setTimeout(() =>{
			if(turn == 5){
				document.querySelector('span').innerText = `Your Score is ${point}!!`;
				point = 0;
				turn = 0
				usedIndices = []
			}else{
				q = generateQuestion(mediumQuizData)
				show_element(q);
				reset_color();
			}
		},500);

    }
})

function reset_color() {
	document.getElementById("btn1").style.background = '#D4C9BE';
	document.getElementById("btn2").style.background = '#D4C9BE';
	document.getElementById("btn3").style.background = '#D4C9BE';
	document.getElementById("btn4").style.background = '#D4C9BE';
}
