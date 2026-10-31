export default function CardLatihan({ latihan }) {
  return (
    <div style={{ border: '1px solid #646cff', padding: '15px', borderRadius: '8px', marginBottom: '10px', textAlign: 'left' }}>
      <h3 style={{ margin: '0 0 10px 0' }}>{latihan.nama}</h3>
      <p style={{ margin: '5px 0' }}>Target Otot: {latihan.target}</p>
      <p style={{ margin: '5px 0' }}>Jumlah Set: {latihan.set}</p>
    </div>
  );
}