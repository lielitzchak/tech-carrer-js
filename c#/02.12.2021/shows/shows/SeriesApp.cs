using System;
using System.Collections.Generic;
namespace SeriesApp
{
    public class Series : IComparable
    {
        private string name;
        private string genre;
        private int episode;

        public Series(string _name, string _genre, int _episode)
        {
            this.name = _name;
            this.genre = _genre;
            this.episode = _episode;
        }
        public string Name
        {
            get { return name; }
            set { name = value; }
        }
        public string Genre
        {
            get { return genre; }
            set { genre = value; }
        }
        public int Episode
        {
            get { return episode; }
            set { episode = value; }
        }


        public int CompareTo(object obj)
        {
            Series show = (Series)obj;
            if (show.episode < this.episode) return 1;
            if (show.episode > this.episode) return -1;
            return 0;

        }
    }
}