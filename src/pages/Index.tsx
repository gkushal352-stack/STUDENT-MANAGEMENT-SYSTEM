import { useState } from "react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { StatsGrid } from "@/components/dashboard/StatsGrid";
import { StudentsTable } from "@/components/students/StudentsTable";
import { AddStudentDialog } from "@/components/students/AddStudentDialog";
import { Student } from "@/types/student";

const Index = () => {
  const [students, setStudents] = useState<Student[]>([
    {
      id: "1",
      name: "Naveen Kumar",
      rollNumber: "CS2021001",
      department: "Computer Science",
      year: 2,
      email: "naveen@eduverse.com",
      phone: "+91 9876543210",
      attendance: 87,
      cgpa: 8.7,
      status: "active",
    },
    {
      id: "2",
      name: "Priya Sharma",
      rollNumber: "CS2021002",
      department: "Computer Science",
      year: 2,
      email: "priya@eduverse.com",
      phone: "+91 9876543211",
      attendance: 92,
      cgpa: 9.1,
      status: "active",
    },
    {
      id: "3",
      name: "Rahul Verma",
      rollNumber: "EC2021003",
      department: "Electronics",
      year: 3,
      email: "rahul@eduverse.com",
      phone: "+91 9876543212",
      attendance: 65,
      cgpa: 6.8,
      status: "warning",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const handleAddStudent = (student: Omit<Student, "id">) => {
    const newStudent: Student = {
      ...student,
      id: Date.now().toString(),
    };
    setStudents([...students, newStudent]);
    setIsAddDialogOpen(false);
  };

  const handleEditStudent = (id: string, updatedStudent: Partial<Student>) => {
    setStudents(students.map(s => s.id === id ? { ...s, ...updatedStudent } : s));
  };

  const handleDeleteStudent = (id: string) => {
    setStudents(students.filter(s => s.id !== id));
  };

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.rollNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6 space-y-8">
        <DashboardHeader
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onAddStudent={() => setIsAddDialogOpen(true)}
        />
        
        <StatsGrid students={students} />
        
        <StudentsTable
          students={filteredStudents}
          onEdit={handleEditStudent}
          onDelete={handleDeleteStudent}
        />

        <AddStudentDialog
          open={isAddDialogOpen}
          onOpenChange={setIsAddDialogOpen}
          onSubmit={handleAddStudent}
        />
      </div>
    </div>
  );
};

export default Index;
