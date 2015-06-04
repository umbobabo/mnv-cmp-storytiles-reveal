(function() {
var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['ec-storytilesreveal'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "      <li class=\"artical-reveal-tile "
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + " "
    + alias3(((helper = (helper = helpers.animate || (depth0 != null ? depth0.animate : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"animate","hash":{},"data":data}) : helper)))
    + "\" data-id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" id=\"tile"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n        <a href=\""
    + alias3(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"url","hash":{},"data":data}) : helper)))
    + "\">\n          <div class=\"tile-content\">\n            <h2 class=\"section\">"
    + alias3(((helper = (helper = helpers.section || (depth0 != null ? depth0.section : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"section","hash":{},"data":data}) : helper)))
    + "</h2>\n            <h2 class=\"title\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h2>\n            <h2 class=\"rubrik\">"
    + alias3(((helper = (helper = helpers.rubric || (depth0 != null ? depth0.rubric : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"rubric","hash":{},"data":data}) : helper)))
    + "</h2>\n"
    + ((stack1 = (helpers.ifvalue || (depth0 && depth0.ifvalue) || alias1).call(depth0,(depth0 != null ? depth0.type : depth0),{"name":"ifvalue","hash":{"equals":"tile-1"},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "            <img class=\"image\" src=\""
    + alias3(((helper = (helper = helpers.img || (depth0 != null ? depth0.img : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"img","hash":{},"data":data}) : helper)))
    + "\">\n          </div>\n        </a>\n      </li>\n";
},"2":function(depth0,helpers,partials,data) {
    return "            <div class=\"image-tint\"></div>\n            <div class=\"image-grad\"></div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"main-container\">\n  <a class=\"close-btn\" href=\""
    + this.escapeExpression(((helper = (helper = helpers.landingPageUrl || (depth0 != null ? depth0.landingPageUrl : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"landingPageUrl","hash":{},"data":data}) : helper)))
    + "\">X</a>\n  <!-- TODO The article partials have to be adde only on the SS version, not on the CS version -->\n  <div class=\"article-container\">"
    + ((stack1 = this.invokePartial(partials['partials/theWorldIf/article'],depth0,{"name":"partials/theWorldIf/article","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "</div>CCC\n  <div class=\"article-reveal-container\">\n    <ul>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.tiles : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\n  </div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n";
},"usePartial":true,"useData":true});
}());
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
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.article : depth0)) != null ? stack1.body : stack1), depth0)) != null ? stack1 : "");
},"useData":true});
}());