import React from "react";
import { Container, Detail, DropDown } from "./App.style";
import Card from "./components/Card";
import { useState } from "react";
function App() {
  const num = [1, 2, 3, 4, 5, 6, 7, 8];
  const [order, setOrder] = useState<number>(num.length);
  const content = num.map((item) => (
    <Detail value={item}>
      <Card handleCLick={() => setOrder(4)} />
    </Detail>
  ));
  return (
    <Container>
      {content}
      <DropDown dis="block" order={order} />
    </Container>
  );
}

export default App;
