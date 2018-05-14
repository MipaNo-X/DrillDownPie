using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace DrillDownPie.Models
{
    [DataContract]
    public class DataPoint
    {
        public DataPoint(double y) {
            this.Y = y;
        }
        [DataMember(Name = "y")]
        public Nullable<double> Y = null;
    }
}