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
  

  export const fetchVariableHistory = async (idVariable: number) => {
    const today = new Date().toISOString().split('T')[0]; // Formato de fecha 'YYYY-MM-DD'
    const response = await fetch(
      `https://api.bcra.gob.ar/estadisticas/v2.0/datosvariable/${idVariable}/2024-01-01/${today}`
    );
    const data = await response.json();
    return data.results.map((item: any) => ({
      fecha: item.fecha,
      valor: item.valor,
    }));
  };
  