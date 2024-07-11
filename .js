function setup(){
    createCanvas (800, 800);

}


 function draw() {
    fill(0, 0, 0);
    background(300);


    for (let i=0; i<6; i++) {
        resetMatrix(); 
        let angle = (TWO_PI/6)*i;
        translate(
            sin(angle)*1,
            cos(angle)*1
        );
        ellipse(400, 400, 0);
    }

    for (let i=0; i<9; i++) {
        resetMatrix(); 
        let angle = (TWO_PI/9)*i;
        translate(
            sin(angle)*5,
            cos(angle)*5
        );
        ellipse(400, 400, 1);
    }

    for (let i=0; i<13; i++) {
        resetMatrix(); 
        let angle = (TWO_PI/13)*i;
        translate(
            sin(angle)*10,
            cos(angle)*10
        );
        ellipse(400, 400, 2);
    }

     for (let i=0; i<16; i++) {
        resetMatrix(); 
        let angle = (TWO_PI/16)*i;
        translate(
            sin(angle)*16,
            cos(angle)*16
        );
        ellipse(400, 400, 3);
    }

    for (let i=0; i<19; i++) {
        resetMatrix(); 
        let angle = (TWO_PI/19)*i;
        translate(
            sin(angle)*23,
            cos(angle)*23
        );
        ellipse(400, 400, 4);
    }

    for (let i=0; i<22; i++) {
        resetMatrix(); 
        let angle = (TWO_PI/22)*i;
        translate(
            sin(angle)*31,
            cos(angle)*31
        );
        ellipse(400, 400, 5);
    }
    for (let i=0; i<25; i++) {
        resetMatrix(); 
        let angle = (TWO_PI/25)*i;
        translate(
            sin(angle)*40,
            cos(angle)*40
        );
        ellipse(400, 400, 6);
    }

    for (let i=0; i<28; i++) {
        resetMatrix(); 
        let angle = (TWO_PI/28)*i;
        translate(
            sin(angle)*50,
            cos(angle)*50
        );
        ellipse(400, 400, 7);
    }


 for (let i=0; i<31; i++) {
        resetMatrix(); 
        let angle = (TWO_PI/31)*i;
        translate(
            sin(angle)*61,
            cos(angle)*61
        );
        ellipse(400, 400, 8);
    }

    for (let i=0; i<34; i++) {
        resetMatrix(); 
        let angle = (TWO_PI/34)*i;
        translate(
            sin(angle)*73,
            cos(angle)*73
        );
        ellipse(400, 400, 9);
    }

    for (let i=0; i<37; i++) {
        resetMatrix(); 
        let angle = (TWO_PI/37)*i;
        translate(
            sin(angle)*86,
            cos(angle)*86
        );
        ellipse(400, 400, 10);
    }

    for (let i=0; i<40; i++) {
        resetMatrix(); 
        let angle = (TWO_PI/40)*i;
        translate(
            sin(angle)*100,
            cos(angle)*100
        );
        ellipse(400, 400, 11);
    }

    for (let i=0; i<43; i++) {
        resetMatrix(); 
        let angle = (TWO_PI/43)*i;
        translate(
            sin(angle)*115,
            cos(angle)*115
        );
        ellipse(400, 400, 12);
    }

    for (let i=0; i<46; i++) {
        resetMatrix(); 
        let angle = (TWO_PI/46)*i;
        translate(
            sin(angle)*131,
            cos(angle)*131
        );
        ellipse(400, 400, 13);
    }

    for (let i=0; i<49; i++) {
        resetMatrix(); 
        let angle = (TWO_PI/49)*i;
        translate(
            sin(angle)*148,
            cos(angle)*148
        );
        ellipse(400, 400, 14);
    }

    for (let i=0; i<52; i++) {
        resetMatrix(); 
        let angle = (TWO_PI/52)*i;
        translate(
            sin(angle)*166,
            cos(angle)*166
        );
        ellipse(400, 400, 15);
    }

    for (let i=0; i<55; i++) {
        resetMatrix(); 
        let angle = (TWO_PI/55)*i;
        translate(
            sin(angle)*185,
            cos(angle)*185
        );
        ellipse(400, 400, 16);
    }



}