// Represents anything that can be rendered in React
const examples1: React.ReactNode[] = [
  <div>1</div>,
  1,
  "1",
  true,
  false,
  null,
  undefined,
  [1, 2, 3],
];

// Only JSX.Element can be rendered in React
const examples2: JSX.Element[] = [
  <div>1</div>,
  1,
  "1",
];
