//const srcImg = require.context("../assets/imgBackgrounds/", true);

const Whatsapp = () => {
  return (
    <div className="card border-primary mb-3 contact-box">
      <div className="card-header">WHATSAPP</div>
      <div className="card-body whatsappBody">
        <h4 className="card-title">
          <a href="https://wa.me/message/YHG3L2CM2PWDJ1 ">Whatsapp link</a>
        </h4>
        <div className="whatsappImg">
          {/*           <img src={srcImg(`./whatsapp_qr.png`)}></img> */}
        </div>
      </div>
    </div>
  );
};

export default Whatsapp;
