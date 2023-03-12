# Desafío useContext

- Proyecto creado con `npx create-react-app`

## Dependencias originales

Al ejecutar `npm install` se presentan errores de dependencias obsoletas.
Para resolverlo, se modifica:
`"react-scripts": "4.0.0"` por `"react-scripts": "^4.0.0"`

Al lanzar npm start la consola arrojaba un error: `Webpack build failing with ERR_OSSL_EVP_UNSUPPORTED`
Para resolverlo, en los scripts se modifica:
`"start": "react-scripts start"` por -> `"start": "react-scripts --openssl-legacy-provider start"`
`"build": "react-scripts build"` por -> `"build": "react-scripts --openssl-legacy-provider build"`

## Actualización de dependencias

Se corrigen todos los errores de dependencias y se aplica nuevamente `npm install`

## Características

- Se consume un JSON local
- Se muestran Cards con imágenes y la opción de añadirlas a favoritos
- Se usan dos rutas par mostrar dos vistas, una de ellas es la de favoritos, donde se visualizan sólo las fotos marcadas como tal.
- Si haces click sobre la imagen la agregas o eliminas de favoritos según sea el caso.
