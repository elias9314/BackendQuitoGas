const pool = require('../config/db')


var controller = {
  insertRol: (req, res) => {
    var rol = req.body.rol;
    var nombre = req.body.nombre;
    

    const query = {
      text: `INSERT INTO rol(rol, nombre) VALUES(${rol}, '${nombre}')`,
    };
    // callback
    pool.query(query, (err, res) => {
      if (err) {
        console.log(err.stack);
      } else {
        console.log(res.rows[0]);
        
      }
    });

    return res.status(200).send({
      menssage : 'Rol registrado con exito',
      rol,
      nombre,
    });
  },
  readRol: (req,res) => {
  
    pool.query('SELECT * FROM rol', (err, roles) => {
        if (err) {
          console.log(err.stack)
        } else {
          var Roles = roles.rows
          res.send({Roles})
      
        }
      })
  },
  getRolbyId:(req,res)=>{
    var rolId = req.params.id 

    pool.query(`SELECT * FROM rol WHERE id_rol = ${rolId}`,(req,rolid)=>{
        var rol = rolid.rows[0]
        res.send({rol})
    })
},
updateRol: (req,res)=>{
    var rolId = req.params.id   
    var rol = req.body.rol
    var nombre = req.body.nombre
   
    pool.query(`UPDATE rol SET rol = ${rol}, nombre= '${nombre}' WHERE id_rol = ${rolId}`)
    res.send({menssage: 'Rol Actulizado Correctamente'})
},
deleteRol: (req,res)=>{
    var rolId = req.params.id 
    pool.query(`DELETE FROM rol WHERE id_rol= ${rolId}`)
    res.send({menssage: 'Rol Elimiinado Correctamente'})
}

};

module.exports = controller;
