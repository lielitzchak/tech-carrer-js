namespace Garage.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CarMigration : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Cars",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Owner = c.String(),
                        CarNumber = c.Int(nullable: false),
                        CorrectionStatus = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Cars");
        }
    }
}
