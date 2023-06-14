import { useState } from "react";

import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export default function App() {
  const [feedbacks, setFeedbacks] = useState(
    { good: 0, neutral: 0, bad: 0 }
  );
  const { good, neutral, bad } = feedbacks;

  function setFeedbacksZhenya(e) {
    const { name: feedbackName } = e.target;

    setFeedbacks(prev => (
      { ...prev, [feedbackName]: prev[feedbackName] + 1 }
    ));
};

  function getPositivePercentage () {
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
            options={Object.keys(feedbacks)}
            setFeedback={setFeedbacksZhenya} />
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