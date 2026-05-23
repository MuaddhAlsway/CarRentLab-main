import './Email.css';

const Email = () => {
  return (
    <div className="ContainerEmail">
      <div className="emailContainer">
        <h1>Subscribe to our Newsletter</h1>
        <p>Get the latest news and updates right at your inbox.</p>

        <div className="inputSide">
          <div className="inputWrapper">
            <input type="email" placeholder="Enter your email" />
            <span className="sendButton">
              <i className='bx bx-paper-plane'></i>
            </span>
          </div>

          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Email;
