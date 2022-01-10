namespace HospitalMVCEntityFreameworkw.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CreatePatients : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Patients",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        NamePatient = c.String(),
                        Birthday = c.DateTime(nullable: false),
                        BeginningHospitalization = c.DateTime(nullable: false),
                        Phone = c.Int(nullable: false),
                        NumberPatient = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Patients");
        }
    }
}
