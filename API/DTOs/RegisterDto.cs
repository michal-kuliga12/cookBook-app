﻿using System.ComponentModel.DataAnnotations;

namespace API.DTOs;

public class RegisterDto
{
    public string Username { get; set; }

    public string Password { get; set; }
}
