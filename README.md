# Taller de Tecnologías 2019. Analista Programador.
### Evaluación: trabajo obligatorio y, defensa individual.
El trabajo debe realizarse de forma individual.
Puntaje máximo: 100, **mínimo (aprobación): 70.**
Fecha de entrega: lunes **19 de agosto,** 2019, **vía email.** 
Fecha de defensa: lunes **19 de agosto**, 2019, **presencial**.
Aplicación WEB.
Objetivo: el presente taller tiene como finalidad, la construcción de una aplicación web aplicando las nuevas tecnologías específicadas a continuación; fomentando el entendimiento y la comunicación entre pares.
Tecnologías aplicadas: **HTML, CSS, JavaScript, jQuery, jQuery Mobile, JSON, Ajax, Bootstrap y Phonegap (teoría).**
# Requerimientos.
## Primer requerimiento:
 Implementación de ABM (altas, bajas y modificaciones) de usuarios junto a su correspondiente login; considerando los campos: nombre completo, usuario y contraseña. Para resolver el presente requerimiento, es obligatoria la utilización del objeto Storage, propiedad de sólo lectura localStorage.
    
## Segundo requerimiento: 
Confección del documento principal.html; este estará compuesto por cuatro secciones, que implementarán el mismo número de funciones aplicando tecnologías AJAX.
- La primera funcionalidad desplegará la información proporcionada por la API (divisa dólar, únicamente): código, fecha, nombre (de la divisa), unidad de medida, valor actual (único resultado).
- La segunda funcionalidad desplegará la misma información que la primera, pero, considerando el nombre de la divisa que el usuario ha ingresado (único resultado).
- La tercera funcionalidad desplegará la información proporcionada por la API: nombre, segundo nombre, nomenclatura e imagen (único resultado).
- La cuarta funcionalidad desplegará la información proporcionada por la API: título, moneda, precio e imagen, basándose en los valores de búsqueda que el usuario considere (hasta tres resultados).
## Tercer requerimiento: 
Confección del documento secundario.html; este documento implementará una función API cualesquiera, considerando para su realización, el uso de la librería jQuery Mobile.
Cuarto requerimiento: todo el proyecto se encontrará en un repositorio público utilizando los servicios de GitHub.
  
## Consideraciones.
- Para la realización del presente proyecto, deberán considerarse la totalidad de los recursos HTML5 y, el uso de Bootstrap 4 – FlexBox, la filosofía mobile first (diseño responsive) para cada uno de los documentos; considerando además, el concepto de accesibilidad para todos los usuarios.
- El proyecto estará compuesto por los documentos (html):
-  home enlazará hacia a abm, principal (en caso de una identificación correcta) y, el repositorio de gitHub (en nueva pestaña).
-  abm hacia home.
-  principal hacia home y secundario.
-  secundario hacia principal.
- Para el documento principal.html es requerido un diseño diferente para cada dimensión (facilidades aportadas por Bootstrap 4):
-  ***col-sm-**** contexto small, cuando las dimensiones son **mayores o iguales** a 576 px.
-  ***col-md-**** contexto medium device, cuando las dimensiones “” a 768 px.
-  ***col-lg-**** contexto large device, cuando las dimensiones son “” a 992 px.
-  ***col-xl-**** contexto xtra large, cuando las dimensiones son “” a 1200 px.
A continuación se detallas los enlaces de las APIs. 
- Primera funcionalidad: https://mindicador.cl/api
- Segunda funcionalidad: https://mindicador.cl/api/nombre_divisa 
- Tercera funcionalidad: https://randomuser.me/api/
- Cuarta funcionalidad: https://api.mercadolibre.com/sites/MLU/search?q=valor_busqueda
  
