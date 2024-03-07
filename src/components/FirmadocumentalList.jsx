import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'bootstrap';
import { jsPDF } from "jspdf";

const FirmadocumentalList = ({ supabase }) => {
  const [documentales, setDocumentales] = useState([]);
  const [selectedDocumental, setSelectedDocumental] = useState(null);

  useEffect(() => {
    async function fetchDocumentales() {
      try {
        let { data: documentales, error } = await supabase
          .from('firmadocumental')
          .select('*')
          .order('iddocumental', { ascending: true });

        if (error) {
          throw error;
        }

        setDocumentales(documentales);
      } catch (error) {
        console.error('Error fetching documentales:', error.message);
      }
    }

    fetchDocumentales();
  }, [supabase]);

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text(`Nombre: ${selectedDocumental.nombres_documental}`, 10, 10);
    doc.text(`Apellido: ${selectedDocumental.apellidopaterno_documental} ${selectedDocumental.apellidomaterno_documental}`, 10, 20);
    doc.text(`Cédula: ${selectedDocumental.cedula_documental}`, 10, 30);
    doc.text(`Tiempo Vigencia: ${selectedDocumental.tiempovigencia_documental}`, 10, 40);
    doc.text(`Fecha Nacimiento: ${selectedDocumental.fechanacimiento_documental}`, 10, 50);
    doc.text(`Genero: ${selectedDocumental.genero_documental}`, 10, 60);
    doc.text(`Correo: ${selectedDocumental.correopersonal_documental}`, 10, 70);
    doc.text(`Celular: ${selectedDocumental.celular_documental}`, 10, 80);
    doc.text(`Provincia: ${selectedDocumental.provincia_documental}`, 10, 90);
    doc.text(`Ciudad: ${selectedDocumental.ciudad_documental}`, 10, 100);
    doc.text(`Direccion: ${selectedDocumental.direccion_documental}`, 10, 110);

    doc.save("documental.pdf");
  };
  

  const handleDetailsClick = (documental) => {
    setSelectedDocumental(documental);
    var myModalEl = document.getElementById('myModal');
    var myModal = new Modal(myModalEl);
    myModal.show();
  };

  return (
    
    <div className="container mt-5">
      <h2 className="mb-4">Firmas Documentales </h2>
      <table className="table table-hover table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Cédula</th>
            <th>Tiempo Vigencia</th>
            <th>Detalles</th>
          </tr>
        </thead>
        <tbody>
          {documentales.map((documental) => (
            <tr key={documental.iddocumental}>
              <td>{documental.nombres_documental}</td>
              <td>{documental.apellidopaterno_documental} {documental.apellidomaterno_documental}</td>
              <td>{documental.cedula_documental}</td>
              <td>{documental.tiempovigencia_documental}</td>
              <td>
                <button className="btn btn-info" onClick={() => handleDetailsClick(documental)}>
                  Detalles
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

        {selectedDocumental && (
        <div className="modal fade" id="myModal" tabIndex="-1">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Detalles de la Firma Documental</h5>
                </div>
                <div className="modal-body d-flex flex-column align-items-center justify-content-center">
                <p>Nombre: {selectedDocumental.nombres_documental}</p>
                <p>Apellido: {selectedDocumental.apellidopaterno_documental} {selectedDocumental.apellidomaterno_documental}</p>
                <p>Cédula: {selectedDocumental.cedula_documental}</p>
                <p>Tiempo Vigencia: {selectedDocumental.tiempovigencia_documental}</p>
                <p>Fecha Nacimiento: {selectedDocumental.fechanacimiento_documental} </p>
                <p>Genero: {selectedDocumental.genero_documental}</p>
                <p>Correo: {selectedDocumental.correopersonal_documental} </p>
                <p>Celular: {selectedDocumental.celular_documental} </p>
                <p>Provincia: {selectedDocumental.provincia_documental}</p>
                <p>Ciudad: {selectedDocumental.ciudad_documental} </p>
                <p>Direccion: {selectedDocumental.direccion_documental} </p>
                <p> Foto Cedula Frontal: </p>
                <p><img 
              src={`../imagenes/${selectedDocumental.fotocedulafrontal_documental}`} 
              alt="Foto Cedula Frontal" 
              className="img-fluid" 
              style={{ width: '75mm', height: '50mm' }}
            /></p>
                <p>
                <p>Foto Cedula Posterior: </p>
                <img 
              src={`../imagenes/${selectedDocumental.fotocedulaposterior_documental}`} 
              alt="Foto Cedula Posterior" 
              className="img-fluid" 
              style={{ width: '75mm', height: '50mm' }}/>
                </p>
                <p>Foto Selfie: </p>
                <p> <img 
              src={`../imagenes/${selectedDocumental.fotoselfie_documental}`} 
              alt="Foto Selfie" 
              className="img-fluid" 
              style={{ width: '45mm', height: '50mm' }}
            /></p>
                <p>Foto Transferencia: </p>
                <p> <img 
              src={`../imagenes/${selectedDocumental.fototransferencia_documental}`} 
              alt="Foto Transferencia" 
              className="img-fluid" 
              style={{ width: '45mm', height: '50mm' }}
            /></p>
                

              </div>
              <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={generatePDF}>Generar PDF</button>
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

FirmadocumentalList.propTypes = {
  supabase: PropTypes.object.isRequired,
};

export default FirmadocumentalList;