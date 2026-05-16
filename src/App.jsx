// App.jsx
import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Sun, 
  DollarSign, 
  Leaf, 
  TrendingUp, 
  Clock,
  Calendar
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar
} from 'recharts';

const App = () => {
  // Dados aleatórios realistas
  const [dados, setDados] = useState({
    consumoTotal: 1247,
    producaoSolar: 683,
    economia: 1247.50,
    co2Evitado: 892,
    eficiencia: 94,
    picoDemanda: "18:45",
    dataAtual: new Date().toLocaleDateString('pt-BR', { 
      weekday: 'long', 
      day: '2-digit', 
      month: 'long' 
    })
  });

  // Dados para gráficos
  const consumoDiario = [
    { hora: '06h', consumo: 45, producao: 12 },
    { hora: '08h', consumo: 78, producao: 65 },
    { hora: '10h', consumo: 92, producao: 145 },
    { hora: '12h', consumo: 85, producao: 198 },
    { hora: '14h', consumo: 110, producao: 175 },
    { hora: '16h', consumo: 135, producao: 98 },
    { hora: '18h', consumo: 168, producao: 23 },
    { hora: '20h', consumo: 142, producao: 8 },
    { hora: '22h', consumo: 95, producao: 2 },
  ];

  const fontesEnergia = [
    { name: 'Solar', value: 683, cor: '#facc15' },
    { name: 'Rede', value: 564, cor: '#3b82f6' },
    { name: 'Bateria', value: 0, cor: '#22c55e' },
  ];

  const consumoSemanal = [
    { dia: 'Seg', consumo: 980 },
    { dia: 'Ter', consumo: 1150 },
    { dia: 'Qua', consumo: 890 },
    { dia: 'Qui', consumo: 1320 },
    { dia: 'Sex', consumo: 1247 },
    { dia: 'Sáb', consumo: 760 },
    { dia: 'Dom', consumo: 680 },
  ];

  // Atualiza dados aleatórios a cada refresh
  useEffect(() => {
    const consumo = Math.floor(Math.random() * 600) + 950;
    const producao = Math.floor(Math.random() * 400) + 450;
    
    setDados({
      consumoTotal: consumo,
      producaoSolar: producao,
      economia: (consumo * 0.85).toFixed(2),
      co2Evitado: Math.floor(consumo * 0.65),
      eficiencia: Math.floor(Math.random() * 8) + 91,
      picoDemanda: `${Math.floor(Math.random()*4)+17}:${Math.floor(Math.random()*50)+10}`,
      dataAtual: new Date().toLocaleDateString('pt-BR', { 
        weekday: 'long', 
        day: '2-digit', 
        month: 'long' 
      })
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900 py-6">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-yellow-500 rounded-xl">
              <Zap className="w-8 h-8 text-black" />
            </div>
            <div>
              <h1 className="text-4xl font-bold tracking-tight">Painel de Energia</h1>
              <p className="text-gray-400">Sistema de Monitoramento • Recife, PE</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-emerald-400">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              Sistema Online
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              {dados.dataAtual}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-8 py-10">
        {/* Cards de Métricas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Card 1 */}
          <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 hover:border-yellow-500/30 transition-all">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-400 text-sm">Consumo Hoje</p>
                <p className="text-5xl font-bold mt-3">{dados.consumoTotal} <span className="text-2xl font-normal text-gray-400">kWh</span></p>
              </div>
              <Zap className="w-12 h-12 text-yellow-500" />
            </div>
            <div className="mt-6 text-emerald-400 text-sm flex items-center gap-1">
              <TrendingUp className="w-4 h-4" /> -8% em relação a ontem
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 hover:border-yellow-500/30 transition-all">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-400 text-sm">Produção Solar</p>
                <p className="text-5xl font-bold mt-3 text-yellow-400">{dados.producaoSolar} <span className="text-2xl font-normal text-gray-400">kWh</span></p>
              </div>
              <Sun className="w-12 h-12 text-yellow-400" />
            </div>
            <div className="mt-6 text-emerald-400 text-sm">Cobriu {Math.round((dados.producaoSolar / dados.consumoTotal) * 100)}% da demanda</div>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 hover:border-yellow-500/30 transition-all">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-400 text-sm">Economia Estimada</p>
                <p className="text-5xl font-bold mt-3 text-emerald-400">R$ {dados.economia}</p>
              </div>
              <DollarSign className="w-12 h-12 text-emerald-400" />
            </div>
            <div className="mt-6 text-sm text-gray-400">Este mês: R$ 3.874,20</div>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 hover:border-yellow-500/30 transition-all">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-400 text-sm">CO₂ Evitado</p>
                <p className="text-5xl font-bold mt-3">{dados.co2Evitado} <span className="text-2xl font-normal text-gray-400">kg</span></p>
              </div>
              <Leaf className="w-12 h-12 text-emerald-500" />
            </div>
            <div className="mt-6 text-sm text-emerald-400">Equivalente a 12 árvores plantadas</div>
          </div>
        </div>

        {/* Gráficos */}
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
          {/* Consumo por Hora */}
          <div className="lg:col-span-4 bg-gray-900 rounded-3xl p-8 border border-gray-800">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-semibold">Consumo vs Produção</h2>
                <p className="text-gray-400">Hoje • {new Date().toLocaleDateString('pt-BR')}</p>
              </div>
              <div className="flex gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-0.5 bg-sky-400"></div>
                  Consumo
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-0.5 bg-yellow-400"></div>
                  Produção Solar
                </div>
              </div>
            </div>

            <ResponsiveContainer width="100%" height={380}>
              <LineChart data={consumoDiario}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="hora" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#111827', 
                    border: 'none', 
                    borderRadius: '8px',
                    color: 'white'
                  }} 
                />
                <Line 
                  type="natural" 
                  dataKey="consumo" 
                  stroke="#38bdf8" 
                  strokeWidth={4}
                  dot={{ fill: '#38bdf8', r: 5 }}
                />
                <Line 
                  type="natural" 
                  dataKey="producao" 
                  stroke="#eab308" 
                  strokeWidth={4}
                  dot={{ fill: '#eab308', r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Fontes de Energia */}
          <div className="lg:col-span-3 bg-gray-900 rounded-3xl p-8 border border-gray-800">
            <h2 className="text-2xl font-semibold mb-8">Fontes de Energia</h2>
            
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={fontesEnergia}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  dataKey="value"
                >
                  {fontesEnergia.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.cor} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>

            <div className="grid grid-cols-3 gap-4 mt-8">
              {fontesEnergia.map((fonte, i) => (
                <div key={i} className="text-center">
                  <div 
                    className="w-4 h-4 mx-auto rounded-full mb-2" 
                    style={{ backgroundColor: fonte.cor }}
                  />
                  <p className="font-medium">{fonte.name}</p>
                  <p className="text-2xl font-bold mt-1">{fonte.value} kWh</p>
                </div>
              ))}
            </div>
          </div>

          {/* Consumo Semanal */}
          <div className="lg:col-span-7 bg-gray-900 rounded-3xl p-8 border border-gray-800">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-semibold">Consumo Semanal</h2>
              <div className="text-sm text-gray-400">Últimos 7 dias</div>
            </div>

            <ResponsiveContainer width="100%" height={320}>
              <BarChart data={consumoSemanal}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="dia" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#111827', 
                    border: 'none', 
                    borderRadius: '8px' 
                  }} 
                />
                <Bar dataKey="consumo" fill="#6366f1" radius={8} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          Painel de Energia • Dados simulados com valores realistas • Atualizado em tempo real
        </div>
      </div>
    </div>
  );
};

export default App;