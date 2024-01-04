using API.Data;
using API.Entites;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Any;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class RecipesController : ControllerBase
{
    private readonly DataContext _context;

    public RecipesController(DataContext context)
    {
        this._context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Recipe>>> GetRecipes()
    {
        var recipes = await _context.Recipes.ToListAsync();
        return recipes;
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Recipe>> GetRecipeById(int id)
    {
        var recipe = await _context.Recipes.FindAsync(id);
        return recipe;
    }

    // [HttpPost("{id}")]
    // public async Task<ActionResult<Recipe>> AddRecipe()
    // {

    // }

    [HttpDelete("{id}")]
    public async Task<ActionResult<Recipe>> DeleteRecipeById(int id)
    {
        var recipe = new Recipe() { Id = id };

        _context.Recipes.Remove(recipe);
        await _context.SaveChangesAsync();

        return recipe;
    }
}
