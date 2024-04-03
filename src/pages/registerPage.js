import React from 'react'
import './registerPage.css'

const registerPage = () => {
  return (
    <div className='form'>
    <div className='blueRect'>
          <div className='blueRect-title'>fitsocialize.</div>
          <div className='blueRect-maintext'>
            <div className='maintext-title'>Kariyerinize bizimle başlayın.</div>
            <div className='maintext-paragraph'>Fitsocialize, spor hocaları ve sporseverleri birleştiriyor. Kişisel hedeflerinize ulaşmak için özel antrenmanlar, beslenme tavsiyeleri ve motivasyon burada sizi bekliyor. </div>
          </div>
          <div className='blueRect-footer'>
            <div className='footer-paragraph'>Geçen ay fitsocialize ile fitness yolculuğuma başladım ve harika sonuçlar aldım! Özel antrenman ve beslenme planı tam benlik!</div>
            <div className='footer-p_info-photo'></div>
            <div className='footer-p_info'>Salih Tuna Taşdemir</div>
            <div className='footer-p_info-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          </div>
    </div>
    <div className='form-header'>
      <div className='form-signup_text'></div>
      <div className='form-redirect_text'></div></div>

      <div className='form-container'>
        <div className='form-select_text'></div>
        <div className='form-user_selection'>
          <div className='form-user_input'></div>
          <div className='form-pt_input'></div>
        </div>

        <div className='form-inputs_name-surname'>
      <form> 
      <div><input type="text" placeholder='Ad*'/></div>
      <div><input type="text" placeholder='Soyad*'/></div>
      </form>
        </div>
        <div className='form-email-pass'>
      <form> 
      <div><input type="text" placeholder='Email*'/></div>
      <div><input type="text" placeholder='Şifre*'/></div>
      </form>
        </div>
        <div className='form-inputs_phone-birth'>
      <form> 
      <div><input type="text" placeholder='Cep Telefonu*'/></div>
      <div><input type="text" placeholder='Doğum Tarihi*'/></div>
      </form>
        </div>
        <div className='form-inputs_interest-gender'>
      <form> 
      <div><input type="text" placeholder='İlgi Alanı*'/></div>
      <div><input type="text" placeholder='Cinsiyet*'/></div>
      </form>
        </div>
        <div className='form-inputs_whyfit'>
      <form> 
      <div><input type="text" placeholder='Fitsocialize’i neden kullanmak istiyorum?*'/></div>
      </form>
        </div>
        <div className='form-signup_box'><button>Hesap Oluştur</button></div>

      </div>


    </div>

  )
}

export default registerPage