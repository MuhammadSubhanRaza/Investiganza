using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backendInvestiganza.Migrations
{
    public partial class isInvestorColumnaddedinApplicationUser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "isInvestor",
                table: "AspNetUsers",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "isInvestor",
                table: "AspNetUsers");
        }
    }
}
