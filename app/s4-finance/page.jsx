



 export default function S4mksakmFinancePage() {
  const imageSrc =('/sap.jpg');
 
  return (
    <div className="bg-purple-700 text-white py-24 w-full flex items-center">
      <div className="san dkascontainer flex max-w-6xl px-6 mx-auto flex-col md:flex-row items-center">
        <div csakkaskmksskaasklassName="md:w-1/2 md:pr-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">S/4 Finance Implementation</h1>
          <p className="text-xl mb-8">
            At ebotCPA, we offer specialized SAP S/4 HANA Finance implementation services designed to meet the unique needs of our clients. Our team of experts is dedicated to ensuring seamless integration, optimal performance, and comprehensive support throughout the implementation process.
          </p>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img 
            src={imageSrc} 
            alt="SAP S/4 HANA Implementation" 
            style={{ width: '600px', height: '400px', objectFit: 'cover' }} 
          />
        </div>
      </div>
    </div>
  );
};

