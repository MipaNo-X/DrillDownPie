$(function () {

    // Create the chart
    $('#container').highcharts({
        chart: {
            type: 'column',
            events: {
                drilldown: function (e) {
                    if (!e.seriesOptions) {
                        // e.point.name is info which bar was clicked
                        chart.showLoading('Simulating Ajax ...');
                        $.get("path/to/place.html?name=" + e.point.name, function (data) {
                            /***
                            where data is this format:
                            data = {
                                name: 'Cars',
                                data: [
                                    ['Toyota', 1],
                                    ['Volkswagen', 2],
                                    ['Opel', 5]
                                ]
                            }
                            
                            ***/
                            chart.hideLoading();
                            chart.addSeriesAsDrilldown(e.point, data);
                        });
                    }
                }
            }
        },
        title: {
            text: 'Async drilldown'
        },
        xAxis: {
            type: 'category'
        },

        legend: {
            enabled: false
        },

        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                }
            }
        },

        series: [{
            name: 'Things',
            colorByPoint: true,
            data: [{
                name: 'Animals',
                y: 5,
                drilldown: true
            }, {
                name: 'Fruits',
                    y: 2,
                    drilldown: false
            }, {
                name: 'Cars',
                y: 4,
                drilldown: true
            }]
        }],

        drilldown: {
            series: []
        }
    })
});

