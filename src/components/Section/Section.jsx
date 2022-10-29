export const Section = ({ children, title }) => {
  return (
    <section>
      {title && <h1>{title}</h1>}
      {children}
    </section>
  );
};
