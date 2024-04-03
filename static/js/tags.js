Highcharts.chart('container', {
    chart: {
        type: 'packedbubble',
        height: '500px'
    },
    title: {
        text: 'Tags in articles',
        align: 'center'
    },
    tooltip: {
        useHTML: true,
        pointFormat: `<b>{point.name}:</b> {point.value}`
    },
    plotOptions: {
        // 클릭 이벤트 처리
        series: {
            cursor: 'pointer',
            point: {
                events: {
                    click: function () {
                        const options = this.options;
                        location.href = options.url;
                    }
                }
            }
        },
        packedbubble: {
            minSize: '30%',
            maxSize: '120%',
            zMin: 0,
            zMax: 1000,
            layoutAlgorithm: {
                splitSeries: false,
                gravitationalConstant: 0.02
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}',
                style: {
                    color: 'black',
                    textOutline: 'none',
                    fontWeight: 'normal'
                }
            }
        }
    },
    series: [{
        name: 'Tag',
        data: tags.map(e => {
            return {name: e[0], value: e[1], url: e[2]}
        })
    }]
});