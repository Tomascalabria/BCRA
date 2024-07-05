// pages/dashboard.tsx
'use client'

import { useEffect, useState } from 'react';
import { fetchPanelAccionesLideres, AccionLider } from '../../API/services/api';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const AccionesLideresTable: React.FC<{ data: AccionLider[] }> = ({ data }) => {
    // Limitar la cantidad de acciones mostradas a 10
    const limitedData = data.slice(0, 10);

    return (

            <div style={{ height: '40vh', overflowY: 'scroll' }}>
                <table className="p-2" style={{ width: '50%' }}>
                    <caption className="p-2">Panel de Acciones Líderes</caption>
                    <thead className="p-2">
                        <tr>
                            <th className="p-2">Símbolo</th>
                            <th className="p-2">Precio de Cierre Anterior</th>
                            <th className="p-2">Precio de Oferta</th>
                            <th className="p-2">Relación Precio de Cierre/Oferta</th>
                        </tr>
                    </thead>
                    <tbody>
                        {limitedData.map((accion) => {
                            const ratio = `${(accion.previousClosingPrice / accion.trade).toFixed(2)}%`;
                            if(accion.previousClosingPrice !=0){
                            return (
                                <tr key={accion.index} className="border-t">
                                    <td className="p-2 font-medium">{accion.symbol}</td>
                                    <td className="p-2">{accion.previousClosingPrice}</td>
                                    <td className="p-2">{accion.trade}</td>
                                    <td className="p-2">{ratio}</td>
                                </tr>
                            );
                        }
                        else{
                            return(
                                <></>
                            )
                        }
                        })}
                    </tbody>
                </table>
            </div>
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
