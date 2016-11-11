/**
 * Created by Samuel Gratzl on 25.08.2015.
 */

window.onload = function () {

  var negative = 'true';

  function getrandom(datapoints, min, max) {
    var temparr = [];
    for (var i = 0; i < datapoints; i++) {

      if (negative == 'true') {
        temparr.push(Math.floor(Math.random() * (max * 2 + 1)) - (max));
      }
      else {
        temparr.push(Math.floor(Math.random() * (max - min) + min));

      }
    }

    return (temparr);
  }

  var datapoints = 50, min = 0, max = 100;

  var rand0 = getrandom(datapoints, min, max);
  var rand1 = getrandom(datapoints, min, max);
  var rand2 = getrandom(datapoints, min, max);
  var rand3 = getrandom(datapoints, min, max);
  var rand4 = getrandom(datapoints, min, max);


  function catdata(datapoints) {
    var temparr = [];
    for (var i = 0; i < datapoints; i++) {

      //temparr.push('c'+i,i);
      temparr.push(Math.floor(Math.random() * 2));

    }

    return (temparr);
  }


  var data;
  d3.json('data.json', function (data) {


    var newdata = [];


    data.reduce(function (a, b) {
      return newdata.push({
        'country': b.country,
        'iso': b.iso,
        'region': b.region,
        'PI-region': b.piregion,
        'pi_score': [b.pi_score2012, b.pi_score2013, b.pi_score2014, b.pi_score2015],
        'eco_score': [b.eco_score2012, b.eco_score2013, b.eco_score2014, b.eco_score2015],
        'eo_score': [b.eo_score2012, b.eo_score2013, b.eo_score2014, b.eo_score2015],
        'health_score': [b.health_score2012, b.health_score2013, b.health_score2014, b.health_score2015],
        'ss_score': [b.ss_score2012, b.ss_score2013, b.ss_score2014, b.ss_score2015],
        'pf_score': [b.pf_score2012, b.pf_score2013, b.pf_score2014, b.pf_score2015],
        'sk_score': [b.sk_score2012, b.sk_score2013, b.sk_score2014, b.sk_score2015]
      });

    }, 0)


    var arr1 = [];
    newdata.reduce(function (a, b, i) {
      var arraydata = b.health_score.map(function (x) {
        return parseFloat(x);

      });

      return arr1.push({
        country: b.country,
        heatmapcustom: arraydata,
        sparklinecustom: arraydata,
        boxplotcustom: arraydata,
        verticalbar: arraydata,
        vertcontinuous: arraydata

      })

    }, 0)


 var desc1 = [
        {label: 'Country', type: 'string', column: 'country'},
        {label: 'HeatMap', type: 'heatmapcustom', column: 'heatmapcustom'},
        {label: 'Spark Line', type: 'sparklinecustom', column: 'sparklinecustom'},
        {label: 'Box Plot', type: 'boxplotcustom', column: 'boxplotcustom'},
        {label: 'Vertical', type: 'verticalbar', column: 'verticalbar'},
        {label: 'vertcontinuous', type: 'vertcontinuous', column: 'vertcontinuous'}]

  console.log(desc1)
    var p = new LineUpJS.provider.LocalDataProvider(arr1, desc1);

    var r = p.pushRanking();

    var root = d3.select('body');
    desc1.forEach(function (d) {
      r.push(p.create(d));
    })
    console.log(p)
    var body = LineUpJS.create(p, root.node(), {
      body: {
        visibleRowsOnly: false
      }
    });
    body.update();

  })


  var cat0 = catdata(10);
  var cat1 = catdata(10);
  var cat2 = catdata(10);
  var cat3 = catdata(10);
  var cat4 = catdata(10);
  var tmp = [];
  var b = [];
  cat0.reduce(function (a, e, i) {
    if (e === 1)
      b.push(i);
    return b;
  }, []);

  // var am= array.map(function(d) {
  //
  //
  //
  // });

//
//
//
//
//   var arr = [
//     {
//       a: 10,
//       b: 20,
//       c: 30,
//       d: 'Row1',
//       cat: 'c1',
//       custom: {min: 10, max: 100, mean: 30},
//       heatmapcustom: rand0.slice(),
//       sparklinecustom: {data: rand0.slice()},
//       boxplotcustom: {data: rand0.slice()},
//       verticalbar: {data: rand0.slice()},
//       vertcontinuous: {data: rand0.slice()},
//       categoricalcustom: {data: cat0.slice()}
//
//     },
//     {
//       a: 50,
//       b: 14,
//       c: 2,
//       d: 'Row2',
//       cat: 'c2',
//       custom: {min: 10, max: 100, mean: 80},
//       heatmapcustom: rand1.slice(),
//       sparklinecustom: {data: rand1.slice()},
//       boxplotcustom: {data: rand1.slice()},
//       verticalbar: {data: rand1.slice()},
//       vertcontinuous: {data: rand1.slice()},
//       categoricalcustom: {data: cat1.slice()}
//     },
//     {
//       a: 20,
//       b: 7,
//       c: 100,
//       d: 'Row3',
//       cat: 'c3',
//       custom: {min: 10, max: 80, mean: 30},
//       heatmapcustom: rand2.slice(),
//       sparklinecustom: {data: rand2.slice()},
//       boxplotcustom: {data: rand2.slice()},
//       verticalbar: {data: rand2.slice()},
//       vertcontinuous: {data: rand2.slice()},
//       categoricalcustom: {data: cat2.slice()}
//     },
//     {
//       a: 70,
//       b: 1,
//       c: 60,
//       d: 'Row4',
//       cat: 'c1',
//       custom: {min: 20, max: 70, mean: 50},
//       heatmapcustom: rand3.slice(),
//       sparklinecustom: {data: rand3.slice()},
//       boxplotcustom: {data: rand3.slice()},
//       verticalbar: {data: rand3.slice()},
//       vertcontinuous: {data: rand3.slice()},
//       categoricalcustom: {data: cat3.slice()}
//     },
//     {
//       a: 17,
//       b: 1,
//       c: 60,
//       d: 'Row4',
//       cat: 'c1',
//       custom: {min: 60, max: 90, mean: 80},
//       heatmapcustom: rand0.slice(),
//       sparklinecustom: {data: rand4.slice()},
//       boxplotcustom: {data: rand4.slice()},
//       verticalbar: {data: rand4.slice()},
//       vertcontinuous: {data: rand4.slice()},
//       categoricalcustom: {data: cat4.slice()}
//     }
//   ];
//
// // console.log(arr[0].heatmapcustom['rand'])
//
  var desc = [
       {label: 'C', type: 'number', column: 'c', 'domain': [0, 120], color: 'green'},
    {label: 'A', type: 'number', column: 'a', 'domain': [0, 120], color: 'green'},
    {label: 'Cat', type: 'categorical', column: 'cat', categories: ['c1', 'c2', 'c3']},
    {label: 'Custom1', type: 'custom', column: 'custom'},
    {label: 'HeatMap', type: 'heatmapcustom', column: 'heatmapcustom'},
    {label: 'Spark Line', type: 'sparklinecustom', column: 'sparklinecustom'},
    {label: 'Box Plot', type: 'boxplotcustom', column: 'boxplotcustom'},
    {label: 'Vertical', type: 'verticalbar', column: 'verticalbar'},
    {label: 'vertcontinuous', type: 'vertcontinuous', column: 'vertcontinuous'},
    {label: 'categorical', type: 'categoricalcustom', column: 'categoricalcustom'}
  ];

//
  console.log( desc)

//   var p = new LineUpJS.provider.LocalDataProvider(arr, desc);
//
//   var r = p.pushRanking();
//
//   var root = d3.select('body');
//   desc.forEach(function (d) {
//     r.push(p.create(d));
//   })
//
//   var body = LineUpJS.create(p, root.node(), {});
//   body.update();
};
