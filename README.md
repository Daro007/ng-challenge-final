# Ng Challenge

## Para correr esta aplicación localmente se requiere tener instalados: 
#### [GIT](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
#### [NODE JS & NPM](https://nodejs.org/en/)
#### [Angular CLI](https://github.com/angular/angular-cli)

## Pasos para correr esta aplicación localmente:
- Hacer un `git clone` del repositorio. 
- En el archivo “api.service.ts” se debe modificar los métodos ‘getOwners’ y ‘getOwnersById’ reemplazando el texto `“YOUR_API_KEY”` por vuestra propia key de la API. (https://gorest.co.in/)
- Una vez reemplazado ese valor, en vuestro editor de código preferido pueden abrir el proyecto, posicionarse en la carpeta del mismo, abrir la terminal integrada del editor de código y ejecutar el comando `ng serve`.
- Y listo, si todo anduvo bien el proyecto debería estar corriendo en el puerto 4200 del servidor local. `http://localhost:4200/`

## DESAFIOS COMPLETADOS 
## HOME
En la ruta “/” podemos encontrar la pantalla de Home con 2 componentes Header y Home. En Header podemos ver un logo, y 2 iconos con 2 contadores. A la izquierda encontramos el icono de un gato y el contador “matagatos” que incrementa cada vez que llamamos a la API. Y a la derecha encontramos un icono de un corazón y el contador de “favoritos” que incrementa cada vez que añadimos un dueño a favoritos. 
Luego, en el componente Home, encontramos 2 botones; Owners y Search, que nos llevan a sus respectivas rutas (“/owners” y “/search”). 
## OWNERS
En la ruta “/owners” encontramos el mismo header que en la Home y el componente owners está dividido en 2 columnas. En la columna de la izquierda aparece una tabla con un listado de los ‘owners’ (solo los primeros 20) y cuando hacemos click sobre alguno de ellos aparece en la columna de la derecha un ‘div’ con los detalles del owner. Dentro de del recuadro con los detalles del owner encontramos también un botón en rojo que dice “add to favourites” y cuando el usuario hace click incrementa el contador de favoritos (NOTA: hay un filtro que impide que los usuarios favoritos se repitan, por tanto si ya ha sido añadido el contador de favoritos no incrementará). 
Funcionalidad extra: hasta que llega la respuesta de la API se despliega componente ‘loading-spinner’. 
Finalmente, abajo, al final del listado de owners podemos encontrar un botón que dice “show more” y cuando el usuario hace click nos trae otros 20 owners.
## SEARCH
En la ruta “/search” encontramos el mismo header y el componente search que es muy similar al componente “owners” pero también consta de una barra de búsqueda a través de la cual podemos filtrar los owners por su nombre. El usuario debe al menos tipear 2 caracteres para poder realizar la búsqueda. 
Funcionalidades extra: si el usuario hace click en “search” y ha introducido menos de 2 caracteres un pequeño texto en rojo le indica que debe tipear al menos 2 caracteres para buscar y también si el resultado de la búsqueda no coincide con ningún owner se despliega un texto que le indica al usuario que ningún owner cumple los requisitos de su búsqueda. 
###### *NOTA: el botón “show more” solo aparece al principio y tiene la misma funcionalidad que en la página owners. Una vez que el usuario hace click en ‘search’ el botón desaparece porque no entiendo cómo llamar a la siguientes páginas de la API cuando arroja más de 20 resultados la búsqueda.* 
## EL MODAL DE FAVORITOS
En todas las páginas podemos encontrar el header con sus 2 iconos y contadores. Cuando el usuario hace click en el icono de favoritos se abre un modal que muestra un listado de los owners añadidos a favoritos por el usuario (en caso contrario se muestra un mensaje indicando que aún no se han añadido owners a favoritos)


## Subiendo el nivel del Reto
1. **El contador de matagatos en el header incrementa cada vez que se llama a la API.** 
2. *Muestra la fecha “dob” como la diferencia de tiempo entre la fechade nacimiento y la fecha actual. Por ejemplo, si “dob” es 07-20-1982, y estamos a 07-23-2020, se leería “Nació hace 38 años y 3 días”.*
**Este desafío se podría resolver creando un Pipe que transforme la informacion sobre DOB que llega. Restandosela a la fecha actual.**
3. *Los Dueños tienen Fotos asociadas. Investiga la API “photos” busca por el id de User, y completa la información de Detalle.*
**Este desafío se podría resolver de la siguiente manera. Llamar a la API de photos, que devuelve un array de objetos con información como ID y la URL de las fotos. 
Podriamos dentro del detalle de usuario crear otro botón llamado “Show photo” y para el cual crear un método que filtre el array obtenido de photos por su ID, y cuando el ID haga match devuelva la URL de ese objeto y así la podamos usar en el atributo href del elemento img del HTML.**
4. *En vez de utilizar el botón “Ver más”, implementa un paginado de tipo “infinite scroll” como el de Twitter o Instagram. De tal forma que se muestren inicialmente los 20 primeros Dueños, y a medida que el usuario scrollea hacia abajo se van cargando los Dueños siguientes de 20 en 20.*
**Este desafío se podría resolver usando ngx-infinite-scroll.**
5. *Modifica la lógica para que en vez de tener que pulsar el botón Buscar, el formulario reactivo detecte que el usuario ha dejado de escribir y haga la búsqueda automáticamente siempre y cuando haya introducido al menos 2 letras.*
**El input busca cuando el usuario ha dejado de tipear** 
###### *NOTA: no tuve tiempo de encontrarle la vuelta a la cuestion de optimizar el rendimiento, ya que el evento (keyup) busca cada key stroke del usuario*

## Funcionalidades extra que podríamos agregar 
- eliminar favoritos desde el modal o desde el detalle del owner
- cuando un usuario hace click en add to favourites mostrar un texto en el detalle diciendo “este dueño es favorito”.  
- que se pueda cerrar el detalle del owner.


## Cuestiones que quedaron fuera por falta de tiempo
- lo más importante que creo que podría solucionar con un poco más de tiempo es la estructura del proyecto ya que estoy rompiendo uno de los principios fundamentales como es el principio DRY, ya que me repito muchas veces. Habría que refactorizar el código y compartimentarlo un poco más.
Por ejemplo, el header contiene el modal, por lo tanto podríamos hacer dell modal un componente aparte e importarlo en el header. La página owners contiene tanto el listado de los owners como el detalle de los mismos. Ambos podrían ser componentes separados que (ownersList y ownersDetails) y llamarlos desde owners. Etc. 
- el diseno no es responsive. Como en la consigna no se hace énfasis en esto solo me enfoque en la vista Desktop, pero por lo general suelo arrancar mis diseños con un aproach ‘mobile first’ .
