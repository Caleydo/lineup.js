/**
 * Created by Samuel Gratzl on 25.08.2015.
 */

window.onload = function () {

  var negative='false';
  function getrandom(datapoints,min,max) {
   var temparr = [];
    for (var i = 0; i < datapoints; i++) {

          if (negative=='true')
          {
            temparr.push(Math.floor(Math.random() * (max*2+1)) - (max));
          }
          else{
            temparr.push(Math.floor(Math.random() * (max - min) + min));

         }
    }

    return (temparr);
  }

 var datapoints=50,min=0,max=100;

  var rand0=getrandom(datapoints,min,max);
  var rand1= getrandom(datapoints,min,max);
  var rand2= getrandom(datapoints,min,max);
  var rand3=getrandom(datapoints,min,max);
  var rand4=getrandom(datapoints,min,max);
console.log(rand0);

  function verticalbar(datapoints) {
    var temparr = [];
    for (var i = 0; i < datapoints; i++) {

      temparr.push( Math.floor(Math.random() * 2));

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
      heatmapcustom:{rand:rand0.slice()},
      sparklinecustom:{rand:rand0.slice()},
      boxplotcustom: {rand:rand0.slice()},
      verticalbar:{rand:rand0.slice()},
      vertcontinuous:{rand:rand0.slice()}

    },
    {
      a: 50,
      b: 14,
      c: 2,
      d: 'Row2',
      cat: 'c2',
      custom: {min: 10, max: 100, mean: 80},
      heatmapcustom:{rand:rand1.slice()},
      sparklinecustom:{rand:rand1.slice()},
      boxplotcustom:{rand:rand1.slice()},
      verticalbar:{rand:rand1.slice()},
       vertcontinuous:{rand:rand1.slice()}
    },
    {
      a: 20,
      b: 7,
      c: 100,
      d: 'Row3',
      cat: 'c3',
      custom: {min: 10, max: 80, mean: 30},
      heatmapcustom:{rand:rand2.slice()},
      sparklinecustom: {rand:rand2.slice()},
      boxplotcustom: {rand:rand2.slice()},
      verticalbar:{rand:rand2.slice()},
       vertcontinuous:{rand:rand2.slice()}
    },
    {
      a: 70,
      b: 1,
      c: 60,
      d: 'Row4',
      cat: 'c1',
      custom: {min: 20, max: 70, mean: 50},
      heatmapcustom:{rand:rand3.slice()},
      sparklinecustom:{rand:rand3.slice()},
      boxplotcustom:{rand:rand3.slice()},
      verticalbar:{rand:rand3.slice()},
       vertcontinuous:{rand:rand3.slice()}
    },
    {
      a: 17,
      b: 1,
      c: 60,
      d: 'Row4',
      cat: 'c1',
      custom: {min: 60, max: 90, mean: 80},
      heatmapcustom:{rand:rand4.slice()},
      sparklinecustom: {rand:rand4.slice()},
      boxplotcustom:{rand:rand4.slice()},
      verticalbar:{rand:rand4.slice()},
      vertcontinuous:{rand:rand4.slice()}
    }
  ];
//   console.log(rand0)
// console.log(arr[0].heatmapcustom['rand'])
console.log(arr)
  var desc = [
    {label: 'D', type: 'string', column: 'd'},
    {label: 'C', type: 'number', column: 'c', 'domain': [0, 120], color: 'green'},
    {label: 'A', type: 'number', column: 'a', 'domain': [0, 120], color: 'green'},
    {label: 'Cat', type: 'categorical', column: 'cat', categories: ['c1', 'c2', 'c3']},
     {label: 'Custom1', type: 'custom', column: 'custom'},
    {label: 'HeatMap', type: 'heatmapcustom', column: 'heatmapcustom'},
    {label: 'Spark Line', type: 'sparklinecustom', column: 'sparklinecustom'},
    {label: 'Box Plot', type: 'boxplotcustom', column: 'boxplotcustom'},
    {label: 'Vertical', type: 'verticalbar', column: 'verticalbar'},
    {label: 'vertcontinuous', type: 'vertcontinuous', column: 'vertcontinuous'}
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
