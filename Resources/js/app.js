/**
 * User: Andre Schiemann
 * Date: 31.07.13
 * Time: 20:05
 *
 * Never change a running system.
 *
 * Get Updates from http://builds.emberjs.com/
 *
 * Smallest possible resolution
 * Width: 1050px Height: 600px
 *
 */
var App = Ember.Application.create();

App.Router.map(function() {
    this.resource('inventory');
    this.resource('login');
    this.resource('menu');
});

App.IndexRoute = Ember.Route.extend({
    redirect: function() {
        this.transitionTo('login');
    }
});

/**
 * Set the active class of navbar
 */
App.ApplicationView = Ember.View.extend({
    currentPathDidChange: function() {
        Ember.run.next( this, function() {
            this.$("ul.nav li:has(>a.active)").addClass('active');
            this.$("ul.nav li:not(:has(>a.active))").removeClass('active');
        });
    }.observes('controller.currentPath')
});

App.InventoryRoute = Ember.Route.extend({
    model: function(){
        return Ember.Object.create({vine: App.Vine.find(), meal: App.Meal.find()});
    }
});

App.Store = DS.Store.extend({
    revision: 13,
    adapter: 'DS.FixtureAdapter'
});

App.Vine = DS.Model.extend({
    title: DS.attr('string'),
    description: DS.attr('string')
});

App.Meal = DS.Model.extend({
    title: DS.attr('string'),
    text: DS.attr('string')
});

App.Vine.FIXTURES = [
    {
        id: 1,
        title: "Wein 1"
    }, {
        id: 2,
        title: "Wein 2"
}    , {
        id: 3,
        title: "Wein 3"
    }, {
        id: 4,
        title: "Wein 4"
    }, {
        id: 5,
        title: "Wein 5"
    }, {
        id: 6,
        title: "Wein 6"
    }, {
        id: 7,
        title: "Wein 7"
    }, {
        id: 8,
        title: "Wein 8"
    }, {
        id: 9,
        title: "Wein 9"
    }, {
        id: 10,
        title: "Wein 10"
    }, {
        id: 11,
        title: "Wein 11"
    }, {
        id: 12,
        title: "Wein 12"
    }, {
        id: 13,
        title: "Wein 13"
    }, {
        id: 14,
        title: "Wein 14"
    }, {
        id: 15,
        title: "Wein 15"
    }, {
        id: 16,
        title: "Wein 16"
    }, {
        id: 17,
        title: "Wein 17"
    }, {
        id: 18,
        title: "Wein 18"
    }, {
        id: 19,
        title: "Wein 19"
    }, {
        id: 20,
        title: "Wein 20"
    }, {
        id: 21,
        title: "Wein 21"
    }, {
        id: 22,
        title: "Wein 22"
    }, {
        id: 23,
        title: "Wein 23"
    }, {
        id: 24,
        title: "Wein 24"
    }, {
        id: 25,
        title: "Wein 25"
    }
];

App.Meal.FIXTURES = [
    {
        id: 1,
        title: "Speise 1"
    }, {
        id: 2,
        title: "Speise 2"
    }    , {
        id: 3,
        title: "Speise 3"
    }, {
        id: 4,
        title: "Speise 4"
    }, {
        id: 5,
        title: "Speise 5"
    }, {
        id: 6,
        title: "Speise 6"
    }, {
        id: 7,
        title: "Speise 7"
    }, {
        id: 8,
        title: "Speise 8"
    }, {
        id: 9,
        title: "Speise 9"
    }, {
        id: 10,
        title: "Speise 10"
    }, {
        id: 11,
        title: "Speise 11"
    }, {
        id: 12,
        title: "Speise 12"
    }, {
        id: 13,
        title: "Speise 13"
    }, {
        id: 14,
        title: "Speise 14"
    }, {
        id: 15,
        title: "Speise 15"
    }, {
        id: 16,
        title: "Speise 16"
    }, {
        id: 17,
        title: "Speise 17"
    }, {
        id: 18,
        title: "Speise 18"
    }, {
        id: 19,
        title: "Speise 19"
    }, {
        id: 20,
        title: "Speise 20"
    }, {
        id: 21,
        title: "Speise 21"
    }, {
        id: 22,
        title: "Speise 22"
    }, {
        id: 23,
        title: "Speise 23"
    }, {
        id: 24,
        title: "Speise 24"
    }, {
        id: 25,
        title: "Speise 25"
    }
];