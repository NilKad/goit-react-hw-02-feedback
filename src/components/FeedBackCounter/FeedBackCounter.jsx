import React from 'react';
// import
import css from 'components/FeedBackCounter/FeedBackCounter.module.css';
import { Statistics } from 'components/Statistics/Statistics';
import FeedbackOption from 'components/FeedbackOptions/FeedbackOptions ';
import { Section } from 'components/Section/Section';

// export default FeedBack = () => {};
class FeedBackCounter extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickHandle = e => {
    const { name } = e.currentTarget;
    this.setState({
      [name]: this.state[name] + 1,
    });
  };

  countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;

  positivePercent = ({ good }) => {
    const total = this.countTotalFeedback(this.state);
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className={css.counter}>
        <Section title="Please leave feedback">
          <FeedbackOption
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onClickHandle}
          />
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback(this.state)}
            positivePercentage={this.positivePercent(this.state)}
          ></Statistics>
        </Section>
      </div>
    );
  }
}

export default FeedBackCounter;
