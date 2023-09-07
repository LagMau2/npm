const log4js = require('log4js');

const logger = log4js.getLogger();
logger.level = "debug";
logger.debug("Iniciando aplicacion en modo de pruebas");
logger.info("La app ha iniciado correctamente");
logger.warn("Falta el archivo config de la app");
logger.error("No se pudo acceder al sistema de archivos");
logger.fatal("Aplicacion no se pudo ejecutar el so");

function sumar(x,y){
    return x+y;
}

module.exports = sumar;
