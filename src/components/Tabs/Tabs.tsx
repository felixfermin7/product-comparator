import './Tabs.css';

interface Props {
  active: string;
  onChange: (tab: string) => void;
}

export const Tabs: React.FC<Props> = ({ active, onChange }) => {
  const tabs = ['Resumen', 'Especificaciones', 'Medios de Pago'];
  return (
    <div className="tabs-container">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`tab-button ${active === tab ? 'active' : ''}`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};
