import { Search, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface DashboardHeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onAddStudent: () => void;
}

export const DashboardHeader = ({ searchQuery, onSearchChange, onAddStudent }: DashboardHeaderProps) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold neon-glow mb-2">
            EduVerse 2030
          </h1>
          <p className="text-muted-foreground text-lg">
            Next-Generation Student Management System
          </p>
        </div>
        <Button 
          onClick={onAddStudent}
          className="bg-gradient-cyber hover:opacity-90 gap-2"
        >
          <UserPlus className="w-4 h-4" />
          Add Student
        </Button>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          placeholder="Search by name, roll number, or department..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 neon-border"
        />
      </div>
    </div>
  );
};
