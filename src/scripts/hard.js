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
  }
];

function getRandomIdx(arr){
    return Math.floor(Math.random() * arr.length)
}
let point = 0;
let turn = 0;

let randomIdx;
let usedIndices = [];

function generateQuestion(arr){
    do{
        randomIdx = getRandomIdx(hardQuizData);
    }while(usedIndices.includes(randomIdx))
    usedIndices.push(randomIdx);

    return arr[randomIdx];
}

function show_elements(ques){

    document.getElementById("question_id").innerText = ques.question;

    document.getElementById("btn1").innerText = ques.options[0];
    document.getElementById("btn2").innerText = ques.options[1];
    document.getElementById("btn3").innerText = ques.options[2];
    document.getElementById("btn4").innerText = ques.options[3];
}

let currentQues = generateQuestion(hardQuizData);
show_elements(currentQues);
document.getElementById("id3").style.display = 'none';

document.getElementById("div_id").addEventListener('click', (e)=>{
    /**@type {HTMLButtonElement} */
    let btn = e.target
    if(["btn1", "btn2", "btn3", "btn4"].includes(btn.id)) {
        turn++;

        if(btn.innerText === currentQues.answer){
            point++

            btn.style.background = "#708238";
            document.querySelector("span").innerText = point;

        }else{
            btn.style.background = "#A84448";
        }
        document.getElementById("turnSpan").innerText=turn;

        setTimeout(()=>{
            if(turn === 5){
                document.getElementById("score2").innerText = `Your Score Is ${point}`
                point = 0;
                turn = 0;
                usedIndices = [];
                document.getElementById('id3').style.display = "flex";
                let play_again_div = document.getElementById("again2")
                play_again_div.addEventListener('click', (e)=>{
                  window.location = "./index.html";
                })
            }else{

                currentQues = generateQuestion(hardQuizData);
                show_elements(currentQues);
                resetColor();
            }            
        },500);

    }
})

function resetColor(){
	document.getElementById("btn1").style.background = '#D4C9BE';
	document.getElementById("btn2").style.background = '#D4C9BE';
	document.getElementById("btn3").style.background = '#D4C9BE';
	document.getElementById("btn4").style.background = '#D4C9BE';
}
