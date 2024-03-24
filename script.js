const quizDB = [
    {question: "Q1: What is the full form of HTML?",
    a: "Hello To My Land",
    b: "Hey Text Markup Language",
    c: "Hyper Text Markeup Language",
    d: "Hyper Text Markup Language",
    ans: "ans4"
},
    {question: "Q2: What is the full form of CSS?",
    a: "Cascading Style Sheet",
    b: "Cascading Style Sheep",
    c: "Cartoon Style Sheet",
    d: "Cascading Super Sheet",
    ans: "ans1"
},
    {question: "Q3: What is the full form of HTTP?",
    a: "Hyper Text Transfer Product",
    b: "Hyper Text Test Product",
    c: "Hye Text Markeup Language",
    d: "Hyper Text Transfer Protocol",
    ans: "ans4"
},
    {question: "Q4: What is the full form of JS?",
    a: "JavaScript",
    b: "JavaSuper",
    c: "JustScript",
    d: "JordenShoes",
    ans: "ans1"
}

];

let questionCount = 0;
let score = 0;

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showscore = document.querySelector('#showscore')

const loadquestion = () =>{
    const questionList = quizDB[questionCount];
    question.innerHTML = questionList.question;
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
}

loadquestion();

const getCheckAnswer = () => {
    let answer;
    

    answers.forEach((CurAnsEle) => {
        if(CurAnsEle.checked){
            answer = CurAnsEle.id;
        }
    })
    return answer;
};

const deselectAll = () =>{
    answers.forEach((CurAnsEle) => CurAnsEle.checked=false);
};

submit.addEventListener('click', () => {
    const CheckedAnswer = getCheckAnswer();
    console.log(CheckedAnswer);

    if(CheckedAnswer == quizDB[questionCount].ans){
        score++;
    };
     questionCount++;

     deselectAll();
    if(questionCount<quizDB.length){
        loadquestion();
    } else{

        showscore.innerHTML = `
        <h3> you scored ${score}/${quizDB.length}  ✌️ </h3>
        <button class="btn"  onclick ="location.reload()"> Play Again </button> 
        `;
        showscore.classList.remove('scorearea');
    }
});