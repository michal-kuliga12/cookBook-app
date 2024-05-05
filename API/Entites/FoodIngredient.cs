namespace API.Entites;

public class FoodIngredient
{
    public int Id { get; set; }
    public Ingredient Ingredient { get; set; }
    public string MeasurementUnit { get; set; }
}
