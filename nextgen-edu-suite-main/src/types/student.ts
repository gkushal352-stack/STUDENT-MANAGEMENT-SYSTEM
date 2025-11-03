export interface Student {
  id: string;
  name: string;
  rollNumber: string;
  department: string;
  year: number;
  email: string;
  phone: string;
  attendance: number;
  cgpa: number;
  status: "active" | "warning" | "inactive";
}
