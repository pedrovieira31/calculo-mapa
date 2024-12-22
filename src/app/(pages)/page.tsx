import { Example } from '@features'
import { Text, Title } from '@shared'
import React from 'react';
import './NumerologyChart.css';

export default function Home() {
  return (
<div className="numerology-container">
      <header className="numerology-header">
        <h1>Mapa Numerológico</h1>
        <h2>Numerology Chart</h2>
      </header>
      <main className="numerology-content">
        <p>
          Para acessar o seu Mapa Numerológico, complete os campos abaixo com seu nome completo e data de nascimento (iguais à sua primeira certidão de nascimento).
        </p>
        <p>
          Obs: Sempre use a primeira certidão de nascimento, se o nome tiver sido alterado por algum motivo, a primeira certidão é a que trará as energias corretas.
        </p>
        <p>
          To receive your Numerology Chart, fill in the fields below with your full name and date of birth (Same as it is on your first birth certificate).
        </p>
        <p>
          Obs.: Always use your first Birth Certificate, if you have changed your name by any reason, the first birth certificate is the one that will bring the right energies.
        </p>
        <form className="numerology-form">
          <label htmlFor="fullName" className="form-label">Nome Completo - Full name:</label>
          <input type="text" id="fullName" name="fullName" className="form-input" placeholder="Digite seu nome completo" required />

          <label htmlFor="birthDate" className="form-label">Data de Nascimento - Date of Birth:</label>
          <input type="date" id="birthDate" name="birthDate" className="form-input" required />

          <button type="submit" className="form-button">Quero o meu Mapa Mapa - I want My Chart</button>
        </form>
      </main>
    </div>
  )
}
