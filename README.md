# Menu Management

El objetivo de este proyecto es solucionar el problema de algunos restaurantes al momento de la toma de pedidos de los clientes, actualización de pedidos que deberían a llegar a la cocina y el sumar platos nuevos a la carta. Para esto se utilizo [Firebase](https://firebase.google.com/docs/firestore?hl=es "Firebase") debido a que esto fácilita quje el proyecto sea en tiempo real, a su vez la plataforma web fue desarrollada en [Angular](https://angular.io/ "Angular") y desplegada en [Heroku](https://www.heroku.com/ "Heroku"). La applicación movil fue echa con [Ionic](https://ionicframework.com/ "Ionic") y [Angular](https://angular.io/ "Angular"), la cual a su vez fue convertida en un APK usando [Capacitor](https://capacitorjs.com/ "Capacitor").

Este proyecto no cuenta con autenticación por lo cual se asume como un mismo usuario a los que ingresen al sistema y los roles (administrador, cliente, chef) fueron dividios en distintas rutas y se puede acceder mediante las opciones del NavBar. La applicación móvil por el contrario solo fue enfocada para que el cliente puede hacer pedidos rápidos y pueda ver su lista de pedidos.

WebApp Link: [menu-management](https://menu-managment.herokuapp.com/cliente "menu-management")
APK Link: [clientApp](https://drive.google.com/file/d/1JA92_77dmVl2tJy3u8xzAiK-c3lu8jTh/view?usp=sharing "clientApp")

> Observación: la rama de master tiene la versión de desarrollo, mientras que la de heroku-dev fue usada para deployar el proyecto.

Casos de uso (UML) : 

![Diagrama de caso de uso](https://user-images.githubusercontent.com/27011395/89390526-769e9c00-d6cc-11ea-8dc4-c78482c94eca.png)

