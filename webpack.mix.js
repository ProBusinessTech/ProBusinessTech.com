let mix = require("laravel-mix");

mix.disableNotifications()

mix.js("src/js/app.js", "dist/").sass("src/assets/styles/app.scss", "dist/");

// Autoprefixer is enabled by default, see:
// https://laravel-mix.com/docs/6.0/autoprefixer
