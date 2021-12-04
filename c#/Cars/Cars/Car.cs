using System;
namespace Cars
{
    class Car : IComparable
    {
        public float degem;
        public float nefach;
        public float manoa;
        public string color;
        public Car(float _degem, float _nefach, float _manoa, string _color)
        {
            this.degem = _degem;
            this.nefach = _nefach;
            this.manoa = _manoa;
            this.color = _color;

        }

        public int CompareTo(object? obj)
        {
            Car car = (Car)obj;
            if (this.manoa < car.manoa)
            { return -1; }
            if (this.manoa < car.manoa)
            {
                return 1;
            }
            return 0;

        }

        public void PrintCw()
        {
            string allCarDetail = $"color:{this.color} degem: {this.degem}, nefach: {this.nefach}, manoa:{this.manoa}";
            Console.WriteLine(allCarDetail);
        }
    }
}
