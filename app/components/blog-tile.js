import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  updateBrotherForm: false,

  actions: {
    imageShow: function() {
      this.set('isImageShowing', true);
    },
    imageHide: function() {
      this.set('isImageShowing', false);
    },
    zipLookup() {
      var params = {
        zip: this.get('zip')
      };
      this.sendAction('zipLookup', params);
    },
    update(blog, params) {
      console.log(blog);
      this.sendAction('update', blog, params);
    },
    delete(blog) {
      if (confirm('Are you sure you want to delete this blog?')) {
            this.sendAction('destroyBlog', blog);
      }
    }
  }
});
