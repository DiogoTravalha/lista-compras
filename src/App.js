import { useState } from "react";
import CardList from "./components/CardList";

const categories = [
  { id: 1, name: "Frutas" },
  { id: 2, name: "Massas" },
  { id: 3, name: "Bebidas" },
];

const unities = [
  { id: 1, label: "un" },
  { id: 2, label: "gr" },
  { id: 3, label: "kg" },
];

function App() {
  const [list, setList] = useState([
    { id: 1, item: "Maçã", quantity: 1, unit: "un", status: false },
    { id: 2, item: "Pão frances", quantity: 2, unit: "gr", status: true },
    { id: 3, item: "Brócolis", quantity: 3, unit: "kg", status: false },
    { id: 4, item: "Leite", quantity: 2, unit: "gr", status: false },
    { id: 5, item: "Peito de Frango", quantity: 3, unit: "kg", status: true },
  ]);

  return (
    <div className="flex flex-col w-full h-svh bg-1">
      <img
        src="./header.png"
        alt="Cabeçalho"
        className="flex object-fill w-full h-[185px]"
      />
      <div className="flex flex-col w-full h-full gap-4 px-6 -mt-20">
        <strong className="text-white">Lista de Compras</strong>
        <div className="flex flex-col gap-2">
          <span className="text-xs text-white">Item</span>
          <input className="p-1 text-white border border-gray-700 rounded-md outline-none bg-2" />
          <div className="flex items-center w-full gap-4">
            <div className="flex flex-col gap-2">
              <span className="text-xs text-white">Quantidade</span>
              <div className="flex items-center border border-gray-700 rounded-md bg-2">
                <input className="flex-1 w-10 p-1 text-center text-white outline-none bg-2" />
                <select className="p-1 text-xs text-white uppercase border-l border-gray-700 bg-2 w-14">
                  {unities?.map((item) => (
                    <option value={item?.id}>{item?.label}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex flex-col w-full gap-2">
              <span className="text-xs text-white">Categorias</span>
              <select className="flex-1 w-full p-1 text-white border border-gray-700 rounded-md outline-none bg-2">
                {categories?.map((item, i) => (
                  <option key={i} value={item?.id}>
                    {item?.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-end justify-end h-full">
              <button className="flex items-center justify-center w-10 h-10 text-white rounded-full bg-violet-600">
                +
              </button>
            </div>
          </div>
        </div>
        <div className="rounded-md flex flex-col gap-3">
          {list.map((iten) => (
            <CardList
              key={iten.id}
              data={iten}
              onChecked={(e) => {
                setList(
                  list.map((doc) => {
                    if (doc.id !== iten.id) {
                      return doc;
                    }
                    return {
                      id: doc.id,
                      iten: doc.iten,
                      quantity: doc.quantity,
                      unit: doc.unit,
                      category: doc.category,
                      checked: e.target.checked,
                    };
                  })
                );
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
