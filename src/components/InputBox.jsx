import React, { useId, useState } from "react";

function InputBox({
  label,
  amount,
  onAmountChnage,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "inr",
  amountDisable = false,
  currencyDisable = false
})
 {
  const uniqueId=useId()
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex`}>
      <div className="w-1/2">
        <label htmlFor={uniqueId} className="text-black/40 mb-2 inline-block">{label}</label>
        <input id={uniqueId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChnage && onAmountChnage(Number(e.target.value))}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          disabled={currencyDisable}
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;