import { useEffect, useState } from "react";
import "./App.css";
import InfiniteScroll from "./components/InfiniteScroll/InfiniteScroll";

function App() {
  const [page, setPage] = useState(0);
  const [data, setData] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ]);

  useEffect(() => {
    if (page !== 0) setData([...data, ...data]);

    console.log(page);
  }, [page]);
  return (
    <div className="App">
      <InfiniteScroll inverse={true} page={page} setPage={setPage}>
        {data.map((el, index) => (
          <h1 key={index}>{el}</h1>
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default App;
