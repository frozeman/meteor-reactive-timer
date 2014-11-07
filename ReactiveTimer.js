ReactiveTimer = (function () {

    // Constructor
    function ReactiveTimer(interval) {
    	this._dependency = new Deps.Dependency;
    	this._intervalId = null;

        if(_.isFinite(interval))
            this.start(interval);

    };

    ReactiveTimer.prototype.start = function(interval){
    	var _this = this;

    	this._intervalId = Meteor.setInterval(function(){
            // rerun every "interval"
            _this._dependency.changed();
        }, 1000 * interval);
    };

    ReactiveTimer.prototype.stop = function(){
        Meteor.clearInterval(this._intervalId);
        this._intervalId = null;
    };

    ReactiveTimer.prototype.tick = function(){
        this._dependency.depend();
    };

    return ReactiveTimer;
})();