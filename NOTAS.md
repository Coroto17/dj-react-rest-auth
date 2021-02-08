Para el frontend vamos a usar una biblioteca llamada antd, que es una librería apara gui de componentes.

[url](https://ant.design/components/list/)

Vamos a traernos los datos del backend con axios.

Para poder copmunicarnos con el backend, hay que instalar django-cors-header

```
pip install django-cors-headers
```

Seguimos las instrucciones de la documentación para integrarlo [url](https://pypi.org/project/django-cors-headers/)

Una vez funcionando, vamos a instalar react router para hacer la ruta de cada item.

```
npm install react-router-dom
```

configuramos el router.

Para la sección de auth vamos a implementar redux.

Una vez implementado todo el frontend con react y react-redux, vamos a ir al backend, y nos vamos a apoyar de la biblioteca `django-rest auth`, para convertir rest framework en una API?

Básicamente tabaja con DRF para convertir login, registration y auth en general, en API.

Para hacer funcionar la parte de registro, debemos instalar `django-allauth`. [Leer más](https://dj-rest-auth.readthedocs.io/en/latest/installation.html).

Para chequear/cambiar si el email es obligatorio o no, la info está en `django-allauth` [url](https://django-allauth.readthedocs.io/en/latest/configuration.html)

## DEPLOY EN HEROKU

* Crear app en heroku y seguir los pasos.
* Agregar buildpacks `heroku buildpacks:set heroku/python && heroku buildpacks:add --index 1 heroku/nodejs`. [Más info](https://devcenter.heroku.com/articles/using-multiple-buildpacks-for-an-app).
* Reacomodar todo el proyecto para que ambos front y back compartan el directorio raíz.
* Agregar la key `engines` al `package.json` para especificar qué versión de node y npm estamos usando.
* Añadir el `Procfile` al directorio raíz, junto con una línea de release para migrar la db y una línea web en donde colocaremos a gunicorn.
* Añadir `gunicorn==20.0.4` a requirements.txt.
* Añadir `whitenoise==5.2.0` para servir archivos estáticos.
* Añadir `runtime.txt` para añadir la versión de Python.
* Configurar whitenoise para servir los archivos estáticos. [Ver documentación](http://whitenoise.evans.io/en/stable/).
* Agregar `"STATIC_ROOT"` y `"STATIC_FILES_STORAGE"` keys a `settings.py`.
* La parte de modificar `wsgi.py` la dejo por ahora en pause por si acaso.
* Agregar la app a `ALLOWED_HOSTS` en `settings.py`.
* Ejecutar `npm run build` para hacer el build del frontend en el directorio `build.
* Agregar el directorio `build` a `settings.py` en la parte de TEMPLATES DIR.
* Agregamos el script `postinstall` al `package.json`.
* Ahora vamos a referenciar el index.html del directorio `build` en django. En las urls de djreact: `re_path(".*", TemplateView.as_view(template_name="index.html"))`.
* Para que andara el service worker, tuve que colocarlo tambien como path en las urls del proyecto djreact.

## AUTENTICAR PARA VER LA PÁGINA PRINCIPAL.

Aquí lo que hice fue cambiar permisos de AllowAny en el `settings.py`.
De todas maneras hay que leer bien la [documentacion](https://www.django-rest-framework.org/api-guide/permissions/)

[Y tambien la de dj-rest-auth](https://dj-rest-auth.readthedocs.io/en/latest/introduction.html#)

