import React from "react";
import Icon1 from "../../Images/svg-1.svg";
import Icon2 from "../../Images/svg-2.svg";
import Icon3 from "../../Images/svg-3.svg";
import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from "./ServicesElementes";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Nossos Serviços</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Reduza o tempo gasto</ServicesH2>
          <ServicesP>
            Nós ajudamos você a otimizar suas listas de filmes
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Reduza o tempo gasto</ServicesH2>
          <ServicesP>
            Nós ajudamos você a otimizar suas listas de filmes
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Reduza o tempo gasto</ServicesH2>
          <ServicesP>
            Nós ajudamos você a otimizar suas listas de filmes
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
