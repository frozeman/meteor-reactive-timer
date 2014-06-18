
Tinytest.add('The timer set the _intervalId property', function (test) {
    var timer = new ReactiveTimer();
    timer.start(1);

    test.isTrue(timer._intervalId !== null);

    timer.stop();
});


Tinytest.addAsync('The timer run', function (test, expect) {
    var run = false,
        timer = new ReactiveTimer();
    timer.start(1);

    Deps.autorun(function(c){
        timer.tick();

        if(!c.firstRun)
            run = true;
    });

    Meteor.setTimeout(function(){
        test.equal(run, true);
        timer.stop();

        expect();
    }, 1010);
});

Tinytest.addAsync('The timer should stop', function (test, expect) {
    var run = false,
        timer = new ReactiveTimer();
    timer.start(1);
    timer.stop();

    Deps.autorun(function(c){
        timer.tick();

        if(!c.firstRun)
            run = true;
    });

    Meteor.setTimeout(function(){
        test.equal(run, false);

        expect();
    }, 1010);
});