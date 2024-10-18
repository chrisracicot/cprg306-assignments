export default function Item(props) {
  return (
    <main>
      <ul>
        <li>
          <h2>{props.name}</h2>
          <p>
            Buy {props.quantity} in {props.category}
          </p>
        </li>
      </ul>
    </main>
  );
}
