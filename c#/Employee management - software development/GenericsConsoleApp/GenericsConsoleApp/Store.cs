using System;
using System.Collections.Generic;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;

namespace GenericConsoleApp
{
    public class Store<T1>
    {
        public T1 numTable;
        public T1 numtChers;
        public List<T1> numClose;
        public Store(T1 _numTable, T1 _numtChers, List<T1> _numClose)
        {
            this.numTable = _numTable;
            this.numtChers = _numtChers;
            this.numClose = _numClose;
        }
    }
}
