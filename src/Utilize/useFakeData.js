import { useEffect, useState } from "react";

const useFakeData = () => {
  const [fakeData, setFakeData] = useState([]);
  useEffect(() => {
    fetch("FakeData/FakeData.json")
      .then((res) => res.json())
      .then((data) => setFakeData(data));
  }, []);
  return fakeData;
};

export default useFakeData;
