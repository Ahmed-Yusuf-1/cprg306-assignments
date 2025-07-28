export default function Item({ name, quantity, category, onSelect, isSelected }) {
  return (
    <div
      className={`border border-sky-500 w-full max-w-xs m-2 p-2 ${
        isSelected ? "bg-orange-500" : "bg-sky-800"
      }`}
      onClick={onSelect}
    >
      <h3 className="text-xl font-bold">{name}</h3>
      <p>
        Buy {quantity} in {category}
      </p>
    </div>
  );
}