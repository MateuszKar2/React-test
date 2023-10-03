const { useState } = require("react")


export const Planets = () => {
    const [planets, setPlanets] = useState(["Earth", "Mars", "Jupiter", "Venus"]);
    const [query, setQuery] = useState("");

  const filteredPlanets = planets.filter(planet => planet.includes(query));

  return (
    <div>
      {filteredPlanets.map(planet => (
        <div key={planet}>{planet}</div>
      ))}
    </div>
  );
};

//Memoizacjajest nie jest potrzebna, jeżeli zmieni sie wartość planets lub query komponent będzie renderowany podobnie

//Gdy komponent otrzymuje dodatkowy stan lub otrzymuje jakiś props
export const UseMemo = ({ someProp }) => {
    const [planets, setPlanets] = useState(["Earth", "Mars", "Jupiter", "Venus"]);
    const [query, setQuery] = useState("");
    const [clicks, setClicks] = useState(0);
  
    const filteredPlanets = planets.filter(planet => planet.includes(query));
  
    return (
      <div>
        <div>Some prop: {someProp}</div>
        <button onClick={() => setClicks(clicks + 1)}>
          Number of clicks: {clicks}
        </button>
        <div>
          {filteredPlanets.map(planet => (
            <div key={planet}>{planet}</div>
          ))}
        </div>
      </div>
    );
  };
//Za każdym razem gdy zmieni się clicks lub props komponent będzie renderowany ponownie.
//Doprowadzi to ponownego przerenderowania filteredPlanets mimo że wartości planets i query sie nie zmieniły
//W tym wypadku jest POTRZEBNA memoizacja


//   const filteredPlanets = useMemo(
//     () => planets.filter(planet => planet.includes(query)),
//     [planets, query]
//   );


