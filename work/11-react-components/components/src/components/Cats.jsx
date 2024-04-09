import React from "react";

import Card from "./Card";

import "./Cats.css";

import cardImg1 from "../img/cat-1.jpg";
import cardImg2 from "../img/cat-2.jpg";
import cardImg3 from "../img/cat-3.jpg";

function Cats({ setPage }) {

  return (
    <div className="cats">
      <Card
        className="card"
        title="Aki"
        img={cardImg1}
        imgAlt="card image 1 for Aki"
        text="Ex ius nulla officiis nominati, sint labores ea quo. Vim at aliquando conceptam, adbrute munere mel, mea dicant partem in. Ea mea natum fugit tantas. Viderer molestie suscipit mea in, eius saepe delicatissimi ea eam."
        onLinkToAbout={() => setPage("/about")}
      >
      </Card>

      <Card
        className="card"
        title="Bella"
        img={cardImg2}
        imgAlt="card image 2 for Bella"
        text="Ei mei dicant iuvaret, at periculis persequeris pro. Ei mea dicant partem in. Ea mea natum fugit tantas. Viderer molestie suscipit mea in, eius saepe delicatissimi ea eam."
        onLinkToAbout={() => setPage("/about")}
        ></Card>

        <Card
        className="card"
        title="Coco"
        img={cardImg3}
        imgAlt="card image 3 for Coco"
        text="Ei mei dicant iuvaret, at periculis persequeris pro. Ei mea dicant partem in. Ea mea natum fugit tantas. Viderer molestie suscipit mea in, eius saepe delicatissimi ea eam."
        onLinkToAbout={() => setPage("/about")}
        ></Card>
    </div>
  );
}

export default Cats;
