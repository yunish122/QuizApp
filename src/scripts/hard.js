const hardQuizData = [
  {
    question: "Which particle is responsible for the Higgs field?",
    options: ["Photon", "Gluon", "Higgs boson", "Graviton"],
    answer: "Higgs boson"
  },
  {
    question: "What is the name of the mathematical object that describes the curvature of space-time in general relativity?",
    options: ["Tensor", "Matrix", "Manifold", "Vector"],
    answer: "Tensor"
  },
  {
    question: "Which treaty ended the Thirty Years' War in 1648?",
    options: ["Treaty of Versailles", "Treaty of Tordesillas", "Peace of Westphalia", "Treaty of Utrecht"],
    answer: "Peace of Westphalia"
  },
  {
    question: "Who composed the opera *Don Giovanni*?",
    options: ["Beethoven", "Mozart", "Verdi", "Wagner"],
    answer: "Mozart"
  },
  {
    question: "What is the term for the speed required to break free from a planet's gravitational pull?",
    options: ["Escape velocity", "Orbital speed", "Terminal velocity", "Freefall speed"],
    answer: "Escape velocity"
  },
  {
    question: "Which philosopher is famous for the quote 'I think, therefore I am'?",
    options: ["Immanuel Kant", "Plato", "Descartes", "Hegel"],
    answer: "Descartes"
  },
  {
    question: "In quantum mechanics, what principle states that position and momentum cannot both be precisely measured?",
    options: ["Uncertainty Principle", "Superposition Principle", "Pauli Exclusion Principle", "Wavefunction Collapse"],
    answer: "Uncertainty Principle"
  },
  {
    question: "What ancient city was buried by the eruption of Mount Vesuvius in 79 AD?",
    options: ["Pompeii", "Carthage", "Athens", "Delphi"],
    answer: "Pompeii"
  },
  {
    question: "Which famous work begins with the line 'Call me Ishmael'?",
    options: ["Moby-Dick", "Heart of Darkness", "The Old Man and the Sea", "The Odyssey"],
    answer: "Moby-Dick"
  },
  {
    question: "What is the most stable form of carbon at room temperature?",
    options: ["Diamond", "Graphite", "Carbon-14", "Fullerene"],
    answer: "Graphite"
  },
  {
    question: "Which Chinese dynasty was ruled by Emperor Qin Shi Huang?",
    options: ["Han", "Tang", "Qin", "Ming"],
    answer: "Qin"
  },
  {
    question: "What is the term for a word or phrase that is spelled the same backward and forward?",
    options: ["Palindrome", "Anagram", "Acronym", "Oxymoron"],
    answer: "Palindrome"
  },
  {
    question: "What is the study of the origin and structure of the universe called?",
    options: ["Astrophysics", "Astronomy", "Cosmology", "Exobiology"],
    answer: "Cosmology"
  },
  {
    question: "Who was the first African woman to win a Nobel Peace Prize?",
    options: ["Wangari Maathai", "Chimamanda Adichie", "Ellen Johnson Sirleaf", "Leymah Gbowee"],
    answer: "Wangari Maathai"
  },
  {
    question: "Which element has the highest melting point?",
    options: ["Carbon", "Tungsten", "Osmium", "Iridium"],
    answer: "Tungsten"
  },
  {
    question: "In which Shakespeare play is the character Iago a central figure?",
    options: ["Macbeth", "Othello", "Hamlet", "King Lear"],
    answer: "Othello"
  },
  {
    question: "Which famous painting was stolen from the Louvre in 1911?",
    options: ["Mona Lisa", "Starry Night", "The Scream", "Girl with a Pearl Earring"],
    answer: "Mona Lisa"
  },
  {
    question: "What is the scientific name for the human species?",
    options: ["Homo erectus", "Homo sapiens", "Homo habilis", "Australopithecus"],
    answer: "Homo sapiens"
  },
  {
    question: "Who is considered the founder of modern chemistry?",
    options: ["Marie Curie", "John Dalton", "Robert Boyle", "Antoine Lavoisier"],
    answer: "Antoine Lavoisier"
  },
  {
    question: "Which organ produces insulin?",
    options: ["Liver", "Pancreas", "Kidney", "Spleen"],
    answer: "Pancreas"
  },
  {
    question: "In what year did the French Revolution begin?",
    options: ["1789", "1776", "1799", "1804"],
    answer: "1789"
  },
  {
    question: "What is the name for a device that converts AC to DC?",
    options: ["Rectifier", "Transformer", "Converter", "Oscillator"],
    answer: "Rectifier"
  },
  {
    question: "Which novel is set in the dystopian society of Gilead?",
    options: ["Brave New World", "The Handmaid's Tale", "Fahrenheit 451", "Never Let Me Go"],
    answer: "The Handmaid's Tale"
  },
  {
    question: "What is the main language spoken in Ethiopia?",
    options: ["Swahili", "Amharic", "Tigrinya", "Somali"],
    answer: "Amharic"
  },
  {
    question: "What is the highest civilian award in the United States?",
    options: ["Presidential Medal of Freedom", "Congressional Gold Medal", "Medal of Honor", "National Humanities Medal"],
    answer: "Presidential Medal of Freedom"
  },
  {
    question: "Which scientist is known for the uncertainty principle?",
    options: ["Werner Heisenberg", "Niels Bohr", "Max Planck", "Erwin Schrödinger"],
    answer: "Werner Heisenberg"
  },
  {
    question: "Which Greek mathematician is considered the father of geometry?",
    options: ["Archimedes", "Euclid", "Pythagoras", "Aristotle"],
    answer: "Euclid"
  },
  {
    question: "Which African country has the most pyramids?",
    options: ["Egypt", "Sudan", "Ethiopia", "Libya"],
    answer: "Sudan"
  },
  {
    question: "Which philosopher wrote *Critique of Pure Reason*?",
    options: ["Kant", "Nietzsche", "Hume", "Descartes"],
    answer: "Kant"
  },
  {
    question: "Which is the longest river in Asia?",
    options: ["Yangtze", "Mekong", "Ganges", "Yellow River"],
    answer: "Yangtze"
  },
  {
    question: "What is the name of the deepest gorge in Nepal?",
    options: ["Kaligandaki Gorge", "Arun Gorge", "Marsyangdi Gorge", "Seti Gorge"],
    answer: "Kaligandaki Gorge"
  },
  {
    question: "Which ancient city in Nepal is known for its Malla-era palaces and is a UNESCO World Heritage Site?",
    options: ["Patan", "Bhaktapur", "Lumbini", "Pokhara"],
    answer: "Bhaktapur"
  },
  {
    question: "What is the name of Nepal’s only international airport before 2023?",
    options: ["Gautam Buddha Airport", "Pokhara International Airport", "Biratnagar Airport", "Tribhuvan International Airport"],
    answer: "Tribhuvan International Airport"
  },
  {
    question: "Which Nepali mathematician and astronomer is credited with developing the original Nepali calendar (Bikram Sambat)?",
    options: ["Rishi Gautam", "Rishikesh Shah", "Rishidev Acharya", "Rishi Panchami"],
    answer: "Rishidev Acharya"
  },
  {
    question: "Which lake in Nepal is considered the highest altitude freshwater lake system in the world?",
    options: ["Tilicho Lake", "Gosaikunda", "Rara Lake", "Phoksundo Lake"],
    answer: "Tilicho Lake"
  },
  {
    question: "Which former king of Nepal declared the country a secular state in 2006?",
    options: ["King Gyanendra", "King Mahendra", "King Tribhuvan", "King Birendra"],
    answer: "King Gyanendra"
  },
  {
    question: "What is the name of the high-altitude desert region in Nepal that was once part of the ancient Kingdom of Lo?",
    options: ["Upper Mustang", "Dolpo", "Manang", "Humla"],
    answer: "Upper Mustang"
  },
  {
    question: "Which river forms the eastern border between Nepal and India?",
    options: ["Koshi River", "Mechi River", "Kankai River", "Bagmati River"],
    answer: "Mechi River"
  },
  {
    question: "Which organization drafted the current Constitution of Nepal in 2015?",
    options: ["Rastriya Sabha", "Supreme Court", "Interim Legislature-Parliament", "Constituent Assembly"],
    answer: "Constituent Assembly"
  },
  {
    question: "Who was the first woman Chief Justice of Nepal?",
    options: ["Sushila Karki", "Sahana Pradhan", "Khil Raj Regmi", "Anuradha Koirala"],
    answer: "Sushila Karki"
  },
    {
    question: "Which traditional Nepali dish consists of spiced lentil soup served with rice and vegetables?",
    options: ["Sel Roti", "Yomari", "Dal Bhat", "Thukpa"],
    answer: "Dal Bhat"
  },
  {
    question: "What is the name of the indigenous ethnic group in Nepal known for their mountaineering skills?",
    options: ["Tamang", "Gurung", "Sherpa", "Magar"],
    answer: "Sherpa"
  },
  {
    question: "Which is the tallest mountain in Asia that is *not* part of the Himalayas?",
    options: ["Mount Damavand", "Mount Elbrus", "Mount Ararat", "Klyuchevskaya Sopka"],
    answer: "Mount Damavand"
  },
  {
    question: "Which Nepali festival celebrates the bond between brothers and sisters and is observed on the last day of Tihar?",
    options: ["Teej", "Maghe Sankranti", "Bhai Tika", "Janai Purnima"],
    answer: "Bhai Tika"
  },
  {
    question: "Which religion originated in India and spread across much of Asia, including Nepal?",
    options: ["Islam", "Buddhism", "Christianity", "Zoroastrianism"],
    answer: "Buddhism"
  },
  {
    question: "Which region in Nepal is famous for its apple orchards and cold desert-like terrain?",
    options: ["Jumla", "Rukum", "Mustang", "Taplejung"],
    answer: "Mustang"
  },
  {
    question: "Which country shares the longest border with Nepal?",
    options: ["India", "Bhutan", "China", "Bangladesh"],
    answer: "India"
  },
  {
    question: "What is the name of the ancient palace square in Patan known for its Newar architecture?",
    options: ["Patan Durbar Square", "Hanuman Dhoka", "Bhaktapur Durbar Square", "Kumari Ghar"],
    answer: "Patan Durbar Square"
  },
  {
    question: "Which Nepali fermented leafy green vegetable is commonly used in dishes like Gundruk ko jhol?",
    options: ["Gundruk", "Kinema", "Sukuti", "Yomari"],
    answer: "Gundruk"
  },
  {
    question: "Which Asian country is known as the 'Land of the Rising Sun'?",
    options: ["South Korea", "Thailand", "Japan", "Vietnam"],
    answer: "Japan"
  },
  {
    question: "Which major river originates in the Himalayas and is considered sacred in Hinduism?",
    options: ["Koshi", "Ganga", "Yamuna", "Karnali"],
    answer: "Ganga"
  },
  {
    question: "Which ancient trade route passed through Nepal, connecting Tibet with India?",
    options: ["Silk Road", "Salt Route", "Spice Route", "Tea-Horse Road"],
    answer: "Salt Route"
  },
  {
    question: "Which city is known as the cultural capital of Nepal?",
    options: ["Kathmandu", "Pokhara", "Patan", "Bhaktapur"],
    answer: "Bhaktapur"
  },
  {
    question: "Which mountain in Nepal is considered sacred and is forbidden to be climbed?",
    options: ["Mount Annapurna", "Mount Kanchenjunga", "Mount Machapuchare", "Mount Dhaulagiri"],
    answer: "Mount Machapuchare"
  },
  {
    question: "Which is the only South Asian country that was never colonized by a European power?",
    options: ["Nepal", "Sri Lanka", "Bhutan", "Afghanistan"],
    answer: "Nepal"
  },
   {
    question: "Which element is a liquid at room temperature along with mercury?",
    options: ["Bromine", "Chlorine", "Iodine", "Cesium"],
    answer: "Bromine"
  },
  {
    question: "What is the term for the hypothetical substance once thought to fill all space and carry light waves?",
    options: ["Plasma", "Ether", "Dark matter", "Quintessence"],
    answer: "Ether"
  },
  {
    question: "Who developed the general theory of relativity?",
    options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
    answer: "Albert Einstein"
  },
  {
    question: "Which ancient civilization developed cuneiform writing?",
    options: ["Egyptians", "Sumerians", "Persians", "Hittites"],
    answer: "Sumerians"
  },
  {
    question: "What is the capital of Kazakhstan?",
    options: ["Almaty", "Astana", "Tashkent", "Bishkek"],
    answer: "Astana"
  },
  {
    question: "What is the name of the process by which plants lose water vapor through their leaves?",
    options: ["Photosynthesis", "Respiration", "Transpiration", "Osmosis"],
    answer: "Transpiration"
  },
  {
    question: "Which part of the human brain is responsible for regulating balance and coordination?",
    options: ["Cerebrum", "Medulla", "Hypothalamus", "Cerebellum"],
    answer: "Cerebellum"
  },
  {
    question: "Which book of the Bible is considered the oldest?",
    options: ["Genesis", "Exodus", "Job", "Psalms"],
    answer: "Job"
  },
  {
    question: "What is the term for a word that has the same pronunciation but different meanings?",
    options: ["Homonym", "Synonym", "Antonym", "Palindrome"],
    answer: "Homonym"
  },
  {
    question: "Which Renaissance artist painted the ceiling of the Sistine Chapel?",
    options: ["Raphael", "Leonardo da Vinci", "Donatello", "Michelangelo"],
    answer: "Michelangelo"
  },
  {
    question: "Who was the British Prime Minister during most of World War II?",
    options: ["Neville Chamberlain", "Winston Churchill", "Clement Attlee", "Anthony Eden"],
    answer: "Winston Churchill"
  },
  {
    question: "Which field of mathematics is concerned with the study of change and motion?",
    options: ["Geometry", "Algebra", "Calculus", "Topology"],
    answer: "Calculus"
  },
  {
    question: "Which molecule carries genetic information in living organisms?",
    options: ["RNA", "Protein", "DNA", "Enzyme"],
    answer: "DNA"
  },
  {
    question: "Which planet has the strongest magnetic field?",
    options: ["Earth", "Jupiter", "Saturn", "Neptune"],
    answer: "Jupiter"
  },
  {
    question: "Which 20th-century author wrote *One Hundred Years of Solitude*?",
    options: ["Gabriel García Márquez", "Jorge Luis Borges", "Mario Vargas Llosa", "Isabel Allende"],
    answer: "Gabriel García Márquez"
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


let q = generateQuestion(hardQuizData);
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
  },1000)
}
setCountDown()





document.getElementById("div_id").addEventListener("click", (e) => {
    /**@type {HTMLButtonElement}*/
    let btn = e.target;

    if(["btn1", "btn2", "btn3", "btn4"].includes(btn.id)) {
		/**@type {HTMLObjectElement} */
		
      	if(btn.innerText === q.answer){
			btn.style.background =  "#DCFCE7";
			btn.style.borderColor = "#4ADE80";
			point++;
		}else{
			btn.style.background = "#FEE2E2";
			btn.style.borderColor = "#F87171";
		}
    turn += 20;
    question_counter++;
    document.getElementById("progress-bar").style.width = `${turn}%`;
    document.getElementById("progress-percent").innerText = `${turn}% Complete`;
    document.getElementById("question-counter").innerText = `Question ${question_counter}/5`;

    
    win_loss()


    }
})

function win_loss(){
  setTimeout(()=>{
	console.log("we are inside set Time out")

		if(point === 5){
			game_win = true;
			console.log("point 5")
			localSet()
      reset_game()
			return;
		}
		if(timer_show_garna < 0){
			game_win = false;
			localSet()
			reset_game()
			console.log("time sako")
			return
		}if(turn === 100){
			localSet()
			reset_game()
			console.log('haryo 5 turn sako')
			return
	
		}
		console.log("q mathi")
		q = generateQuestion(hardQuizData);
		show_element(q);
		reset_color()

	
  	
	},1000)
}

function localSet(){
	localStorage.setItem("points", point);
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