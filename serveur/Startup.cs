using Microsoft.EntityFrameworkCore;

public class Startup
{
    public void ConfigureServices(IServiceCollection services)
    {
        // Configurer Entity Framework Core avec une base de données SQL Server
        services.AddDbContext<RestaurantDbContext>(options =>
            options.UseSqlServer("Your_Connection_String_Here"));

        // Ajouter les services pour les contrôleurs API
        services.AddControllers();
    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        if (env.IsDevelopment())
        {
            app.UseDeveloperExceptionPage();
        }

        app.UseRouting();

        app.UseEndpoints(endpoints =>
        {
            endpoints.MapControllers();
        });
    }
}
