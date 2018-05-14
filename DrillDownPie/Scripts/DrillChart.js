window.onload = function () {

    var totalVisitors = 883000;
    var visitorsData = {
        "New vs Returning Visitors": [{
            click: visitorsChartDrilldownHandler,
            cursor: "pointer",
            explodeOnClick: false,
            innerRadius: "75%",
            legendMarkerType: "square",
            name: "New vs Returning Visitors",
            radius: "100%",
            showInLegend: true,
            startAngle: 90,
            type: "pie",
            dataPoints: [
                { y: 519960, name: "New Visitors", color: "#E7823A" },
                { y: 363040, name: "Returning Visitors", color: "#546BC1" },
                { y: 36300, name: "POOF| Visitors", color: "#546BC1" }
            ]
        }],
        "New Visitors": [{
            color: "#E7823A",
            name: "New Visitors",
            type: "pie",
            dataPoints: [
                { x: new Date("1 Dec 2015"), y: 51600 },
                { x: new Date("1 Dec 2015"), y: 2300 }
            ]
        }],
        "Returning Visitors": [{
            color: "#546BC1",
            name: "Returning Visitors",
            type: "pie",
            dataPoints: [


                { x: new Date("1 Dec 2015"), y: 34400 }
            ]
        }]
    };

    var newVSReturningVisitorsOptions = {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "New VS Returning Visitors"
        },
        subtitles: [{
            text: "Click on Any Segment to Drilldown",
            backgroundColor: "#2eacd1",
            fontSize: 16,
            fontColor: "white",
            padding: 5
        }],
        legend: {
            fontFamily: "calibri",
            fontSize: 14,
            itemTextFormatter: function (e) {
                return e.dataPoint.name + ": " + Math.round(e.dataPoint.y / totalVisitors * 100) + "%";
            }
        },
        data: []
    };

    var visitorsDrilldownedChartOptions = {
        animationEnabled: true,
        theme: "light2",
        axisX: {
            labelFontColor: "#717171",
            lineColor: "#a2a2a2",
            tickColor: "#a2a2a2"
        },
        axisY: {
            gridThickness: 0,
            includeZero: false,
            labelFontColor: "#717171",
            lineColor: "#a2a2a2",
            tickColor: "#a2a2a2",
            lineThickness: 1
        },
        data: []
    };

    var chart = new CanvasJS.Chart("chartContainer", newVSReturningVisitorsOptions);
    chart.options.data = visitorsData["New vs Returning Visitors"];
    chart.render();

    function visitorsChartDrilldownHandler(e) {
        chart = new CanvasJS.Chart("chartContainer", visitorsDrilldownedChartOptions);
        chart.options.data = visitorsData[e.dataPoint.name];
        chart.options.title = { text: e.dataPoint.name }
        chart.render();
        $("#backButton").toggleClass("invisible");
    }

    $("#backButton").click(function () {
        $(this).toggleClass("invisible");
        chart = new CanvasJS.Chart("chartContainer", newVSReturningVisitorsOptions);
        chart.options.data = visitorsData["New vs Returning Visitors"];
        chart.render();
    });

}