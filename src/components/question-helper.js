import { useState } from "react";

const QuestionHelper = () => {
  const [inputValue, setInputValue] = useState("");
  const [questionValue, setQuestionValue] = useState("");
  const [answerValue, setAnswerValue] = useState("");
  const answers = ["yes", "no", "maybe", "what you mean?"];

  const onSubmit = (event) => {
    event.preventDefault();
    setQuestionValue(inputValue);
    setInputValue("");
    const answersLength = answers.length;
    const indexOfAnswers = Math.floor(Math.random() * answersLength);
    setAnswerValue(answers[indexOfAnswers]);
  };
  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={inputValue} onChange={onInputChange} />
        <button>submit</button>
      </form>
      {questionValue && <p>Your question: {questionValue}</p>}
      {questionValue && answerValue && <p>Answer: {answerValue}</p>}
    </div>
  );
};

export default QuestionHelper;
