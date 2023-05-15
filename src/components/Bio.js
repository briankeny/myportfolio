import Brian from "../img/brian.jpg";
const Bio = () => {
  return (
    <div className="bio">

      <div className="inner">
        <img src={Brian} alt="brian-img" />
      </div>
      <div>
        <p className="about-me" >
        <b className="hello">Hello &#128075; </b> <br/>
          I am <b className="my-name">Brian Keny</b>, a{" "}
          <b className="my-name">Software Engineer</b> with 3 + years of
          experience in designing, implementing, and testing software
          applications. My expertise lies in developing scalable and performant
          applications using modern frameworks as well as back-end technologies
          like Node.js and Django.I am committed to creating innovative
          solutions that meet or exceed client expectations and deliver
          measurable business value.
        </p>
      </div>
    </div>
  );
};
export default Bio;
