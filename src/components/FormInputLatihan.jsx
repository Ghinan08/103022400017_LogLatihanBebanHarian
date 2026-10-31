import { useState } from 'react';

export default function FormInputLatihan({ onTambah }) {
  const [nama, setNama] = useState('');
  const [target, setTarget] = useState('');
  const [set, setSet] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nama || !target || !set) return;
    
    onTambah({ nama, target, set: parseInt(set) });
    
    setNama('');
    setTarget('');
    setSet('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
      <input type="text" placeholder="Nama Gerakan (Cth: Bicep Curl)" value={nama} onChange={(e) => setNama(e.target.value)} required />
      <input type="text" placeholder="Target Otot (Cth: Lengan)" value={target} onChange={(e) => setTarget(e.target.value)} required />
      <input type="number" placeholder="Jumlah Set" value={set} onChange={(e) => setSet(e.target.value)} required min="1" />
      <button type="submit">Tambah Latihan</button>
    </form>
  );
}