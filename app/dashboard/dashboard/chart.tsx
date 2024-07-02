import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { zodResolver } from "@hookform/resolvers/zod";
import { format, subYears } from "date-fns";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { fetchVariableHistory } from '../../API/services/api';
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface Variable {
  idVariable: number;
  descripcion: string;
  valor: number;
  fecha: string;
}

const FormSchema = z.object({
  startDate: z.date({
    required_error: "Es necesaria una fecha de inicio.",
  }),
  endDate: z.date({
    required_error: "Es necesaria una fecha de fin.",
  }),
});

const VariableHistoryChart: React.FC<{ idVariable: number; descripcion: string; }> = ({ idVariable, descripcion }) => {
  const [data, setData] = useState<Variable[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const fetchData = (startDate: string, endDate: string) => {
    setLoading(true);
    console.log(`Fetching data from ${startDate} to ${endDate}`);
    fetchVariableHistory(idVariable, startDate, endDate)
      .then((response) => {
        console.log('API response:', response);
        const formattedData: Variable[] = response.map((item: any) => ({
          idVariable: item.idVariable,
          descripcion: item.descripcion,
          valor: item.valor,
          fecha: item.fecha,
        }));
        setData(formattedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    const today = new Date();
    const oneYearAgo = subYears(today, 1);
    fetchData(oneYearAgo.toISOString().split('T')[0], today.toISOString().split('T')[0]);
  }, [idVariable]);

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    const startDate = data.startDate.toISOString().split('T')[0];
    const endDate = data.endDate.toISOString().split('T')[0];
    fetchData(startDate, endDate);
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2 className="text-lg font-semibold">{descripcion}</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex flex-wrap items-end space-x-4">
            <FormField
              control={form.control}
              name="startDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className="w-[240px] pl-3 text-left font-normal"
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Seleccionar fecha</span>
                          )}
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription style={{ textAlign: 'center' }}>
                    Elija la fecha de inicio.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="endDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className="w-[240px] pl-3 text-left font-normal"
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Seleccionar fecha</span>
                          )}
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription style={{ textAlign: 'center' }}>
                    Elija la fecha de fin.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" style={{marginTop:'30px'}}>Obtener Datos</Button>
          </div>
        </form>
      </Form>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="4 4" />
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
