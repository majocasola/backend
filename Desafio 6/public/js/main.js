const socket = io();

socket.on('connect', () => {
  console.log('Conectado al servidor');
});

socket.on("personas_registradas", (people) => {
  console.log(people);
  const url = "http://localhost:3000/table.hbs";
    fetch(url).then((resp) => {
      console.log(resp);
      return resp.text();
  }).then((text) => {
    const template = Handlebars.compile(text);
    const html = template({people: people});
    document.querySelector("#people").innerHTML = html;
  });
})

ocket.on("UPDATE_MESSAGES", (msg, allMessages) => {
  // alert(msg);
  document.getElementById("posts").innerHTML = "";
  // for (let msg of allMessages) {
  //   appendMessage(msg);
  // }
  allMessages
    .sort((a,b) => a.date - b.date)
    .forEach(msg => appendMessage(msg));
});

socket.on("NEW_MESSAGE", (msg) => {
  appendMessage(msg);
})

function appendMessage(msg) {
  document.getElementById("posts").innerHTML += `
    <div class="post ui card">
      <div class="content">
        <b>${msg.nombre} (${msg.socket_id}):</b> ${msg.mensaje}
        <hr/>
        <button onclick="likeMessage(${msg.id})">
          <i class="heart icon"></i> (${msg.likes})
        </button>
      </div>
    </div>
  `;
}

function enviarMensaje(){
  const nombre = document.getElementById("nombre").value;
  const mensaje = document.getElementById("mensaje").value;

  socket.emit("POST_MESSAGE", {nombre, mensaje});
}

function likeMessage(msgId) {
  socket.emit("LIKE_MESSAGE", msgId);
}