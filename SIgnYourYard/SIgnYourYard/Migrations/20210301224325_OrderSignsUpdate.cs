using Microsoft.EntityFrameworkCore.Migrations;

namespace SignYourYard.Migrations
{
    public partial class OrderSignsUpdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Sign_Order_OrderId",
                table: "Sign");

            migrationBuilder.DropIndex(
                name: "IX_Sign_OrderId",
                table: "Sign");

            migrationBuilder.DropColumn(
                name: "OrderId",
                table: "Sign");

            migrationBuilder.AddColumn<string>(
                name: "signs",
                table: "Order",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "signs",
                table: "Order");

            migrationBuilder.AddColumn<int>(
                name: "OrderId",
                table: "Sign",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Sign_OrderId",
                table: "Sign",
                column: "OrderId");

            migrationBuilder.AddForeignKey(
                name: "FK_Sign_Order_OrderId",
                table: "Sign",
                column: "OrderId",
                principalTable: "Order",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
