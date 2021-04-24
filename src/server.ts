import { http } from "./http";
import "./websocket/client";
import "./websocket/admin";

/*
* GET = Buscas
* POST = Criação
* PUT = Alteração
* DELETE = Deletar
* PATCH = Alterar uma informação específica 
*/



http.listen(3333, () => console.log("Server is running on port 3333"));