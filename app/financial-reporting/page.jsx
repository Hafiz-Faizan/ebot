
export default function FinancialReportingPage() {
  const imageSrc = '/Financial.png';
  return (
    <main>
    <div className="bg-purple-700 text-white py-24 w-full flex items-center">
      <div className="container  flex max-w-6xl px-6 mx-auto flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Financial Reporting Service</h1>
          <p className="text-xl mb-8">
            At ebotCAP, we are dedicated to providing comprehensive financial services tailored to meet the unique needs of our clients. Be it Solopreneur or Start-Up, or a Growth entity to a Scaled Entity, our team of experienced professionals specializes in bookkeeping, accounting, and fractional CFO services, ensuring that your business financial health is always in expert hands.
          </p>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img 
            src={imageSrc} 
            alt="Financial Reporting Dashboard" 
            style={{ width: '600px', height: '400px', objectFit: 'cover' }} 
          />
        </div>
      </div>
    </div>
    <section>
    
        
    </section>
   </main> 
  
  );
}
