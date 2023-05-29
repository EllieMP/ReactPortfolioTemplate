import pdf from '../resume.pdf';
import "./resume.css";

// Create Document Component
export default function Resume(){

  return (
    <div class="center">
      <object data={pdf} type="application/pdf" width="100%" height="100%">
        <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p>
      </object>
    </div>
  );
}

// export default Resume;