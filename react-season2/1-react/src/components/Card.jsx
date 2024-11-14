// dl: description list, dt: description term, dd: description details
// data = {term, description} 객체들로 구성된 리스트
const Card = ({ header, data = [], footer }) => {
  return (
    <div className="Card">
      <header>{header}</header>
      <main>
        {data.map((term, description) => (
          <dl key={term}>
            <dt>{term}</dt>
            <dd>{description}</dd>
          </dl>
        ))}
      </main>
      <footer>{footer}</footer>
    </div>
  );
}

export default Card;