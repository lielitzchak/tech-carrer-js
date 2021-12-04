using System;


namespace GenericConsoleApp
{
    public class Chers<T1, T2>
    {
        T1 height;
        T2 lengs;
        public Chers(T1 _height, T2 _lengs)
        {
            this.height = _height;
            this.lengs = _lengs;
        }
        public T1 Height
        {
            get { return height; }
            set { height = value; }
        }
        public T2 Lengs
        {
            get { return lengs; }
            set { lengs = value; }
        }
    }
}
