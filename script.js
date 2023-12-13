function random() {
  var qoutes = [
    "“Be yourself; everyone else is already taken.”",
    "“I'm selfish, impatient and a little insecure. hell don't deserve me at my best.”",
    "“Two things are infinite: the human stupidity; and I'm not sure about the universe.”",
    "“A room without books is like a body without a soul.”",
    "“You only live once, but if you do it right, once is enough.”",
    "“To live is the rarest thing in the world. Most people exist, that is all.”",
    "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
  ];
  var text = [
    "--Elbert Hubbard",
    "--Frank Sinatra",
    "--Wayne Gretzy",
    "--Nelson Mandela",
    "--Marilyn Monroe",
    "--Oscar Wilde",
    "--Nelson Mandela",
  ];
  var nameText = Math.floor(Math.random() * qoutes.length);
  document.getElementById("quote1").innerHTML = qoutes[nameText];
  document.getElementById("quote2").innerHTML = text[nameText];
}
