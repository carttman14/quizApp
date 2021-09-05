
const quizData=[
    {
        question:'What`s the capital of Poland?',
        a:'Prague',
        b:'Varsaw',
        c:'Amsterdam',
        d:'Kiev',
        correct:'b'
    },

       {
        question:'Who discovered America?',
        a:'Christopher Colombus',
        b:'Americo Vespucci',
        c:'Ferdinand Magallanes',
        d:'James Cook',
        correct:'a'
    },
       {
        question:'Which is the most populated country?',
        a:'India',
        b:'Japan',
        c:'China',
        d:'Brazil',
        correct:'c'
    },
       {
        question:'Who invented the phone?',
        a:'Elon Musk',
        b:'Tomas Alva Edinson',
        c:'Nikolaj Tesla',
        d:'Alexander Graham Bell',
        correct:'d'
    },
       {
        question:'Who wrote the popular novel -the divine comedy- ?',
        a:'Virgile',
        b:'William Shakespeare',
        c:'Allighieri Dante',
        d:'Miguel of Cervantes',
        correct:'c'
    },
       {
        question:'What`s the biggest lake in the world?',
        a:'Titicaca lake in Bolivia',
        b:'Michigan Lake in the USA',
        c:'Caspian Sea in Russia',
        d:'Victoria Lake in Kenia',
        correct:'c'
    },
       {
        question:'Which is the deadliest disease in humankind?',
        a:'Heart related disease',
        b:'Stroke related disease',
        c:'Kidney related disease',
        d:'Respiratory related disease',
        correct:'a'
    },
       {
        question:'Who is the president of France?',
        a:'Emmanuel Macron',
        b:'Nicholas Sarkozy',
        c:'Francois Mitterand',
        d:'Donald Trump',
        correct:'a'
    },
       {
        question:'What year was JavaScript launched?',
        a:'2021',
        b:'2016',
        c:'1956',
        d:'none of the above',
        correct:'d'
    },
     {
        question:'Which is the biggest country in the planet?',
        a:'Malta',
        b:'Brazil',
        c:'USA',
        d:'Russia',
        correct:'d'
    }
]

const quiz=document.getElementById('quiz');
const questionEl=document.getElementById('question')
const answerEls=document.querySelectorAll('.answer');
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn=document.getElementById('submitBtn');



let currentQuiz=0;
let score=0;



const loadQuiz=()=>{
    deselectAnswer()
    const currentQuizData=quizData[currentQuiz]

    questionEl.innerText=currentQuizData.question

    a_text.innerText=currentQuizData.a
    b_text.innerText=currentQuizData.b
    c_text.innerText=currentQuizData.c
    d_text.innerText=currentQuizData.d
    
}

const getSelected=()=>{
    

    let answer= undefined;

    answerEls.forEach(answerEl=>{
        if(answerEl.checked){
            answer= answerEl.id
            
        }
        
    });
    return answer;
}

const deselectAnswer=()=>{

     answerEls.forEach(answerEl=>{
        answerEl.checked=false;
        
    });


}


loadQuiz()

submitBtn.addEventListener('click',()=>{
    // check to see the answer
    const answer=getSelected();

    
    
    if(answer){   
        if(answer===quizData[currentQuiz].correct){
            score++;
        }

            
        currentQuiz++
        
        
    
        if(currentQuiz<quizData.length){
         loadQuiz()
    }else{
        //TODO show results
        if(score<5){
            quiz.innerHTML=`<h2 class='result'>You answered at ${score}/ ${quizData.length} questions.
            You can do it better</h2> </br> <button  onclick="location.reload()">Finish</button>`

        }else if(score>5 && score<10){
            quiz.innerHTML=`<h2 class='result'>You answered at ${score}/ ${quizData.length} questions.
            Not bad at all
            </h2> </br> <button  onclick="location.reload()">Finish</button>`
        }else if(score==quizData.length){
            quiz.innerHTML=`<h2 class='result'>You answered at ${score}/ ${quizData.length} questions.
            Excellent performance!
            </h2> </br> <button onclick="location.reload()">Finish</button>`
        }
    }

        }
    
   


    
  
})






