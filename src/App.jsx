import { useState } from 'react';
import Header from './components/Header';
import StatistikSet from './components/StatistikSet';
import FormInputLatihan from './components/FormInputLatihan';
import ListLatihan from './components/ListLatihan';
import './App.css';

export default function App() {
  const [daftarLatihan, setDaftarLatihan] = useState([]);

  const tambahLatihan = (latihanBaru) => {
    setDaftarLatihan([...daftarLatihan, { id: Date.now(), ...latihanBaru }]);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <Header />
      <StatistikSet daftarLatihan={daftarLatihan} />
      <FormInputLatihan onTambah={tambahLatihan} />
      <ListLatihan daftarLatihan={daftarLatihan} />
    </div>
  );
}