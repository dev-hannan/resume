import React, { useEffect, useState } from "react";
import { usePDF } from "react-to-pdf";
import generatePDF, { Resolution, Margin } from "react-to-pdf";

const Resume = () => {
  const [userInfo, setUserInfo] = useState({
    first: "",
    last: "",
    email: "",
  });
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
  const options = {
    // default is `save`
    method: "open",
    // default is Resolution.MEDIUM = 3, which should be enough, higher values
    // increases the image quality but also the size of the PDF, so be careful
    // using values higher than 10 when having multiple pages generated, it
    // might cause the page to crash or hang.
    // resolution: Resolution.HIGH,
    resolution: Resolution.HIGH,
    page: {
      // margin is in MM, default is Margin.NONE = 0
      margin: Margin.LARGE,
      // default is 'A4'
      format: "letter",
      // default is 'portrait'
      orientation: "landscape",
    },
    canvas: {
      // default is 'image/jpeg' for better size performance
      mimeType: "image/png",
      qualityRatio: 1,
    },
    // Customize any value passed to the jsPDF instance and html2canvas
    // function. You probably will not need this and things can break,
    // so use with caution.
    overrides: {
      // see https://artskydj.github.io/jsPDF/docs/jsPDF.html for more options
      pdf: {
        compress: true,
      },
      // see https://html2canvas.hertzen.com/configuration for more options
      canvas: {
        useCORS: true,
      },
    },
  };

  const data = {
    qwe: "qwe",
    rty: "rty",
  };

  const submit = (e) => {
    e.preventDefault();
    localStorage.setItem("sets", JSON.stringify(data));
    const gets = JSON.parse(localStorage.getItem("sets"));

    console.log(gets.qwe, typeof gets);
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserInfo({ ...userInfo, [name]: value });
  };
  console.log(userInfo);
  return (
    <>
      <form
        onSubmit={submit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "10rem",
        }}
      >
        <input
          placeholder="first Name"
          name="first"
          type="text"
          value={userInfo.first}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          name="last"
          value={userInfo.last}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
          required
        />
        <input type="submit" onClick={() => toPDF(options)} />
      </form>
      <div ref={targetRef}>
        <p>{userInfo.email}</p>
        <p>{userInfo.first}</p>
        <p>{userInfo.last}</p>
      </div>
    </>
  );
};

export default Resume;
