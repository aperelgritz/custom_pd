'use strict';

var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');
var URLUtils = require('dw/web/URLUtils');
var ImageTransformation = require('*/cartridge/experience/utilities/ImageTransformation.js');

/**
 * Render logic for the storefront.infoCard component
 * @param {dw.experience.ComponentScriptContext} context The Component script context object.
 * @returns {string} The template to be displayed
 */
module.exports.render = function (context) {
    var model = new HashMap();
    var content = context.content;

    var hoverEffects = {
        "None": "experience-class-empty",
        "Shadow": "experience-shadow-effect"
    };

    model.card_width = content.card_width;
    model.card_max_width = content.card_max_width;
    model.card_height = content.card_height;
    model.card_margin = content.card_margin;
    //model.card_bgnd_color = content.card_bgnd_color;
    model.card_bgnd_color = (content.card_bgnd_color) ? content.card_bgnd_color.value : '';
    model.card_border_radius = content.card_border_radius;
    model.card_box_shadow = content.card_box_shadow;
    model.card_link = content.card_link;
    model.card_hover_effect = hoverEffects[content.card_hover_effect]

    model.image = ImageTransformation.getScaledImage(content.image);
    model.img_width = content.img_width;
    model.img_height = content.img_height;
    model.img_margin = content.img_margin;
    model.img_border_radius = content.img_border_radius;
    model.img_bgnd_size = content.img_bgnd_size;
    model.img_bgnd_position = content.img_bgnd_position;
    model.img_bgnd_repeat = content.img_bgnd_repeat;

    model.ctnr_flex_direction = content.ctnr_flex_direction;
    model.ctnr_justify_content = content.ctnr_justify_content;
    model.ctnr_align_items = content.ctnr_align_items;

    model.title_show = content.title_show;
    model.title_text = content.title_text;
    model.title_padding = content.title_padding;
    model.title_font_size = content.title_font_size;
    //model.title_color = content.title_color;
    model.title_color = (content.title_color) ? content.title_color.value : '#5679C0';
    model.title_font_family = content.title_font_family;
    model.title_font_weight = content.title_font_weight;
    model.title_font_style = content.title_font_style;
    model.title_text_align = content.title_text_align;

    model.subtitle_show = content.subtitle_show;
    model.subtitle_text = content.subtitle_text;
    model.subtitle_padding = content.subtitle_padding;
    model.subtitle_font_size = content.subtitle_font_size;
    model.subtitle_color = content.subtitle_color;
    model.subtitle_font_family = content.subtitle_font_family;
    model.subtitle_font_weight = content.subtitle_font_weight;
    model.subtitle_font_style = content.subtitle_font_style;
    model.subtitle_text_align = content.subtitle_text_align;

    model.link_show = content.link_show;
    model.link = content.link ? content.link : '#';
    model.link_text = content.link_text;
    model.link_padding = content.link_padding;
    model.link_font_size = content.link_font_size;
    model.link_color = content.link_color;
    model.link_font_family = content.link_font_family;
    model.link_font_weight = content.link_font_weight;
    model.link_font_style = content.link_font_style;
    model.link_text_align = content.link_text_align;

    //model.categoryLink = URLUtils.url('Search-Show', 'cgid', content.categoryLink.getID()).toString();

    return new Template('experience/components/poweruser_assets/infoCard').render(model).text;
};
