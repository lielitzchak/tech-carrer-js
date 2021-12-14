using System;
using System.Collections.Generic;
namespace SeriesApp
{
    public class Series:IComparable
    {
       private string name;
       private string genre;
       private int episode;

       public Series (string name, string janer, int episode)
        {
            this.name = name;
            this.genre = genre;
            this.episode = episode;
        }
        

        public  int CompareTo (object obj)
        {
             Series show = (Series) obj;
            if(show.episode < this.episode) return 1;
            if(show.episode > this.episode) return -1;
            return 0;

        }
    }
}