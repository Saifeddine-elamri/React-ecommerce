using back_dotnet.Data;
using back_dotnet.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace back_dotnet.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrdersController : ControllerBase
    {
        private readonly CheckoutContext _context;

        public OrdersController(CheckoutContext context)
        {
            _context = context;
        }

        // POST: api/orders
        [HttpPost]
        public async Task<IActionResult> CreateOrder([FromBody] Order order)
        {
            if (order == null || order.Items.Count == 0)
            {
                return BadRequest("Invalid order data.");
            }

            // Calculate the total amount
            order.TotalAmount = order.Items.Sum(item => item.Price * item.Quantity);

            _context.Orders.Add(order);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Order created successfully!" });
        }

        // GET: api/orders
        [HttpGet]
        public async Task<IActionResult> GetOrders()
        {
            var orders = await _context.Orders
                .Include(o => o.Items)
                .ToListAsync();

            return Ok(orders);
        }
    }
}
