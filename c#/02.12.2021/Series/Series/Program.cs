using System;
using SeriesApp;

Series show1 = new Series ("Sweet Girl" , "action" , 4);
Series show2 = new Series("kjhgf", "hjg", 3);
Series show3 = new Series("kjhgf", "hjg", 50);
Series show4 = new Series("kjhgf", "hjg", 15);
Series show5 = new Series("kjhgf", "hjg", 5);
Series[] episodeArray = new Series[] { show1, show2, show3, show4 };

Array.Sort(episodeArray);
foreach(Series episode in episodeArray)
{
    Console.WriteLine(episode.episode);
}

void Menu()
{
    List<Series> episodeList = new List<Series>();
    int count=0;
    while (count < 3)
    {

   
    Console.WriteLine("1. Add seria 2. show seria 3. Add episode 4. show all seria");
    int  chooseFromMenu = int.Parse( Console.ReadLine());
    switch (int chooseFromMenu)
    {
        case 1:
            Console.WriteLine("name of Serie");
            string userName = Console.ReadLine();
            Console.WriteLine("enter janer");
            string usergenre = Console.ReadLine();
            Console.WriteLine("enter episode");
            int userEpisode = int.Parse(Console.ReadLine());
            Series user = new Series(userName, userJaner, userEpisode);
            FileStream perek = new FileStream(@"C:\Users\lieli\OneDrive\שולחן העבודה\javascript\c#\02.12.2021\Series\userSeria.txt",FileMode.Append);
            using(StreamWriter sr = new StreamWriter(perek))
            {
                sr.WriteLine($"name: {userName} genre: {usergenre}  episode: {userEpisode}");
            }
            FileStream spesificSeria = new FileStream(@$"C:\Test\{userName}.txt", FileMode.Create);
            using (StreamWriter ss = new StreamWriter(spesificSeria))
            {
                ss.WriteLine($"name: {userName} janer: {userJaner}  episode: {userEpisode}");
            }
            
            episodeList.Add(user);
          
            break;

            case 2:
                Console.WriteLine("enter seria name");
                string userChoice= Console.ReadLine();
                FileStream showSeria = new FileStream(@$"C:\Test\{userChoice}.txt", FileMode.Open);
                using (StreamReader am = new StreamReader(showSeria))
                {
                    Console.WriteLine(am.ReadToEnd());
                }
                break;

            case "3:
                foreach(Series episod in episodeList)
                {
                    Console.WriteLine($"name: {episod.name} janer: {episod.genre} episode: {episod.episode}");
  }
                break;
    }
        count++;
    }
}

Series series_num_10 = new Series("ahghgvhjvd", "sdxcvbnmlkjhgw", 125);
Series series_num_11 = new Series("asfdghjkld", "sdkjhygtfdcvbnmjw", 12);
Series series_num_12 = new Series("a;olikujyhgtfvbghnmj,kd", "sc cvbnm,dw", 83);
Series series_num_13 = new Series("amknjbhgvcfvbnhmd", "sduytrfdcfvgbhjklw", 4);
Series[] shows = new Series[] { series_num_10 , series_num_11 , series_num_13 };

Array.Sort(shows);
foreach (Series sdr in shows)
{
    Console.WriteLine(sdr.episode);
}