namespace backendInvestiganza.Models
{
    public class FSDashboard
    {

        public int TotalPosts { get; set; }
        public int TotalConnections { get; set; }
        public int TotalFeedbacks { get; set; }
        public List<Post> Posts { get; set; }
        public string Name { get; set; }
        public string About { get; set; }
        public int ProfileId { get; set; }
        public string UserId { get; set; }
    }
}
