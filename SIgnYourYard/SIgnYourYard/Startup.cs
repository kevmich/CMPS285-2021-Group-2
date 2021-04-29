using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SignYourYard.Data;
using Microsoft.OpenApi.Models;
using SignYourYard.Data.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;

namespace SIgnYourYard
{
    public class Startup
    {

        public IConfiguration Configuration { get; }
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();

            services.AddDbContext<DataContext>(options=>
                options.UseSqlServer(Configuration.GetConnectionString("DataContext")));

            services.ConfigureApplicationCookie(OptionsBuilderConfigurationExtensions =>
           {
               OptionsBuilderConfigurationExtensions.Events.OnRedirectToAccessDenied = context =>
               {
                   context.Response.StatusCode = 403;
                   return Task.CompletedTask;
               };
               OptionsBuilderConfigurationExtensions.Events.OnRedirectToLogin = context =>
               {
                   context.Response.StatusCode = 401;
                   return Task.CompletedTask;
               };
           }
            );

            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "Restart/my-app2/build";
            });

            services.AddIdentity<User, Role>()
                .AddEntityFrameworkStores<DataContext>();

            services.AddSwaggerGen();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {

            MigrateDb(app);
            AddRoles(app).GetAwaiter().GetResult();
            AddUsers(app).GetAwaiter().GetResult();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseSwagger();

            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "API V1");
            });

            app.UseHttpsRedirection();

            app.UseStaticFiles();

            app.UseRouting();

            app.UseSpaStaticFiles();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "Restart/my-app2";

                if (env.IsDevelopment())
                {
                    spa.UseReactDevelopmentServer(npmScript: "start");
                }
            });
        }

        // Method for adding roles ot the database on startup
        private static async Task AddRoles(IApplicationBuilder app)
        {
            using (var serviceScope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope())
            {
                var roleManager = serviceScope.ServiceProvider.GetService<RoleManager<Role>>();
                if(roleManager .Roles.Any())
                {
                    return;
                }

                await roleManager.CreateAsync(new Role { Name = Roles.Admin });
            }
        }

        // Method for adding a user to the database on startup
        private static async Task AddUsers( IApplicationBuilder app)
        {
            using (var serviceScope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope())
            {
                var userManager = serviceScope.ServiceProvider.GetService<UserManager<User>>();
                if (userManager.Users.Any())
                {
                    return;
                }

                await CreateUser(userManager, "admin@admin.com", Roles.Admin);
            }
        }

        // Method for creating a user to add to the database on startup
        private static async Task CreateUser( UserManager<User> userManager, string username, string role)
        {
            const string passwordForEveryone = "Password123!";
            var user = new User { UserName = username };
            await userManager.CreateAsync(user, passwordForEveryone);
            await userManager.AddToRoleAsync(user, role);
        }

        // Method to automatically update database with migrations
        private static void MigrateDb(IApplicationBuilder app)
        {
            using (var serviceScope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetService<DataContext>();
                context.Database.Migrate();
            }
        }
    }
}
