using System;


namespace ConsoleApp2
{
    class Building
    {
        public int floors;
        public int apartments;
        public int tenants;
        public Building(int _floors, int _apartments, int _tenants)
        {
            this.floors = _floors;
            this.apartments = _apartments;
            this.tenants = _tenants;


        }
        public void printAll()
        {
            float[,,] building = new float[this.floors, this.apartments, this.tenants];
            for (int i = 0; i < this.floors; i++)
            {
                for (int j = 0; j <this.apartments; j++)
                {
                    for (int k = 0; this.tenants < 2; k++)
                    {
                        Random random = new Random();
                        int generic = random.Next(1, 10);
                        building[i, j, k] = generic;
                        if (building[i, j, k] % 2 == 0)
                        {
                            Console.Write($" i: {i}   ");
                            Console.Write($" j: {j}   ");
                            Console.Write($" k: {k}   ");
                            Console.Write($"number of building: {building[i, j, k]}    ");
                            Console.WriteLine();
                        }
                        Console.WriteLine("ood");

                    }
                }

            }
        }

    }

    }

