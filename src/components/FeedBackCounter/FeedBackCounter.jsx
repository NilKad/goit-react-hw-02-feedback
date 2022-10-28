import React from 'react';
// import
import css from 'components/FeedBackCounter/FeedBackCounter.module.css';
import { Statistics } from 'components/Statistics/Statistics';

// export default FeedBack = () => {};
class FeedBackCounter extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onClickHandle = e => {
    const { name } = e.currentTarget;

    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  positivePercent = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className={css.counter}>
        <h1>Please leave feedback</h1>
        <button type="button" name="good" onClick={this.onClickHandle}>
          Good
        </button>
        <button type="button" name="neutral" onClick={this.onClickHandle}>
          Neutral
        </button>
        <button type="button" name="bad" onClick={this.onClickHandle}>
          Bad
        </button>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.positivePercent()}
        ></Statistics>
      </div>
    );
  }
}

export default FeedBackCounter;
