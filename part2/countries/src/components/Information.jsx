const Information = ({ names, temp }) => {
  const commonName = names?.name?.common;
  const capital = names?.capital;
  const area = names?.area;
  const languages = names?.languages;
  const url_img = names?.flags?.png;

  const tempCurrent = temp?.current?.temp_c;
  return (
    <>
      <h1>{commonName}</h1>
      <div>Capital {capital}</div>
      <div>Area {area}</div>
      <h2>Languages</h2>
      <ul>
        {languages
          ? Object.values(languages).map((value, index) => (
              <li key={index}>{value}</li>
            ))
          : ""}
      </ul>
      <picture>
        <img src={url_img} alt="Flag" />
      </picture>
      <h2>Weather in {capital}</h2>
      <h4>Temperature {tempCurrent} Celcius</h4>
    </>
  );
};
export default Information;
