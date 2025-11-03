import { Edit, Trash2, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Student } from "@/types/student";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface StudentsTableProps {
  students: Student[];
  onEdit: (id: string, student: Partial<Student>) => void;
  onDelete: (id: string) => void;
}

export const StudentsTable = ({ students, onEdit, onDelete }: StudentsTableProps) => {
  const getStatusBadge = (status: Student["status"]) => {
    const variants = {
      active: "bg-neon-cyan/20 text-neon-cyan border-neon-cyan/50",
      warning: "bg-yellow-500/20 text-yellow-500 border-yellow-500/50",
      inactive: "bg-destructive/20 text-destructive border-destructive/50",
    };
    return variants[status];
  };

  const getAttendanceColor = (attendance: number) => {
    if (attendance >= 85) return "text-neon-cyan";
    if (attendance >= 75) return "text-yellow-500";
    return "text-destructive";
  };

  return (
    <Card className="glass-card p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Student Records</h2>
        <Badge variant="outline" className="neon-border">
          {students.length} Students
        </Badge>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-border hover:bg-transparent">
              <TableHead>Roll No.</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Year</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Attendance</TableHead>
              <TableHead>CGPA</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id} className="border-border hover:bg-muted/50">
                <TableCell className="font-mono">{student.rollNumber}</TableCell>
                <TableCell className="font-semibold">{student.name}</TableCell>
                <TableCell>{student.department}</TableCell>
                <TableCell>Year {student.year}</TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1 text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Mail className="w-3 h-3" />
                      {student.email}
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Phone className="w-3 h-3" />
                      {student.phone}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className={`font-semibold ${getAttendanceColor(student.attendance)}`}>
                    {student.attendance}%
                  </span>
                </TableCell>
                <TableCell className="font-semibold">{student.cgpa}</TableCell>
                <TableCell>
                  <Badge variant="outline" className={getStatusBadge(student.status)}>
                    {student.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex gap-2 justify-end">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => onEdit(student.id, student)}
                      className="hover:bg-neon-blue/20 hover:text-neon-blue"
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => onDelete(student.id)}
                      className="hover:bg-destructive/20 hover:text-destructive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};
