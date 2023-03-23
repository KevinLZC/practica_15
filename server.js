const express = require('express'); //inyección de la dependencia
const app = express();
let port = process.env.PORT || 3000; //definición del puerto de escucha
app.use('/assets', express.static(__dirname + '/public')); //contenido estático

app.use(express.urlencoded({ extended: false })); //indicación para PARSEAR peticiones con urlencoded payload

app.set('view engine', 'ejs'); //declaración de ejs como motor de vistas

app.get('/student', (req, res) => { //se crea la ruta para acceder al formulario
    res.render('student');
});

//ruta de prueba para verificar los datos
/*app.post('/addStudent', (req, res) => { 
    res.send(`  Nombre: ${req.body.nombre}
                Edad: ${req.body.edad}
                NSS: ${req.body.nss}
                Tipo de sangre: ${req.body.tipoSangre}
            `
            );
});*/

app.post('/addStudent', (req, res) => { //ruta de renderizado de datos
    res.render('displayData', {nombre: req.body.nombre,
                            edad: req.body.edad, 
                            nss: req.body.nss, 
                            tipoSangre: req.body.tipoSangre});
});

app.listen(port);

