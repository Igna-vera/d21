import logger from "../utils/loggers/Log4jsLogger.js";
import "../configs/db.config.js";

export class BaseDao {
  constructor() {
    this.logger = logger;
    if (this.constructor === BaseDao) {
      throw new Error('No se puede instanciar la clase "BaseDao"');
    }
  }

  create() {
    throw new Error("Se debe implementar el método create()");
  }

  getAll() {
    throw new Error("Se debe implementar el método getAll()");
  }

  deleteById() {
    throw new Error("Se debe implementar el método deleteById()");
  }
}
