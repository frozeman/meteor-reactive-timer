# ReactiveTimer

This package can run reactive functions in an given interval.

## Installation

    $ meteor add frozeman:reactive-timer

## Usage

To use the timer, instantiate a new interval:

    var myTimer = new ReactiveTimer();

Then you can start an interval of 10 seconds using:

    myTimer.start(10);

To use the timer just call the following in any reactive function:

    myTimer.tick();

To stop the timer use:

    myTimer.stop();

You can also pass an interval when initating, so you don't need to call `myTimer.start(10)` yourself:

    var myTimer = new ReactiveTimer(10);