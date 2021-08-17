const billAmount= document.querySelector("#bill-amount");
const cashGiven= document.querySelector("#cash-given");
const checkButton= document.querySelector("#check-button");
const availableNotes = [2000,500,100,50,20,10,1];
const noOfNotes = document.querySelectorAll(".no-of-notes")
const message = document.querySelector("#error-message")
checkButton.addEventListener("click" ,  function validateBillAndCashAmount()
{hideMessage();
    if (billAmount.value > 0)
        {
            if(cashGiven.value >= billAmount.value) 
            {
                const amountToBeReturned = cashGiven.value - billAmount.value;
                calculateChange(amountToBeReturned);
    
            }else showMessage("The cash given should be more than or equal to the bill amount");
    
        }else showMessage("invalid bill amount");
        
    });
function calculateChange(amountToBeReturned)
{
    for( let i = 0 ; i < availableNotes.length ; i++)
    {
        const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        amountToBeReturned %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;

    }
}

function hideMessage()
{
    message.style.diplay = "none";
}

function showMessage(msg)
{
    message.style.diplay = "block";
    message.innerText = msg;
}




