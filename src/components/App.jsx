import { Component } from "react";

import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = e => {
    const name = e.target.textContent;
    this.setState(
      prevState => ({ [name]: prevState[name] + 1 })
    );
  }

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, current) => total + current, 0);
  }

  countPositiveFeedbackPercentage = () => {
    const defaultValue = 0;
    const { good } = this.state;
    const total = this.countTotalFeedback();
    
    return total
      ? Number((good / total * 100).toFixed(0))
      : defaultValue;
  }
  
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div className='container'>

        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>

        <Section title="Statistics">
          {total
            ? <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage} />
            : <Notification message="There is no feedback" />}
        </Section>

      </div>
    )
  }
}