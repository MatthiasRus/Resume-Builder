import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

export default function Template({ data }) {
  const handleDownload = () => {
    const element = document.querySelector(".cv-container"); // Target the CV container

    html2canvas(element, { scale: 2 }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png"); // Convert to image
        const pdf = new jsPDF("portrait", "mm", "a4"); // Create PDF
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width; // Maintain aspect ratio

        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight); // Add image to PDF
        pdf.save("CV_Template.pdf"); // Trigger download
    });
};
  return (
      <>
          <div className="cv-container">
              
              <header className="cv-header">
                  <h1 id="fullName">
                      {data["Contact"].FirstName} {data["Contact"].LastName}
                  </h1>
                  <p id="email">{data["Contact"].Email} | {data["Contact"].PhoneNumber}</p>
                  <p id="city">
                      {data["Contact"].City}, {data["Contact"].Country} - {data["Contact"].PostalCode}
                  </p>
              </header>

              <main className="cv-content">
                  
                  <div className="cv-left-column">
                      
                      <section className="cv-section education">
                          <h2>Education</h2>
                          {data["Education"].map((d, index) => (
                              <div key={index} className="education-item">
                                  <h3 id="schoolName">{d.schoolName}</h3>
                                  <p>
                                      <strong>{d.titleOfStudy}</strong>
                                      <span>
                                          {" "}
                                          ({d.dateFrom} - {d.dateUntil})
                                      </span>
                                  </p>
                              </div>
                          ))}
                      </section>

                     
                      <section className="cv-section awards">
                          <h2>Awards</h2>
                          {data["Awards"].map((d, index) => (
                              <div key={index} className="award-item">
                                  <h3 id="awardTitle">{d.awardTitle}</h3>
                                  <p>
                                      <em>{d.organization}</em> - {d.dateReceived}
                                  </p>
                                  <p id="awardDescription">{d.description}</p>
                              </div>
                          ))}
                      </section>
                  </div>

                 
                  <div className="cv-right-column">
                     
                      <section className="cv-section experience">
                          <h2>Experience</h2>
                          {data["Experience"].map((d, index) => (
                              <div key={index} className="experience-item">
                                  <h3 id="companyName">{d.companyName}</h3>
                                  <p>
                                      <strong>{d.positionTitle}</strong>
                                      <span>
                                          {" "}
                                          ({d.dateFrom} - {d.dateUntil})
                                      </span>
                                  </p>
                                  {/* <p id="responsibilities">{d.responsibilities}</p> */}
                              </div>
                          ))}
                      </section>

                      
                      <section className="cv-section skills">
                          <h2>Skills</h2>
                          <ul>
                              {data["Experience"].map((d, index) => (
                                  d["responsibilities"].split(",").map((skill) => 
                                    (<li key={index} id="skills">{skill}</li>)
                                )))}
                                  
                              
                          </ul>
                      </section>
                  </div>
              </main>

             
          </div>
          <footer className="cv-footer">
                  <button onClick={handleDownload}><i className="fas fa-download"></i>Download</button>
              </footer>
      </>
  );
}
