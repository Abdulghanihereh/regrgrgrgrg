for (var f=113 ; f<=250 ; f+=12 ) {
    if(f % 2 == 0){
        document.write(`<h1 style='color:red'>  ${f} </h1>`);
    }

}
for(var h=113 ; h<=250 ; h+=12) {

    if(h % 5 == 0){
        document.write(`<h1 style='color:yellow'>  ${h} </h1>`);
    }
    else{
        document.write(`<h1 style='color:black'>  ${h} </h1>`);
    }
}