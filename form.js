
function submit(){
    let naam = document.getElementById('fNaam').value;
    let recensie = document.getElementById('frecensie').value;
    var ges = document.getElementsByName('geslacht');
    for(let i =0; i < ges.length; i++){
        if (ges[i].checked){
            var geslacht = ges[i].value;
        }
    }

    console.log(naam, recensie, geslacht);
    if (naam == "" || recensie == "" || ges == undefined){
        alert("Alle velden zijn verplicht.")
        return false;
    }else if(geslacht == 'man'){
        let main = document.getElementById('main');
        let rcc = document.getElementById('rcc')
        let box = document.createElement('div');
        box.className = 'box';
        let upper = document.createElement('div');
        upper.className = 'upper';
        let pic = document.createElement('div');
        pic.className = 'pic';
        let info = document.createElement('div');
        info.className = 'info'
        let date = document.createElement('p')
        date.innerHTML = new Date().getDay() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear();
        date.className = 'date'
        let lower = document.createElement('div');
        info.className = 'lower'
        let profile = document.createElement('img')
        profile.className = 'profile'
        profile.src = './img/man.png'
        let nameT = document.createElement('p');
        nameT.innerHTML = naam;
        nameT.className = 'name'
        let recensieT = document.createElement('p');
        recensieT.innerHTML = recensie;
        main.insertBefore(box,rcc);
        box.appendChild(upper);
        upper.appendChild(pic);
        pic.appendChild(profile);
        upper.appendChild(info);
        info.appendChild(nameT);
        info.appendChild(date);
        lower.appendChild(recensieT);
        box.appendChild(lower);
    }else if(geslacht == 'man'){
        let main = document.getElementById('main');
        let rcc = document.getElementById('rcc')
        let box = document.createElement('div');
        box.className = 'box';
        let upper = document.createElement('div');
        upper.className = 'upper';
        let pic = document.createElement('div');
        pic.className = 'pic';
        let info = document.createElement('div');
        info.className = 'info'
        let date = document.createElement('p')
        date.innerHTML = new Date().getDay() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear();
        date.className = 'date'
        let lower = document.createElement('div');
        info.className = 'lower'
        let profile = document.createElement('img')
        profile.className = 'profile'
        profile.src = './img/vrouw.png'
        let nameT = document.createElement('p');
        nameT.innerHTML = naam;
        nameT.className = 'name'
        let recensieT = document.createElement('p');
        recensieT.innerHTML = recensie;
        main.insertBefore(box,rcc);
        box.appendChild(upper);
        upper.appendChild(pic);
        pic.appendChild(profile);
        upper.appendChild(info);
        info.appendChild(nameT);
        info.appendChild(date);
        lower.appendChild(recensieT);
        box.appendChild(lower);
        }   else{
        alert("Er is een fout opgetreden.")
        return false;
    }
}