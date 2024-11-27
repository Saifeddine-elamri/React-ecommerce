using Microsoft.AspNetCore.Mvc;
using SimpleOrderAPI.Models;

namespace SimpleOrderAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private static List<Order> orders = new List<Order>(); // Liste en mémoire des commandes

        // POST: api/orders
        [HttpPost]
        public IActionResult PostOrder([FromBody] Order order)
        {
            if (order?.Cart == null || order.Cart.Count == 0 || string.IsNullOrEmpty(order.Customer?.Name) || string.IsNullOrEmpty(order.Customer?.Email))
            {
                return BadRequest("Le panier ou les informations client sont manquants.");
            }

            orders.Add(order); // Sauvegarde de la commande
            return CreatedAtAction(nameof(GetOrders), new { id = orders.Count }, order); // Retourne la commande créée
        }

        // GET: api/orders
        [HttpGet]
        public IActionResult GetOrders()
        {
            return Ok(orders); // Retourne toutes les commandes
        }
    }
}
