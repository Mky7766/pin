export default function DisclaimerPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="prose max-w-4xl mx-auto">
        <h1 className="font-headline text-3xl font-bold mb-5">
          Disclaimer
        </h1>
        <p className="mb-6">
          The information provided by{' '}
          <span className="font-bold">DroppedPin.xyz</span> (“we,” “us” or
          “our”) on this website is for general informational purposes only. All
          information on the site is provided in good faith, however, we make
          no representation or warranty of any kind regarding the accuracy,
          reliability, or completeness of any data displayed on this tool.
        </p>
        <p className="mb-6">
          The tool is designed to assist users in retrieving approximate
          location coordinates by dropping a pin on the map interface. However,
          the actual accuracy may vary based on device settings, browser
          capability, and external services such as Google Maps APIs.
        </p>
        <p className="mb-6">
          Under no circumstance shall we have any liability to you for any loss
          or damage incurred as a result of the use of the tool or reliance on
          any information provided on the site. Your use of the site and your
          reliance on any information is solely at your own risk.
        </p>
        <h2 className="font-headline text-2xl font-bold mt-8 mb-5">
          External Links Disclaimer
        </h2>
        <p className="mb-6">
          This website may contain links to other external websites or tools.
          These links are provided for convenience only. We do not have control
          over the content or policies of those sites and are not responsible
          for any information, services, or products they provide.
        </p>
        <h2 className="font-headline text-2xl font-bold mt-8 mb-5">Consent</h2>
        <p className="mb-6">
          By using our website, you hereby consent to our disclaimer and agree
          to its terms.
        </p>
        <h2 className="font-headline text-2xl font-bold mt-8 mb-5">
          Contact Us
        </h2>
        <p className="mb-6">
          If you have any questions regarding this disclaimer, please feel free
          to contact us at&nbsp;
        </p>
      </div>
    </main>
  );
}
