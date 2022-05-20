class Security {
  constructor() {
    this.access1 = createInput("verificar");
    this.access1.position(100, 90);
    this.access1.style("background", "white");

    this.button1 = createButton("Testar");
    this.button1.position(100, 120);
    this.button1.style("background", "lightgrey");

    this.access2 = createInput("");
    this.access2.position(700, 190);
    this.access2.style("background", "white");

    this.button2 = createButton("Testar");
    this.button2.position(700, 220);
    this.button2.style("background", "lightgrey");

    // Adicione código para criar e posicionar a terceira caixa de entrada e botão
    this.acess3 = createInput("verificar");
    this.acess3.position(105,290);
    this.acess3.style("background", "white");

    this.button3 = createButton("verificar");
    this.button3.position(100,320);
    this.button3.style("background" , "lightgrey");
  }

  display() {
    this.button1.mousePressed(() => {
      if (system.authenticate(accessCode1, this.access1.value())) {
        this.button1.hide();
        this.access1.hide();
        score++;
      }
    });

    this.button2.mousePressed(() => {
      if (system.authenticate(accessCode2, this.access2.value())) {
        this.button2.hide();
        this.access2.hide();
        score++;
      }
    });

    this.button3.mousePressed(() => {
      if(system.authenticate(accessCode3, this.acess3.value())){
        this.button3.hide();
        this.button3,hide();
      }
    }

    )
    
  }
}
