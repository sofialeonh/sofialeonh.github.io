let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
  cursor: '<span class="typewriter-cursor">|</span>', // Agrega la clase del cursor aquí
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #9147ff;"> Programación Front-End | Diseño UX/UI | Desarrollo de Software </span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();

