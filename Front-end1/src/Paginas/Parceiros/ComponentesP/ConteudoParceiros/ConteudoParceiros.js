import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardP from '../ConteudoParceiros/CardP/CardP';

import JonasMateriais from '../../../../img/JonasMateriais.png';
import pisofernando from '../../../../img/pisofernando.png';
import jet from '../../../../img/jet.png';
import merlin from '../../../../img/merlin.png';
import sodimac from '../../../../img/sodimac.png';
import cec from '../../../../img/Group 29.png';

import './ConteudoParceiros.css';

const ConteudoParceiros = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Ajuste o valor para exibir mais slides por vez
    slidesToScroll: 1,
    vertical: false,
    responsive: [
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 674,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="estrutura-conteudo-parceiros">
      <div className="slider-wrapper">
        <h2>Lojas na sua região</h2>
        <Slider {...settings}>
          <CardP 
            nomeLoja="Jonas Materiais"
            fotoLoja={JonasMateriais}
            sobreLoja="Saco de Cimento 10kg"
            frete="Frete grátis até 10 km de distância!"
            curtidas="10"
          />
          <CardP
            nomeLoja="Pisos do Fernando"
            fotoLoja={pisofernando}
            sobreLoja="Pisos diversos"
            frete="A maior variedade de pisos!"
            curtidas="12"
          />
          <CardP
            nomeLoja="Jet materiais"
            fotoLoja={jet}
            sobreLoja="Tijolo baiano"
            frete="Descontos a partir de 250 unidades!"
            curtidas="19"
          />
                    <CardP 
            nomeLoja="Jonas Materiais"
            fotoLoja={JonasMateriais}
            sobreLoja="Saco de Cimento 10kg"
            frete="Frete grátis até 10 km de distância!"
            curtidas="10"
          />
          <CardP
            nomeLoja="Pisos do Fernando"
            fotoLoja={pisofernando}
            sobreLoja="Pisos diversos"
            frete="A maior variedade de pisos!"
            curtidas="12"
          />
          <CardP
            nomeLoja="Jet materiais"
            fotoLoja={jet}
            sobreLoja="Tijolo baiano"
            frete="Descontos a partir de 250 unidades!"
            curtidas="19"
          />
        </Slider>
      </div>

      <div className="slider-wrapper">
        <h2>Principais Parceiros</h2>
        <Slider {...settings}>
          <CardP
            nomeLoja="Leroy Merlin"
            fotoLoja={merlin}
            sobreLoja="Cal hidratada 10kg"
            frete="Frete grátis até 10 km de distância"
            curtidas="25"
          />
          <CardP
            nomeLoja="Sodimac"
            fotoLoja={sodimac}
            sobreLoja="Pedra brita 10kg"
            frete="Frete grátis até 10 km de distância"
            curtidas="20"
          />
          <CardP
            nomeLoja="C&C"
            fotoLoja={cec}
            sobreLoja="Saco de Cimento 10kg"
            frete="Frete grátis até 10 km de distância"
            curtidas="21"
          />
                    <CardP 
            nomeLoja="Jonas Materiais"
            fotoLoja={JonasMateriais}
            sobreLoja="Saco de Cimento 10kg"
            frete="Frete grátis até 10 km de distância!"
            curtidas="10"
          />
          <CardP
            nomeLoja="Pisos do Fernando"
            fotoLoja={pisofernando}
            sobreLoja="Pisos diversos"
            frete="A maior variedade de pisos!"
            curtidas="12"
          />
          <CardP
            nomeLoja="Jet materiais"
            fotoLoja={jet}
            sobreLoja="Tijolo baiano"
            frete="Descontos a partir de 250 unidades!"
            curtidas="19"
          />
        </Slider>
      </div>

      <div className="slider-wrapper">
        <h2>Melhores Descontos</h2>
        <Slider {...settings}>
          <CardP
            nomeLoja="Jet materiais"
            fotoLoja={jet}
            sobreLoja="Tijolo baiano"
            frete="Descontos a partir de 250 unidades"
            curtidas="25"
          />
          <CardP
            nomeLoja="Pisos do Fernando"
            fotoLoja={pisofernando}
            sobreLoja="Pisos diversos"
            frete="A maior variedade de pisos"
            curtidas="12"
          />
          <CardP
            nomeLoja="Jonas Materiais"
            fotoLoja={JonasMateriais}
            sobreLoja="Saco de Cimento 10kg"
            frete="Frete grátis até 10 km de distância"
            curtidas="10"
          />
                    <CardP 
            nomeLoja="Jonas Materiais"
            fotoLoja={JonasMateriais}
            sobreLoja="Saco de Cimento 10kg"
            frete="Frete grátis até 10 km de distância!"
            curtidas="10"
          />
          <CardP
            nomeLoja="Pisos do Fernando"
            fotoLoja={pisofernando}
            sobreLoja="Pisos diversos"
            frete="A maior variedade de pisos!"
            curtidas="12"
          />
          <CardP
            nomeLoja="Jet materiais"
            fotoLoja={jet}
            sobreLoja="Tijolo baiano"
            frete="Descontos a partir de 250 unidades!"
            curtidas="19"
          />
        </Slider>
      </div>
    </div>
  );
}

export default ConteudoParceiros;
