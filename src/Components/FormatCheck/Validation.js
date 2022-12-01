export const FormatNumber = (num) => (
  Math.abs(num) > 999 ? `${Math.sign(num)
    * ((Math.abs(num) / 1000).toFixed(1))}k`
    : Math.sign(num) * Math.abs(num)
);

export const NumberWithCommas = (num) => num
  .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export default FormatNumber;
