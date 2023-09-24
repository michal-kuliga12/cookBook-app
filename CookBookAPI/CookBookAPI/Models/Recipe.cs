namespace CookBookAPI.Models
{
    public class Recipe
    {
        public int id { get; set; }
        public string name { get; set; }
        public string category { get; set; }
        public List<Ingredient> ingredients { get; set; }
        public List<Step> steps { get; set; }
        public int difficulty { get; set; }
        public string[] photos { get; set; }
        public string timeToMake { get; set; }
    }
}

public class Ingredient
{
    public string ingredient { get; set; }
    public int quantity { get; set; }
}

public class Step
{
    public int step { get; set; }
    public string description { get; set; }
}
