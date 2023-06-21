import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutUs.css';
import yo from './img/yo.jpeg'
import karenlise from './img/laverdaderakaren.jpeg'
import vevelin from './img/ete2.jpeg'
import marles from './img/karenlise.jpeg'

const AboutUs = () => {

  return (
    <>
      <div class="header">
        <h1>Sobre Nosotros</h1>
      </div>


      <div className='historia m-3 rounded-3'>
        <h2 className='text-black' >Nuestra Historia</h2>
        <p className='text-black'>La idea de crear un aplicacion para un pequeño grupo de trabajo, le era abrumador , sin embargo surgio la idea de poder crear una app para rifas y juegos del azar donde todas las personas pudieran conectarse a entretenerse y jugar en lo que mas les gusta.</p>
      </div>


      <section id="mision-vision" className='section mt-4 text-black'>
        <div className="mision mx-3">
          <h2 className='text-black'>Misión</h2>
          <p className='text-black'>Nuestra misión es ofrecer a nuestros clientes una experiencia excepcional en la participación de rifas, creando un ambiente emocionante y seguro donde puedan probar su suerte y ganar premios valiosos. Nos esforzamos por garantizar la equidad y transparencia en todos nuestros procesos, cumpliendo con las regulaciones y normativas aplicables. Además, nos comprometemos a destinar una parte de nuestros ingresos para apoyar causas sociales y contribuir positivamente a la comunidad.</p>
        </div>
        <div className="vision mx-3">
          <h2 className='text-black'>Visión</h2>
          <p className='text-black'>Ser reconocidos como líderes en la organización de rifas, brindando oportunidades emocionantes y justas para que las personas puedan participar y ganar premios emocionantes. Buscamos ser una empresa innovadora y confiable, que se destaque por su transparencia, integridad y compromiso con la satisfacción de nuestros clientes.</p>
        </div>

      </section>
      <div class="team-section">

        <div class="team-member">
          <img src={marles} alt="JAMF" class="team-img highlight"></img>
          <h3 class="team-name">Jorge Andres Marles Florez</h3>
          <p class="team-role">Desarrollador</p>
        </div>

        <div class="team-member">
          <img src={vevelin} alt="EZBG" class="team-img highlight"></img>
          <h3 class="team-name">Evelin Zharit Bermudez Guerrero</h3>
          <p class="team-role">Desarrollador</p>
        </div>

        <div class="team-member">
          <img src={yo} alt="KAJC" class="team-img highlight"></img>
          <h3 class="team-name">Kevin Andrey Jaimes Cristancho</h3>
          <p class="team-role">Desarrollador</p>
        </div>

        <div class="team-member">
          <img src={karenlise} alt="KLQV" class="team-img highlight"></img>
          <h3 class="team-name">Karen Lizeth Quintero Villasmil</h3>
          <p class="team-role">Gerente y Desarrollador</p>
        </div>
      </div>
      <footer>
        <p>Derechos de autor © 2023 - BeLucky</p>
      </footer>
    </>
  );
}

export default AboutUs;