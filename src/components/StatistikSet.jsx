export default function StatistikSet({ daftarLatihan }) {
  const totalSet = daftarLatihan.reduce((total, item) => total + item.set, 0);
  
  return (
    <div style={{ backgroundColor: '#2a2a2a', padding: '10px', borderRadius: '8px', marginBottom: '20px' }}>
      <p style={{ margin: '5px 0' }}>Variasi Gerakan: {daftarLatihan.length}</p>
      <p style={{ margin: '5px 0' }}>Total Set Keseluruhan: {totalSet}</p>
    </div>
  );
}