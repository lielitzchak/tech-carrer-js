namespace HospitalMVCEntityFreameworkw.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CreateDocto : DbMigration
    {
        public override void Up()
        {
            DropTable("dbo.Doctors");
        }
        
        public override void Down()
        {
            CreateTable(
                "dbo.Doctors",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        NameDoctor = c.String(),
                        Birthday = c.DateTime(nullable: false),
                        Phone = c.Int(nullable: false),
                        NumberPatient = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
    }
}
