define(['backbone'], function(Backbone) {

	/**
	 * NavView requires the 'a' tags to have a 'data-route' property on them.
	 */
	var NavView = Backbone.View.extend({
		initialize: function(options) {

			this.routeAttr = options.routeAttr || 'data-route';
			this.router = options.router;
		},

		events: {
			'click a': 'navigate'
		},

		navigate: function(e) {
			e.preventDefault();

			var $target = $(e.target),
				route = $target.attr('data-route');

			this.router.navigate(route, { trigger: true });
		},
	});

	return NavView;
});