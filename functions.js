
const changeEmailFromGmailToHicoders = (pArr) => {
    let change_email=pArr
    .filter((element)=>element.includes(41))
    .sort()
    .map((email)=>email.toLowerCase().replace(["gmail.com"],["hicoders.ch"]));
    return change_email;


};


const findSuperNumbers = (pArr) => {
    let superNumArr = [];
    pArr.map(superNumber=>{ 
      let numberList = String(superNumber).split("").map(Number) 
      let totalNumber=0;
      numberList.map(element=>{  
          totalNumber+=Math.pow(element,numberList.length) 
      })
      if(totalNumber===superNumber){
          superNumArr.push(superNumber)
      }
    })
    return superNumArr;
};

export { changeEmailFromGmailToHicoders, findSuperNumbers };