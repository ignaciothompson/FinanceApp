export interface Account {
  id: number;
  name: string;
  symbol: string;
  balance: number;
  investments: {} | null;
}

export interface DashboardData {
  accounts: Account[];
  // investments: Investment[];
  // symbols: Symbol[];
}

export interface Investment {
  // Define properties based on your schema
}

export interface Symbol {
  // Define properties based on your schema
}
