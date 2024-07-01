// chart.tsx (VariableHistoryChart)

import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { fetchVariableHistory } from '../../API/services/api';

interface VariableHistoryChartProps {
  idVariable: number;
  descripcion: string; // Añadimos la descripción como prop
}

interface DataPoint {
  fecha: string;
  valor: number;
}

const VariableHistoryChart: React.FC<VariableHistoryChartProps> = ({ idVariable, descripcion }) => {
  const [data, setData] = useState<DataPoint[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    fetchVariableHistory(idVariable)
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [idVariable]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2 className="text-lg font-semibold">{descripcion}</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="fecha" tick={{ fill: '#ffffff' }} />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="valor" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VariableHistoryChart;
