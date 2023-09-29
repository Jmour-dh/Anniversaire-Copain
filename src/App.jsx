import { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [people, SetPeople] = useState(data);
  console.log(people);
  return (
    <main>
      <section className="container">
        <h3>{people.length} Anniversaires d&lsquo;aujourd&lsquo;hui </h3>
        <List people={people} />
        <button type="button" className="btn btn-block" onClick={()=> SetPeople([])}>Effacer tous</button>
      </section>
    </main>
  );
}

export default App;
