import React from 'react';
import vaso from '../assets/vaso-de-plastico.png'; // Ruta al ícono del vaso
import nutella from '../assets/especiales/chocolate.png';
import banana from '../assets/especiales/banana.png';
import arequipe from '../assets/especiales/arequipe.png';
import mochaRosa from '../assets/especiales/mocha-rosa.png';

const Menu = () => (
  <>
    <section className="menu" id="menu">
      <h2>📋 Nuestro Menú</h2>
      <table>
        <thead>
          <tr>
            <th>Bebida</th>
            <th>Pequeño (S)</th>
            <th>Mediano (M)</th>
            <th>Grande (L)</th>
          </tr>
          {/* Fila de íconos PNG escalados */}
          <tr>
            <td></td>
            <td>
              <img
                src={vaso}
                alt="Tamaño S"
                style={{ width: '25px', opacity: 0.8 }}
              />
            </td>
            <td>
              <img
                src={vaso}
                alt="Tamaño M"
                style={{ width: '35px', opacity: 0.9 }}
              />
            </td>
            <td>
              <img
                src={vaso}
                alt="Tamaño L"
                style={{ width: '45px', opacity: 1 }}
              />
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>☕ Cafélado Clásico</td>
            <td>$5.000</td>
            <td>$6.000</td>
            <td>$7.000</td>
          </tr>
          <tr>
            <td>🥛 Cafélado con Leche</td>
            <td>$5.500</td>
            <td>$6.500</td>
            <td>$7.500</td>
          </tr>
          <tr>
            <td>🍦 Cafélado Vainilla</td>
            <td>$6.000</td>
            <td>$7.000</td>
            <td>$8.000</td>
          </tr>
          <tr>
            <td>🍫 Cafélado Chococafé</td>
            <td>$6.500</td>
            <td>$7.500</td>
            <td>$8.500</td>
          </tr>
          <tr>
            <td>🍯 Cafélado Arequipe</td>
            <td>$6.000</td>
            <td>$7.000</td>
            <td>$8.000</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section className="especiales">
      <h3>✨ Bebidas Especiales Cafélado 🧊</h3>
      <div className="especiales-grid">
        <div className="item">
          <img src={nutella} alt="Nutella Frost" />
          <h4>🍫 Nutella Frost</h4>
          <p>Granizado de moka, 2 pumps de avellana, crema batida y sirope de caramelo.</p>
          <span>$8.500</span>
        </div>
        <div className="item">
          <img src={banana} alt="Choco Banana Shot" />
          <h4>🍌 Choco Banana Shot</h4>
          <p>Café frío, 1 banana licuada, chips de chocolate oscuro.</p>
          <span>$9.000</span>
        </div>
        <div className="item">
          <img src={arequipe} alt="Arequipe Queen" />
          <h4>👑 Arequipe Queen</h4>
          <p>Café con leche, sirope de arequipe, toffee y crema.</p>
          <span>$8.000</span>
        </div>
        <div className="item">
          <img src={mochaRosa} alt="Mocha Rosa" />
          <h4>🌸 Mocha Rosa</h4>
          <p>Frappé de mocha con 1 pump de fresa y crema rosada.</p>
          <span>$8.700</span>
        </div>
      </div>
    </section>
  </>
);

export default Menu;
