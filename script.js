
// start my function
function checkedAge(){
    const date = new Date()
    const year = date.getFullYear()
    const fyear = document.getElementById('txtano')
    const res = document.querySelector('div#res')

    
   if(fyear.value.length == 0 || Number(fyear.value) > year){
        alert('[ERROR] Check the date and try again')
    } else {
        let fgender = document.getElementsByName('radsex')
        let age = year - Number(fyear.value)
        let gender = ''
        let img = document.createElement('img') //  an element img
        img.setAttribute('id','foto')
        // I checked  If is a Men and your age
        if(fgender[0].checked){
            gender = 'Men'
            if(age >= 0 && age < 10){
                img.setAttribute('src','img/criancamenino.jpg')
            }else if ( age < 21){
                img.setAttribute('src','img/jovemmenino.jpg')
            }else if(age < 50){
                img.setAttribute('src','img/idoso.jpg')
            }else {
                img.setAttribute('src','img/idoso.jpg')
            }
            
        // I checked If is a Women and you age
        } else if (fgender[1].checked) {
            gender ='Woman'
            if(age >= 0 && age < 10){
                img.setAttribute('src','img/criancamenina.jpg')  
            }else if ( age < 21){
                img.setAttribute('src','img/jovemmenina.jpg')
            }else if(age < 50){
                img.setAttribute('src','img/idosa.jpg')
            }else {
                img.setAttribute('src','img/idosa.jpg')
            }
        }

        res.style.textAlign = 'center'
        // I send a result
        res.innerHTML =`We detect ${gender} with ${age} years old`
        //I send an img
        res.appendChild(img)
    }

}
