using System;
using System.Collections.Generic;

namespace back_dotnet.Models
{
    public class Order
    {
        public int Id { get; set; }
        public string CustomerName { get; set; }
        public string CustomerEmail { get; set; }
        public string PickupDate { get; set; }
        public string PickupTime { get; set; }
        public string PaymentMethod { get; set; }
        public decimal TotalAmount { get; set; }

        // Navigation property
        public List<OrderItem> Items { get; set; } = new List<OrderItem>();
    }
}
