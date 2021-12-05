using System;


namespace Cars
{
    class Square
    {
        public float width;
        public float hight;
        public Square(float _width, float _hight)
        {
            this.width = _width;
            this.hight = _hight;
        }
        public float SquareArea()
        {
            return this.width * this.hight;
        }
    }
}
