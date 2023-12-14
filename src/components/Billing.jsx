import { apple, bill, google } from "../assets";
import styles, { layout } from "../styles";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img 
        src={bill}
        alt="Billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />

      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />

    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easy control your <br className="sm:block hidden" /> billing & invoicing
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        In publishing and graphic design, Lorem ipsum is a placeholder text commonly 
        used to demonstrate the visual form of a document or a typeface without 
        relying on meaningful content. Lorem ipsum may be used as a placeholder 
        before final copy is available
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img 
          src={apple}
          alt="Apple Store"
          className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
        />

        <img 
          src={google}
          alt="Google play store"
          className="w-[128px] h-[42px] object-contain cursor-pointer"
        />
      </div>
    </div>
  </section>
)

export default Billing