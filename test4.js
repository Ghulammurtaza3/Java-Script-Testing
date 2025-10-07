//     Array--> Creation, Access, Modification
//     
//    Creation--> let arr = [10, 20, 30, 40, 50, 60];
//    Access--> index 0 sy start hota hai
//    Modification--> arr [2] = [12]; esy hum array array m koi di hoi value m aik new value enter krwa sakty hai  

//    Methods in Array-->

//    let arr = [10, 20, 30, 40, 50, 60];
//    Push--> Kisi bani hoi array m aik or value enter krna Push khalta hai arr.push(7000); ab is array m 7000 add ho jai ga 60 k baad 

//    Pop-->  ager last sy koi value hatni ho tu hum pop use krty hai arr.pop(); ab array m sy 60 khtm ho jai ga 

//    Shift--> ager start sy koi value hatni ho tu shift use hoga arr.shift(); ab is array m sy 10 hat jai ga 

//    Unshift--> unshift start m aik value add kr daita hai arr.unshift(5); is array m ab start m 5 a jai ga 

//    Splice--> ager koi value center sy ya kisi b point sy hatni ho ya add krni ho tu splice use krty hai arr.splice(2, 1); ya ju start m 2 likh hai is ka mtlb hai k array k start m sy 2 values chor k us sy agy wali aik remove kr du 

//    Slice--> slice apki origenal array ku change nhi krta per aik new array bana k us m new values save krwa daita hai 
//               let newarr = arr.slice (0, 4) ab is m aik newarr hai jis m values sirf 40 tak show hogi baki hat jai gi 

//    Reverse--> ya copy nhi banta ya ap k orignal array ku rverse kr daita hai arr.reverse();

//    Sort--> ya array ku assanding ya desanding order m sort krny k leya kam ata hai or ya humesha aik funcion m likha jata hai 
//           let src = arr.sort(function(a, b){
//                 return b - a;  ab ager hum a - b krty tu apku assanding oredr m array mily ga or ager b - a likha tu desanding order m array mily ga
//           })

//    Map(IMPORTANT)--> Map sirf tab use krna hai jb apku ek naya array banana hai or pechaly array k data ki base py banana hai or us nay array m utny he mamber ay gy jine apki purani array m hai....Map dekhty he dimgh m aik naya blank array bana leya kru 
//       let newarr = Arr.map(function (val) {
//        return 12;  
//       })
//    Example 2-->
//    let newarr = arr.map(function(val){
//     if(val < 10) return val;
//     })
//
//    jab b apku koi esa array dekh jai ya ap soch rhy k aik naya array bany ga ya purna array kuch values ku store krna cha rha tu aik naya array bany ga tu ap ny map use krna hai 

//    Filter(IMPORTANT)--> filter k return m koi ture ya false ay ga is k ilawa koi value nhi hogi ager hum ny ture likha tu new array m values jai gi ager false likha tu new array m values nhi jai gi 
//    Example -->
//    let arr = [21, 34, 2, 87, 43, 56, 73];
//    arr.filter(function(val){
//        return ture; (ab values aik new array m jai gi )
//    })
//    Example 2-->
//    let arr = [21, 34, 2, 87, 43, 56, 73];
//   let arr1 = arr.filter(function(val){
//        if (val < 40) return true;
//    });
//    is example m aik new array m vales save ho rhe hai ju k 40 sy choti hai 

//    Reduce(IMPORTANT)--> reduce m hum aik array ki sari values ku add kr k aik new value bana daity hai 
//      let arr = [2, 4, 6, 8, 10, 12, 14, 16];
//      let arr1 = arr.reduce(function (accmulator, val) {
//           return accmulator + val;         
//      }, 0); 

//    Find--> is use to find any specific term in the given array 
//      let arr = [2, 4, 6, 8, 10, 14, 14, 16];
//      let give = arr.find(function(val){
//            return val === ;
//      });

//    Some--> some b ture or false m chalty hai or answer daity hai mtlb k ager tu koi variable ya koi value hai tu jawab true m ay ga otherwise false  
//        let arr = [2, 3, 9, 13, 9, 11];
//        let answer = arr.some(function(val){
//            return val < 9; 
//        });

//    Every--> every dekhta hai k ap k saab bandy conition ku pass kr rhy hai ya nhi. ager tu kar rhy hai to jawab ture m a jai ga ager tu nhi akr rhy tu jawab ay ga false m
//    let arr = [2, 5, 8, 9, 37, 12, 31] 
//    let answer = arr.every(function(val){
//      return val < 10; 
//    });

//    Destructurtion--> ager kisi array m sy koi value nikalni ho ya kisi or ku daine ho.
//      let arr = [2, 4, 6, 8, 10, 12];
//      let [a, , b] = arr; ager kisi ku skip krwa k likhna hai tu usy empty chor k sirf comma laga dy 

//     Speard--> esy hum kisi array ki copy banany m per jis array ki ap ny copy banai hogi us m koi change nhi ay ga 
//        let arr = [1, 2, 3, 4, 5, 6, 7, 8];
//        let arr1 = [...arr]; // ya ju ... hum ny use keya hai is m ya spread operator hai

//    Practice Questions of this Section 
//    (i) Create an array and print the secound furit from the given array?
//    let furits = ['apple', 'banana', 'guvava'];
//    furits[1];

//    (ii) Add "Mango" at the end and "pienapple" at the begining of the given array?
//       let furits = ["apple", "banana", "guvava"];
//       furits.push("mango");
//       furits.unshift("pineapple");

//    (iii) Replace "banana" with "kiwi" in the array
//        let furits = ["apple", "banana"];
//        furits.pop();
//        furits.push("kiwi");

//     (iv) Insert "red" and "blue" at the index 1 in this array 
//            let colors = ["white", "black"];
//            colors.splice(1, 0, "red", "blue");

//      (v) Extract only the middle 3 elements from this array 
//             let items = [1, 2, 3, 4, 5, 6, 7];
//             let newitems = items.slice(2, 5);
//             console.log(newitems);
 
//       (vi) Sort thi array alphabetically and then reverse it 
//              let names = ["ali", "raza", "zeeshan", "kamran"];
//              names.sort() .reverse();

//       (vii) Use.Map() to Square each number
//                let items =[1, 2, 3, 4,];
//                let newitems = items.map(function (val) {
//                    return val * val
//                })
//                console.log(newitems);

//        (viii) Use .filter() to keep number greater then 10;
//                  let items = [5, 12, 8, 20, 3];
//                  let newitems = items.filter(function (val) {
//                    return val >10; 
//                  })
                  
//        (ix) Use .reduce() to find the sum of this array 
//                  let items = [ 10, 20, 30];
//                  let newitems = items.reduce((accmulator, val)=>{
//                            return accmulator + val;
//                  }, 0);

//          (x) use .find() to get the first number less then 10 
//                     let items = [12, 15, 3, 8, 20];
//                     let newitems = items.find((val)=>{
//                        return val <10;
//                     })

//         (xi) use .some() to check if any students has score blow then 35.
//                      let score = [45, 60, 28, 90];
//                      let anystudent = score.some((val)=>{
//                        return val < 35;
//                      });
                      
//          (xii) use .every() to check if all number are even
//                        let items = [2, 4, 6, 8, 10];
//                        let newitems = items.every((val)=>{
//                            return val % 2 === 0;
//                        })

//          (xii) Destructure this array to get firstname and lastname 
//                          let fullname = ["haider", "irtaza"];
//                         let [firstname , lastname] = fullname;

//          (Xiii) Marge two array with Spread operator 
//                    let a = [1, 2];
//                    let b = [3, 4];
//                    
//                   let c = [...a , ...b];