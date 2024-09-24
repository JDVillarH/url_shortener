# GoURL

GoURL es un acortador de enlaces fácil de usar que permite a los usuarios generar URL cortas rápidamente. Los usuarios no registrados pueden acortar enlaces sin problema, mientras que los usuarios autenticados cuentan con funciones adicionales.

## Características

-   Acortar enlaces sin necesidad de autenticación.
-   Copia de los enlaces acortados directamente al portapapeles.
-   Autenticación con terceros (Google, GitHub).
-   Control de abuso mediante Rate Limiting.
-   Control de duplicidad de slugs y sobreescritura de rutas de la aplicación.

## Características para usuarios autenticados

-   Personalización de enlaces a acortar.
-   Listado de enlaces acortados.
-   Eliminación de enlaces acortados.

## Tecnologias utilizadas

-   Backend: **Laravel 11**
-   Frontend: **React + Inertia + TailwindCSS**
-   Base de datos: **MySQL**
-   Terceros: **Cloudflare Turnstile, GitHub y Google Auth**

## Instalación

-   Clona el repositorio

```bash
  git clone https://github.com/JDVillarH/url_shortener.git
```

-   Instala las dependencias

```bash
  cd url_shortener
  composer install
  npm install
```

-   Copia el archivo `.env.example` y renómbralo a `.env`:

```bash
  cp .env.example .env
```

-   Configura tu archivo `.env`

-   Genera una clave de aplicación y ejecuta las migraciones

```bash
  php artisan key:generate
  php artisan migrate
```

> [!IMPORTANT]
> Recuerda que debes configurar tus credenciales de Cloudflare Turnstile, GitHub Auth y Google Auth en el archivo `.env`, esto es necesario para que el sitio funcione correctamente.

## Contribución

Si deseas contribuir al proyecto, puedes hacer un fork del repositorio y posteriormente un pull request con tu característica o corrección.
