using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Data.Migrations
{
    /// <inheritdoc />
    public partial class Newentities2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_FoodIngredient_Ingredient_IngredientId",
                table: "FoodIngredient");

            migrationBuilder.DropForeignKey(
                name: "FK_FoodIngredient_Recipes_RecipeId",
                table: "FoodIngredient");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Ingredient",
                table: "Ingredient");

            migrationBuilder.DropPrimaryKey(
                name: "PK_FoodIngredient",
                table: "FoodIngredient");

            migrationBuilder.RenameTable(
                name: "Ingredient",
                newName: "Ingredients");

            migrationBuilder.RenameTable(
                name: "FoodIngredient",
                newName: "FoodIngredients");

            migrationBuilder.RenameIndex(
                name: "IX_FoodIngredient_RecipeId",
                table: "FoodIngredients",
                newName: "IX_FoodIngredients_RecipeId");

            migrationBuilder.RenameIndex(
                name: "IX_FoodIngredient_IngredientId",
                table: "FoodIngredients",
                newName: "IX_FoodIngredients_IngredientId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Ingredients",
                table: "Ingredients",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_FoodIngredients",
                table: "FoodIngredients",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_FoodIngredients_Ingredients_IngredientId",
                table: "FoodIngredients",
                column: "IngredientId",
                principalTable: "Ingredients",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_FoodIngredients_Recipes_RecipeId",
                table: "FoodIngredients",
                column: "RecipeId",
                principalTable: "Recipes",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_FoodIngredients_Ingredients_IngredientId",
                table: "FoodIngredients");

            migrationBuilder.DropForeignKey(
                name: "FK_FoodIngredients_Recipes_RecipeId",
                table: "FoodIngredients");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Ingredients",
                table: "Ingredients");

            migrationBuilder.DropPrimaryKey(
                name: "PK_FoodIngredients",
                table: "FoodIngredients");

            migrationBuilder.RenameTable(
                name: "Ingredients",
                newName: "Ingredient");

            migrationBuilder.RenameTable(
                name: "FoodIngredients",
                newName: "FoodIngredient");

            migrationBuilder.RenameIndex(
                name: "IX_FoodIngredients_RecipeId",
                table: "FoodIngredient",
                newName: "IX_FoodIngredient_RecipeId");

            migrationBuilder.RenameIndex(
                name: "IX_FoodIngredients_IngredientId",
                table: "FoodIngredient",
                newName: "IX_FoodIngredient_IngredientId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Ingredient",
                table: "Ingredient",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_FoodIngredient",
                table: "FoodIngredient",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_FoodIngredient_Ingredient_IngredientId",
                table: "FoodIngredient",
                column: "IngredientId",
                principalTable: "Ingredient",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_FoodIngredient_Recipes_RecipeId",
                table: "FoodIngredient",
                column: "RecipeId",
                principalTable: "Recipes",
                principalColumn: "Id");
        }
    }
}
