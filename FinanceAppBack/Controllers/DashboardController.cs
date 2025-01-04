using FinanceAppBack.Data;
using FinanceAppBack.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace FinanceAppBack.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DashboardController : ControllerBase
    {
        private readonly FinanceAppContext _context;

        public DashboardController(FinanceAppContext context)
        {
            _context = context;
        }

        // GET: api/dashboard
        [HttpGet]
        public async Task<ActionResult<Dashboard>> GetDashboard()
        {
            var dashboard = new Dashboard
            {
                Accounts = await _context.Accounts.ToListAsync(),
                Investments = await _context.Investments.ToListAsync(),
                Simbols = await _context.Simbols.ToListAsync()
                // Add other data fetching as needed
            };

            return dashboard;
        }
    }
}
