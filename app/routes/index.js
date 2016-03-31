import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('blog');
  },

  actions: {
    save3(params) {
      var newBlog = this.store.createRecord('blog', params);
      newBlog.save();
      this.transitionTo('index');
    },

  update(blog, params) {
    Object.keys(params).forEach(function(key) {
      if(params[key]!==undefined) {
        blog.set(key,params[key]);
      }
    });
      blog.save();
      this.transitionTo('index');
    },
    zipLookup(params) {
      this.transitionTo('trailer', params.zip)
    },

    destroyBlog(blog) {
      blog.destroyRecord();
      this.transitionTo('index');
    }
  }
});
