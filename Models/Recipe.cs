namespace cookbook_app.Models
{
    public class Recipe
    {
        public int? Id { get; set; }
        public string? Name { get; set; }
        public string? Category { get; set; }
        public int? TimeToMake { get; set; }
    }
}
