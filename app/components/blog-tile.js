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
    update(post, params) {
      console.log(post);
      this.sendAction('update', post, params);
    },
    delete(post) {
      if (confirm('Are you sure you want to delete this post?')) {
            this.sendAction('destroyBrother', post);
      }
    }
  }
});
