define(['backbone'], function(Backbone) {

	/**
	 * NavView requires the 'a' tags to have a 'data-route' property on them.
	 */
	var NavView = Backbone.View.extend({
		initialize: function(options) {

			_.bindAll(this,'handleNav');

			// router
			this.router = options.router || this.router;

			this.routingElSelector = options.routingElSelector || this.routingElSelector;
			this.retrieveRoute = options.retrieveRoute || this.retrieveRoute;
			this.navigateOptions = options.navigateOptions || this.navigateOptions;
			this.routingEvent = options.routingEvent || this.routingEvent;

			this.$el.on(this.routingEvent, this.routingElSelector, this.handleNav);
		},

		router: undefined,

		/**
		 * Selectors of the elements on which to listen for events.
		 */
		routingElSelector: 'a',
		/**
		 * method that returns the route to go to.
		 */
		retrieveRoute: function($el) { return $el.attr('data-route'); },
		/**
		 * options to be passed as second parameter to the router.navigate(route, options)
		 */
		navigateOptions: { trigger: true },
		/**
		 * Event that will be listened to
		 */
		routingEvent: 'click',

		handleNav: function(e) {
			e.preventDefault();

			var $target = $(e.currentTarget),
				route = this.retrieveRoute($target);

			this.router.navigate(route, this.navigateOptions);
		},
	});

	return NavView;
});