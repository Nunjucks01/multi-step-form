export interface Step {
  id: number;
  heading: string;
}

export interface Plan {
  id: number;
  icon: string;
  title: string;
  monthlyPrice: number;
  yearlyPrice: number;
  chosen: boolean;
}

export interface AddOn {
  title: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  chosen: boolean;
}
