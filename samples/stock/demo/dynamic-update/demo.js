$(function() {
	
	Highcharts.setOptions({
		global : {
			useUTC : false
		}
	});
	
	// Create the chart
	window.chart = new Highcharts.StockChart({
		chart : {
			renderTo : 'container',
			events : {
				load : function() {

					// set up the updating of the chart each second
					var series = this.series[0];
					setInterval(function() {
						var x = (new Date()).getTime(), // current time
						y = Math.round(Math.random() * 100);
						series.addPoint([x, y], true, true);
					}, 3000);
				}
			}
		},
		
		rangeSelector: {
			buttons: [{
				count: 1,
				type: 'minute',
				text: '1M'
			}, {
				count: 5,
				type: 'minute',
				text: '5M'
			}, {
				type: 'all',
				text: 'All'
			}],
			inputEnabled: false,
			selected: 0
		},
		
		title : {
			text : 'Live random data'
		},
		
		exporting: {
			enabled: false
		},
		
		series : [{
			name : 'Random data',
			data : (function() {
				// generate an array of random data
				var data = [], time = (new Date()).getTime(), i;

				for( i = -999; i <= 0; i++) {
					data.push({
						x : time + i * 1000,
						y : Math.round(Math.random() * 100)
					});
				}
				return data;
			})()
		}]
	});

});
