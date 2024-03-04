// Manejamos todas las funciones de autentificación
import { TOKEN_NAME } from "../constants/env";

const token = () => localStorage.getItem(TOKEN_NAME);
