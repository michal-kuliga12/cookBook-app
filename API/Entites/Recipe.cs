namespace API.Entites;

public class Recipe
{
    public int Id { get; set; }
    public string RecipeName { get; set; }
    public List<FoodIngredient> FoodIngredients { get; set; }

    public int TimeToMake { get; set; }
    //TODO Recipe photos
    // public string[] Photos { get; set; }
}
