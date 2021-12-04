using System;



namespace GenericConsoleApp
{
    public class Table<T>
    {
        public string color;
        T legs;
        public Table(string _color, T _legs)
        {
            string color = _color;
            this.legs = _legs;
        }
        public T Legs { get; set; }

    }
}
