using API.Data;
using API.Dtos;
using API.Entites;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[Authorize]
public class RecipesController : BaseApiController
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

    [HttpPost]
    public async Task<ActionResult<RecipeDto>> AddRecipe(RecipeDto recipeDto)
    {
        var recipe = new Recipe()
        {
            RecipeName = recipeDto.RecipeName,
            TimeToMake = recipeDto.TimeToMake,
        };

        _context.Recipes.Add(recipe);
        await _context.SaveChangesAsync();

        return recipeDto;
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult<Recipe>> DeleteRecipeById(int id)
    {
        var recipe = new Recipe() { Id = id };

        _context.Recipes.Remove(recipe);
        await _context.SaveChangesAsync();

        return recipe;
    }
}
