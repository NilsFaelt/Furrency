import { useState } from "react";


export default function calcPriceInsurance(
  country: string,
  type: string,
  health: string,
  days: number
  ) {
  let price = 13
  if (country === "1") {
    price = price + 1;
  }
  if (country === "2") {
    price = price + 2;
  }
  if (country === "3") {
    price = price + 3;
  }
  if (country === "4") {
    price = price + 4;
  }

  if (type === "1") {
    price = price + 1;
  }
  if (type === "2") {
    price = price + 2;
  }
  if (type === "3") {
    price = price + 3;
  }
  if (type === "4") {
    price = price + 4;
  }

  if (health === "1") {
    price = price + 1;
  }
  if (health === "2") {
    price = price + 2;
  }
  if (health === "3") {
    price = price + 3;
  }
  if (health === "4") {
    price = price + 4;
  }

  return price * days;
}
