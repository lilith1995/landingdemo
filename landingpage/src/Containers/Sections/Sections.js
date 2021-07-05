import React from "react";

import Section from "../../Components/Section/Section";
import { sectionsData } from "../../Data-mockup/SectionsData";

import "./Sections.scss";

class Sections extends React.Component {
  render() {
    return (
      <div className="container-sections">
        {sectionsData.map((el) => {
          return (
            <Section
              img={el.img}
              title={el.title}
              description={el.description}
              key={el.id}
            >
              {el.id}
            </Section>
          );
        })}
      </div>
    );
  }
}

export default Sections;
