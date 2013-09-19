define(['backbone.navview','backbone','jquery'], function(NavView, Backbone, $) {


	var router = window.router = new Backbone.Router({
		routes: {
			'rota1': 'rota1',
		}
	});

	router.on('route:rota1', function() {
		alert('rota 1!');
	})

	var NavConstructor = NavView.extend({
		router: router,

		routingElSelector: 'a',

		retrieveRoute: function($el) {
			return $el.attr('data-app-route');
		},

		navigateOptions: { trigger: true },

		routingEvent: 'click',
	});


	window.nav = new NavConstructor({
		el: $('#nav')
	});


	Backbone.history.start({ pushState: true });

});