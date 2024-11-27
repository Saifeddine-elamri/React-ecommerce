namespace SimpleOrderAPI.Models
{
    public class Order
    {
        public List<CartItem> Cart { get; set; }
        public Customer Customer { get; set; }
    }

    public class CartItem
    {
        public string Name { get; set; }
        public decimal Price { get; set; }
        public int Quantity { get; set; }
    }

    public class Customer
    {
        public string Name { get; set; }
        public string Email { get; set; }
    }
}
