// 1) Baja el archivo grades.json y en la terminal ejecuta el siguiente comando:
mongoimport -d students -c grades < grades.json
//RESPUESTA:
//2016-10-14T20:01:04.571-0600	connected to: localhost
//2016-10-14T20:01:05.619-0600	imported 800 documents
// 2) El conjunto de datos contiene 4 calificaciones de n estudiantes.
//Confirma que se importo correctamente la colección con los siguientes
//comandos en la terminal de mongo:
use students;
db.grades.count();
//RESPUESTA: 800
//3) Encuentra todas las calificaciones del estudiante con el id numero 4
db.grades.find({"student_id" : 4});
//RESPUESTA
//{ "_id" : ObjectId("50906d7fa3c412bb040eb587"), "student_id" : 4, "type" : "exam", "score" : 87.89071881934647 }
// { "_id" : ObjectId("50906d7fa3c412bb040eb588"), "student_id" : 4, "type" : "quiz", "score" : 27.29006335059361 }
// { "_id" : ObjectId("50906d7fa3c412bb040eb58a"), "student_id" : 4, "type" : "homework", "score" : 28.656451042441 }
// { "_id" : ObjectId("50906d7fa3c412bb040eb589"), "student_id" : 4, "type" : "homework", "score" : 5.244452510818443 }
//4) ¿Cuantos registros hay de tipo exam?
db.grades.find({"type" : "exam"}).count();
//RESPUESTA:200
// 5) ¿Cuantos registros hay de tipo homework?
db.grades.find({"type" : "homework"}).count();
//RESPUESTA:400
// 6) ¿Cuantos registros hay de tipo quiz?
db.grades.find({"type" : "quiz"}).count();
//RESPUESTA:200
//7) Elimina todas las calificaciones del estudiante con el id numero 3
db.grades.remove({"student_id":3});
//RESPUESTA:
//WriteResult({ "nRemoved" : 4 })
//8) ¿Que estudiantes obtuvieron 75.29561445722392 en una tarea ?
db.grades.find({"score": 75.29561445722392});
db.grades.find({score: 75.29561445722392}, {_id:0, score:0, type:0});
//RESPUESTA de primera instruccion:
//{ "_id" : ObjectId("50906d7fa3c412bb040eb59e"), "student_id" : 9, "type" : "homework", "score" : 75.29561445722392 }
//RESPUESTA de segunda instruccion:
//{ "student_id" : 9 }
//9) Actualiza las calificaciones del registro con el uuid 50906d7fa3c412bb040eb591 por 100
db.grades.update({"_id":ObjectId("50906d7fa3c412bb040eb591")}, {$set:{"score": 100}});
//RESPUESTA:
// WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
//10) A que estudiante pertenece esta calificación.
db.grades.find({"_id":ObjectId("50906d7fa3c412bb040eb591")});
db.grades.find({"_id":ObjectId("50906d7fa3c412bb040eb591")},  {_id:0, score:0, type:0});
// RESPUESTA de primera instruccion:
//{ "_id" : ObjectId("50906d7fa3c412bb040eb591"), "student_id" : 6, "type" : "homework", "score" : 100 }
//RESPUESTA de segunda instruccion:
//{ "student_id" : 6 }
