const marginMixin = ({ m }) =>
  m && (m instanceof Array ? `margin: ${m.map((num) => `${num}px`).join(' ')} !important ;` : `margin: ${m}px;`);

export { marginMixin };
