using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace grades
{
    public class Teacher
    {
        private string teacherName;
        private string studentName;
        private int[] grades;
        private int studentId;
        public Teacher() { }

        public Teacher(string _teacherName, string _studentName, int[] _grades, int _studentId)
        {
            teacherName = _teacherName;
            studentId = _studentId;
            studentName = _studentName;
            grades = _grades;
        }
        public string TeacherName
        {
            get { return teacherName; }
            set { teacherName = value; }
        }
        public int StudentId
        {

            get { return studentId; }
            set { studentId = value; }
        }
        public string StudentName
        {
            get { return studentName; }
            set { studentName = value; }
        }


        public int[] Grades
        {
            get { return grades; }
            set { grades = value; }
        }

    }
}
