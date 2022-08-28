import React from "react";

interface Currencys {
  toPay: number;
  symbol: String;
  getValue: number;
  fromRate: string;
  id: any;
}

interface Props {
  item: Currencys;
}

const DisplayItems: React.FC<Props> = ({ item }) => {
  return (
    <div>
      <h3>{item.symbol}</h3>
      <p>{item.toPay}</p>
      <hr />
      <p>{item.fromRate}</p>
      <p>{item.getValue}</p>
    </div>
  );
};

export default DisplayItems;
