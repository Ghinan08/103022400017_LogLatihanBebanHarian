import { useEffect, useState } from 'react';
import Header from './components/Header';
import StatistikSet from './components/StatistikSet';
import FormInputLatihan from './components/FormInputLatihan';
import ListLatihan from './components/ListLatihan';
import './App.css';

const API = import.meta.env.VITE_API_URL ?? 'http://localhost:3000';

export default function App() {
  const [daftarLatihan, setDaftarLatihan] = useState([]);

  const muatData = async () => {
    const res = await fetch(`${API}/latihan`);
    setDaftarLatihan(await res.json());
  };

  useEffect(() => { muatData(); }, []);

  const tambahLatihan = async (latihanBaru) => {
    await fetch(`${API}/latihan`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(latihanBaru),
    });
    muatData();
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