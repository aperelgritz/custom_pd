'use strict';

var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');
var URLUtils = require('dw/web/URLUtils');
var ImageTransformation = require('*/cartridge/experience/utilities/ImageTransformation.js');

/**
 * Render logic for the storefront.bannerOverlay component
 * @param {dw.experience.ComponentScriptContext} context The Component script context object.
 * @returns {string} The template to be displayed
 */
module.exports.render = function (context) {
    var model = new HashMap();
    var content = context.content;

    model.width = content.width;
    model.height = content.height;
    model.border = content.border;
    model.padding = content.padding;
    model.margin = content.margin;
    model.flex_direction = content.flex_direction;
    model.justify_content = content.justify_content;
    model.align_items = content.align_items;

    model.left_width = content.left_width;
    model.left_height = content.left_height;
    model.left_bgnd = content.left_bgnd;

    model.separator_text = content.separator_text;
    model.sep_text_width = content.sep_text_width;
    model.sep_text_font_size = content.sep_text_font_size;
    //model.sep_text_color = content.sep_text_color;
    model.sep_text_color = (content.sep_text_color) ? content.sep_text_color.value : 'grey';
    model.sep_text_font_family = content.sep_text_font_family;
    model.sep_text_font_weight = content.sep_text_font_weight;
    model.sep_text_font_style = content.sep_text_font_style;
    model.sep_text_text_align = content.sep_text_text_align;

    model.right_width = content.right_width;
    model.right_height = content.right_height;
    model.right_bgnd = content.right_bgnd;

    //model.categoryLink = URLUtils.url('Search-Show', 'cgid', content.categoryLink.getID()).toString();

    return new Template('experience/components/poweruser_assets/separator').render(model).text;
};
