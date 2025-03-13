const Questions = [
    {
        q: "How many U.S. Military Branches are there?",
        a: [{text: "6", isCorrect: false},
            {text: "3", isCorrect: false},
            {text: "4", isCorrect: false},
            {text: "7", isCorrect: true},
           ]
    },
    {
        q: "What war did the U.S. Army take place that lasted 20 years?",
        a: [{text: "War of Afghanistan", isCorrect: true},
            {text: "Gulf War", isCorrect: false},
            {text: "Vietnam War", isCorrect: false},
            {text: "World War 2", isCorrect: false},
           ]
    },
    {
        q: "What is the most recent U.S. military branch?",
        a: [{text: "National Guard", isCorrect: false},
            {text: "Navy", isCorrect: false},
            {text: "Space Force", isCorrect: true},
            {text: "Marine Corps", isCorrect: false},
           ]
    },
    {
        q: "When was the navy founded?",
        a: [{text: "1775.", isCorrect: true},
            {text: "1839.", isCorrect: false},
            {text: "1774.", isCorrect: false},
            {text: "1932.", isCorrect: false},
           ]
    },
    {
        q: "What is the Department of Defense in charge of?",
        a: [{text: "making deals with foreing countries all over the world", isCorrect: false},
            {text: "providing the country with the best education there is", isCorrect: false},
            {text: "providing the military forces needed to deter war and protect the security of our country", isCorrect: true},
            {text: "The economy of the country and taxes", isCorrect: false},
           ]
    },
    {
        q: "What was the NAVY's biggest achivement?",
        a: [{text: "The invention of the nuclear bomb", isCorrect: false},
            {text: "Winning world war 2", isCorrect: false},
            {text: "The invention of firearms", isCorrect: false},
            {text: "The world's first nuclear powered vehicle", isCorrect: true},
           ]
    },
    {
        q: "When did the Space Force launch their Falcon Heavy Rocket?",
        a: [{text: "May 15, 2021", isCorrect: false},
            {text: "December 28, 2023", isCorrect: true},
            {text: "July 4, 2025", isCorrect: false},
            {text: "January 24, 2016", isCorrect: false},
           ]
    },
    {
        q: "What search and rescue mission perfomed is still going on after almost a decade?",
        a: [{text: "Copiago Mining Accident", isCorrect: false},
            {text: "Operation Jericho", isCorrect: false},
            {text: "Missing Flight MH370", isCorrect: true},
            {text: "Operation Jaque", isCorrect: false},
           ]
    },
]; 

let currQuestion = 0;
let score = 0;

function loadQues() 
{
    const question = document.getElementById("ques");
    const opt = document.getElementById("opt");

    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = "";

    for ( let i = 0; i < Questions[currQuestion].a.length; i++ )
    {
        const choicesDiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");

        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;

        choiceLabel.textContent = Questions[currQuestion].a[i].text;

        choicesDiv.appendChild(choice);
        choicesDiv.appendChild(choiceLabel);
        opt.appendChild(choicesDiv);
    }
}

loadQues();

function checkAns()
{
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

    if ( Questions[currQuestion].a[selectedAns].isCorrect  )
    {
        score++;
        console.log("Correct");
        nextQuestion();
    }
    else
    {
        nextQuestion();
    }
}

function loadScore() 
{
    const totalScore = document.getElementById("score");
    totalScore.textContent = `you scored ${score} out of ${Questions.length}`;
}

function nextQuestion() 
{
    if (  currQuestion < Questions.length - 1  )
    {
        currQuestion++;
        loadQues();
    }
    else
    {
        document.getElementById("ques").remove();
        document.getElementById("opt").remove();
        document.getElementById("btn").remove();
        loadScore();
    }
}