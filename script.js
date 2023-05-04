// Select People
const peoplesum = document.querySelector('#peoplesum');


//increment
const plussum = document.querySelector('#plussum');
let c=1;
plussum.addEventListener("click", () => {
    c++;
    peoplesum.innerHTML = c;
});

const minussum = document.querySelector('#minussum');
minussum.addEventListener("click", () => {
    if(c>1){
        c--;
    }
    peoplesum.innerHTML = c;
});

//calculate
const calculator = document.querySelector('#calculator');
calculator.addEventListener('click', ()=>{
    //show summary
    document.querySelector('.total_per_person').style.display = 'block'

    //calculate tip plus bill
    const totalBill = Number(document.querySelector('#totalBill').value);
    const tipMain = Number(document.querySelector('#tipMain').value);

    let total = totalBill * (tipMain /100);
    let finalpeople = peoplesum.innerHTML;

    //total bill in summary tab
    document.querySelector('#finalBill').innerHTML = totalBill;
    document.querySelector('#tipAmount').innerHTML = total;

    const taxAmount = document.querySelector('#taxAmount').innerHTML = (totalBill + 5) / 100;
    
    //final per person bill
    document.querySelector('#totalPerPerson').innerHTML = ((totalBill+total+taxAmount) / finalpeople).toFixed(2);
});