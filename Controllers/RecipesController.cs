using cookbook_app.Models;
using Microsoft.AspNetCore.Mvc;

namespace cookbook_app.Controllers;

[ApiController]
[Route("api/[controller]")]
public class RecipesController : ControllerBase
{
    Recipe[] recipes = new Recipe[]
    {
        new Recipe
        {
            Id = 0,
            Name = "Spaghetti",
            Category = "Dinner",
            TimeToMake = 45
        },
        new Recipe
        {
            Id = 1,
            Name = "Tomato-soup",
            Category = "Breakfast",
            TimeToMake = 45
        },
        new Recipe
        {
            Id = 2,
            Name = "Pizza",
            Category = "Dinner",
            TimeToMake = 45
        },
        new Recipe
        {
            Id = 3,
            Name = "Taco",
            Category = "Lunch",
            TimeToMake = 45
        },
        new Recipe
        {
            Id = 4,
            Name = "Burrito",
            Category = "Dinner",
            TimeToMake = 45
        }
    };

    [HttpGet]
    public IEnumerable<Recipe> Get()
    {
        return recipes.ToArray();
    }
    // public IEnumerable<Recipe> GetAllRecipes()
    // {
    //     return recipes;
    // }

    // public IHttpActionResult GetRecipe(int id)
    // {
    //     var recipe = recipes.FirstOrDefault((r) => r.Id == id);
    //     if (recipe == null)
    //     {
    //         return NotFound();
    //     }
    //     return Ok(recipe);
    // }
}
