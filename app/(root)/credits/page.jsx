export default function Credits() {
  const models = [
    {
      name: "Hot Air Balloon",
      url: "https://skfb.ly/oYCLr",
      author: "hercules2209",
      license: "Creative Commons Attribution",
      licenseUrl: "http://creativecommons.org/licenses/by/4.0/",
    },
    {
      name: "Hot Air Balloon 2",
      url: "https://skfb.ly/DBOJ",
      author: "leoni",
      license: "Creative Commons Attribution",
      licenseUrl: "http://creativecommons.org/licenses/by/4.0/",
    },
    {
      name: "XYZHW10 Air Balloon 2",
      url: "https://skfb.ly/oRvWS",
      author: "Maxim Lishankov",
      license: "Creative Commons Attribution",
      licenseUrl: "http://creativecommons.org/licenses/by/4.0/",
    },
    {
      name: "Toy Rocket",
      url: "https://skfb.ly/oo7to",
      author: "NonDescript Grey Building",
      license: "Creative Commons Attribution",
      licenseUrl: "http://creativecommons.org/licenses/by/4.0/",
    },
    {
      name: "Fantasy Island",
      url: "https://skfb.ly/6YD8V",
      author: "Omar Faruq Tawsif",
      license: "Creative Commons Attribution",
      licenseUrl: "http://creativecommons.org/licenses/by/4.0/",
    },
    {
      name: "Dyn Aero CR100",
      url: "https://skfb.ly/o9o9A",
      author: "Kefla",
      license: "Creative Commons Attribution",
      licenseUrl: "http://creativecommons.org/licenses/by/4.0/",
    },
    {
      name: "Oreo Cupcake: ",
      url: "https://skfb.ly/opBxp",
      author: "Mustafa Duyar",
      license: "Creative Commons Attribution",
      licenseUrl: "http://creativecommons.org/licenses/by/4.0/",
    },
    {
      name: "Favicon Icon",
      url: "https://www.flaticon.com/free-icons/balloon",
      author: "Amonrat Rungreangfangsai",
      license: "Creative Commons Attribution",
      licenseUrl: "http://creativecommons.org/licenses/by/4.0/",
    },
  ];

  return (
    <section className="max-container">
      <h1 className="text-3xl font-bold mb-6">Credits</h1>
      <h2 className="text-lg font-bold mb-6">
        I would like to extend my heartfelt thanks to the amazing Sketchfab
        community for providing these incredible 3D models. Your creativity and
        generosity make projects like this possible!
      </h2>
      <div className="space-y-4">
        {models.map((model, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <p className="text-lg font-semibold">
              <a
                href={model.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                {model.name}
              </a>
            </p>
            <p>
              by{" "}
              <a
                href={model.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                {model.author}
              </a>
            </p>
            <p>
              is licensed under{" "}
              <a
                href={model.licenseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                {model.license}
              </a>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
