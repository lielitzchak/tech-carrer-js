using LinqConsole;



Person[] peoples = new Person[] {
    new Person("omer", "ghjk", 1999),
    new Person("liel", "acvbnhmj", 2000),
    new Person("shilat", "dfgh", 1947),
    new Person("shilat", "dfgh", 1947),
    new Person("jhj", "olkjhn", 2000)
};
var newList = from people in peoples
              where people.LName[0] == 'a'
              select people;

Console.WriteLine(newList);







//string[] names = new string[] { "asdfg", "azxcv", "Awer", "aokjhkj", "Amkl" };
//int[] ages = new int[] { 30, 19, 74, 51, 32 };

//Person[] users = new Person[] {
//    new Person("omer", "ghjk", 1999),
//    new Person("liel", "xcvbnhmj", 19),
//    new Person("shilat", "dfgh", 1947),
//    new Person("shilat", "dfgh", 19),
//    new Person("jhj", "olkjhn", 2000),
//    new Person("hgfd", "dfghj", 1987)
//};
//List<Person> list = users.Where(item => item.Age > 21).ToList();
//foreach (Person person in list)
//{
//    Console.WriteLine(person.Age);
//}



//List<Person> people = peoples.Where(item => item.LName.Length > 3).OrderBy(pers => pers.Age).ToList();
//Console.WriteLine("what you looking for");
//int toFind = int.Parse(Console.ReadLine());
//Person singlePerson = people.Find(single => single.Age == toFind);
//Console.WriteLine("print single persone");
//Console.WriteLine(singlePerson.Fname);
//Console.WriteLine(singlePerson.LName);
//Console.WriteLine(singlePerson.Age);
//Console.WriteLine();
//Console.WriteLine("in loop...");
//Console.WriteLine();
//foreach (Person person in people)
//{
//    Console.WriteLine(person.Fname);
//    Console.WriteLine(person.LName);
//    Console.WriteLine(person.Age);
//    Console.WriteLine();
//}

//int[] rundNum = new int[10];
//for (int i = 0; i < 10; i++)
//{
//    rundNum[i] = new Random().Next(10);
//Console.WriteLine(rundNum[i]);
//}
//List<int> newList = rundNum.Where(num => num % 2 == 0).ToList();

//List<int> moreFo = rundNum.Where(num => num > 4).OrderBy(num => num).ToList();
//for (int i = 0; i < moreFo.Count; i++)
//{
//    Console.WriteLine(moreFo[i]);
//}


//string[] names = new string[] { "omer", "liel", "shilat", "binjamin", "malachi" };
//List<string> newListNames = names.Where(name => name.Length > 4).OrderByDescending(name => name.Length).ToList();
//string nameSingles = newListNames.Find(item => item == "malachi");
////.Find(item=> item==)
//for (int i = 0; i < newListNames.Count; i++)
//{
//    Console.WriteLine(newListNames[i]);
//}