using System;
using SeriesApp;

Series show1 = new Series("Sweet Girl", "action", 4);
Series show2 = new Series("The Sinner", "thriller", 3);
Series show3 = new Series("Lost in Space", "action", 50);
Series show4 = new Series("What If", "action", 15);
Series show5 = new Series("The Last Kingdom", "action", 5);
Series[] episodes = new Series[] { show1, show2, show3, show4 };
List<Series> episodesList = new List<Series>();
Menu();
void Menu()
{

    Console.WriteLine("1. Add movie  2. show movide  3. Add episode  4. show all serias");
    string chooseFromUser = Console.ReadLine().ToLower();
    switch (chooseFromUser)
    {
        case "add movie":
            addMovie();
            break;
        case "show movide":
            showName();
            break;
        case "add episode":
            AddEpisode();
            break;
        case "show all serias":
            showAllMOviesName();
            break;
        default:
            Console.WriteLine("please try again");
            break;
    }

    Menu();
}
void addMovie()
{
    Console.WriteLine("name of serie");
    string userName = Console.ReadLine();

    Console.WriteLine("enter genre");
    string usergenre = Console.ReadLine();

    Console.WriteLine("enter episode");
    int userEpisode = int.Parse(Console.ReadLine());


    Series user = new Series(userName, usergenre, userEpisode);
    FileStream episode = new FileStream(@$"C:\Users\lieli\OneDrive\שולחן העבודה\javascript\c#\02.12.2021\{userName}.txt", FileMode.Append);
    using (StreamWriter writer = new StreamWriter(episode))
    {
        writer.WriteLine($"name: {user.Name} genre: {user.Genre}  episode: {user.Episode}");
    }
    ShowAllMOvies(userName, usergenre, userEpisode);

}
void ShowAllMOvies(string _userName, string _usergenre, int _userEpisode)
{
    FileStream spesificSeria = new FileStream(@$"C:\Users\lieli\OneDrive\שולחן העבודה\javascript\c#\02.12.2021\Series\userSeria.txt\{_userName}.txt", FileMode.Create);
    using (StreamWriter ss = new StreamWriter(spesificSeria))
    {
        ss.WriteLine($"name: {_userName} janer: {_usergenre}  episode: {_userEpisode}");
    }

}
void showName()
{
    Console.WriteLine("enter seria name");
    string userChoice = Console.ReadLine();
    FileStream showSeria = new FileStream(@$"C:\Users\lieli\OneDrive\שולחן העבודה\javascript\c#\02.12.2021\{userChoice}.txt", FileMode.Open);
    using (StreamReader reader = new StreamReader(showSeria))
    {
        Console.WriteLine(reader.ReadToEnd());
    }
}
void AddEpisode()
{
    Console.WriteLine("For which series would you like to update episodes?");
    string toLook = Console.ReadLine();
    Console.WriteLine(toLook);
    //foreach (Series episod in episodesList)
    //{
    //    Console.WriteLine($"name: {episod.name} janer: {episod.genre} episode: {episod.episode}");
    //}
}
void showAllMOviesName()
{
    Array.Sort(episodes);
    foreach (Series episode in episodes)
    {
        Console.WriteLine(episode.Name);
    }
}
