// import PropTypes from "prop-types";
import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { Container } from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = key => {
    switch (key) {
      case 'good':
        setGood(p => p + 1);
        break;

      case 'neutral':
        setNeutral(p => p + 1);
        break;

      case 'bad':
        setBad(p => p + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = (a, b, c) => a + b + c;
  const total = countTotalFeedback(good, neutral, bad);

  const countPositivePercentage = (total, goodFeedback) =>
    total ? Math.ceil((goodFeedback / total) * 100) : 0;
  const positivePercentage = countPositivePercentage(total, good);

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
};
