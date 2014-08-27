Package.describe({
    name: "mrt:reactive-timer",
	summary: "A simple timer object, which can re-run reactive functions based on an interval",
    version: "0.1.3",
    git: "https://github.com/frozeman/meteor-reactive-timer.git"
});

Package.onUse(function (api, where) {
    api.versionsFrom('METEOR@0.9.0');

    // core
	api.use('deps', 'client');


	api.export('ReactiveTimer');

	api.addFiles('ReactiveTimer.js', 'client');
});

Package.onTest(function (api) {
	api.use('mrt:reactive-timer', 'client');
	api.use('tinytest', 'client');

	api.addFiles('test/tests.js', 'client');
});