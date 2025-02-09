import { useState } from "react";
import "./Quiz.css";

const Quiz = () => {
    const questions = [
        "What is my favorite color?",
        "What is my birth date?",
        "What is my favorite movie?",
        "Which city was our first trip together?",
        "What is my favorite dish?",
        "What is my dream destination?",
        "What is my favorite song?",
        "What is my nickname for you?",
        "What is my favorite hobby?",
        "How much do you love me? ❤️"
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});

    const handleChange = (e) => {
        setAnswers({ ...answers, [currentQuestion]: e.target.value });
    };

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const handleSubmit = async () => {
        fetch("/api/saveAnswers", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ answers }),
        })
        .then(response => response.json())
        .then(data => console.log("Answers Saved:", data))
        .catch(error => console.error("Error:", error));
    };

    return (
        <div className="quiz-container">
            <h2 className="quiz-heading">Answer a few questions about me ❤️</h2>
            <div className="question-box">
                <p className="question-text">{questions[currentQuestion]}</p>
                <input 
                    type="text" 
                    className="answer-input" 
                    value={answers[currentQuestion] || ""} 
                    onChange={handleChange} 
                    placeholder="Type your answer..."
                />
            </div>

            <div className="button-container">
                {currentQuestion < questions.length - 1 ? (
                    <button className="next-btn" onClick={handleNext}>Save & Next</button>
                ) : (
                    <button className="submit-btn" onClick={handleSubmit}>Finish & Submit</button>
                )}
            </div>
        </div>
    );
};

export default Quiz;
