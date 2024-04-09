import React from 'react';
import Panel from "./Panel";
import panelImg1 from "../img/index-1.jpg";
import panelImg2 from "../img/index-2.jpg";

function Home() {
  return (
    <div className='home'>
        <Panel
        className="panel"
        img={ panelImg1 }
        imgAlt="cat"
        title="Long time Inter Subject"
        text="Lorem ipsum dolor sit amet, in oblique placerat intellegebat eos, vero denique ancillae mei no. Eripuit fabellas ut eum. In velit salutatus scribentur mea, mel ne quot propriae. Te tale atomorum democritum vix, zril omnes labore quo ut. Soluta mnesarchum in pri, ex est dicant epicurei inimicus. Sea ut legimus definitiones, at pri nihil delicata philosophia. Ad vel soluta cetero eleifend, et eam dolore lucilius volutpat, meliore tibique an vis. Eu dolor audiam tincidunt vix, sea mollis repudiandae ut. Eu quo probatus petentium. Possit corpora eligendi ut nec. Eam verterem suscipiantur ea, ne eos nisl omnis oportere, in eos saepe habemus. In mei falli congue. Sea tale tempor hendrerit eu, fugit scripta habemus qui eu, qui duis quaeque detraxit ea. Detracto euripidis has an, justo deserunt platonem ius ex."
        > 
        </Panel>

        <Panel
        className="panel"
        img={ panelImg2 }
        imgAlt="cat"
        title="Long time Inter Kings"
        text="Duo te antiopam sapientem maiestatis. Saepe congue graecis vix an, nam ex ipsum equidem, an nam ubique luptatum. Ex duo invenire abhorreant adversarium, mea ex quis nisl equidem. Ne dolores apeirian vis, wisi iuvaret cotidieque pri cu, hendrerit complectitur ea vix. Pri amet dicam adolescens at, ius id iusto copiosae consectetuer. Nobis senserit democritum ne nam. Mea civibus recteque ullamcorper cu, ea sint modus praesent eam. Pri agam facer at, eu vis elit libris feugiat. Iracundia scriptorem eu ius."
        >
        </Panel>
      
    </div>
  );
}

export default Home;