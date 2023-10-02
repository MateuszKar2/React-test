import { useEffect, useState } from "react"


//componentDidMount,componentDidUpdate, componentWillUnmount

export const Price = () => {
    
    const [value, setValue] = useState(200);

  useEffect(() => {
    document.title = `My calculations`;
  });

  //useEfect przyjmuje dwa argumenty:
  //callback- fun. wewnątrz której wykonuje się cała logikaefektu
  //zalezności - tablica zmiennych. Zmiana dowolnej z nich spowoduje wykonanie się efektu czyli wywołanie callbacka

  useEffect(() => {
    console.log("ComponentDidMount");
  }, []);

  useEffect(() => {
    console.log("ComponentDidUpdate");
  }, [value]);

  useEffect(() => {
    console.log("ComponentWillUnmount");
    return () => {
        console.log("ComponentWillUnmountTwo");
    };
  }, []);


  return (
    <div>
      <p>You pay {value}$</p>
      <button onClick={() => setValue(value + 50)}>Click me</button>
    </div>
  );
};