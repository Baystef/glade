import { useState } from "react";
import { GladepayButton } from 'react-gladepay-2';
import { toast } from 'react-toastify';

const MainForm = () => {
  const MID = "GP0000001";
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState(0);

  const handleEmail = ({ target: { value } }) => {
    setEmail(value);
  }

  const handleAmount = ({ target: { value } }) => {
    setAmount(value * 100);
  }

  const callback = (response) => {
    toast('You have donated Successfully');
  }

  const close = () => {
    console.log('payment closed');
  }

  return (
    <form action="" className="main-section__form">
      <div>
        <label htmlFor="main-section__form--input">Email</label>
        <input type="email" onChange={handleEmail} className="main-section__form--input" placeholder="john@doe.com" />
      </div>
      <div>
        <label htmlFor="main-section__form--input">Amount (₦)</label>
        <input type="number" onChange={handleAmount} min="500" step="500" className="main-section__form--input" placeholder="₦1000" />
      </div>
      <div>
        <GladepayButton
          text="Donate Now"
          className="main-section__form--button"
          callback={callback}
          close={close}
          disabled={email === '' || amount === 0}
          embed={true}
          email={email}
          amount={amount}
          MID={MID}
          country={"NG"}
          currency={"NGN"}
          tag="button"
          is_production={false}
        />
      </div>
    </form>
  );
}

export default MainForm;