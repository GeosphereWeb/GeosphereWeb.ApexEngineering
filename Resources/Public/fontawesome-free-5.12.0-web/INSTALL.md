#Using Web Fonts with CSS
The /css/all.css file contains the core styling plus all of the icon styles that you’ll need when using Font Awesome. The /webfonts folder contains all of the typeface files that the above CSS references and depends on.

Copy the entire /webfonts folder and the /css/all.css into your project’s static assets directory (or where ever you prefer to keep front end assets or vendor stuff).

Add a reference to the copied /css/all.css file into the <head> of each template or page that you want to use Font Awesome on.

```html
<head>
  <link href="/your-path-to-fontawesome/css/all.css" rel="stylesheet"> <!--load all styles -->
</head>
<body>
  <i class="fas fa-user"></i> <!-- uses solid style -->
  <i class="far fa-user"></i> <!-- uses regular style -->
  <i class="fal fa-user"></i> <!-- uses light style -->
  <!--brand icon-->
  <i class="fab fa-github-square"></i> <!-- uses brands style -->
</body>
```

Using a CSS Pre-Processor?
Using the /scss or /less versions of Font Awesome we've bundled in the download? Check out our Sass and Less docs for details on their contents. Once you've compiled them into CSS, you can follow the CSS-focused steps noted here to handle hosting and referencing icons.
Using SVG with JavaScript
The /js/all.js loads all of the base features, plus all of the icon styles that you’ll need when using Font Awesome. Copy it into your project’s static assets directory (or where ever you prefer to keep front end assets or vendor stuff).

Add a reference to the copied /js/all.js file within the <head> of each template or page that you want to use Font Awesome on.

```html
<head>
  <script defer src="/your-path-to-fontawesome/js/all.js"></script> <!--load all styles -->
</head>
<body>
  <i class="fas fa-user"></i> <!-- uses solid style -->
  <i class="far fa-user"></i> <!-- uses regular style -->
  <i class="fal fa-user"></i> <!-- uses light style -->
  <!--brand icon-->
  <i class="fab fa-github-square"></i> <!-- uses brands style -->
</body>
```

Double-Check Your Paths
Since you're managing all of the downloaded files yourself, make sure the references in your pages' <head> are accurate with where you've moved all of Font Awesome's files in your project.
Using Just Certain Styles
Want to use just certain styles of icons when using our Web Fonts with CSS framework? The /css folder contains the core styling and additional files for all of Font Awesome’s style options - solid, regular, light, and brands. The /webfonts folder contains all of the typeface files that the above CSS references and depends on.


Icon Style | Web Font Filename | CSS Filename | Availability
Font Awesome Brands |	fa-brands-400.*	| brands.css | Free
Font Awesome Solid	| fa-solid-900.* | solid.css | Free
Font Awesome Regular | fa-regular-400.*	| regular.css	| Pro only
Font Awesome Light	| fa-light-300.*	| light.css	| Pro only

Copy both the /webfonts and the /css folders into your project’s static assets directory (or where ever you prefer to keep front end assets or vendor stuff). You can remove any styles’ .css and web font files you don’t plan on using if you’d like.

Add a reference to the core styling file (/css/fontawesome.css) and the CSS for individual styles (e.g. /css/brands.css) into the <head> of each template or page that you want to use Font Awesome on. Pay attention to the pathing of your project and where you moved the files to in the previous step.

```html
<head>
  <!-- Our project just needs Font Awesome Solid + Brands -->
  <link href="/your-path-to-fontawesome/css/fontawesome.css" rel="stylesheet">
  <link href="/your-path-to-fontawesome/css/brands.css" rel="stylesheet">
  <link href="/your-path-to-fontawesome/css/solid.css" rel="stylesheet">
</head>
<body>
  <i class="fas fa-user"></i> <!-- uses solid style -->
  <i class="fab fa-github-square"></i> <!-- uses brand style -->
</body>
```

Mind the Paths in Web Fonts
We recommend keeping the /webfonts and /css folders in the same directory. If you don't, you'll need to change the path to the web fonts mentioned in each style's CSS file.
Want use only certain styles when using our SVG with JS framework? The /js folder contains the core styling and additional files for all of Font Awesome’s style options - solid, regular, light, and brands.

| Icon Style | JS Filename | Availability |
| ------- | ------ | -------- | ------ |
| Font Awesome Brands | brands.js | Free |
| Font Awesome Solid | solid.js | Free |
| Font Awesome Regular | regular.js | Pro only | 
| Font Awesome Light | light.js | Pro only | 

Copy the fontawesome.js loader and whatever icon styles’ .js files you’d like to use into your project’s static assets directory (or where ever you prefer to keep front end assets or vendor stuff). We recommend referencing the fontawesome.js loader last.

```html
<head>
  <!-- Our project just needs Font Awesome Solid + Brands -->
  <script defer src="/your-path-to-fontawesome/js/brands.js"></script>
  <script defer src="/your-path-to-fontawesome/js/solid.js"></script>
  <script defer src="/your-path-to-fontawesome/js/fontawesome.js"></script>
</head>
<body>
  <i class="fas fa-user"></i> <!-- uses solid style -->
  <i class="fab fa-github-square"></i> <!-- uses brand style -->
</body>
```

Double-Check Your Paths
Since you're managing all of the downloaded files yourself, make sure the references in your pages' <head> are accurate with where you've moved all of Font Awesome's files in your project.
