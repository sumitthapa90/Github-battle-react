import "./allcard.css";
import Card from "../card/Card";

import React from "react";

function AllCard(props) {
  let datas = props.data;

  return (
    <section className="all-cards">
      {datas.map((data, i) => {
        return <Card {...data} key={data.id} score={i + 1} />;
      })}
    </section>
  );
}

export default AllCard;
