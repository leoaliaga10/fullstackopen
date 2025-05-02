const Information = ({ names }) => {
  const commonName = names?.name?.common;
  const capital = names?.capital;
  const area = names?.area;
  const languages = names?.languages;
  console.log(languages);
  console.log(typeof languages);
  //const listLanguages = languages ? Object.values(languages).join(", ") : null;
  const listLanguages = languages ? Object.values(languages) : null;
  console.log(listLanguages);
  console.log(typeof listLanguages);
  return (
    <>
      <h1>{commonName}</h1>
      <div>Capital {capital}</div>
      <div>Area {area}</div>
      <h2>Languages</h2>
      <ul>
        {languages
          ? listLanguages.map((idioma, index) => <li key={index}>{idioma}</li>)
          : ""}
      </ul>
    </>
  );
};
export default Information;
