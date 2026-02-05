import { Product } from "../types";

// Sample products catalog for Triple Barrera de Seguridad
export const products: Product[] = [
  // BARRERA 1: PERÍMETRO INTELIGENTE
  {
    id: "p1-cerco-80m",
    category: "Cerco Eléctrico",
    barrierLevel: 1,
    name: "Cerco Eléctrico Certificado 80m",
    description: "Sistema de cerco eléctrico de alta tensión, certificado y seguro",
    price: 450000,
    coverageRange: 80,
    specs: {
      voltage: "10,000V",
      pulseRate: "1 pulse/second",
      warranty: "2 años"
    }
  },
  {
    id: "p1-sensor-valla",
    category: "Sensor de Perímetro",
    barrierLevel: 1,
    name: "Sensor de Valla/Malla",
    description: "Detector de vibración y corte para mallas perimetrales",
    price: 85000,
    coverageRange: 20,
    specs: {
      sensitivity: "Ajustable",
      range: "20 metros",
      weatherproof: "IP67"
    }
  },
  {
    id: "p1-barrera-ir",
    category: "Barrera Infrarroja",
    barrierLevel: 1,
    name: "Barrera Infrarroja Doble Haz",
    description: "Barrera perimetral de doble haz infrarrojo",
    price: 120000,
    coverageRange: 50,
    specs: {
      range: "50 metros",
      beams: "Doble haz",
      antimasking: "Sí"
    }
  },
  {
    id: "p1-sirena",
    category: "Sirena",
    barrierLevel: 1,
    name: "Sirena Exterior 120dB",
    description: "Sirena de alta potencia con luz estroboscópica",
    price: 65000,
    coverageRange: 100,
    specs: {
      volume: "120dB",
      strobe: "Sí",
      backup: "Batería interna"
    }
  },

  // BARRERA 2: ENTORNO Y OPERACIÓN
  {
    id: "p2-camara-ia",
    category: "Cámara IP",
    barrierLevel: 2,
    name: "Cámara IP 4K con IA",
    description: "Cámara 4K con detección inteligente de personas, vehículos y objetos",
    price: 280000,
    coverageRange: 30,
    specs: {
      resolution: "4K (8MP)",
      nightVision: "Hasta 30m",
      ai: "Detección de personas/vehículos",
      weatherproof: "IP67"
    }
  },
  {
    id: "p2-camara-ptz",
    category: "Cámara PTZ",
    barrierLevel: 2,
    name: "Cámara PTZ 360° con Seguimiento",
    description: "Cámara Pan-Tilt-Zoom con seguimiento automático",
    price: 520000,
    coverageRange: 50,
    specs: {
      resolution: "4K",
      zoom: "20x óptico",
      tracking: "Automático",
      nightVision: "50m"
    }
  },
  {
    id: "p2-sensor-movimiento",
    category: "Sensor IoT",
    barrierLevel: 2,
    name: "Sensor de Movimiento PIR",
    description: "Sensor pasivo infrarrojo para detección de movimiento",
    price: 35000,
    coverageRange: 12,
    specs: {
      range: "12 metros",
      angle: "110°",
      petImmunity: "Hasta 25kg"
    }
  },
  {
    id: "p2-iluminacion",
    category: "Iluminación",
    barrierLevel: 2,
    name: "Iluminación LED Inteligente",
    description: "Sistema de iluminación LED controlado automáticamente",
    price: 95000,
    coverageRange: 25,
    specs: {
      lumens: "3000lm",
      control: "Automático/Manual",
      sensorIntegrado: "Sí"
    }
  },

  // BARRERA 3: INTERIOR Y PERSONAS
  {
    id: "p3-control-biometrico",
    category: "Control de Acceso",
    barrierLevel: 3,
    name: "Control de Acceso Biométrico",
    description: "Terminal de huella digital y tarjeta RFID",
    price: 340000,
    coverageRange: 1,
    specs: {
      capacity: "3000 huellas",
      rfid: "Sí",
      display: "Touch 4.3\"",
      backup: "Batería interna"
    }
  },
  {
    id: "p3-citofono-hipcam",
    category: "Citófono",
    barrierLevel: 3,
    name: "Citófono Inteligente HIPCAM",
    description: "Videoportero con app móvil y grabación en nube",
    price: 185000,
    coverageRange: 1,
    specs: {
      display: "7\" HD",
      app: "iOS/Android",
      recording: "Cloud/Local",
      nightVision: "Sí"
    }
  },
  {
    id: "p3-boton-panico",
    category: "Botón de Pánico",
    barrierLevel: 3,
    name: "Botón de Pánico Inalámbrico",
    description: "Botón de emergencia con señal RF",
    price: 28000,
    coverageRange: 50,
    specs: {
      range: "50 metros",
      battery: "3 años",
      waterproof: "IPX4"
    }
  },
  {
    id: "p3-detector-humo",
    category: "Detector de Incendio",
    barrierLevel: 3,
    name: "Detector de Humo IoT",
    description: "Detector de humo con conectividad IoT",
    price: 45000,
    coverageRange: 20,
    specs: {
      type: "Fotoeléctrico",
      connectivity: "WiFi",
      battery: "10 años"
    }
  },

  // EXTRAS
  {
    id: "ex-ups-3000w",
    category: "Respaldo Energético",
    barrierLevel: 1,
    name: "UPS 3000W",
    description: "Sistema de respaldo de energía ininterrumpida",
    price: 450000,
    coverageRange: 0,
    specs: {
      power: "3000W",
      runtime: "4-8 horas",
      outlets: "8 salidas"
    }
  },
  {
    id: "ex-nvr-16ch",
    category: "Grabador NVR",
    barrierLevel: 2,
    name: "NVR 16 Canales 4K",
    description: "Grabador de video en red para hasta 16 cámaras",
    price: 380000,
    coverageRange: 0,
    specs: {
      channels: "16",
      resolution: "4K",
      storage: "4TB incluido",
      ai: "Analítica de video"
    }
  }
];

// Property types
export const propertyTypes = [
  { value: "residential", label: "Residencial (Casa/Departamento)" },
  { value: "commercial", label: "Comercial (Oficina/Local)" },
  { value: "industrial", label: "Industrial (Fábrica/Bodega)" },
  { value: "educational", label: "Educacional (Colegio/Universidad)" },
  { value: "government", label: "Gubernamental (Municipalidad)" }
];

// Security concerns
export const securityConcerns = [
  { value: "robbery", label: "Robos e intrusiones" },
  { value: "vandalism", label: "Vandalismo" },
  { value: "fire", label: "Incendios" },
  { value: "access-control", label: "Control de acceso" },
  { value: "monitoring", label: "Monitoreo 24/7" },
  { value: "perimeter", label: "Protección perimetral" },
  { value: "drones", label: "Amenazas aéreas (drones)" }
];

// Budget ranges
export const budgetRanges = [
  { value: "under-1m", label: "Menos de $1.000.000" },
  { value: "1m-3m", label: "$1.000.000 - $3.000.000" },
  { value: "3m-5m", label: "$3.000.000 - $5.000.000" },
  { value: "5m-10m", label: "$5.000.000 - $10.000.000" },
  { value: "over-10m", label: "Más de $10.000.000" }
];
