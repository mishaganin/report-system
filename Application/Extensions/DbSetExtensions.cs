using Application.Exceptions;
using Microsoft.EntityFrameworkCore;

namespace Application.Extensions;

public static class DbSetExtensions
{
    public static async Task<T?> FindEntityAsync<T>(this DbSet<T> set, Guid? id)
        where T : class
    {
        if (id == null)
        {
            return null;
        }

        var entity = await set.FindAsync(new object[] { id });

        return entity;
    }

    public static async Task<T> GetEntityAsync<T>(this DbSet<T> set, Guid id)
        where T : class
    {
        var entity = await set.FindAsync(new object[] { id });

        if (entity is null)
        {
            throw new NoEntityException(id);
        }

        return entity;
    }
}