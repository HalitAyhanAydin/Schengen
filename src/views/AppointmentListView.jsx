import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AppointmentListView.css';

const AppointmentListView = () => {
  const navigate = useNavigate();
  const [appointments] = useState([
    {
      id: '1',
      country: 'Almanya',
      city: 'İstanbul',
      consulate: 'Almanya Başkonsolosluğu',
      date: '2024-05-15',
      time: '10:30',
      type: 'Schengen Vizesi',
    },
    {
      id: '2',
      country: 'Fransa',
      city: 'Ankara',
      consulate: 'Fransa Büyükelçiliği',
      date: '2024-05-20',
      time: '11:45',
      type: 'Schengen Vizesi',
    },
    {
      id: '3',
      country: 'İtalya',
      city: 'İzmir',
      consulate: 'İtalya Konsolosluğu',
      date: '2024-05-18',
      time: '09:15',
      type: 'Schengen Vizesi',
    },
  ]);

  const handleAppointmentPress = (appointmentId) => {
    navigate('/appointment-form', { state: { appointmentId } });
  };

  return (
    <div className="appointment-list-container">
      <h1 className="title">Müsait Randevular</h1>
      <p className="subtitle">
        Aşağıdaki randevulardan birini seçerek başvuru yapabilirsiniz
      </p>

      {appointments.map(appointment => (
        <div
          key={appointment.id}
          className="card"
          onClick={() => handleAppointmentPress(appointment.id)}
        >
          <div className="card-header">
            <span className="country">{appointment.country}</span>
            <span className="type">{appointment.type}</span>
          </div>

          <div className="card-body">
            <p className="info">
              <span className="label">Şehir: </span>
              {appointment.city}
            </p>
            <p className="info">
              <span className="label">Konsolosluk: </span>
              {appointment.consulate}
            </p>
            <p className="info">
              <span className="label">Tarih: </span>
              {appointment.date}
            </p>
            <p className="info">
              <span className="label">Saat: </span>
              {appointment.time}
            </p>
          </div>

          <div className="card-footer">
            <span className="action-text">Randevu Al →</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppointmentListView; 