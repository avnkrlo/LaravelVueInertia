<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" />
    <link href="https://cdn.jsdelivr.net/npm/daisyui@4.11.1/dist/full.min.css" rel="stylesheet" type="text/css" />
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&family=Outfit:wght@100..900&display=swap" rel="stylesheet">
    <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.3.0/uicons-regular-straight/css/uicons-regular-straight.css'>
    <link href="/your-path-to-uicons/css/uicons-rounded-regular.css" rel="stylesheet">
    <link href="/your-path-to-uicons/css/uicons-rounded-bold.css" rel="stylesheet">
    <link href="/your-path-to-uicons/css/uicons-rounded-solid.css" rel="stylesheet">
    @vite('resources/js/app.js')
    @vite('resources/css/app.css')
    @inertiaHead
    @routes
    @googlefonts('code')
  </head>
  <body>
    @inertia
  </body>
</html>