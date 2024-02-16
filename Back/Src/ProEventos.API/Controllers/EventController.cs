using Microsoft.AspNetCore.Mvc;

namespace ProEventos.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EventController : ControllerBase
{
    public EventController()
    {
    }

    [HttpGet("Teste")]
    public object Get()
    {
      return new { 
        Name = "Teste Requisição",
      };
    }
}
