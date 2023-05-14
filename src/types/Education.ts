export interface Education {
  id: number;
  institution: string;
  degree: string;
  startDate: Date | null;
  endDate: Date | null;
  description: string;
  userId: number;
}
