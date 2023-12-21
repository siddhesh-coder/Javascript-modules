export async function pro(profile){ //we can use export here or at the end your choice
    try {
        let data = await fetch(profile);
        let res = await data.json();
        return res;
    } catch (error) {
       return error;
    }
}

//like this
//export { pro };

function sum(){
  return 2+3;
}

function mul(){
  return 2*3;
}

export { sum , mul };
