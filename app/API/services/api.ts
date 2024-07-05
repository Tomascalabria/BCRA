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

import { format } from 'date-fns';

export const fetchVariableHistory = async (idVariable: number, startDate: string, endDate: string): Promise<Variable[]> => {
  try {
    const response = await fetch(`https://api.bcra.gob.ar/estadisticas/v2.0/datosvariable/${idVariable}/${startDate}/${endDate}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    const variables: Variable[] = data.results.map((item: any) => ({
      idVariable: item.idVariable,
      descripcion: item.descripcion,
      valor: item.valor,
      fecha: format(new Date(item.fecha), 'yyyy-MM-dd'), // Formatea la fecha si es necesario
    }));
    return variables;
  } catch (error) {
    console.error('Error fetching variable history:', error);
    throw error;
  }
};


// Definición de la interfaz para los datos de AccionLider
export interface AccionLider {
  index: number;
  tradeVolume: number;
  symbol: string;
  imbalance: number;
  previousSettlementPrice: number;
  offerPrice: number;
  vwap: number;
  numberOfOrders: number;
  openingPrice: number;
  securityDesc: string;
  securitySubType: string;
  previousClosingPrice: string;
  settlementType: number;
  quantityOffer: number;
  tradingHighPrice: number;
  denominationCcy: string;
  bidPrice: number;
  tradingLowPrice: number;
  market: string;
  volumeAmount: number;
  volume: number;
  trade: number; // Nueva columna agregada
  tradeHour: number; // Nueva columna agregada
  securityType: string; // Nueva columna agregada
  closingPrice: number; // Nueva columna agregada
  settlementPrice: number; // Nueva columna agregada
  quantityBid: number; // Nueva columna agregada
}

// Función para fetch de los datos de Acciones Líderes
export async function fetchPanelAccionesLideres(): Promise<AccionLider[]> {
  const headers = {
      'Connection': 'keep-alive',
      'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'sec-ch-ua-mobile': '?0',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36',
      'sec-ch-ua-platform': '"Windows"',
      'Origin': 'https://open.bymadata.com.ar',
      'Sec-Fetch-Site': 'same-origin',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Dest': 'empty',
      'Referer': 'https://open.bymadata.com.ar/',
      'Accept-Language': 'es-US,es-419;q=0.9,es;q=0.8,en;q=0.7',
  };

  const data = {
      excludeZeroPxAndQty: false,
      T2: false,
      T1: true,
      T0: false,
      'Content-Type': 'application/json',
  };

  const response = await fetch('https://open.bymadata.com.ar/vanoms-be-core/rest/api/bymadata/free/leading-equity', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data),
  });

  if (!response.ok) {
      throw new Error('Failed to fetch panel de acciones líderes');
  }

  const responseData = await response.json();
  const accionesLideres: AccionLider[] = responseData.data.map((item: any) => ({
      index: item.index,
      tradeVolume: item.tradeVolume,
      symbol: item.symbol,
      imbalance: item.imbalance,
      previousSettlementPrice: item.previousSettlementPrice,
      offerPrice: item.offerPrice,
      vwap: item.vwap,
      numberOfOrders: item.numberOfOrders,
      openingPrice: item.openingPrice,
      securityDesc: item.securityDesc,
      securitySubType: item.securitySubType,
      previousClosingPrice: item.previousClosingPrice,
      settlementType: item.settlementType,
      quantityOffer: item.quantityOffer,
      tradingHighPrice: item.tradingHighPrice,
      denominationCcy: item.denominationCcy,
      bidPrice: item.bidPrice,
      tradingLowPrice: item.tradingLowPrice,
      market: item.market,
      volumeAmount: item.volumeAmount,
      volume: item.volume,
      trade: item.trade, // Asigna los valores de las nuevas columnas
      tradeHour: item.tradeHour,
      securityType: item.securityType,
      closingPrice: item.closingPrice,
      settlementPrice: item.settlementPrice,
      quantityBid: item.quantityBid,
  }));

  return accionesLideres;
}
