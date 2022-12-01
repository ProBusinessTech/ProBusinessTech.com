const { DateTime } = require('luxon')

module.exports = {
    dateToFormat: function (date, format) {
        return DateTime.fromJSDate(date, { zone: 'utc' }).toFormat(
            String(format)
        )
    },

    dateToISO: function (date) {
        return DateTime.fromJSDate(date, { zone: 'utc' }).toISO({
            includeOffset: false,
            suppressMilliseconds: true
        })
    },

    obfuscate: function (str) {
        const chars = []
        for (var i = str.length - 1; i >= 0; i--) {
            chars.unshift(['&#', str[i].charCodeAt(), ';'].join(''))
        }
        return chars.join('')
    },

    titleorimage: function(title,image) {
        return image ? '<img src="' + image + '" title="' + title + '" alt="' + title + '" class="img-responsive img-thumbnail card-img-top"><br />' : title
    },
    linktarget: function(link) {
        if (link === '') {return '';}
        const target = link.startsWith('http') ? ' target="_blank" ' : '';
        return '<a ' + target + 'href="' + link + '">'
    },
    skillage: function (started) {
        return new Date().getFullYear() - started;
    }
}
