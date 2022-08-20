import { useState, useEffect } from "react";
import "./App.css";
import Intro from "./Components/Intro";
import Questions from "./Components/Questions";
import CheckAnswer from "./Components/CheckAnswer";

function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [quizData, setQuizData] = useState([]);
  const [bG, setBg] = useState("");

  function handleClick() {
    setIsStarted((prevIsStarted) => !prevIsStarted);
  }

  useEffect(() => {
    async function getData() {
      let response = await fetch(
        "https://opentdb.com/api.php?amount=15&category=9&difficulty=medium&type=multiple"
      );
      let data = await response.json();
      setQuizData(data.results);
    }

    getData();
  }, []);

  const quizElements = quizData.map((quiz, index) => {
    return (
      <Questions
        question={quiz.question}
        correctAnswer={quiz.correct_answer}
        inCorrectAnswers={quiz.incorrect_answers}
        handleBg={handleBg}
        bg={bG}
        key={index + 1}
      />
    );
  });

  function handleBg(event) {
    setBg((prevBg) => {
      return prevBg === "" ? "lightgreen" : "";
    });
    console.log(event);
    // e.target.style.backgroundColor = bg
  }

  return (
    <div>
      {isStarted === false ? (
        <Intro handleClick={handleClick} />
      ) : (
        <div className="questions-container">{quizElements}</div>
      )}
      {isStarted && <CheckAnswer />}
    </div>
  );
}

export default App;
