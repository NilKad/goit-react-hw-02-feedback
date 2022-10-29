const FeedbackOption = ({ onLeaveFeedback, options }) => {
  return (
    <>
      {options.map((b, index) => (
        <button key={index} type="button" name={b} onClick={onLeaveFeedback}>
          {b[0].toUpperCase() + b.slice(1)}
        </button>
      ))}
    </>
  );
};

export default FeedbackOption;
