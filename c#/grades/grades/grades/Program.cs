using grades;
using System.Collections.Generic;

List<Teacher> TeacherList = new List<Teacher>();
void AllStudentDetails(int num, string teacherName)
{
    int counter = 0;
    while (counter < num)
    {
        Console.WriteLine("student name:");
        string studentName = Console.ReadLine();


        Console.WriteLine("student id:");
        int studentId = int.Parse(Console.ReadLine());

        int[] gradesStudent = new int[3];
        for (int i = 1; i < 4; i++)
        {
            Console.WriteLine($"student gradeb number {i}");
            int GradesStudent = int.Parse(Console.ReadLine());
            gradesStudent[i - 1] = GradesStudent;

        }
        Teacher newTeacher = new Teacher(teacherName, studentName, gradesStudent, studentId);
        SaveAllDetails(teacherName, newTeacher);
        TeacherList.Add(newTeacher);
        counter++;
    }
}
void SaveAllDetails(string someName, Teacher allDetaile)
{
    try
    {
        FileStream detail = new FileStream(@$"C:\cSharpAll\grades\{someName}.txt", FileMode.Append);
        using (StreamWriter sw = new StreamWriter(detail))
        {
            int counter = 0;
            string resoult = $"id: {counter}  Teacher Name: {allDetaile.TeacherName} Student Name: {allDetaile.StudentName} Student Id:0-{allDetaile.StudentId} grades: {allDetaile.Grades[0]} {allDetaile.Grades[1]} {allDetaile.Grades[2]},";
            sw.WriteLine(resoult);
        }
    }
    catch (Exception ex)
    {
        Console.WriteLine(ex.ToString());
    }
}
void PrintDetaile(string Teache)
{
    try
    {
        List<string> list = new List<string>();
        FileStream fs = new FileStream($@"C:\cSharpAll\grades\{Teache}.txt", FileMode.Open);

        using (StreamReader sr = new StreamReader(fs))
        {
            string result = sr.ReadLine();
            Console.WriteLine(result);
        }
    }
    catch (FileNotFoundException)
    {
        Console.WriteLine("FormatException");
        Menu();
    }
}
void PrintDetailsFirstStudent()
{
    try
    {
        Console.WriteLine("name?");
        string name = Console.ReadLine();
        FileStream reader = new FileStream(@$"C:\cSharpAll\grades\{name}.txt", FileMode.Open);
        using (StreamReader sr = new StreamReader(reader))
        {
            string rso = sr.ReadLine();
            //rso.Substring(8);
            Console.WriteLine(rso);
        }
    }
    catch (FileNotFoundException)
    {
        Console.WriteLine("File Not Found ");
    }
}
void Menu()
{
    try
    {
        Console.WriteLine("1. add a new student\n2. Print details for the first student");
        int num = int.Parse(Console.ReadLine());
        switch (num)
        {
            case 1:
                Console.WriteLine("what your name?");
                string teacherName = Console.ReadLine();
                Console.WriteLine("How many students would you like to keep?");
                int teachersStudents = int.Parse(Console.ReadLine());
                AllStudentDetails(teachersStudents, teacherName);
                break;
            case 2:
                PrintDetailsFirstStudent();
                break;
          

        }
    }
    catch (FormatException)
    {
        Console.WriteLine("enter a number ");
    }
    Menu(); 
}
Menu();