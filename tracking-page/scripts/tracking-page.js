function howManyBottles(i){
    const container = document.getElementById('how-many-bottles');
    container.innerHTML = '';
    if(i){
        const howmany = document.createElement('input');
        howmany.setAttribute('type', 'number');
        howmany.setAttribute('name', 'num-bottles');
        howmany.setAttribute('id', 'num-bottles');
        howmany.setAttribute('required','');
        howmany.setAttribute('min', '0');
        const lab = document.createElement('label');
        lab.htmlFor = 'num-bottles';
        lab.innerHTML = 'How many do you use a week on average? ';
        container.appendChild(lab);
        container.appendChild(howmany);
    }
    else if(!i){
        container.removeChild();
    }
}

function howManyBags(i){
    const container = document.getElementById('how-many-bags');
    container.innerHTML = '';
    if(i){
        const howmany = document.createElement('input');
        howmany.setAttribute('type', 'number');
        howmany.setAttribute('name', 'num-bags');
        howmany.setAttribute('id', 'num-bags');
        howmany.setAttribute('required','');
        howmany.setAttribute('min', '0');
        const lab = document.createElement('label');
        lab.htmlFor = 'num-bags';
        lab.innerHTML = 'How many do you throw out a week on average? ';
        container.appendChild(lab);
        container.appendChild(howmany);
    }
    else if(!i){
        container.removeChild();
    }
}

function howManyStraws(i){
    const container = document.getElementById('how-many-straws');
    container.innerHTML = '';
    if(i){
        const howmany = document.createElement('input');
        howmany.setAttribute('type', 'number');
        howmany.setAttribute('name', 'num-straws');
        howmany.setAttribute('id', 'num-straws');
        howmany.setAttribute('min', '0');
        howmany.setAttribute('required','');
        const lab = document.createElement('label');
        lab.htmlFor = 'num-straws';
        lab.innerHTML = 'How many do you use a week on average? ';
        container.appendChild(lab);
        container.appendChild(howmany);
    }
    else if(!i){
        container.removeChild();
    }
}
