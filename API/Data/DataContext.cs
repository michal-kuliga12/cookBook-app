﻿using API.Entites;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class DataContext : DbContext
{
    public DataContext(DbContextOptions options)
        : base(options) { }

    public DbSet<Recipe> Recipes { get; set; }
    public DbSet<AppUser> Users { get; set; }
}
