export default function CardList({ data, onChecked }) {
  function getUnit(nome) {
    switch (nome) {
      case "gr":
        return "gramas";
      case "un":
        return "unidades";
      case "kg":
        return "quilos";
      default:
        break;
    }
  }

  const status = true;
  return (
    <div
      className={`flex w-full bg-2 p-4 rounded-md items-center justify-between ${
        data.status && "opacity-50"
      }`}
    >
      <div className="flex gap-6 items-center">
        <input
          type="checkbox"
          className={`h-4 w-4 checked:accent-green-600`}
          checked={data.status}
          onChange={onChecked}
        />
        <div className="flex text-white flex-col">
          <strong>{data.item}</strong>
          <div className="flex gap-1">
            <span>{data.quantity}</span>
            <span>{getUnit(data.unit)}</span>
          </div>
        </div>
      </div>
      <button>
        <img src="./trash.svg" className="w-6" />
      </button>
    </div>
  );
}
