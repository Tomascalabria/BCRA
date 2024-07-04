'use client';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { fetchDailyVariables } from "../../API/services/api"; // Importa la función desde tu archivo api.ts
import VariableHistoryChart from './chart';

interface Variable {
  idVariable: number;
  descripcion: string;
  valor: number;
  fecha: string;
}

const DashboardPage = () => {
  const [data, setData] = useState<Variable[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedVariable, setSelectedVariable] = useState<Variable | null>(null);
  const chartRef = useRef<HTMLDivElement>(null); // Ref para el chart section

  useEffect(() => {
    fetchDailyVariables()
      .then((variables) => {
        setData(variables);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Scroll al bottom cuando selectedVariable cambia y el chart se renderiza
    if (selectedVariable && chartRef.current) {
      chartRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedVariable]);

  const formatValue = (value: number, description: string) => {
    if (description.includes('Moneda') || description.includes('millones') || description.includes('USD')) {
      return `$ ${value.toFixed(2)}`;
    } else if (description.includes('Tasa') || description.includes('%') || description.includes('M2 privado')) {
      return `${value.toFixed(1)} %`;
    } else {
      return value.toString();
    }
  };

  const renderCards = (categoryData: Variable[]) =>
    categoryData.map((item) => (
      <Card key={item.idVariable} onClick={() => setSelectedVariable(item)}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{item.descripcion}</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {formatValue(item.valor, item.descripcion)}
          </div>
          <p className="text-xs text-muted-foreground">{item.fecha}</p>
        </CardContent>
      </Card>
    ));

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <section>
        <h2 className="text-lg font-semibold">Reservas Internacionales</h2>
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {renderCards(data.filter(item => item.idVariable === 1))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold">Tipo de Cambio</h2>
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {renderCards(data.filter(item => [4, 5].includes(item.idVariable)))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold">Tasas de Interés</h2>
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {renderCards(data.filter(item => [6, 7, 8, 9, 10, 11, 12, 13, 14].includes(item.idVariable)))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold">Base Monetaria y Circulación</h2>
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {renderCards(data.filter(item => [15,25].includes(item.idVariable)))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold">Depósitos y Préstamos</h2>
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {renderCards(data.filter(item => [16, 17, 18, 19, 20, 21, 22, 23, 24,26].includes(item.idVariable)))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold">Inflación</h2>
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {renderCards(data.filter(item => [27, 28 ].includes(item.idVariable)))}
        </div>
      </section>


      {selectedVariable && (
        <section ref={chartRef}>
          <VariableHistoryChart idVariable={selectedVariable.idVariable} descripcion={selectedVariable.descripcion} />
        </section>
      )}
    </main>
  );
};

export default DashboardPage;
