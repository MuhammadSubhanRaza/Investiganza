namespace backendInvestiganza.Models
{
    public class InvestorDashboard
    {

        public int TotalProposals { get; set; }
        public int TotalConnections { get; set; }
        public int TotalFeedbacks { get; set; }
        public List<Proposal> Proposals { get; set; }
        public string Name { get; set; }
        public string About { get; set; }
        public int ProfileId { get; set; }
        public string UserId { get; set; }


    }
}
