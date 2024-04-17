import React from 'react'
import './registerPage.css'
import ReactLogo from '../images/interestPolygon.svg';


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
            <div className='footer-p_info-container'>
              <img className='footer-photo' src="https://placehold.co/52X52" />
              <div className='footer-p_info-para'>
                <div className='footer-p_info'>Salih Tuna Taşdemir</div>
                <div className='footer-p_info-text'>O kadar alevsizim ki, yanmazsın.</div>
              </div>
              
            </div>
            
          </div>

    </div>
      <div className='form-container'>
      <div className='form-header'>
      <div className='form-signup_text'>Kayıt Ol</div>
      <div className='form-redirect_text'>Hesabınız var mı? <a href="#">Giriş Yapın</a></div>
      </div>
       
 {/*ISIM VE SOYISIM INPUTU */}
        <div class="form-inputs-name-surname">
  <form> 
    <div class="input-container">
      <input type="text" name="name" placeholder='Ad*' />
    </div>
    <div class="input-container">
      <input type="text" name="surname" placeholder='Soyad*' />
    </div>
  </form>
</div>
{/*EMAİL VE PASSWORD INPUTU */}
<div class="form-inputs-email-pass">
  <form> 
    <div class="input-mail_pass-container">
      <input type="text" name="email" placeholder='Email*' />
    </div>
    <div class="input-mail_pass-container">
      <input type="password" name="password" placeholder='Password*' />
    </div>
  </form>
</div>


{/*PHONE VE DATE INPUTU */}
<div class="form-inputs-phone-date">
  <form> 
    <div class="input-phone_date-container">
      <input type="text" name="phone" placeholder='Telefon Numarası*' />
    </div>
    <div class="input-phone_date-container" id="input-phone-date">
      <input type="date" name="date" min="1996-01-01" max="2040-12-31" />
    </div>
  </form>
</div>

{/*HOBİ VE CİNSİYET INPUTU */}
<div class="form-inputs-hobbies-gender">
  <form> 
    <div class="input-hobbies_gender-container">
    <select name="hobiler" className ="hobiler" required>
      
    <option value="">Hobiler</option>
    <option value="erkek">Araba</option>
    <option value="kiz">Ev</option>
</select>     </div>
    <div class="input-hobbies_gender-container">
    <select name="cinsiyet" className ="cinsiyet" required>
    <option value="">Cinsiyet</option>
    <option value="erkek">Erkek</option>
    <option value="kiz">Kız</option>
</select>   
</div>
  </form>



        
</div>

<div className='form-inputs_whyfit'>
      
      <div>
        <textarea type="textarea" placeholder='Fitsocialize’i neden kullanmak istiyorum?*'/></div>
      </div>


        <div className='form-signup_box'><button>Hesap Oluştur</button></div>

      </div>
    </div>

  )
}

export default registerPage