// importar componentes de hora
import React from 'react';

const ShelterHours = () => {
  // Obtener el día actual de la semana (0 = Domingo, 1 = Lunes, ..., 6 = Sábado)
  const today = new Date().getDay();

  // Definir las horas de apertura y cierre
  let openingTime, closingTime;

  if (today >= 1 && today <= 5) { // De lunes a viernes
    openingTime = '10:00 AM';
    closingTime = '4:00 PM';
  } else { // Sábado y domingo
    openingTime = '9:00 AM';
    closingTime = '8:00 PM';
  }

  return (
    <div>
      <h2>Horas de apertura del refugio</h2>
      <p>Hoy estamos abiertos de {openingTime} a {closingTime}</p>
    </div>
  );
};

export default ShelterHours;