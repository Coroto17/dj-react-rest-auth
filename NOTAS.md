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


