Package.describe({
	summary: "A simple timer object, which can re-run reactive functions based on an interval"
});

Package.on_use(function (api, where) {
	api.use('deps', 'client');

	api.export('ReactiveTimer');

	api.add_files('ReactiveTimer.js', 'client');
});