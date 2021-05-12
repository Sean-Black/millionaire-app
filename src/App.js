import React, { useState, useEffect, useMemo } from 'react';
import './app.css';
import Timer from './components/Timer';
import Trivia from './components/Trivia';

function App() {
const [questionNumber, setQuestionNumber] = useState(1);
const [username, setUserName] = useState(null);
const [timeOut, setTimeOut] = useState(false);
const [earned, setTEarned] = useState('£0');

 const data = [
    {
      id: 1,
      question: "The UK Prime Minister Boris Johnson Was Born In Which City?",
      answers: [
        {
          text: "London",
          correct: false,
        },
        {
          text: "New York",
          correct: true,
        },
        {
          text: "Paris",
          correct: false,
        },
        {
          text: "Sydney",
          correct: false,
        },
      ],
    },
		{
      id: 2,
      question: "Which scientific unit is named after an Italian nobleman?",
      answers: [
        {
          text: "Pascal",
          correct: false,
        },
        {
          text: "Ohm",
          correct: false,
        },
        {
          text: "Volt",
          correct: true,
        },
        {
          text: "Hertz",
          correct: false,
        },
      ],
		},
		{
      id: 3,
      question: "Which of these people was born the same year as Queen Elizabeth II?",
      answers: [
        {
          text: "Audrey Hepburn",
          correct: false,
        },
        {
          text: "Judy Garland",
          correct: false,
        },
        {
          text: "Marilyn Monroe",
          correct: true,
        },
        {
          text: "Bo Derek",
          correct: false,
        },
      ],
		},
		{
      id: 4,
      question: "For Which Premier League Football team Is Frank Lampard The Highest Goalscorer?",
      answers: [
        {
          text: "West Ham United",
          correct: false,
        },
        {
          text: "Arsenal",
          correct: false,
        },
        {
          text: "Totenham Hotspur",
          correct: false,
        },
        {
          text: "Chelsea",
          correct: true,
        },
      ],
		},
		{
      id: 5,
      question: "In Which US Tv Comedy Series did The Actor David Schwimmer Play the Character of Ross Geller?",
      answers: [
        {
          text: "Sex In The City",
          correct: false,
        },
        {
          text: "The Big Bang Theory",
          correct: false,
        },
        {
          text: "Friends",
          correct: true,
        },
        {
          text: "How I Met Your Mother",
          correct: false,
        },
      ],
		},
		{
      id: 6,
      question: "Who was the first man to travel into space twice??",
      answers: [
        {
          text: "Vladimir Titov",
          correct: false,
        },
        {
          text: "Michael Collins",
          correct: false,
        },
        {
          text: "Yuri Gagarin",
          correct: false,
        },
        {
          text: "Gus Grissom",
          correct: true,
        },
      ],
		},
		{
      id: 7,
      question: "In 1718, which pirate died in battle off the coast of what is now North Carolina?",
      answers: [
        {
          text: "Blackbeard",
          correct: true,
        },
        {
          text: "Calico Jack",
          correct: false,
        },
        {
          text: "Captain Kidd",
          correct: false,
        },
        {
          text: "Bartholemew Roberts",
          correct: false,
        },
      ],
		},
		{
      id: 8,
      question: "Which boxer was famous for striking the gong in the introduction to J. Arthur Rank films?",
      answers: [
        {
          text: " Freddie Mills",
          correct: false,
        },
        {
          text: "Don Cockell",
          correct: false,
        },
        {
          text: " Bombardier Billy Wells",
          correct: true,
        },
        {
          text: " Terry Spinks",
          correct: false,
        },
      ],
		},
		
	]


	
	 const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "£100" },
        { id: 2, amount: "£200" },
        { id: 3, amount: "£300" },
        { id: 4, amount: "£500" },
        { id: 5, amount: "£1.000" },
        { id: 6, amount: "£2.000" },
        { id: 7, amount: "£4.000" },
        { id: 8, amount: "£8.000" },
        { id: 9, amount: "£16.000" },
        { id: 10, amount: "£32.000" },
        { id: 11, amount: "£64.000" },
        { id: 12, amount: "£125.000" },
        { id: 13, amount: "£250.000" },
        { id: 14, amount: "£500.000" },
        { id: 15, amount: "£1.000.000" },
      ].reverse(),
    []
  );

	useEffect(() => {
    questionNumber >1 && setTEarned(moneyPyramid.find(m=> m.id === questionNumber - 1).amount)
	},[moneyPyramid, questionNumber])

  return (
    <div className="app">
    <div className="main">
      {timeOut ? (<h1 className='endText'>Congratulations you have won {earned} </h1> ) : (
				<>
			<div className="top">
				<div className="timer"><Timer setTimeOut={setTimeOut} questionNumber={questionNumber}/></div>
			</div>
			<div className="bottom">
         <Trivia data={data} setTimeOut={setTimeOut} questionNumber={questionNumber} setQuestionNumber={setQuestionNumber}/>
			</div>
			</>
			)}
		</div>
			

	
		
    <div className="pyramid">
			<ul className="moneyList">
		{moneyPyramid.map((m) => (
			<li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
				<span className="moneyListItemNumber">{m.id}</span>
				<span className="moneyListItemAmount">{m.amount}</span>
			</li>

		))}
			
			</ul>
		</div>
    </div>
  );
}

export default App;
