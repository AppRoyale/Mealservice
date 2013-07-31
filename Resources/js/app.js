var App = Ember.Application.create();

App.IndexRoute = Ember.Route.extend({
    model: function(){
        return Ember.Object.create({post: App.Post.find(), page: App.Page.find()});
    }
});

App.Store = DS.Store.extend({
    revision: 13,
    adapter: 'DS.FixtureAdapter'
});

App.Post = DS.Model.extend({
    title: DS.attr('string'),
    description: DS.attr('string')
});

App.Page = DS.Model.extend({
    title: DS.attr('string'),
    text: DS.attr('string')
});

App.Post.FIXTURES = [
    {
        id: 1,
        title: "My super post",
        description: "Lorem ipsum dolor sit amet..."
    }, {
    id: 2,
    title: "My super post",
    description: "Lorem ipsum dolor sit amet..."
    }
];

App.Page.FIXTURES = [
    {
        id: 1,
        title: "My super page",
        text: "Lorem ipsum dolor sit amet..."
    }, {
        id: 2,
        title: "yolo",
        text: "yolo"
    }
];