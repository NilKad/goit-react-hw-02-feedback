export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <h2>Statistics</h2>
      {total > 0 ? (
        <>
          <p>Good: {good}</p>
          <p>Good: {neutral}</p>
          <p>Good: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive feedback: {positivePercentage}%</p>
        </>
      ) : (
        'No feedback given'
      )}
    </>
  );
};
