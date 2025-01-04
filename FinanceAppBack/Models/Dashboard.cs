using System.Collections.Generic;

namespace FinanceAppBack.Models
{
    public class Dashboard
    {
        public IEnumerable<Account> Accounts { get; set; }
        public IEnumerable<Investment> Investments { get; set; }
        public IEnumerable<Simbol> Simbols { get; set; }
    }
}
