let titulo = document.getElementById('titulo');
console.log(titulo);

let objetoDeLabibliotecaTypewriter = new Typewriter(titulo, {
    loop: true
});

objetoDeLabibliotecaTypewriter
    .typeString('Arely De La Cruz Munguia')
    .pauseFor(900)
    .deleteChars(24)
    .typeString('Desarrollo Web')
    .pauseFor(900)
    .deleteChars(14)
    .start();

let objTypeWrt=new Typewriter(testimonios, {
    loop:true
});

objTypeWrt
    .typeString('Testimonios')
    .pauseFor(900)
    .deleteChars(14)
    .start();


