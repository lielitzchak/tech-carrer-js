using clinic;
List<Doctor> doctortsList = new List<Doctor>();
void menu()
{
    try
    {
        Console.WriteLine("1. Add doctor\n2. display doctor\n3. Add patients to doctor \n4. show all doctors \n5. Patient schedule ");
        int userNum = int.Parse(Console.ReadLine());
        int id = 0;
        switch (userNum)
        {
            case 1:
                addDoctor(id);
                id++;
                break;
            case 2:
                displayDoctor();
                break;
            case 3:
                addPatients();
                break;
            case 4:
                Console.WriteLine("number 4");
                break;
            case 5:
                patientSchedule();
                break;

        }

    }
    catch (FormatException)
    {
        Console.WriteLine("you have to write a number");
    }
    menu();
}
void saveAllDoctors(int id, Doctor doctor)
{
    FileStream fs = new FileStream(@$"C:\Users\lieli\OneDrive\שולחן העבודה\javascript\c#\clinic\allDoctors.txt", FileMode.Append);
    using (StreamWriter sw = new StreamWriter(fs))
    {
        string results = $" id : {id++}          firsr name: {doctor.FName}          last name: {doctor.LName}          job:  {doctor.Job}          patients:{doctor.Numpatients}          birth: {doctor.Birth},";
        sw.WriteLine(results);

    }

}
void addDoctor(int id)
{
    try
    {
        Console.WriteLine("first name");
        string firstName = Console.ReadLine();
        Console.WriteLine("last name");
        string lastName = Console.ReadLine();
        Console.WriteLine("job");
        string job = Console.ReadLine();
        Console.WriteLine("patients");
        int patients = int.Parse(Console.ReadLine());
        Console.WriteLine("birth");
        int birth = int.Parse(Console.ReadLine());
        Doctor doctor = new Doctor(firstName, lastName, job, patients, birth);
        doctortsList.Add(doctor);
        saveDoctorInFile(firstName, doctor);
        saveAllDoctors(id, doctor);
    }
    catch (FormatException)
    {
        Console.WriteLine("Format Exception");
        addDoctor(id);
    }
}
void saveDoctorInFile(string name, Doctor doctor)
{
    FileStream fileStream = new FileStream(@$"C:\Users\lieli\OneDrive\שולחן העבודה\javascript\c#\clinic\{name}.txt", FileMode.Append);
    using (StreamWriter fr = new StreamWriter(fileStream))
    {
        string results = $"firsr name: {doctor.FName}          last name: {doctor.LName}          job:  {doctor.Job}          patients:{doctor.Numpatients}          birth: {doctor.Birth}";
        fr.WriteLine(results);
    }
}
void displayDoctor()
{
    try
    {
        Console.WriteLine("name Doctor you want to see");
        string nameDoc = Console.ReadLine();
        FileStream fs = new FileStream(@$"C:\Users\lieli\OneDrive\שולחן העבודה\javascript\c#\clinic\{nameDoc}.txt", FileMode.Open);
        using (StreamReader sr = new StreamReader(fs))
        {
            string res = sr.ReadToEnd();
            Console.WriteLine(res);
        }
    }
    catch (FileNotFoundException)
    {
        Console.WriteLine("sorry, this name not found");
    }
}
void addPatients()
{
    Console.WriteLine("The name of the doctor to whom you would like to add");
    string docName = Console.ReadLine();
    FileStream fs = new FileStream(@$"C:\Users\lieli\OneDrive\שולחן העבודה\javascript\c#\clinic\{docName}.txt", FileMode.Append);
    using (StreamWriter streamWriter = new StreamWriter(fs))
    {
        streamWriter.WriteLine(docName);
    }
}
void patientSchedule()
{
    int[,] diary = new int[4, 8];
    for (int i = 0; i < diary.GetLength(0); i++)
    {
        for (int j = 1; j < diary.GetLength(1); j++)
        {
            diary[i, j] = new Random().Next(1, 10);
            diary[i, 7] = 0;
            string toPrint = $"||the patients in this day is : { diary[i, j] }      ";
            Console.Write(toPrint);
            if (diary[i, j] < 5)
            {
                underFivePatients();

            }
            Console.WriteLine();
        }

        menu();
    }
}

void underFivePatients()
{
    if(diary[i, j] < 5)
    {
    }

menu();
