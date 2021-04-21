using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignYourYard.Inventory
{
    public class Sign
    {
        internal string email;
        internal string address;
        internal string signs;

        public int Id { get; set; }
        public int stock { get; set; }
        public bool emoji { get; set; }
        public String color { get; set; }
        public String content { get; set; }
       // public object DateTimeOffset { get; internal set; }

        //this is a comment
    }
}
