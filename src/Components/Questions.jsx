import React from "react";
import blob1 from "../images/scrimba-blob1.png";


function Questions(props) {
  //   const correctAnswers = []
  //   correctAnswers.push(props.correctAnswer)
  const [wrongAns1, wrongAns2, wrongAns3] = props.inCorrectAnswers;
  //   let inCorrectAnswers = [...props.inCorrectAnswers]

  //   console.log('correct answers --> ' + " " + correctAnswers)
  //   console.log('Incorrect answers --> ' + " " + inCorrectAnswers)

  const styles = {
    backgroundColor: props.bg,
  };

  return (
      <div className="questions-wrapper">
          <img src={blob1} alt="pattern-1" className="blob" />
        <p>{props.question}</p>
        <div className="answer-container">
          <button
            className="answer-btn"
            onClick={(event) => props.handleBg(event)}
            style={styles}
          >
            {wrongAns1}
          </button>
          <button
            className="answer-btn"
            onClick={(event) => props.handleBg(event)}
          >
            {props.correctAnswer}
          </button>
          <button
            className="answer-btn"
            onClick={(event) => props.handleBg(event)}
          >
            {wrongAns2}
          </button>
          <button
            className="answer-btn"
            onClick={(event) => props.handleBg(event)}
          >
            {wrongAns3}
          </button>
        </div>
      </div>
  );
}

export default Questions;
