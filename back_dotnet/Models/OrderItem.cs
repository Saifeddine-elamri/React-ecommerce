namespace back_dotnet.Models
{
    public class OrderItem
    {
        public int Id { get; set; }
        public int OrderId { get; set; } // Foreign Key
        public string Name { get; set; }
        public int Quantity { get; set; }
        public decimal Price { get; set; }

        // Navigation property
        public Order Order { get; set; }
    }
}
