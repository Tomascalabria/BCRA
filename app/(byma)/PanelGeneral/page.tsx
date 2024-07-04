// pages/dashboard.tsx
'use client'

// pages/dashboard.tsx

import { useEffect, useState } from 'react';
import { fetchPanelAccionesLideres, AccionLider } from '../../API/services/api';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const AccionesLideresTable: React.FC<{ data: AccionLider[] }> = ({ data }) => {
    return (
        <table className="p2        ">
            <caption className="p2">Panel de Acciones Líderes</caption>
            <thead className="p2">
                <tr>
                <th className="p-2">Símbolo</th>
               <th className="p-2">Precio de Cierre Anterior</th>
               <th className="p-2">Volumen de Comercio</th>
               <th className="p-2">Mercado</th>
               <th className="p-2 text-right">Cantidad de Volumen</th>
               <th className="p-2">Operación</th> {/* Nueva columna */}
               <th className="p-2">Hora de Operación</th> {/* Nueva columna */}
               <th className="p-2">Tipo de Seguridad</th> {/* Nueva columna */}
               <th className="p-2">Precio de Cierre</th> {/* Nueva columna */}
               <th className="p-2">Precio de Liquidación</th> {/* Nueva columna */}
               <th className="p-2">Cantidad de Oferta</th> {/* Nueva columna */}
               <th className="p-2">Desbalance</th>
               <th className="p-2">Precio de Liquidación Anterior</th>
               <th className="p-2">Precio de Oferta</th>
               <th className="p-2">VWAP</th>
               <th className="p-2">Número de Órdenes</th>
               <th className="p-2">Precio de Apertura</th>
               <th className="p-2">Descripción de Seguridad</th>
               <th className="p-2">Subtipo de Seguridad</th>
               <th className="p-2">Tipo de Liquidación</th>
               <th className="p-2">Precio Alto de Comercio</th>
               <th className="p-2">Moneda de Denominación</th>
               <th className="p-2">Precio de Oferta</th>
               <th className="p-2">Precio Bajo de Comercio</th>
               <th className="p-2">Volumen</th>
               <th className="p-2">Cantidad de Oferta</th>
            
                </tr>
            </thead>
            <tbody>
                {data.map((accion) => (
                    <tr key={accion.index} className="border-t">
                           <td className="p-2 font-medium">{accion.symbol}</td>
                            <td className="p-2">{accion.previousClosingPrice}</td>
                            <td className="p-2">{accion.tradeVolume}</td>
                            <td className="p-2">{accion.market}</td>
                            <td className="p-2 text-right">{accion.volumeAmount}</td>
                            <td className="p-2">{accion.trade}</td>
                            <td className="p-2">{accion.tradeHour}</td>
                            <td className="p-2">{accion.securityType}</td>
                            <td className="p-2">{accion.closingPrice}</td>
                            <td className="p-2">{accion.settlementPrice}</td>
                            <td className="p-2">{accion.quantityBid}</td>
                            <td className="p-2">{accion.imbalance}</td>
                            <td className="p-2">{accion.previousSettlementPrice}</td>
                            <td className="p-2">{accion.offerPrice}</td>
                            <td className="p-2">{accion.vwap}</td>
                            <td className="p-2">{accion.numberOfOrders}</td>
                            <td className="p-2">{accion.openingPrice}</td>
                            <td className="p-2">{accion.securityDesc}</td>
                            <td className="p-2">{accion.securitySubType}</td>
                            <td className="p-2">{accion.settlementType}</td>
                            <td className="p-2">{accion.tradingHighPrice}</td>
                            <td className="p-2">{accion.denominationCcy}</td>
                            <td className="p-2">{accion.bidPrice}</td>
                            <td className="p-2">{accion.tradingLowPrice}</td>
                            <td className="p-2">{accion.volume}</td>
                            <td className="p-2">{accion.quantityOffer}</td>

                    </tr>
                ))}
            </tbody>
        </table>
    );
};

// Componente de página Dashboard que utiliza AccionesLideresTable
const DashboardPage: React.FC = () => {
    const [panelData, setPanelData] = useState<AccionLider[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchPanelAccionesLideres();
                setPanelData(data);
            } catch (error) {
                console.error('Error fetching panel de acciones líderes:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="p-4">
            {panelData ? (
                <AccionesLideresTable data={panelData} />
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
};

export default DashboardPage;
