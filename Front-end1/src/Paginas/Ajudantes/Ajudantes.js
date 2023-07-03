import React, { useState } from 'react';
import './Ajudantes.css';
import ConteudoAjudantes from './Componentes/ConteudoAjudantes/ConteudoAjudantes';
import Conteudo from '../Componentes/Conteudo/Conteudo';
import Filtro from './Componentes/Filtro/Filtro';
import banner from '../../img/HEADER.png';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';

function Ajudantes() {
  document.title = 'MURUMURU | Ajudantes🏗️';
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };

  const renderIndicators = (slides) => {
    return slides.map((slide, index) => {
      const indicatorClasses = index === activeIndex ? 'active' : '';
      return (
        <li
          key={index}
          className={indicatorClasses}
          onClick={() => handleSelect(index)}
        >
          {index + 1}
        </li>
      );
    });
  };

  return (
    <div className="Ajudantes">
      <Conteudo banner={banner} texto="Ajudantes" />
      <div className="Conteudo-Ajudantes">
        <Filtro />
        <Carousel
          activeIndex={activeIndex}
          onSelect={handleSelect}
          interval={null}
          pause="hover"
          touch={false}
          indicators={false}
        >
          <Carousel.Item>
            <ConteudoAjudantes />
          </Carousel.Item>
          <Carousel.Item>
            <ConteudoAjudantes />
          </Carousel.Item>
          <Carousel.Item>
            <ConteudoAjudantes />
          </Carousel.Item>
          <Carousel.Item>
            <ConteudoAjudantes />
          </Carousel.Item>
        </Carousel>
        <ol className="carousel-indicators">
          {renderIndicators([1, 2, 3, 4])}
        </ol>
      </div>
    </div>
  );
}

export default Ajudantes;
