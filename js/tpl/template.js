(function() {
var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['ec-storytilesreveal'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "      <div class=\"article-reveal-tile "
    + alias3(((helper = (helper = helpers.animate || (depth0 != null ? depth0.animate : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"animate","hash":{},"data":data}) : helper)))
    + "\" data-id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" id=\"tile"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n        <a href=\""
    + alias3(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"url","hash":{},"data":data}) : helper)))
    + "\" class=\"article-reveal-tile-link\">\n          <div class=\"tile-content\">\n            <div class=\"text-part\">\n              <h2 class=\"section\">"
    + alias3(((helper = (helper = helpers.section || (depth0 != null ? depth0.section : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"section","hash":{},"data":data}) : helper)))
    + "</h2>\n              <h2 class=\"title\">"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h2>\n              <h2 class=\"rubrik\">"
    + alias3(((helper = (helper = helpers.rubric || (depth0 != null ? depth0.rubric : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"rubric","hash":{},"data":data}) : helper)))
    + "</h2>\n            </div>\n          </div>\n          <div class=\"image-part\">\n            <div class=\"image-tint\"></div>\n            <div class=\"image-grad\"></div>\n            <img class=\"image\" src=\""
    + alias3(((helper = (helper = helpers.img || (depth0 != null ? depth0.img : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"img","hash":{},"data":data}) : helper)))
    + "\">\n          </div>\n        </a>\n      </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"main-container\">\n  <a class=\"close-btn\" href=\""
    + this.escapeExpression(((helper = (helper = helpers.landingPageUrl || (depth0 != null ? depth0.landingPageUrl : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"landingPageUrl","hash":{},"data":data}) : helper)))
    + "\">X</a>\n  <!-- TODO The article partials have to be adde only on the SS version, not on the CS version -->\n  <div class=\"article-container\">"
    + ((stack1 = this.invokePartial(partials['partials/theWorldIf/article'],depth0,{"name":"partials/theWorldIf/article","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "</div>CCC\n  <div class=\"article-reveal-container\">\n    <div class=\"article-list\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.tiles : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div class=\"article-list\">\n  </div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n";
},"usePartial":true,"useData":true});
}());
(function() {
var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['article'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<div class=\"article-container-inner\">\n<!-- <div class=\"grid\"></div> -->\n<div class=\"section group\">\n  <div class=\"span_12 article-image-container\">\n  <div class=\"article-image-container-content\">\n    <div class=\"article-title-container\">\n      <div class=\"article-section margin_1\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.article : depth0)) != null ? stack1.section : stack1), depth0))
    + "</div>\n      <div class=\"article-title margin_1\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.article : depth0)) != null ? stack1.title : stack1), depth0))
    + "</div>\n    </div>\n    <img src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.article : depth0)) != null ? stack1['image-small'] : stack1), depth0))
    + "\" srcset=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.article : depth0)) != null ? stack1['image-large'] : stack1), depth0))
    + " 1000w, "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.article : depth0)) != null ? stack1['image-small'] : stack1), depth0))
    + " 640w\" class=\"article-image\" /></div>\n  </div>\n</div>\n<div class=\"section group\">\n  <div class=\"span_10 article-rubric margin_1\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.article : depth0)) != null ? stack1.rubric : stack1), depth0))
    + "</div>\n</div>\n<div class=\"section group\">\n  <div class=\"span_10 article-body margin_1\">"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.article : depth0)) != null ? stack1.body : stack1), depth0)) != null ? stack1 : "")
    + "</div>\n</div>\n\n<div class=\"section group\">\n  <div class=\"span_12 more-stories-container\">blah\n    <nav class=\"more-stories-nav\">\n      <ul>\n        <li>Politics</li>\n        <li>Business & Finance</li>\n        <li>Science & Technology</li>\n        <li>History</li>\n      </ul>\n    </nav>\n    <div>\n      <ul>\n        <li>01</li>\n        <li>02</li>\n        <li>03</li>\n        <li>04</li>\n      </ul>\n    </div>\n  </div>\n</div>\n</div>";
},"useData":true});
}());