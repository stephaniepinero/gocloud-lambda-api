# gocloud-lambda-api

## Pre requisitos

- Instalar [Serverless Framework](https://www.serverless.com/framework/docs/providers/aws/guide/installation/)

- Se debe colocar el ACCOUNT ID de AWS en el archivo de configuración config/config.dev.json en la variable "AWS_ACCOUNT_ID"

## Comandos a utilizar

- Clonar el repositorio

    ``` $ git clone https://github.com/stephaniepinero/gocloud-lambda-api.git ```

- Instalar las dependencias 

    ``` $ npm install ```

- Ejecutar pruebas unitarias

    ``` $ npm run test```

- Ejecutar pruebas unitarias y ver cobertura

    ``` $ npm run coverage```

- Probar la funcion de creación de suscripcion

    ``` $ sls invoke local -f "create" --path inputExamples/create.json ```

    El archivo de entrada puede ser modificado para probar distintas entradas

- Instalar dependencias para ambiente productivo

    ``` $ npm install --production ```

- Instalar dependencias para ambiente dev

    ``` $ npm install ```

- Deploy de la función

    ``` $ sls deploy```

---
**NOTE 1**

Una vez que se realice el deploy se mostrará la URL de API Gateway con la cual podemos realiar nuestras peticiones

**NOTE 2**

PARA QUE SE CREE LA TABLA EN DYNAMO SE DEBE HACER UN DEPLOY DEL CÓDIGO

---