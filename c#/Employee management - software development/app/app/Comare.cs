using System;


namespace app
{
    public class Comare : IComparable
    {
        string FullName;
        float Birth;
        string Email;

        //public string fullName;
        //public float birth;
        //public string email;
        public Comare()
        {

        }

        public Comare(string FullName, float Birth, string Email)
        {
            this.FullName = FullName;
            this.Birth = Birth;
            this.Email = Email;
        }
        protected virtual string PrintAll()
        {
            return $" full name: {this.FullName}, birth: {this.Birth}, email:{this.Email} ";

        }
        public int CompareTo(object obj)
        {
            Comare ob = (Comare)obj;
            if (this.Birth < ob.Birth)
            {
                return -1;
            }
            if (this.Birth > ob.Birth)
            {
                return 1;
            }
            return 0;
        }

    }
}
