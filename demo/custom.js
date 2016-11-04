/**
 * Created by Samuel Gratzl on 25.08.2015.
 */

window.onload = function () {

  var negative='true';
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

  function catdata(datapoints) {
    var temparr = [];
    for (var i = 0; i < datapoints; i++) {

      temparr.push('c'+i,i);
      //temparr.push( Math.floor(Math.random() * 2));

    }

    return (temparr);
  }
 console.log(catdata(10))

var testobj ={min: 10, max: 100, mean: 30}
  console.log(testobj)
  var arr = [
    {
      a: 10,
      b: 20,
      c: 30,
      d: 'Row1',
      cat: 'c1',
      custom: {min: 10, max: 100, mean: 30},
      heatmapcustom:{data:rand0.slice()},
      sparklinecustom:{data:rand0.slice()},
      boxplotcustom: {data:rand0.slice()},
      verticalbar:{data:rand0.slice()},
      vertcontinuous:{data:rand0.slice()}

    },
    {
      a: 50,
      b: 14,
      c: 2,
      d: 'Row2',
      cat: 'c2',
      custom: {min: 10, max: 100, mean: 80},
     heatmapcustom:{data:rand1.slice()},
      sparklinecustom:{data:rand1.slice()},
      boxplotcustom:{data:rand1.slice()},
      verticalbar:{data:rand1.slice()},
       vertcontinuous:{data:rand1.slice()}
    },
    {
      a: 20,
      b: 7,
      c: 100,
      d: 'Row3',
      cat: 'c3',
      custom: {min: 10, max: 80, mean: 30},
     heatmapcustom:{data:rand2.slice()},
      sparklinecustom: {data:rand2.slice()},
      boxplotcustom: {data:rand2.slice()},
      verticalbar:{data:rand2.slice()},
       vertcontinuous:{data:rand2.slice()}
    },
    {
      a: 70,
      b: 1,
      c: 60,
      d: 'Row4',
      cat: 'c1',
      custom: {min: 20, max: 70, mean: 50},
     heatmapcustom:{data:rand3.slice()},
      sparklinecustom:{data:rand3.slice()},
      boxplotcustom:{data:rand3.slice()},
      verticalbar:{data:rand3.slice()},
       vertcontinuous:{data:rand3.slice()}
    },
    {
      a: 17,
      b: 1,
      c: 60,
      d: 'Row4',
      cat: 'c1',
      custom: {min: 60, max: 90, mean: 80},
      heatmapcustom:{data:rand4.slice()},
      sparklinecustom: {data:rand4.slice()},
      boxplotcustom:{data:rand4.slice()},
      verticalbar:{data:rand4.slice()},
      vertcontinuous:{data:rand4.slice()}
    }
  ];

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
