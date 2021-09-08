import { useState } from "react";
import { useGladepayPayment } from 'react-gladepay-2';
import { toast } from 'react-toastify';

const MainForm = () => {
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState(0);

  const handleEmail = ({ target: { value } }) => {
    setEmail(value);
  }

  const handleAmount = ({ target: { value } }) => {
    setAmount(value);
  }

  const validateInputs = () => {
    const re = /\S+@\S+\.\S+/;
    return !re.test(email) || amount < 500;
  }

  const config = {
    email,
    amount,
    MID: 'GP0000001',
    country: "NG",
    currency: "NGN",
    logo: 'https://www.glade.ng/favicon-32x32.png',
    payment_method: ['card', 'bank', 'ussd', 'qr', 'mobilemoney'],
    is_production: false,
  }

  // GladePay Hook Consumption
  const Gladepay = () => {
    const onSuccess = ({ chargedAmount }) => {
      toast.success(`You have Successfully donated ₦${chargedAmount}`);
      setEmail('');
      setAmount(0);
    }
    const onClose = () => console.log('payment closed');

    const initializePayment = useGladepayPayment(config);
    return (
      <div>
        <button
          onClick={(e) => {
            e.preventDefault();
            initializePayment(
              onSuccess,
              onClose
            );
          }}
          disabled={validateInputs()}
          className={"main-section__form--button"}
        >
          Donate Now
        </button>
      </div>
    );
  };

  return (
    <form action="" className="main-section__form">
      <div className="main-section__form--input-container">
        <div>
          <label htmlFor="main-section__form--input">Email</label>
          <input type="email" onChange={handleEmail} value={email} className="main-section__form--input" placeholder="john@doe.com" />
        </div>
        <div>
          <label htmlFor="main-section__form--input">Amount (₦)</label>
          <input type="number" onChange={handleAmount} value={amount} min="500" step="500" className="main-section__form--input" placeholder="₦500 Minimum" />
        </div>
      </div>
      <Gladepay />
    </form>
  );
}

export default MainForm;