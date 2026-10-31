import CardLatihan from './CardLatihan';

export default function ListLatihan({ daftarLatihan }) {
  if (daftarLatihan.length === 0) {
    return <h3>Belum ada data Latihan</h3>;
  }

  return (
    <div>
      {daftarLatihan.map((latihan) => (
        <CardLatihan key={latihan.id} latihan={latihan} />
      ))}
    </div>
  );
}