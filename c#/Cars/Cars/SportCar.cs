using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cars
{
    class SportCar : Car
    {
        string carName;
        int wheel;
        public SportCar(float _degem, float _nefach, float _manoa, string _color, string _carName, int wheel)
             : base(_degem, _nefach, _manoa, _color)
        {
            this.carName = _carName;
            this.wheel = wheel;
        }
        public void PrintCw()
        {
            string allCarDetail = $"color:{this.color} degem: {this.degem}, nefach: {this.nefach}, manoa:{this.manoa}";

            Console.WriteLine(allCarDetail);

        }
    }
}
