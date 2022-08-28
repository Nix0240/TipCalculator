const tipcalcy=()=>{
    let amount =document.getElementById('bill-amount').value;
    let perc=document.getElementById('Tip-percentage').value;
    let tip =amount*(perc/100);
    // alert(tip);

    let total=tip + Number(amount);
    // alert(total);

    document.getElementById('Tip-amount').value=tip;
    document.getElementById('Total-amount').value=total;
}