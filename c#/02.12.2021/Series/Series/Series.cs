using System;

namespace Series
{
    public class SeriesCalss : IComparable
    {
        private string name;
        private string genre;
        private int episodes;
        public SeriesCalss(string _name, string _genre, int _episodes)
        {
            name = _name;
            genre = _genre;
            episodes = _episodes;

        }

        public int CompareTo(object? obj)
        {
            SeriesCalss ser = (SeriesCalss)obj;
            if (ser.episodes > this.episodes)
            {
                return 1;
            }
            if (ser.episodes < this.episodes)
            {
                return -1;
            }
            return 0;

        }
      public  void addMove() 
        {

        }
    }
}
