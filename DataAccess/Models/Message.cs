using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using DataAccess.Models.MessageSources;

namespace DataAccess.Models;

public class Message
{
    public Message(Guid id, string text, MessageSource source)
    {
        Id = id;
        Text = text;
        Source = source;
        Status = "new";
    }

    protected Message() { }
    [Key]
    public Guid Id { get; set; }
    public string Text { get; set; }
    public MessageSource Source { get; set; }
    public string Status { get; set; } // new | received | processed
}