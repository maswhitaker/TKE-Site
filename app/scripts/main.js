Parse.initialize("tUXx7mUI628sxD4RmKgQmt4hCRSov2U2iQSGT1VG", "OUrPdCE2a2JeyLCjiXq0Go6VJMTvOp6LallWJpLa");


var StartupView = Parse.View.extend({
  template: _.template($("#startup-template").html()),

  initialize: function(){
    this.render();
    $(".container").html(this.el);
    $(document).ready(function(){
      $("#startup-screen").fadeIn(3000, "linear");
    });
  },

  render: function(){
    this.$el.html(this.template(this.model));
  }
});

var UndergraduatesView = Parse.View.extend({
  template: _.template($("#undergraduates-template").html()),
  initialize: function(){
    this.render();
    $(".container").html(this.el);
    $("body").css("background-image","url('../images/tke-beach.jpg')");
  },
  render: function(){
    this.$el.html(this.template(this.model));
  }
});

var InformationView = Parse.View.extend({
  template: _.template($("#information-template").html()),
  initialize: function(){
    this.render();
    $(".container").html(this.el);
    $("body").css("background-image","url('../images/tke-trophy.jpg')");

  },
  render: function(){
    this.$el.html(this.template(this.model));
  }
});

var ScrollsView = Parse.View.extend({
  template: _.template($("#scrolls-template").html()),
  initialize: function(){
    this.render();
    $(".container").html(this.el);
    $("body").css("background-image","url('../images/tke-trophy.jpg')");

  },
  render: function(){
    this.$el.html(this.template(this.model));
  }
});

var ActivememberView = Parse.View.extend({
  template: _.template($("#activemember-template").html()),
  initialize: function(){
    this.render();
    $(".container").html(this.el);
    $("body").css("background-image","url('../images/tke-trophy.jpg')");

  },
  render: function(){
    this.$el.html(this.template(this.model));
  }
});

var AwardsView = Parse.View.extend({
  template: _.template($("#awards-template").html()),
  initialize: function(){
    this.render();
    $(".container").html(this.el);
    $("body").css("background-image","url('../images/tke-trophy.jpg')");

  },
  render: function(){
    this.$el.html(this.template(this.model));
  }
});

var PhotoView = Parse.View.extend({
  template: _.template($("#photos-template").html()),
  initialize: function(){
    this.render();
    $(".container").html(this.el);
    $("body").css("background-image","url('../images/tke-trophy.jpg')");

  },
  render: function(){
    this.$el.html(this.template(this.model));
  }
});

var OfficerView = Parse.View.extend({
  template: _.template($("#officer-template").html()),
  initialize: function(){
    this.render();
    $(".container").html(this.el);
    $("body").css("background-image","url('../images/tke-trophy.jpg')");

  },
  render: function(){
    this.$el.html(this.template(this.model));
  }
});

var HistoryView = Parse.View.extend({
  template: _.template($("#history-template").html()),
  initialize: function(){
    this.render();
    $(".container").html(this.el);
    $("body").css("background-image","url('../images/tke-trophy.jpg')");

  },
  render: function(){
    this.$el.html(this.template(this.model));
  }
});

var Router = Parse.Router.extend({
  routes:{
      "": "startup",
      "undergraduates": "undergraduates",
      "alumni": "alumni",
      "undergraduates/information": "information",
      "undergraduates/information/scrolls": "scrolls",
      "undergraduates/information/active-member": "activemember",
      "undergraduates/information/awards": "awards",
      "undergraduates/information/photos": "photos",
      "undergraduates/information/officers": "officers",
      "undergraduates/information/history": "history"
  },
  startup: function(){
      new StartupView();
  },
  undergraduates: function(){
      new UndergraduatesView();
  },
  alumni: function(){
      new AlumniView();
  },
  information: function(){
      new InformationView();
  },
  scrolls: function(){
      new ScrollsView();
  },
  activemember: function(){
      new ActivememberView();
  },
  awards: function(){
      new AwardsView();
  },
  photos: function(){
      new PhotoView();
  },
  officers: function(){
      new OfficerView();
  },
  history: function(){
      new HistoryView();
  }
});

var approuter = new Router();

Parse.history.start();
