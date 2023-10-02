import { useEffect, useState } from "react"

//componentDidMount,componentDidUpdate, componentWillUnmount

export const Price = () => {
    
    const [value, setValue] = useState(200);

  useEffect(() => {
    document.title = `You pay ${value}$`;
  });

  //useEfect przyjmuje dwa argumenty:
  //callback- fun. wewnątrz której wykonuje się cała logikaefektu
  //zalezności - tablica zmiennych. Zmiana dowolnej z nich spowoduje wykonanie się efektu czyli wywołanie callbacka

  useEffect(() => {
    console.log("ComponentDidMount")
  }, []);

  return (
    <div>
      <p>You pay {value}$</p>
      <button onClick={() => setValue(value + 50)}>Click me</button>
    </div>
  );
};