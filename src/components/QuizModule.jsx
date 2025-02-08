import { useState, useEffect } from "react";
import "./QuizModule.css";

const questions = [
    { id: 1, question: "What is my favorite color?" },
    { id: 2, question: "What is my favorite food?" },
    { id: 3, question: "Where did we first meet?" },
    { id: 4, question: "What is my favorite movie?" },
    { id: 5, question: "What is my dream vacation destination?" },
    { id: 6, question: "What is my favorite hobby?" },
    { id: 7, question: "What is my birth month?" },
    { id: 8, question: "What is my favorite song?" },
    { id: 9, question: "What is my pet's name?" },
    { id: 10, question: "What do I love most about you?" },
  ];
  
  export default function QuizModule() {
    const [answers, setAnswers] = useState({});
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);
  
    const handleChange = (value) => {
      setAnswers({ ...answers, [questions[currentQuestion].id]: value });
    };
  
    const handleNext = () => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      }
    };
  
    const handleSubmit = () => {
      setQuizCompleted(true);
      document.body.style.overflow = "auto";
      const fileData = Object.entries(answers)
        .map(([key, value]) => `Q${key}: ${value}`)
        .join("\n");
      const blob = new Blob([fileData], { type: "text/plain" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "answers.txt";
      link.click();
    };
  
    return (
      <div className="quiz-container">
        {!quizCompleted ? (
          <>
            <h1 className="quiz-title">💖 Quiz About Me 💖</h1>
            <div className="quiz-form">
              <div className="quiz-question">
                <p>{questions[currentQuestion].question}</p>
                <input
                  type="text"
                  className="quiz-input"
                  onChange={(e) => handleChange(e.target.value)}
                />
              </div>
              {currentQuestion < questions.length - 1 ? (
                <button className="quiz-next" onClick={handleNext}>Save & Next</button>
              ) : (
                <button className="quiz-submit" onClick={handleSubmit}>Submit</button>
              )}
            </div>
          </>
        ) : (
          <p className="quiz-thank-you">Thank you for answering! 💕</p>
        )}
      </div>
    );
  }
  