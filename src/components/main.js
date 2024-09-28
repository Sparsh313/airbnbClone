/* eslint-disable no-unreachable */
/* eslint-disable array-callback-return */
import Card from "./card";
import data from "../data";

export default function Main() {
  const cards = data.map((item) => {
    return <Card {...item} />;
  });

  return (
    <>
      <section className="cards-list">{cards}</section>
    </>
  );
}
