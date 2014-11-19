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

var AlumniView = Parse.View.extend({
  template: _.template($("#alumni-template").html()),
  initialize: function(){
    this.render();
    $(".container").html(this.el);
    $("body").css("background-image","url('images/tke-beach.JPG')");
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
    $("body").css("background-image","url('images/tke-beach.JPG')");
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
    $("body").css("background-image","url('images/tke-trophy.jpg')");

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
    $("body").css("background-image","url('images/tke-trophy.jpg')");

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
    $("body").css("background-image","url('images/tke-trophy.jpg')");

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
    $("body").css("background-image","url('images/tke-trophy.jpg')");

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
    $("body").css("background-image","url('images/tke-trophy.jpg')");

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
    $("body").css("background-image","url('images/tke-trophy.jpg')");

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
    $("body").css("background-image","url('images/tke-trophy.jpg')");

  },
  render: function(){
    this.$el.html(this.template(this.model));
  }
});

var ContactView = Parse.View.extend({
  template: _.template($("#contact-template").html()),
  initialize: function(){
    this.render();
    $(".container").html(this.el);
    $("body").css("background-image","url('images/tke-trophy.jpg')");
    $("body").css("background-size","1100px 800px");
    $("body").css("background-repeat", "no-repeat");
    $("#mitch-block").mouseover(function(){
      $("#mitch-contact").fadeIn("fast");
    });
    $("#mitch-block").mouseout(function(){
      $("#mitch-contact").fadeOut("fast");
    });
    $("#john-block").mouseover(function(){
      $("#john-contact").fadeIn("fast");
    });
    $("#john-block").mouseout(function(){
      $("#john-contact").fadeOut("fast");
    });
    $("#trey-block").mouseover(function(){
      $("#trey-contact").fadeIn("fast");
    });
    $("#trey-block").mouseout(function(){
      $("#trey-contact").fadeOut("fast");
    });
    $("#nick-block").mouseover(function(){
      $("#nick-contact").fadeIn("fast");
    });
    $("#nick-block").mouseout(function(){
      $("#nick-contact").fadeOut("fast");
    });
    $("#will-block").mouseover(function(){
      $("#will-contact").fadeIn("fast");
    });
    $("#will-block").mouseout(function(){
      $("#will-contact").fadeOut("fast");
    });
    $("#james-block").mouseover(function(){
      $("#james-contact").fadeIn("fast");
    });
    $("#james-block").mouseout(function(){
      $("#james-contact").fadeOut("fast");
    });
    $("#jason-block").mouseover(function(){
      $("#jason-contact").fadeIn("fast");
    });
    $("#jason-block").mouseout(function(){
      $("#jason-contact").fadeOut("fast");
    });
  },
  render: function(){
    this.$el.html(this.template(this.model));
  }
});

var LogInView = Parse.View.extend({
  events:{
    "click #pass": "submitpass"
  },
  template: _.template($("#login-template").html()),
  initialize: function(){
    this.render();
    $(".container").html(this.el);
  },
  render: function(){
    this.$el.html(this.template(this.model));
  },
  submitpass: function(){
    if($("#frat-pass").val() === "willabeesucksdick"){
      new ActiveView();
    } else {
      alert("Incorrect Password");
    }
  }
});

var ActiveView = Parse.View.extend({
  template: _.template($("#active-template").html()),
  initialize: function(){
    this.render();
    $(".container").html(this.el);
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
      "undergraduates/information/history": "history",
      "undergraduates/contact": "contact",
      "active": "login"
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
  },
  contact: function(){
      new ContactView();
  },
  login: function(){
      new LogInView();
  }
});

var approuter = new Router();

Parse.history.start();
