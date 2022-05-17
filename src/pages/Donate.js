import React from 'react'
{/* <script src="https://js.stripe.com/v3/"></script>
<script charset="utf-8">
  var stripe = Stripe('pk_test_T190Sn41t9a34rBuhqhJfKBI00pOT83WNw');
  var button = document.getElementById('donate-button');
  var amount = document.getElementById('amount-input');
  var causes = document.getElementById('causes');
  button.addEventListener('click', function(e) {
    e.preventDefault();
    fetch('/create-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: amount.value,
        cause: causes.value,
      }),
    })
    .then((response) => response.json())
    .then((session) => {
      stripe.redirectToCheckout({
        sessionId: session.id
      });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  });
</script>  */}
function Donate() {
  return (
        
    <div id="main">
    <div id="checkout">
      <div id="payment-form">
        <h1>Donate Today</h1>
        <form>
          <label>
            <span>Amount</span>
            <input type="number" class="field" id="amount-input" value="500" min="50"/>
          </label>

        </form>
        <button id="donate-button">Donate</button>
      </div>
    </div>
  </div>
   

  )
}

export default Donate