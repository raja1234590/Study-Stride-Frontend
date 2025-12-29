import React from "react";
import "./Pdf.css";

const pdfs = [
  { title: "Units and Dimensions", link: "https://drive.google.com/file/d/1SCK25ez7gtrxFjVdp611nb2GXUYQ-GZV/view?usp=sharing" },
  { title: "Motion in a Straight Line", link: "https://drive.google.com/file/d/1diCEV05Tu0mJvI0dAbxqBGmPbutS1hwT/view?usp=sharing" },
  { title: "Motion in a Plane", link: "https://drive.google.com/file/d/1OV1Yi7VNpzJf36D0ogSYvg9kkU_FX0nS/view?usp=sharing" },
  { title: "Laws of Motion", link: "https://drive.google.com/file/d/1-MBPiwajGXamMApPIICDkvEh2MSJCkbv/view?usp=sharing" },
  { title: "System of Particles", link: "https://drive.google.com/file/d/1t2GMnwjzmsLmSCSUuVMAACt0kHT3DLJm/view?usp=sharing" },
  { title: "Electric Charges and Fields", link: "https://drive.google.com/file/d/1GGZw9XyRkFPBFNO3vE6SbAa-_OmTFqs8/view?usp=sharing" },
  { title: "Current Electricity", link: "https://drive.google.com/file/d/1bNb8cG33YnaTfcb6CLh033-pi9bR1DYG/view?usp=sharing" },
  { title: "Moving Charges and Magnetism", link: "https://drive.google.com/file/d/1Ottda0Ac7QnH34-WOimVq7pWiACLeOKf/view?usp=sharing" },
  { title: "Magnetism and Matter", link: "https://drive.google.com/file/d/16Qx7gK9z7QkRhsIxr3_yPujO4AFGloJ5/view?usp=sharing" },
  { title: "Electromagnetic Induction", link: "https://drive.google.com/file/d/1y2TIHU_WokMUVOBoCZOMZb2aRABbOQh5/view?usp=sharing" },
  { title: "Alternating Current", link: "https://drive.google.com/file/d/1aTrumrE44ywdOVsW0OQfmbnsIyeFY0b4/view?usp=sharing" },
    { title: "Limits and Continuity", link: "https://drive.google.com/file/d/1hAd3CqA6QT-LZjm5JHEPAOzo9DQ08YkI/view?usp=sharing" },
  { title: "Quadratic Equation", link: "https://drive.google.com/file/d/1guZIP6pQyAgEs-kesq0Tqv6dq0_Mkbdh/view?usp=sharing" },
  { title: "Inequalities", link: "https://drive.google.com/file/d/1xTy7BXH9-a_wuSdr2nts2WyzhkU_5BGS/view?usp=sharing" },
  { title: "Inverse Trigonometry", link: "https://drive.google.com/file/d/11dWLuorkV8r9Xb2CXRKZJbUAPXVo4SiO/view?usp=sharing" },
  { title: "Matrices", link: "https://drive.google.com/file/d/1pKO2SMD5s5LUncxEAzBLTe4mChLKrTJ2/view?usp=sharing" },
  { title: "Sets", link: "https://drive.google.com/file/d/1bKngHOwaoA97MSCDxUgbGxrb2TR29ESU/view?usp=sharing" },
    { title: "Atoms", link: "https://drive.google.com/file/d/1XDQik_EV--KxmNr03BM8UL_9QpqsRuU-/view?usp=sharing" },
  { title: "Chemical Bonding", link: "https://drive.google.com/file/d/1PwnP6kYlALh_JnyDCyef5bsoAlKk_yqT/view?usp=sharing" },
  { title: "Chemical Kinetics", link: "https://drive.google.com/file/d/1MQqns2u30jj299yRWXmXAjveCl-zJ2Su/view?usp=sharing" },
  { title: "Electrochemistry", link: "https://drive.google.com/file/d/1fliwqOKvd7mZELAIvnzS9-evWf-Qht9-/view?usp=sharing" },
  { title: "Solid State", link: "https://drive.google.com/file/d/1o7XdJtbFYbOLzxCGEo-dEmJWvA_p2zmy/view?usp=sharing" },
  { title: "Solutions", link: "https://drive.google.com/file/d/18Iajtx91gqljvbHDFr9QuvAOIxDAgyrw/view?usp=sharing" },
  { title: "Surface Chemistry", link: "https://drive.google.com/file/d/1k8_vYvwgFAWI-Pt5sw8uJtxe1fEP8-qE/view?usp=sharing" },
  { title: "Thermodynamics and Thermo chemistry", link: "https://drive.google.com/file/d/1O1M1cVPpl1Urr7YCZ13TYZiWLIFVcmI_/view?usp=sharing" }

];

function Pdf() {
  return (
    <div className="pdf-container">
      <h2>Handwritten Notes</h2>
      <div className="pdf-grid">
        {pdfs.map((note, index) => (
          <div key={index} className="pdf-card">
            <img src="/images/slider2.jpg" alt={note.title} className="pdf-img" />
            <p>{note.title}</p>
            <a href={note.link} target="_blank" rel="noopener noreferrer" className="download-btn">
              View / Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pdf;
