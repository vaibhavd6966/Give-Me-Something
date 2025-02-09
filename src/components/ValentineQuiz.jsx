import { useState } from 'react';
import './QuizModule.css';

const ValentineQuiz = () => {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const questions = [
    "What was your first impression of me?",
    "If we could go on a trip anywhere, where would you want to go?",
    "If you could describe me in three words, what would they be?",
    "What's your favorite memory of us together?",
    "When do you feel the most comfortable and safe with me?",
    "What’s one weird or funny habit I have that you find cute?",
    "If we ever had a big fight, what would you want me to remember?",
    "When did you first realize we had a strong connection?",
    "What’s one thing you’ve always wanted to tell me but never did?",
    "If we could pause time and stay in one moment forever, which one would you choose?"
  ];

  const handleStart = () => {
    setStarted(true);
  };

  const handleInputChange = (e) => {
    setAnswers({
      ...answers,
      [currentQuestion]: e.target.value
    });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleSubmit = () => {
    // Create content for the text file
    let fileContent = "Valentine's Quiz Answers\n\n";
    questions.forEach((question, index) => {
      fileContent += `Question ${index + 1}: ${question}\n`;
      fileContent += `Answer: ${answers[index]}\n\n`;
    });

    // Create a Blob containing the text content
    const blob = new Blob([fileContent], { type: 'text/plain' });
    
    // Create a URL for the Blob
    const url = URL.createObjectURL(blob);
    
    // Create a temporary anchor element to trigger the download
    const link = document.createElement('a');
    link.href = url;
    
    // Get current date for filename
    const date = new Date().toISOString().split('T')[0];
    link.download = `valentine_quiz_answers_${date}.txt`;
    
    // Append link to body, click it, and remove it
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up the URL object
    URL.revokeObjectURL(url);

    // Reset the quiz
    setStarted(false);
    setCurrentQuestion(0);
    setAnswers({});
  };

  if (!started) {
    return (
      <div className="quiz-container">
        <div className="quiz-card">
          <div className="quiz-title-container">
            <h1 className="quiz-title">
              ❤️ Answer Few Questions About Me ❤️
            </h1>
          </div>
          <button className="start-button" onClick={handleStart}>
            Start Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-card">
        <div className="progress-container">
          <h2 className="progress-title">Question {currentQuestion + 1}/10</h2>
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="question-container">
          <p className="question-text">{questions[currentQuestion]}</p>
          <textarea
            value={answers[currentQuestion] || ''}
            onChange={handleInputChange}
            className="answer-input"
            rows="4"
            placeholder="Type your answer here..."
          />
        </div>

        <div className="button-container">
          {currentQuestion < questions.length - 1 ? (
            <button
              onClick={handleNext}
              disabled={!answers[currentQuestion]}
              className={`next-button ${!answers[currentQuestion] ? 'button-disabled' : ''}`}
            >
              Save & Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!answers[currentQuestion]}
              className={`submit-button ${!answers[currentQuestion] ? 'button-disabled' : ''}`}
            >
              Finish & Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ValentineQuiz;