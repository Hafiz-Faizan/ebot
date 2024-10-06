import TaxClosingStatement from "../../components/TaxClosingStatement";

const TaxDynamicLayout= (params) => {
    const service = (params.params.Service);
    const imageSrc=service === "TaxPlanning" ? '/tax-planing.jpg' : service === "TaxCompliance" ? '/tax-complaince.jpg' : service === "TaxResolution" ? '/tax-resolution.jpg' : '/tax-planing.jpg'
  return (
    <main>
        <div className="bg-purple-700 text-white py-24 w-full flex items-center">
      <div className="container  flex max-w-6xl px-6 mx-auto flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tax Service</h1>
          <p className="text-xl mb-8">
            At ebotSAP, we specialize in providing comprehensive tax services tailored to meet the unique needs of our clients. Our team of experienced professionals is dedicated to helping you navigate the complexities of tax planning, tax resolution, and tax compliance, ensuring your financial health and peace of mind.
          </p>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img 
            src={imageSrc} 
            alt="Tax Service" 
            style={{ width: '600px', height: '400px', objectFit: 'cover' }} 
          />
        </div>
      </div>
    </div>
    <section>
        {params.children}
    </section>
    <section>
        <TaxClosingStatement/>
    </section>
    </main>
  );
};

export default TaxDynamicLayout;
