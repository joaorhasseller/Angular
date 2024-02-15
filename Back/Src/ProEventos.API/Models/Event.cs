namespace ProEventos.API.Models;

public class Event
{
    public int Id { get; set; }
    public string Local { get; set; }
    public string Date { get; set; }
    public string Theme { get; set; }
    public string Allotment { get; set; }
    public string ImageUrl { get; set; }
    public int Quantity { get; set; }
}