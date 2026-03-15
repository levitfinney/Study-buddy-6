let mode="student"

/* MODE SYSTEM */

function setMode(newMode){

if(newMode==="teacher"){

let pass=prompt("Teacher password:")

if(pass!=="teacher"){
alert("Incorrect password")
return
}

}

mode=newMode
updateMode()

}

function updateMode(){

let teacherTab=document.getElementById("teacherTab")

if(mode==="teacher"){
teacherTab.style.display="block"
}

else{
teacherTab.style.display="none"
}

}

/* TAB SYSTEM */

function showTab(id){

let tabs=document.querySelectorAll(".tab")

tabs.forEach(tab=>{
tab.style.display="none"
})

document.getElementById(id).style.display="block"

}

/* TUTOR */

function generateStudyGuide(){

let topic=document.getElementById("topicInput").value.trim()
let output=document.getElementById("tutorOutput")

if(topic.length<1){

output.innerHTML="Enter a topic."

return
}

output.innerHTML=`

<h3>${topic}</h3>

<b>Definition</b>
<p>${topic} is an important concept studied in school subjects.</p>

<b>Key Concepts</b>
<ul>
<li>Main idea of the topic</li>
<li>Important facts</li>
<li>Real world examples</li>
</ul>

<b>Why It Matters</b>
<p>Understanding ${topic} helps students learn the subject better.</p>

<b>Practice Questions</b>
<ol>
<li>What is ${topic}?</li>
<li>Why is it important?</li>
<li>Give an example.</li>
</ol>

`

addXP(10)

}

/* MATH */

function solveMath(){

let input=document.getElementById("mathInput").value
let output=document.getElementById("mathOutput")

try{

let result=nerdamer.solve(input)

output.innerHTML="Answer: "+result

addXP(5)

}

catch{

output.innerHTML="Invalid equation."

}

}

/* QUIZ */

function generateQuiz(){

let topic=document.getElementById("quizTopic").value

if(topic===""){
alert("Enter topic")
return
}

document.getElementById("quizArea").innerHTML=`

<h3>${topic} Quiz</h3>

<p>1. What is ${topic}?</p>
<input type="text" id="q1">

<p>2. Why is ${topic} important?</p>
<input type="text" id="q2">

<button onclick="submitQuiz()">Submit</button>

<div id="quizResult"></div>

`

}

function submitQuiz(){

document.getElementById("quizResult").innerHTML="Quiz submitted."

addXP(10)

}

/* TASKS */

function addTask(){

let task=document.getElementById("taskInput").value

if(task===""){
return
}

let card=document.createElement("div")

card.className="task"

card.innerHTML=`
${task}
<button onclick="this.parentElement.remove()">Delete</button>
`

document.getElementById("taskList").appendChild(card)

}

/* NOTES */

function copyTutor(){

let text=document.getElementById("tutorOutput").innerText

document.getElementById("noteBox").value+=text+"\n\n"

}

function copyNotes(){

let text=document.getElementById("noteBox").value

navigator.clipboard.writeText(text)

alert("Copied!")

}

/* XP */

function addXP(amount){

let xp=localStorage.getItem("xp")||0

xp=parseInt(xp)+amount

localStorage.setItem("xp",xp)

}

/* STARTUP */

document.addEventListener("DOMContentLoaded",function(){

showTab("home")

updateMode()

})
