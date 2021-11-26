using System;


namespace ConsoleApp2
{
    public abstract class Genre
    {
        public abstract string GetType();
    }

    public class Song : Genre
    {
     public   string _name;

        //public Song()
        //{
        //}

        public Song(string NameSong) 
        { 
            this._name = NameSong;
        }
        public string SognName { get; set; }
        public override string GetType()
        {
            return this.SognName;
        }

    }
}
