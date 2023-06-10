import { useState, useRef } from "react";

import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbacksRef = useRef({
    good: setGood,
    neutral: setNeutral,
    bad: setBad
  });
  
  const setFeedback = (e) => {
    const { name: feedbackName } = e.target;
    const set = feedbacksRef.current;

    set[feedbackName]((prev) => prev + 1);
  };

  const getPositivePercentage = () => {
    const DEFAULT_VALUE = 0;

    return total
      ? Number((good / total * 100).toFixed(0))
      : DEFAULT_VALUE;
  }

  const total = good + neutral + bad;

    return (
      <div className='container'>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(feedbacksRef.current)} setFeedback={setFeedback} />
        </Section>

        <Section title="Statistics">
          {total
            ? <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={getPositivePercentage()} />
            : <Notification message="There is no feedback" />}
        </Section>
      </div>
    )
  
}