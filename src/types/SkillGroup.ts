import { Skill } from "./Skill";

export interface SkillGroup {
  id: number;
  type: string;
  items: Skill[];
  userId: number;
}
