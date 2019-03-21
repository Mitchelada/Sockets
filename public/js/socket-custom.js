var socket = io();


//Escuchar socket.on
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos Conexion con el servidor');
});

//Enviar informacion socket.emit
socket.emit('enviarMensaje', {
    usuario: 'Michel',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
});

//Escuchar informacion socket.on
socket.on('enviarMensaje', function(mensaje) {

    console.log('Servidor:', mensaje);

})