/**
 * Created by Samuel Gratzl on 25.08.2015.
 */

window.onload = function () {
  var arr = [
        {
            a: 10,
            b: 20,
            c: 30,
            d: 'Row1',
            cat: 'c1',
            custom: {min: 10, max: 100, mean: 30},
            custom2: {x: [5, 22, 44, 66, 88]},
            custom3: {x: [10, 22, 44, 66, 88]},
            custom4: {min:14,max:65,med:33,q1:20,q3:35}
        },
        {
            a: 5,
            b: 14,
            c: 2,
            d: 'Row2',
            cat: 'c2',
            custom: {min: 10, max: 100, mean: 80},
            custom2: {x: [10, 8, 44, 66, 88]},
            custom3: {x: [10, 22, 44, 66, 88]},
            custom4: {min:25,max:73,med:25,q1:25,q3:30}
        },
        {
            a: 2,
            b: 7,
            c: 100,
            d: 'Row3',
            cat: 'c3',
            custom: {min: 10, max: 80, mean: 30},
            custom2: {x: [10, 22, 10, 66, 88]},
            custom3: {x: [10, 22, 44, 66, 88]},
            custom4: {min:15,max:40,med:25,q1:17,q3:28}
        },
        {
            a: 7,
            b: 1,
            c: 60,
            d: 'Row4',
            cat: 'c1',
            custom: {min: 20, max: 70, mean: 50},
            custom2: {x: [10, 22, 44, 66, 99]},
            custom3: {x: [10, 22, 44, 66, 88]},
             custom4: {min:18,max:55,med:33,q1:28,q3:42}
        },
        {
            a: 7,
            b: 1,
            c: 60,
            d: 'Row4',
            cat: 'c1',
            custom: {min: 60, max: 90, mean: 80},
            custom2: {x: [10, 11, 44, 66, 88]},
            custom3: {x: [10, 22, 44, 66, 88]},
            custom4: {min:14,max:66,med:35,q1:22,q3:45}
        }
    ];

    var desc = [
        {label: 'D', type: 'string', column: 'd'},
        {label: 'C', type: 'number', column: 'c', 'domain': [0, 120], color: 'green'},
        {label: 'A', type: 'number', column: 'a', 'domain': [0, 120], color: 'green'},
        {label: 'Cat', type: 'categorical', column: 'cat', categories: ['c1', 'c2', 'c3']},
       // {label: 'Custom1', type: 'custom', column: 'custom'},
        {label: 'HeatMap', type: 'heatmapcustom', column: 'custom2'},
        {label: 'Spark Line', type: 'sparklinecustom', column: 'custom3'},
        {label: 'Box Plot', type: 'boxplotcustom', column: 'custom4'}
    ];

    var p = new LineUpJS.provider.LocalDataProvider(arr, desc);
    var r = p.pushRanking();

    var root = d3.select('body');
    desc.forEach(function (d) {


        r.push(p.create(d));
    })

    var body = LineUpJS.create(p, root.node(), {
    });
    body.update();
};
