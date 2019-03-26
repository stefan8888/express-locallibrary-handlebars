var register = function(Handlebars) {
  var helpers = {
    // put all of your helpers inside this object
    ifCond: function(v1, v2, options) {
      if(v1 === v2) {
        return options.fn(this);
      }
      return options.inverse(this);
    },
    ifnotCond: function(v1, v2, options) {
      if(v1 != v2) {
        return options.fn(this);
      }
      return options.inverse(this);
    },
    ifLt: function(v1, v2, v3, options) {
      if(Number(v1) < (v2 - v3)) {
        return options.fn(this);
      }
      return options.inverse(this);
    },
    ifCondOr: function(v1, v2, v3, v4, options) {
      if(v1 == v2 || v3 == v4) {
        return options.fn(this);
      }
      return options.inverse(this);
    }
  };

  if (Handlebars && typeof Handlebars.registerHelper === "function") {
    // register helpers
    for (var prop in helpers) {
        Handlebars.registerHelper(prop, helpers[prop]);
    }
  } else {
      // just return helpers object if we can't register helpers here
      return helpers;
  }

};

module.exports.register = register;
module.exports.helpers = register(null);   