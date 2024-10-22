export default function Item(props) {
  // Check if the item is "Paper Towel" to apply counterclockwise rotation
  const isPaperTowel = props.name.toLowerCase().includes("paper towel");

  // Extract the emoji part of the name (if any)
  const emojiExists = props.name.includes("🧻");

  // Remove the emoji from the name and display it separately if it exists
  const nameWithoutEmoji = props.name.replace("🧻", "");

  return (
    <main>
      <ul>
        <li>
          <h2 className="font-bold">
            {/* Display the item name without the emoji */}
            {nameWithoutEmoji}
            {/* Conditionally render and rotate the emoji by -90 degrees for Paper Towel */}
            {emojiExists && (
              <span className={isPaperTowel ? "inline-block -rotate-90" : ""}>
                🧻
              </span>
            )}
          </h2>
          <p className="font-medium">
            Buy {props.quantity} in {props.category}
          </p>
        </li>
      </ul>
    </main>
  );
}
