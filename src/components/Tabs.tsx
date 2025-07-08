interface Props {
  active: string;
  onChange: (tab: string) => void;
}

export const Tabs: React.FC<Props> = ({ active, onChange }) => {
  const tabs = ['Resumen', 'Especificaciones', 'Medios de Pago'];
  return (
    <div style={{ display: 'flex', gap: 16, marginTop: 16 }}>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          style={{
            fontWeight: active === tab ? 'bold' : 'normal',
            textDecoration: active === tab ? 'underline' : 'none',
          }}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};
