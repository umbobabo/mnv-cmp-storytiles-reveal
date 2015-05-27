(function() {
var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['article'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<img src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.article : depth0)) != null ? stack1.image : stack1), depth0))
    + "\" />\n"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.article : depth0)) != null ? stack1.flyTitle : stack1), depth0))
    + "\n"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.article : depth0)) != null ? stack1.rubric : stack1), depth0))
    + "\n"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.article : depth0)) != null ? stack1.body : stack1), depth0));
},"useData":true});
}());
(function() {
var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['ec-storytilesreveal'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "      <li class=\"artical-reveal-tile "
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "\" data-nid=\""
    + alias3(((helper = (helper = helpers.nid || (depth0 != null ? depth0.nid : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"nid","hash":{},"data":data}) : helper)))
    + "\">\n        <div class=\"tile-content\">\n          <h2 class=\"section\">"
    + alias3(((helper = (helper = helpers.section || (depth0 != null ? depth0.section : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"section","hash":{},"data":data}) : helper)))
    + "</h2>\n          <h2 class=\"title\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h2>\n          <h2 class=\"rubrik\">"
    + alias3(((helper = (helper = helpers.rubrik || (depth0 != null ? depth0.rubrik : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"rubrik","hash":{},"data":data}) : helper)))
    + "</h2>\n"
    + ((stack1 = (helpers.ifvalue || (depth0 && depth0.ifvalue) || alias1).call(depth0,(depth0 != null ? depth0.type : depth0),{"name":"ifvalue","hash":{"equals":"quarter"},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "          <div class=\"image-grad\"></div>\n          <img class=\"image\" src=\""
    + alias3(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"image","hash":{},"data":data}) : helper)))
    + "\">\n        </div>\n      </li>\n";
},"2":function(depth0,helpers,partials,data) {
    var helper;

  return "          <div class=\"image-tint-"
    + this.escapeExpression(((helper = (helper = helpers.tint || (depth0 != null ? depth0.tint : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"tint","hash":{},"data":data}) : helper)))
    + "\"></div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"main-container\">\n  <div class=\"close-btn\">X</div>\n  <div class=\"article-container\"></div>\n  <div class=\"article-reveal-container\">\n    <ul>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.tile : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\n  </div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n";
},"useData":true});
}());