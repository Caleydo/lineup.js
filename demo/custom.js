/**
 * Created by Samuel Gratzl on 25.08.2015.
 */

window.onload = function () {

  function getrandom(datapoints, min, max) {
    var temparr = [];
    for (var i = 0; i < datapoints; i++) {

      temparr.push(Math.floor(Math.random() * (max - min) + min));

    }
    return temparr;
  }

  function boxdata(datapoints, min, max) {
    var temparr = [];
    for (var i = 0; i < datapoints; i++) {

      temparr.push(Math.floor(Math.random() * (max - min) + min));

    }

    return (temparr);
  }


  function heatmapdata(datapoints, min, max) {
    var temparr = [];
    for (var i = 0; i < datapoints; i++) {

      temparr.push(Math.floor(Math.random() * (max - min) + min));

    }

    return (temparr);
  }

  var arr = [
    {
      a: 10,
      b: 20,
      c: 30,
      d: 'Row1',
      cat: 'c1',
      custom: {min: 10, max: 100, mean: 30},
      heatmapcustom: heatmapdata(6, 1, 30),
      sparklinecustom: getrandom(100, 1, 10),
      boxplotcustom: boxdata(60, 1, 100)
    },
    {
      a: 50,
      b: 14,
      c: 2,
      d: 'Row2',
      cat: 'c2',
      custom: {min: 10, max: 100, mean: 80},
      heatmapcustom: heatmapdata(7, 1, 30),
      sparklinecustom: getrandom(100, 1, 1000),
      boxplotcustom: boxdata(20, 1, 30)
    },
    {
      a: 20,
      b: 7,
      c: 100,
      d: 'Row3',
      cat: 'c3',
      custom: {min: 10, max: 80, mean: 30},
      heatmapcustom: heatmapdata(6, 1, 30),
      sparklinecustom: getrandom(200, 1, 100),
      boxplotcustom: boxdata(50, 1, 80)
    },
    {
      a: 70,
      b: 1,
      c: 60,
      d: 'Row4',
      cat: 'c1',
      custom: {min: 20, max: 70, mean: 50},
      heatmapcustom: heatmapdata(5, 1, 30),
      sparklinecustom: getrandom(20, 1, 100),
      boxplotcustom: boxdata(20, 1, 100)
    },
    {
      a: 17,
      b: 1,
      c: 60,
      d: 'Row4',
      cat: 'c1',
      custom: {min: 60, max: 90, mean: 80},
      heatmapcustom: heatmapdata(10, 1, 30),
      sparklinecustom: getrandom(20, 1, 100),
      boxplotcustom: boxdata(100, 1, 150)
    }
  ];

  // console.log(arr);
  var desc = [
    {label: 'D', type: 'string', column: 'd'},
    {label: 'C', type: 'number', column: 'c', 'domain': [0, 120], color: 'green'},
    {label: 'A', type: 'number', column: 'a', 'domain': [0, 120], color: 'green'},
    {label: 'Cat', type: 'categorical', column: 'cat', categories: ['c1', 'c2', 'c3']},
    // {label: 'Custom1', type: 'custom', column: 'custom'},
    {label: 'HeatMap', type: 'heatmapcustom', column: 'heatmapcustom'},
    {label: 'Spark Line', type: 'sparklinecustom', column: 'sparklinecustom'},
    {label: 'Box Plot', type: 'boxplotcustom', column: 'boxplotcustom'}
  ];

  var p = new LineUpJS.provider.LocalDataProvider(arr, desc);
  var r = p.pushRanking();

  var root = d3.select('body');
  desc.forEach(function (d) {
    r.push(p.create(d));
  })

  var body = LineUpJS.create(p, root.node(), {});
  body.update();
};
