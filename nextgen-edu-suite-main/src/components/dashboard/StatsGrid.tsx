import { Users, TrendingUp, AlertTriangle, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Student } from "@/types/student";

interface StatsGridProps {
  students: Student[];
}

export const StatsGrid = ({ students }: StatsGridProps) => {
  const totalStudents = students.length;
  const averageAttendance = students.reduce((acc, s) => acc + s.attendance, 0) / totalStudents;
  const averageCGPA = students.reduce((acc, s) => acc + s.cgpa, 0) / totalStudents;
  const lowAttendance = students.filter(s => s.attendance < 75).length;

  const stats = [
    {
      title: "Total Students",
      value: totalStudents,
      icon: Users,
      color: "text-neon-cyan",
    },
    {
      title: "Avg. Attendance",
      value: `${averageAttendance.toFixed(1)}%`,
      icon: TrendingUp,
      color: "text-neon-blue",
    },
    {
      title: "Avg. CGPA",
      value: averageCGPA.toFixed(2),
      icon: GraduationCap,
      color: "text-neon-purple",
    },
    {
      title: "Low Attendance",
      value: lowAttendance,
      icon: AlertTriangle,
      color: "text-destructive",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.title} className="glass-card p-6 hover:scale-105 transition-transform">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm mb-1">{stat.title}</p>
                <p className="text-3xl font-bold">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg bg-card/50`}>
                <Icon className="w-6 h-6" />
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};
