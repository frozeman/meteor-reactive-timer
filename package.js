Package.describe({
    name: "frozeman:reactive-timer",
	summary: "A simple timer object, which can re-run reactive functions based on an interval",
    version: "0.1.4",
    git: "https://github.com/frozeman/meteor-reactive-timer.git"
});

Package.onUse(function (api, where) {
    api.versionsFrom('METEOR@1.0');

    // core
	api.use('tracker', 'client');


	api.export('ReactiveTimer');

	api.addFiles('ReactiveTimer.js', 'client');
});

Package.onTest(function (api) {
	api.use('frozeman:reactive-timer', 'client');
	api.use('tinytest', 'client');

	api.addFiles('test/tests.js', 'client');
});