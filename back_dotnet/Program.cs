using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using SimpleOrderAPI.Models;
using SimpleOrderAPI.Controllers;

var builder = WebApplication.CreateBuilder(args);

// Ajout des services pour MVC
builder.Services.AddControllers();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

var app = builder.Build();

// Utilisation de CORS
app.UseCors("AllowAll");

// Enregistrement des contrôleurs
app.MapControllers();

// Lancer l'application
app.Run();
