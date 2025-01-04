namespace FinanceAppBack.Models
{
    public class Account
    {
        public int Id { get; set; } // Corresponds to 'id' in the database
        public string Name { get; set; } // Adjust property names based on your schema
        public string Simbol { get; set; }
        public double Balance { get; set; }

        // Navigation property for related investments
        public ICollection<Investment> Investments { get; set; }
    }
}