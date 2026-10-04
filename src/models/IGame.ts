import type {IDetails} from "@/models/IDetails";

export interface IGame {
  id: string,
  title: string;
  subtitle: string;
  description: string;
  users: number;
  createdAt: string;
  engine: string;
  languages: string[];
  platforms: string[];
  src: string;
  // Cover is generated concept art rather than real gameplay footage
  conceptCover?: boolean;
  role: string;
  status: "Shipped" | "Other";
  details: IDetails;
}