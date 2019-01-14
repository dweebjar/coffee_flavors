window.onload = function() {

    CanvasJS.addColorSet("customColors1",
                [//colorSet Array

                "#C1AA57",
                "#CA6262",
                "#E6E91A",
                "#92602F",
                "#D76412",
                "#8CAD38"      
                ]);

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        backgroundColor: "#4B4E45",
        theme: "dark2",
        colorSet: "customColors1",
        title: {
            text: "Coffee Flavor Wheel",
            fontColor: "white"
        },
        data: [{
            type: "pie",
            startAngle: 240,
            yValueFormatString: "##0.00\"%\"",
            indexLabel: "{label}",
            indexLabelFontColor: "black",
            indexLabelPlacement: "inside",
            dataPoints: [
                {y: 16.66, label: "Nuts"},
                {y: 16.66, label: "Sweet Fruit"},
                {y: 16.66, label: "Floral"},
                {y: 16.66, label: "Chocolate"},
                {y: 16.66, label: "Herbal & Spicy"},
                {y: 16.66, label: "Bright Fruit"}
            ]
        }]
    });
    chart.render();
    
    }