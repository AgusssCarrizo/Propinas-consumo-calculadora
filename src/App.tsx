import {menuItems} from "./Data/db";
import MenuItems from "./Components/MenuItems";
import OrderContents from "./Components/OrderContents";
import TipPercentageForm from "./Components/TipPercentageForm";
import OrderTotal from "./Components/OrderTotal";
import useOrder from "./hooks/useOrder";
function App() {
   const {order, addItems, removeItem, tip, setTip} = useOrder();
   return (
      <>
         <header className="bg-teal-400 py-5">
            <h1 className="text-center text-4xl font-black">
               Calculadora de Propinas y Consumo
            </h1>
         </header>
         <main className="max-w-7xl mx-auto py-20 grid  md:grid-cols-2">
            <div className="p-5">
               <h2 className="text-4xl font-black">Menú</h2>
               <div className="space-y-3">
                  {menuItems.map((item) => (
                     <MenuItems key={item.id} item={item} addItems={addItems} />
                  ))}
               </div>
            </div>
            <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
               <OrderContents order={order} removeItem={removeItem} />
               <TipPercentageForm setTip={setTip} />
               <OrderTotal order={order} tip={tip} />
            </div>
         </main>
      </>
   );
}

export default App;
