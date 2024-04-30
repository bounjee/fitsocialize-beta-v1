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
      <div className='form-signup_text'>2.Adım</div>
      </div>
       
      

      <div class="form-inputs-id-country">
  <form> 
    <div class="input-container">
      <input type="text" name="name" placeholder='Kimlik No.*' />
    </div>
    <div class="input-country-container">
    <select name="country" className ="country" required>
    <option value="">Ülke*</option>
    <option value="erkek">Türkiye</option>
    <option value="kiz">Netherlands</option>
</select>   
</div>
  </form>
</div>


      <div class="form-inputs-city-district">
  <form> 
    <div class="input-country-container">
    <select name="city" className ="city" required>
      
    <option value="">Şehir*</option>
    <option value="erkek">Gaziantep</option>
    <option value="kiz">Ankara</option>
</select>     
</div>
    <div class="input-country-container">
    <select name="district" className ="district" required>
    <option value="">İlçe*</option>
    <option value="erkek">Şehitkamil</option>
    <option value="kiz">Şahinbey</option>
</select>   
</div>
  </form>     
</div>


<div class="form-inputs-id-country">
  <form> 
    <div class="input-container">
      <input type="text" name="name" placeholder='Deneyim Yılı' />
      
    </div>
      
    <div className='equal-container'>
      <label class="toggle-button">
        <input type="checkbox" class="checkbox"></input>
        <span class="slider">Online</span>
      </label>

      <label class="toggle-button">
        <input type="checkbox" class="checkbox"></input>
        <span class="slider">Yüz Yüze</span>
      </label>
    </div>
    

      
  </form>
</div>

<div className='form-inputs_adress'>
      
      <div className='adress-container'>
        <textarea type="textarea" placeholder='Adres Bilgileri*'/></div>
      </div>

      <div className="file-upload-wrapper">
        <input type="file" id="file-input" className="file-input" accept=".jpeg, .jpg, .png, .webp, .pdf" />
          <label htmlFor="file-input" className="file-input-label">
            Dosya seçin ya da buraya sürükleyin.
          </label>
          <div className="file-upload-info">
            En fazla: 5 MB; izin verilen uzantılar: jpeg,jpg,png,webp,pdf
          </div>
      </div>

    <div className='important-notice'>E-devletten alınmış mezuniyet belgenizi veya diplomanızı ekleyin.</div>

      <div className='label-container'>
        <label>
        <input type="checkbox" />
        Kişisel verilerinizin işlenmesi hakkında aydınlatma metni için tıklayınız.
        </label>
        <label>
          <input type="checkbox" />
          Üyelik Sözleşmesi’ni okudum ve kabul ediyorum.
        </label>
        <label>
          <input type="checkbox" />
          Kişiye özel pazarlama faaliyetleri kapsamında kişisel verilerimin işlenmesine açık rıza veriyorum.
        </label>
      </div>
      

        <div className='form-signup_box'><button>Hesap Oluştur</button></div>

        

      </div>

      
    </div>

    

  )
}

export default registerPage