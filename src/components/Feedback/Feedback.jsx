import {useState} from 'react';
import FeedbackOptions from './Feedback.Options/FeedbackOptions'
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import css from './Feedback.module.css'

const Feedback = () => {
  
  const [ good, setGood] = useState(0);
  const [ neutral, setNeutral] = useState(0);
  const [ bad, setBad] = useState(0);

  const handleFeedback = (type) => {
    if (type === 'good') {
        setGood((prevState) => prevState + 1);
      } else if (type === 'neutral') {
        setNeutral((prevState) => prevState + 1);
      } else if (type === 'bad') {
        setBad((prevState) => prevState + 1);
      }
  };

  const getCountTotalFeedback = () => good + neutral + bad;

  const getCountPositiveFeedBack = () => {
    const countTotalFeedback = getCountTotalFeedback();
    return countTotalFeedback === 0 ? 0 : Math.round((good / countTotalFeedback) * 100);
  };

  const options = ['good', 'neutral', 'bad'];
  const countTotalFeedback = getCountTotalFeedback();
  const countPositiveFeedbackPercentage = getCountPositiveFeedBack();
  
    return (
      <div className={css.root}>
        <Section title="Please leave your feedback">
          <FeedbackOptions options={options} onLeaveFeedback={handleFeedback} />
        </Section>
  
        <Section title="Statistics">
          {countTotalFeedback === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics 
            good={good} 
            neutral={neutral} 
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage} />
          )}
        </Section>
      </div>
    );
  };

export default Feedback;


