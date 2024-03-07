// FirmaLegalList.jsx
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';

import { jsPDF } from "jspdf";

const FirmaLegalList = ({ supabase }) => {
  const [legalRecords, setLegalRecords] = useState([]);
  const [selectedLegal, setSelectedLegal] = useState(null);
  const [showModal, setShowModal] = useState(false);



  useEffect(() => {
    async function fetchLegalRecords() {
      try {
        let { data: legalRecords, error } = await supabase
          .from('firmalegal')
          .select('*')
          .order('idlegal', { ascending: true });

        if (error) {
          throw error;
        }

        setLegalRecords(legalRecords);
      } catch (error) {
        console.error('Error fetching legal records:', error.message);
      }
    }

    fetchLegalRecords();
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

  async function deleteLegalRecord(idlegal) {
    try {
      await supabase.from('firmalegal').delete().eq('idlegal', idlegal);
      setLegalRecords(legalRecords.filter((record) => record.idlegal !== idlegal));
    } catch (error) {
      console.error('Error deleting legal record:', error.message);
    }
  }
  const handleDetailsClick = (record) => {
    setSelectedLegal(record);
    setShowModal(true);
  };
  

  return (
    <div class="container mt-5">
    <h2 className="mb-4">Firmas Legales</h2>
    <table class="table table-striped thead-dark">
      <thead>
        <tr>
          <th>Cédula </th>
          <th>RUC </th>
          <th>Nombres </th>
          <th>Apellido Paterno </th>


          <th>Tiempo Vigencia </th>


          <th>Accion</th>
        </tr>
      </thead>
      <tbody>
      {legalRecords.map((record) => (
        <tr key={record.idlegal}>
          <td>{record.cedula_legal}</td>
          <td>{record.ruc_legal}</td>

          <td>{record.nombres_legal}</td>
          <td>{record.apellidopaterno_legal}</td>

          <td>{record.tiempovigencia_legal}</td>
              <td>
            <button className="btn btn-info" onClick={() => handleDetailsClick(record)}>
      Detalles
    </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  <Modal show={showModal} onHide={() => setShowModal(false)}>
  <Modal.Header closeButton>
    <Modal.Title>Detalles Firma electronica Legal</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    
    <p>Cédula: {selectedLegal?.cedula_legal}</p>
    <p>Nombres: {selectedLegal?.nombres_legal}</p>
    <p>Apellido Paterno: {selectedLegal?.apellidopaterno_legal}</p>
    <p>Apellido Materno: {selectedLegal?.apellidomaterno_legal}</p>
    <p>RUC: {selectedLegal?.ruc_legal}</p>
    <p>Codigo Dactilar: {selectedLegal?.codigodactilar_legal}</p>
    <p>Fecha de Nacimiento: {selectedLegal?.fechanacimiento_legal}</p>
    <p>Genero: {selectedLegal?.genero_legal}</p>
    <p>Correo Personal: {selectedLegal?.correopersonal_legal}</p>
    <p>Celular: {selectedLegal?.celular_legal}</p>
    <p>Provincia: {selectedLegal?.provincia_legal}</p>
    <p>Ciudad: {selectedLegal?.ciudad_legal}</p>
    <p>Direccion: {selectedLegal?.direccion_legal}</p>
    <p>Tiempo Vigencia: {selectedLegal?.tiempovigencia_legal}</p>
    <p>Foto Cédula Frontal: </p>
    <img
      src={`../imagenes/${selectedLegal?.fotocedulafrontal_legal}`}
      alt="Foto Cédula Frontal"
      className="img-fluid"
      style={{ width: '75mm', height: '50mm' }}
    />
    <p>Foto Cédula Posterior: </p>
    <img
      src={`../imagenes/${selectedLegal?.fotocedulaposterior_legal}`}
      alt="Foto Cédula Posterior"
      className="img-fluid"
      style={{ width: '75mm', height: '50mm' }}
    />
    <p>Foto Selfie: </p>
    <img
      src={`../imagenes/${selectedLegal?.fotoselfie_legal}`}
      alt="Foto Selfie"
      className="img-fluid"
      style={{ width: '45mm', height: '50mm' }}
    />
    <p>Foto Transferencia: </p>
    <img
      src={`../imagenes/${selectedLegal?.fototransferencia_legal}`}
      alt="Foto Transferencia"
      className="img-fluid"
      style={{ width: '75mm', height: '50mm' }}
    />

    
  </Modal.Body>
  <Modal.Footer>
  <button type="button" className="btn btn-primary" onClick={generatePDF}>Generar PDF</button>

    <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cerrar</button>
  </Modal.Footer>
</Modal>


  
</div>

  );
};

FirmaLegalList.propTypes = {
  supabase: PropTypes.object.isRequired,
};

export default FirmaLegalList;
