namespace backendInvestiganza.CombineModels
{
    public class ProfileFeedbacks
    {
        public int ProfileId { get; set; }
        public string Name { get; set; }
        public DateTime Date { get; set; }
        public string Message { get; set; }
        public string ProfileImagePath { get; set; }
    }
}
