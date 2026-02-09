"use client";
import { useState } from "react";

const PriceRanger = () => {
  const minValue = 56;
  const maxValue = 1578;

  const [max, setMax] = useState(789);

  const handleChange = (e) => {
    setMax(Number(e.target.value));
  };

  const percentage = ((max - minValue) / (maxValue - minValue)) * 100;

  
};

export default PriceRanger;
