using back_dotnet.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Ajouter le service pour le contexte avec PostgreSQL
builder.Services.AddDbContext<CheckoutContext>(options =>
    options.UseNpgsql(
        builder.Configuration.GetConnectionString("DefaultConnection")
    )
);

// Ajouter d'autres services
builder.Services.AddControllers();

var app = builder.Build();

// Configurer l'application
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();
