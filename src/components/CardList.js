export default function CardList({ data }) {
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

  return (
    <div className="flex w-full bg-2 p-4 rounded-md items-center justify-between">
      <div className="flex gap-6 items-center">
        <input type="checkbox" className="h-4 w-4 checked:accent-violet-800" />
        <div className="flex flex-col">
          <strong>{data.name}</strong>
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
