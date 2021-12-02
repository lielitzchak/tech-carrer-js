using System;
using System.Collections.Generic;


namespace ExceptionProgramApp
{
    public class Square<T1, T2, T3, T4>
    {
        public T1 first;
        public T2 second;
        public T3 third;
        public T4 fourth;



        public string name;
        public Square(T1 _first, T2 _second, T3 _third, T4 _fourth)
        {
            this.first = _first;
            this.second = _second;
            this.third = _third;
            this.fourth = _fourth;
        }
        //    void printArea(T1 num1, T2 num2)
        //    {
        //        float.Parse(num1);
        //        T3 num3 = num1 * num2;
        //    }


    }
}