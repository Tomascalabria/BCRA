interface Variable {
    idVariable: number;
    descripcion: string;
    valor: number;
    fecha: string;
  }
  
  export const fetchDailyVariables = async (): Promise<Variable[]> => {
    try {
      const response = await fetch('https://api.bcra.gob.ar/estadisticas/v2.0/principalesvariables');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      const variables: Variable[] = data.results.map((item: any) => ({
        idVariable: item.idVariable,
        descripcion: item.descripcion,
        valor: item.valor,
        fecha: item.fecha,
      }));
      return variables;
    } catch (error) {
      console.error('Error fetching daily variables:', error);
      throw error;
    }
  };
  
// api.ts (or wherever your API functions are defined)

export const fetchVariableHistory = async (idVariable: number, startDate: string, endDate: string): Promise<[]> => {
    try {
      const response = await fetch(`https://api.bcra.gob.ar/estadisticas/v2.0/datosvariable/${idVariable}/${startDate}/${endDate}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching variable history:', error);
      throw error;
    }
  };
  