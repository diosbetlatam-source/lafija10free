export const TELEGRAM_URL = "https://t.me/lafijabot10";

export const stats = [
  { value: "20+", label: "Señales por día" },
  { value: "12.4K+", label: "Miembros activos" },
  { value: "50K+", label: "Señales enviadas" },
  { value: "$0", label: "Costo para entrar" },
];

export const tickerSignals = [
  { match: "River Plate x Boca Juniors", tag: "Entrada fuerte", odd: "2.10" },
  { match: "Racing x Independiente", tag: "Presión en vivo", odd: "1.85" },
  { match: "Vélez x San Lorenzo", tag: "Movimiento de cuota", odd: "2.45" },
  { match: "Real Madrid x Barcelona", tag: "Entrada fuerte", odd: "1.72" },
  { match: "PSG x Marsella", tag: "Presión en vivo", odd: "2.05" },
  { match: "Talleres x Belgrano", tag: "Movimiento de cuota", odd: "2.30" },
];

export const steps = [
  {
    number: "01",
    title: "Entrá al grupo",
    description:
      "Hacé clic en \"Unite gratis al grupo\" y ya estás adentro del Telegram. Sin registro, sin tarjeta, sin trampa.",
  },
  {
    number: "02",
    title: "Recibí la señal al toque",
    description:
      "Apenas una cuota se mueve fuerte o un equipo genera presión real en el partido, la señal te llega al Telegram con el contexto completo.",
  },
  {
    number: "03",
    title: "Decidí con estrategia",
    description:
      "Cada señal explica el porqué, no solo el pronóstico. Entrás a la apuesta sabiendo exactamente qué estás leyendo.",
  },
];

export const features = [
  {
    icon: "TrendingUp",
    title: "Movimiento de cuotas en tiempo real",
    description:
      "Monitoreamos las principales casas todo el tiempo y te avisamos cuando una cuota baja fuerte, señal de entrada pesada de apostadores.",
  },
  {
    icon: "Activity",
    title: "Lectura de presión en vivo",
    description:
      "Córners, tiros al arco y posesión en partidos ajustados. Leemos el partido para que no te pierdas el momento justo.",
  },
  {
    icon: "BookOpen",
    title: "Estrategia explicada",
    description:
      "Nada de pronóstico pelado sin explicación. Cada señal viene con el razonamiento detrás, para que aprendas a leer el mercado.",
  },
  {
    icon: "Gift",
    title: "100% gratis, siempre",
    description:
      "Sin mensualidad, sin grupo VIP escondido atrás de un paywall. El canal público es gratis y sigue así.",
  },
  {
    icon: "Send",
    title: "Directo en Telegram",
    description:
      "Sin apps nuevas para instalar, sin contraseña nueva para recordar. Si ya usás Telegram, estás a un clic de distancia.",
  },
  {
    icon: "ShieldCheck",
    title: "Aviso en cada señal",
    description:
      "La señal es una herramienta de información, no una promesa de resultado. Cada alerta refuerza: apostá con responsabilidad.",
  },
];

// Espacios para capturas reales de miembros (resultado, retiro, etc). Cambiá
// las imágenes en /public/proof/ y ajustá los textos cuando tengas el material definitivo.
export const proofSlots = [
  { id: 1, caption: "Captura enviada por un miembro del grupo" },
  { id: 2, caption: "Captura enviada por un miembro del grupo" },
  { id: 3, caption: "Captura enviada por un miembro del grupo" },
  { id: 4, caption: "Captura enviada por un miembro del grupo" },
  { id: 5, caption: "Captura enviada por un miembro del grupo" },
  { id: 6, caption: "Captura enviada por un miembro del grupo" },
];

export const faq = [
  {
    question: "¿La Fija 10 garantiza que voy a ganar?",
    answer:
      "No, y desconfiá de quien prometa eso. Nuestra inteligencia artificial analiza en tiempo real el movimiento de cuotas de las principales casas y te avisa apenas detecta una entrada fuerte, pero ninguna herramienta garantiza el 100% de acierto. Es información para que decidas mejor, no una promesa de resultado. Apostar implica riesgo. Jugá con responsabilidad.",
  },
  {
    question: "¿Es pago? ¿Hay grupo VIP?",
    answer:
      "No. El canal es 100% gratis y no existe una versión paga escondida. Lo que recibís en el grupo gratis es lo que hay.",
  },
  {
    question: "¿Tengo que instalar alguna app además de Telegram?",
    answer:
      "No. Solo Telegram, que probablemente ya tenés instalado. Hacé clic en entrar y el canal se abre directo en la app.",
  },
  {
    question: "¿Las señales sirven para cualquier casa de apuestas?",
    answer:
      "La señal muestra el movimiento de la cuota y el contexto del partido. Dónde apostar es decisión tuya, comparamos el mercado, no empujamos ninguna casa en particular.",
  },
  {
    question: "¿Voy a recibir spam o mensajes todo el tiempo?",
    answer:
      "No. Al grupo solo entran señales relevantes, sin notificaciones aleatorias llenándote el Telegram todo el día.",
  },
];
