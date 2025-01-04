// File: Models/Investment.cs
namespace FinanceAppBack.Models
{
    public class Investment
    {
        public int Id { get; set; }
        public int AccountId { get; set; }
        public string AssetName { get; set; }
        public double Quantity { get; set; }
        public double PurchasePrice { get; set; }
        public string Category { get; set; }
        public double LastUpdatedPrice { get; set; }

        // Navigation property
        public Account Account { get; set; }
    }
}