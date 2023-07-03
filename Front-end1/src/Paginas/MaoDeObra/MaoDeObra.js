import React, { useState } from 'react';
import './MaoDeObra.css';
import Conteudo from '../Componentes/Conteudo/Conteudo';
import ConteudoMaoDeObra from './Componentes/ConteudoMaoDeObra/ConteudoMaoDeObra';
import banner from '../../img/HEADER.png'
import Filtro from './Componentes/Filtro/Filtro';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import '../Ajudantes/Carousel.css';

function MaoDeObra() {
    document.title = 'MURUMURU | Mão de obra🧱';
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
        <div className="maodeobra">
            <Conteudo banner={banner} texto="Mão de obra" />
            <div className="conteudo-obra">
                <Filtro />
                <Carousel activeIndex={activeIndex}
                    onSelect={handleSelect}
                    interval={null}
                    pause="hover"
                    touch={false}
                    indicators={false}>
                    <Carousel.Item>
                        <ConteudoMaoDeObra />
                    </Carousel.Item>

                    <Carousel.Item>
                        <ConteudoMaoDeObra />
                    </Carousel.Item>

                    <Carousel.Item>
                        <ConteudoMaoDeObra />
                    </Carousel.Item>

                    <Carousel.Item>
                        <ConteudoMaoDeObra />
                    </Carousel.Item>

                    <Carousel.Item>
                        <ConteudoMaoDeObra />
                    </Carousel.Item>

                </Carousel>


                <ol className="carousel-indicators">
                    {renderIndicators([1, 2, 3, 4])}
                </ol>
            </div>

        </div>
    )
}

export default MaoDeObra