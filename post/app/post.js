var posts = [];
module.exports = {
  get: function () {
    return JSON.stringify(posts);
  },

  getById: function(id) {
    for(i = 0; i < posts.length; i++){
      if(posts[i].id == id){
        return JSON.stringify(posts[i]);
      }
    }
    return undefined;
  },

  getLast: function() {
    if(posts.length == 0){
      return undefined;
    }
    return JSON.stringify(posts[posts.length-1]);
  },

  upsert: function(id, post) {
    for(i = 0; i < posts.length; i++) {
      if(id == posts[i].id) {
        posts[i].detalle = post.detalle;
        return post;
      }
    }
    post.id = id;
    return posts.push(post);
  },

  deletePost: function (id) {
    for(i = 0; i < posts.length; i++) {
      if(posts[i].id == id) {
        posts.splice(i, 1);
        return JSON.stringify(posts);
      }
    }
    return undefined;
  }
};