using FinanceAppBack.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

// Configure EF Core to use SQLite
builder.Services.AddDbContext<FinanceAppContext>(options =>
    options.UseSqlite("Data Source=../Database/database.db"));

// Configure CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngular",
        builder =>
        {
            builder.WithOrigins("http://localhost:4200")
                   .AllowAnyHeader()
                   .AllowAnyMethod();
        });
});

var app = builder.Build();

// Use CORS
app.UseCors("AllowAngular");

app.UseAuthorization();

app.MapControllers();

app.Run();

// Existing WeatherForecast record
record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}