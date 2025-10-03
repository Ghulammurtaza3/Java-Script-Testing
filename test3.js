//Practice Questions-->

//   (1)
    for(let i = 1; i < 11; i++){
        console.log(i);
    }
//  (2)
    let i = 10;
    while (i > 0) {
    
        console.log(i);
        i--;
    }
//   (3)
     for(i=1; i<21; i++){
       if(i%2===0){}
        console.log(i);
    }
     
//    (4)
        let i=1;

        while(i<16){
            if (i%2 ===  1 ){ 
                console.log(i);
            }
            i++;
        }
//     (5)
       for(i=1; i<11; i++){
    console.log(`5 * ${i} =${5 * i}`); Note ()
       }
//     (6)
    let sum = 1;
    for(i=1; i<101; i++){
        sum = sum + i;
    }
    console.log(sum);
//     (7)
    for(i = 1; i < 51; i++){
        if (i % 3 === 0) {
            console.log(i);
        }
        //console.log(i);
    }
//     (8)
      let val = prompt("Give me a Number"); (IMPORFTANFT)
      for(i=1; i<val; i++){
        if (i % 2 === 0) {
           console.log(`${i} is Even`)
        }
        else //(i % 2 === 1);
        {
          console.log(`${i} is Odd Nummber`)
        }
      }
//    (9) 
        for( i = 1; i<101; i++){
        if(i % 3=== 0 && i % 5 === 0){
        console.log(i);
        }
    }
//     (10)
    for(let i = 1; i<101; i++){
        if(i % 7 === 0){
           break;          //(IMPORTANT NOTE: Ager 7 b print krwna hai to console.log(i) for k baad likhy gy )
            }
            console.log(i);
        }
//       (11)
    for(i=1; i<101; i++){
        if(i % 3 === 0){
           continue;
        }
        console.log(i);
    }
//    (12)
       for(let i = 1; i<101; i++){
        if(i%2 === 0 )
            break;
        console.log (i);
       }