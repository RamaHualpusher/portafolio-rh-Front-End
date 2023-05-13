export interface Education {
  id: number;
  institution: string;
  degree: string;
  from: Date | null;
  to: Date | null;
  description: string;
  userId: number;
}
