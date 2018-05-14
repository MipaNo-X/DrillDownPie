using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DrillDownPie.Models;
using Newtonsoft.Json;

namespace DrillDownPie.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            List<DataPoint> dataPoints = new List<DataPoint>{
                new DataPoint(10),
                new DataPoint(20),
                new DataPoint(30),
                new DataPoint(40),
                new DataPoint(50)
            };

            ViewBag.DataPoints = JsonConvert.SerializeObject(dataPoints);

            return View();


         

        }
       
      

    }
}