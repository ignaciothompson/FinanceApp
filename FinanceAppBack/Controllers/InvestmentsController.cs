using FinanceAppBack.Data;
using FinanceAppBack.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FinanceAppBack.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class InvestmentsController : ControllerBase
    {
        private readonly FinanceAppContext _context;

        public InvestmentsController(FinanceAppContext context)
        {
            _context = context;
        }

        // GET: api/investments
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Investment>>> GetInvestments()
        {
            return await _context.Investments.Include(i => i.Account).ToListAsync();
        }

        // GET: api/investments/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Investment>> GetInvestment(int id)
        {
            var investment = await _context.Investments.Include(i => i.Account)
                                                       .FirstOrDefaultAsync(i => i.Id == id);

            if (investment == null)
            {
                return NotFound();
            }

            return investment;
        }

        // POST: api/investments
        [HttpPost]
        public async Task<ActionResult<Investment>> PostInvestment(Investment investment)
        {
            _context.Investments.Add(investment);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetInvestment), new { id = investment.Id }, investment);
        }

        // PUT: api/investments/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutInvestment(int id, Investment investment)
        {
            if (id != investment.Id)
            {
                return BadRequest();
            }

            _context.Entry(investment).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InvestmentExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // DELETE: api/investments/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteInvestment(int id)
        {
            var investment = await _context.Investments.FindAsync(id);
            if (investment == null)
            {
                return NotFound();
            }

            _context.Investments.Remove(investment);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool InvestmentExists(int id)
        {
            return _context.Investments.Any(e => e.Id == id);
        }
    }
}