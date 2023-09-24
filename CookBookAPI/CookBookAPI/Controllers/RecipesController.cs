using CookBookAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace CookBookAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecipesController : ControllerBase
    {
        public List<Recipe> recipes = new List<Recipe>
        {
            new Recipe()
                {
                    id = 1,
                    name = "Spaghetti",
                    category = "Danie główne",
                    ingredients = new List<Ingredient>
                    {
                        new Ingredient() {ingredient="Jaja",quantity=2},
                        new Ingredient() {ingredient="Filet z kurczaka",quantity=1 },
                        new Ingredient() {ingredient="Pomidory w puszce",quantity=1 },
                        new Ingredient() {ingredient="Czosnek",quantity=1 },
                        new Ingredient() {ingredient="Cebula",quantity=1 },
                        new Ingredient() {ingredient="Marchewka",quantity=1 }
                    },
                    steps = new List<Step>
                    {
                        new Step() {step=1, description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis beatae, hic ducimus aperiam accusamus placeat q"},
                        new Step() {step=2, description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis beatae, hic ducimus aperiam accusamus placeat q"},
                        new Step() {step=3, description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis beatae, hic ducimus aperiam accusamus placeat q"},
                        new Step() {step=4, description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis beatae, hic ducimus aperiam accusamus placeat q"},
                        new Step() {step=5, description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis beatae, hic ducimus aperiam accusamus placeat q"}
                    },
                    difficulty = 3,
                    photos = new string[] {"../assets/spaghetti.jpg"},
                    timeToMake = "45 MIN",
                },
            new Recipe()
                {
                    id = 2,
                    name = "Spaghetti",
                    category = "Danie główne",
                    ingredients = new List<Ingredient>
                    {
                        new Ingredient() {ingredient="Jaja",quantity=2},
                        new Ingredient() {ingredient="Filet z kurczaka",quantity=1 },
                        new Ingredient() {ingredient="Pomidory w puszce",quantity=1 },
                        new Ingredient() {ingredient="Czosnek",quantity=1 },
                        new Ingredient() {ingredient="Cebula",quantity=1 },
                        new Ingredient() {ingredient="Marchewka",quantity=1 }
                    },
                    steps = new List<Step>
                    {
                        new Step() {step=1, description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis beatae, hic ducimus aperiam accusamus placeat q"},
                        new Step() {step=2, description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis beatae, hic ducimus aperiam accusamus placeat q"},
                        new Step() {step=3, description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis beatae, hic ducimus aperiam accusamus placeat q"},
                        new Step() {step=4, description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis beatae, hic ducimus aperiam accusamus placeat q"},
                        new Step() {step=5, description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis beatae, hic ducimus aperiam accusamus placeat q"}
                    },
                    difficulty = 3,
                    photos = new string[] {"../assets/spaghetti.jpg"},
                    timeToMake = "45 MIN",
                },
            new Recipe()
                {
                    id = 3,
                    name = "Spaghetti",
                    category = "Danie główne",
                    ingredients = new List<Ingredient>
                    {
                        new Ingredient() {ingredient="Jaja",quantity=2},
                        new Ingredient() {ingredient="Filet z kurczaka",quantity=1 },
                        new Ingredient() {ingredient="Pomidory w puszce",quantity=1 },
                        new Ingredient() {ingredient="Czosnek",quantity=1 },
                        new Ingredient() {ingredient="Cebula",quantity=1 },
                        new Ingredient() {ingredient="Marchewka",quantity=1 }
                    },
                    steps = new List<Step>
                    {
                        new Step() {step=1, description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis beatae, hic ducimus aperiam accusamus placeat q"},
                        new Step() {step=2, description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis beatae, hic ducimus aperiam accusamus placeat q"},
                        new Step() {step=3, description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis beatae, hic ducimus aperiam accusamus placeat q"},
                        new Step() {step=4, description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis beatae, hic ducimus aperiam accusamus placeat q"},
                        new Step() {step=5, description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis beatae, hic ducimus aperiam accusamus placeat q"}
                    },
                    difficulty = 3,
                    photos = new string[] {"../assets/spaghetti.jpg"},
                    timeToMake = "45 MIN",
                },

        };

        [HttpGet]
        public async Task<ActionResult<List<Recipe>>> GetRecipes()
        {
            return recipes;
        }

        [HttpGet("{recipeId}")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(Recipe))]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public IActionResult GetRecipeById(int recipeId)
        {
            Recipe? SearchForRecipe(int id)
            {
                return recipes.Find(recipe => recipe.id == id);
            }

            Recipe? foundRecipe = SearchForRecipe(recipeId);

            return foundRecipe == null ? NotFound() : Ok(foundRecipe);
        }

        //[HttpPost]
        //[ProducesResponseType(StatusCodes.Status200OK)]
        //public IActionResult AddRecipe()
        //{
        //    object GetFirstAvailableId()
        //    {
        //        object sortedRecipesArray = recipes.OrderBy(recipe => recipe.id).ToArray();
        //        return sortedRecipesArray[0];
        //    }
        //    System.Diagnostics.Debug.WriteLine(GetFirstAvailableId());
        //    return Ok();
        //    Recipe newRecipe = new Recipe()
        //    {
        //        id = 1,
        //        name = "Spaghetti",
        //        category = "Danie główne",
        //        ingredients = new List<Ingredient>
        //            {
        //                new Ingredient() {ingredient="Jaja",quantity=2},
        //                new Ingredient() {ingredient="Filet z kurczaka",quantity=1 },
        //                new Ingredient() {ingredient="Pomidory w puszce",quantity=1 },
        //                new Ingredient() {ingredient="Czosnek",quantity=1 },
        //                new Ingredient() {ingredient="Cebula",quantity=1 },
        //                new Ingredient() {ingredient="Marchewka",quantity=1 }
        //            },
        //        steps = new List<Step>
        //            {
        //                new Step() {step=1, description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis beatae, hic ducimus aperiam accusamus placeat q"},
        //                new Step() {step=2, description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis beatae, hic ducimus aperiam accusamus placeat q"},
        //                new Step() {step=3, description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis beatae, hic ducimus aperiam accusamus placeat q"},
        //                new Step() {step=4, description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis beatae, hic ducimus aperiam accusamus placeat q"},
        //                new Step() {step=5, description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis beatae, hic ducimus aperiam accusamus placeat q"}
        //            },
        //        difficulty = 3,
        //        photos = new string[] { "../assets/spaghetti.jpg" },
        //        timeToMake = "45 MIN",
        //    };
        //}

        //[HttpDelete]
        //public IActionResult DeleteRecipe(int recipeId)
        //{

        //}
    }
}
