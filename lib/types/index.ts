// Types for the simulator
export interface UserProfile {
  id: string;
  name: string;
  email: string;
  level: number;
  points: number;
  achievements: string[];
}

export interface RiskProfile {
  propertyType: string;
  concerns: string[];
  location: string;
  budget: string;
  riskLevel: "low" | "medium" | "high" | "critical";
  recommendedLevel: "basic" | "turbo" | "industrial";
}

export interface Product {
  id: string;
  category: string;
  barrierLevel: 1 | 2 | 3;
  name: string;
  description: string;
  price: number;
  coverageRange: number;
  specs: Record<string, any>;
  imageUrl?: string;
}

export interface PlacedDevice {
  id: string;
  productId: string;
  x: number;
  y: number;
  rotation: number;
}

export interface Project {
  id: string;
  userId: string;
  name: string;
  type: string;
  planData: {
    width: number;
    height: number;
    devices: PlacedDevice[];
    walls: any[];
  };
  riskProfile: RiskProfile;
  securityScore: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Quote {
  id: string;
  projectId: string;
  items: QuoteItem[];
  subtotal: number;
  iva: number;
  total: number;
  status: "draft" | "sent" | "accepted" | "rejected";
  paymentMethod?: string;
  createdAt: Date;
}

export interface QuoteItem {
  productId: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  badgeIcon: string;
  pointsRequired: number;
}

export interface Simulation {
  id: string;
  projectId: string;
  scenarioType: "intruder" | "power-outage" | "drone" | "fire";
  resultScore: number;
  vulnerabilities: string[];
  createdAt: Date;
}
