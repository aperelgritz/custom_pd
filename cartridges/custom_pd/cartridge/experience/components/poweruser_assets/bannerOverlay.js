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

    if (content.image) {
        const { focalPointX, focalPointY } = ImageTransformation.getScaledImage(content.image);

        model.image = {
            src: {
                mobile: ImageTransformation.url(content.image.file, { device: 'mobile' }),
                desktop: ImageTransformation.url(content.image.file, { device: 'desktop' })
            },
            alt: content.image.file.getAlt(),
            focalPointX: focalPointX,
            focalPointY: focalPointY
        };
    }

    model.banner_link = content.banner_link ? content.banner_link : null;
    model.width = content.width;
    model.height = content.height;
    model.margin = content.margin;
    model.background_size = content.background_size;
    model.background_repeat = content.background_repeat;
    model.flex_direction = content.flex_direction;
    model.justify_content = content.justify_content;
    model.align_items = content.align_items;

    model.title_show = content.title_show;
    model.title_text = content.title_text;
    model.title_width = content.title_width;
    model.title_border = content.title_border;
    model.title_padding = content.title_padding;
    model.title_margin = content.title_margin;
    //model.title_bgnd_color = content.title_bgnd_color;
    model.bgnd_color = (content.bgnd_color) ? content.bgnd_color.value : 'transparent';
    model.title_font_size = content.title_font_size;
    //model.title_color = content.title_color;
    model.title_color = (content.title_color) ? content.title_color.value : '#000';
    model.title_font_family = content.title_font_family;
    model.title_font_weight = content.title_font_weight;
    model.title_font_style = content.title_font_style;
    model.title_text_align = content.title_text_align;
    model.title_text_shadow = content.title_text_shadow;

    model.subtitle_show = content.subtitle_show;
    model.subtitle_text = content.subtitle_text;
    model.subtitle_width = content.subtitle_width;
    model.subtitle_border = content.subtitle_border;
    model.subtitle_padding = content.subtitle_padding;
    model.subtitle_margin = content.subtitle_margin;
    //model.subtitle_bgnd_color = content.subtitle_bgnd_color;
    model.subtitle_bgnd_color = (content.subtitle_bgnd_color) ? content.subtitle_bgnd_color.value : 'transparent';
    model.subtitle_font_size = content.subtitle_font_size;
    //model.subtitle_color = content.subtitle_color;
    model.subtitle_color = (content.subtitle_color) ? content.subtitle_color.value : '#000';
    model.subtitle_font_family = content.subtitle_font_family;
    model.subtitle_font_weight = content.subtitle_font_weight;
    model.subtitle_font_style = content.subtitle_font_style;
    model.subtitle_text_align = content.subtitle_text_align;
    model.subtitle_text_shadow = content.subtitle_text_shadow;

    model.btn_show = content.btn_show;
    model.btnLink = content.btnLink ? content.btnLink : null;
    model.btn_text = content.btn_text;
    model.btn_width = content.btn_width;
    model.btn_border = content.btn_border;
    model.btn_padding = content.btn_padding;
    model.btn_margin = content.btn_margin;
    //model.btn_bgnd_color = content.btn_bgnd_color;
    model.btn_bgnd_color = (content.btn_bgnd_color) ? content.btn_bgnd_color.value : 'transparent';
    model.btn_font_size = content.btn_font_size;
    //model.btn_color = content.btn_color;
    model.btn_color = (content.btn_color) ? content.btn_color.value : '#000';
    model.btn_font_family = content.btn_font_family;
    model.btn_font_weight = content.btn_font_weight;
    model.btn_font_style = content.btn_font_style;
    model.btn_text_align = content.btn_text_align;
    model.btn_border_radius = content.btn_border_radius;

    //model.categoryLink = URLUtils.url('Search-Show', 'cgid', content.categoryLink.getID()).toString();

    return new Template('experience/components/poweruser_assets/bannerOverlay').render(model).text;
};
