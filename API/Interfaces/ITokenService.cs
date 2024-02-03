using API.Entites;

namespace API.Interfaces;

public interface ITokenService
{
    string CreateToken(AppUser user);
}
